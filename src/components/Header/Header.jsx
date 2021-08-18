import React, {useEffect} from 'react'
import useStyle from "./style";
import $ from "jquery";
const Header = () => {
    const classes=useStyle();
    useEffect(()=>{
        $("#btn-intro__id").on("mouseenter", () => {handleMouseEnter($("#span_overly"), $("#btn-intro__id"))});
        $("#btn-intro__id").on("mouseleave", () => {handleMouseLeave($('#span_overly'), $("#btn-intro__id"))});
    },[])
    return (
        <div className={classes.header}>
            <div className={classes.overlay}></div>
            <h1 className={classes.title_intro}>welcome to the beauty shop </h1>
            <button id="btn-intro__id" className={classes.scrollBtn} onClick={handleClick}><span id="span_overly" className={classes.overlayBtn}></span>Shop Now</button>
        </div>
    )
}
function handleMouseEnter(cls, prt) {
    cls.animate({
        width:"100%"
    },500);
    prt.css({color:"black"});
}
function handleMouseLeave(cls, prt) {
    prt.css({color:"white"});
    cls.animate({
        width:"0"
    },500);
    
}
function handleClick() {
    $("html, body").animate({
        scrollTop:$("#products").offset().top
    }, 600)
}
export default Header
