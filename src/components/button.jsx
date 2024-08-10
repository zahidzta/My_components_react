const variants = [
    {variant: "primary", bgColor: "#1d35ad", txtColor: "white"},
    {variant: "secondary", bgColor: "#46464a", txtColor: "white"},
    {variant: "success", bgColor: "#3a802b", txtColor: "white"},
    {variant: "warning", bgColor: "#f2ef07", txtColor: "black"},
    {variant: "danger", bgColor: "#bd1111", txtColor: "white"},
    {variant: "info", bgColor: "#4099e3", txtColor: "black"},
    {variant: "light", bgColor: "white", txtColor: "black"},
    {variant: "dark", bgColor: "#19191a", txtColor: "white"},
    {variant: "outline-primary", borderStyle: "1px solid #1d35ad", txtColor: "#1d35ad"},
    {variant: "outline-secondary", borderStyle: "1px solid #46464a", txtColor: "#46464a"},
    {variant: "outline-success", borderStyle: "1px solid #3a802b", txtColor: "#3a802b"},
    {variant: "outline-warning", borderStyle: "1px solid #f2ef07", txtColor: "f2ef07"},
    {variant: "outline-danger", borderStyle: "1px solid #bd1111", txtColor: "#bd1111"},
    {variant: "outline-info", borderStyle: "1px solid #4099e3", txtColor: "#4099e3"},
    {variant: "outline-light", borderStyle: "1px solid white", txtColor: "white"},
    {variant: "outline-dark", borderStyle: "1px solid #19191a", txtColor: "#19191a"},
]

function Button({text="Button", variant="primary", bgColor="#1d35ad", txtColor="#fff", size="sm", borderStyle="1px solid #1d35ad"}){
    let variantStyles = null
    if (!variant.includes("custom")){
        variantStyles = variants.find(variantStyle => variantStyle.variant === variant)
    } else {

        if (variant.includes("outline-")){
            variantStyles = {variant: "outline-custom", borderStyle, txtColor}
        } else{
            variantStyles = {variant: "custom", bgColor, txtColor}
        }
    }
    
    return(
        <button
        style={{
            backgroundColor: variant.includes("outline-") ? "#fff0" : variantStyles.bgColor,
            color: variantStyles.txtColor,
            border: variant.includes("outline-") ? variantStyles.borderStyle : "none",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
            width: size === "lg" ? "100%" : "auto",
        }}
        >{text}</button>
    );
}

export default Button