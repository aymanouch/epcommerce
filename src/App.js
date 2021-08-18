import React , {useState, useEffect} from 'react';
import {commerce} from "./lib/commerce";
import {Products, Navbar, Cart, Checkout, ProductPage, Order, Header, Footer} from "./components";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    const fetchProducts = async () => {
        const {data} = await commerce.products.list();
        setProducts(data);
    }
    const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
    }
    const handleCart = async (productId, quantity) => {
        const {cart} = await commerce.cart.add(productId, quantity);
        setCart(cart);
    }
    const handleUpdateQt = async (productId, quantity) => {
        const {cart} = await commerce.cart.update(productId, {quantity});
        setCart(cart);
    }
    const handleRemoveFromCart = async (productId) => {
        const {cart} = await commerce.cart.remove(productId);
        setCart(cart);
    }
    const handleEmptyCart = async () => {
        const {cart} = await commerce.cart.empty();
        setCart(cart);
    }
    const refreshCart = async () => {
        const newCart = await commerce.cart.refresh();

        setCart(newCart);
    }
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
        try {
            const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

            setOrder(incomingOrder);
            refreshCart();
        } catch (error) {
            setErrorMessage(error.data.error.message);
        }
    }

    useEffect(() => {
        fetchProducts();
        fetchCart();
    }, []);
    return (
        <Router>
            <div>
                <Navbar totalItems={cart.total_items} />
                <Switch>
                    <Route path="/" exact>
                        <Header />
                      <Products products={products} onAddToCart={handleCart} />
                    </Route>
                    <Route path="/cart" exact>
                      <Cart 
                         cart={cart}
                         handleUpdateQt={handleUpdateQt}
                         handleRemoveFromCart={handleRemoveFromCart}
                         handleEmptyCart={handleEmptyCart}
                      />
                    </Route>
                    <Route path="/checkout" exact>
                         <Order product={cart} handleEmptyCart={handleEmptyCart}/>
                    </Route>
                    {
                        products.map(item => (
                            <Route key={item.id} path={`/productpage-${item.name}-${item.id}`} exact>
                              <ProductPage product={item}/>
                            </Route>
                        ))
                    }
                </Switch>
                <Footer />
            </div>
        </Router>   
    )
}

export default App
