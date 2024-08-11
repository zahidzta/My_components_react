import React, { useState } from 'react';

//Quitar txtHover de los botones solidos y bgColor de los botones outline

const variants = [
    {variant: "primary", bgColor: "#1d35ad", txtColor: "#fff", bgHover: "#172985", txtHover: "#fff"},
    {variant: "secondary", bgColor: "#46464a", txtColor: "#fff", bgHover: "#272729", txtHover: "#fff"},
    {variant: "success", bgColor: "#3a802b", txtColor: "#fff", bgHover: "#2c6121", txtHover: "#fff"},
    {variant: "warning", bgColor: "#f2ef07", txtColor: "#000", bgHover: "#d9d61a", txtHover: "#000"},
    {variant: "danger", bgColor: "#bd1111", txtColor: "#fff", bgHover: "#910c0c", txtHover: "#fff"},
    {variant: "info", bgColor: "#4099e3", txtColor: "#000", bgHover: "#347ebf", txtHover: "#000"},
    {variant: "light", bgColor: "#fff", txtColor: "#000", bgHover: "#cfcfcf", txtHover: "#000"},
    {variant: "dark", bgColor: "#19191a", txtColor: "#fff", bgHover: "#3c3c3d", txtHover: "#fff"},
    {variant: "outline-primary", bgColor: "#fff0", borderStyle: "1px solid #1d35ad", txtColor: "#1d35ad", bgHover: "#1d35ad", txtHover: "#fff"},
    {variant: "outline-secondary", bgColor: "#fff0", borderStyle: "1px solid #46464a", txtColor: "#46464a", bgHover: "#46464a", txtHover: "#fff"},
    {variant: "outline-success", bgColor: "#fff0", borderStyle: "1px solid #3a802b", txtColor: "#3a802b", bgHover: "#3a802b", txtHover: "#fff"},
    {variant: "outline-warning", bgColor: "#fff0", borderStyle: "1px solid #f2ef07", txtColor: "f2ef07", bgHover: "#f2ef07", txtHover: "#000"},
    {variant: "outline-danger", bgColor: "#fff0", borderStyle: "1px solid #bd1111", txtColor: "#bd1111", bgHover: "#bd1111", txtHover: "#fff"},
    {variant: "outline-info", bgColor: "#fff0", borderStyle: "1px solid #4099e3", txtColor: "#4099e3", bgHover: "#4099e3", txtHover: "#000"},
    {variant: "outline-light", bgColor: "#fff0", borderStyle: "1px solid #fff", txtColor: "#fff", bgHover: "#fff", txtHover: "#000"},
    {variant: "outline-dark", bgColor: "#fff0", borderStyle: "1px solid #19191a", txtColor: "#19191a", bgHover: "#19191a", txtHover: "#fff"},
]

function Button({text="Button", variant="primary", bgColor="#1d35ad", txtColor="#fff", size="sm", borderStyle="1px solid #1d35ad",  bgHover="#1d35ad", txtHover="#fff"}){

    let variantStyles = null
    if (!variant.includes("custom")){
        variantStyles = variants.find(variantStyle => variantStyle.variant === variant)
    } else {

        if (variant.includes("outline-")){
            variantStyles = {variant: "outline-custom", bgColor: "#fff0", borderStyle, txtColor, bgHover, txtHover}
        } else{
            variantStyles = {variant: "custom", bgColor, txtColor, bgHover}
        }
    }
    
    const [isHovered, setIsHovered] = useState(false)

    const baseStyle = {
        backgroundColor: variantStyles.bgColor,
        color: variantStyles.txtColor,
        border: variant.includes("outline-") ? variantStyles.borderStyle : "none",
        padding: "5px",
        borderRadius: "5px",
        cursor: "pointer",
        width: size === "lg" ? "100%" : "auto",
        transition: "background-color 0.5s, color 0.5s",
    }

    const hoverStyle = {
        backgroundColor: isHovered ? variantStyles.bgHover : variantStyles.bgColor,
        color: isHovered ? variantStyles.txtHover : variantStyles.txtColor,
    }

    return(
        <button
        style={{
            ...baseStyle, ...hoverStyle
        }}

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        >{text}</button>
    );
}

export default Button