const variants = [
    {variant: "primary", backgroundColor: "#1d35ad", textColor: "white"},
    {variant: "secondary", backgroundColor: "#46464a", textColor: "white"},
    {variant: "success", backgroundColor: "#3a802b", textColor: "white"},
    {variant: "warning", backgroundColor: "#f2ef07", textColor: "black"},
    {variant: "danger", backgroundColor: "#bd1111", textColor: "white"},
    {variant: "info", backgroundColor: "#4099e3", textColor: "black"},
    {variant: "light", backgroundColor: "white", textColor: "black"},
    {variant: "dark", backgroundColor: "#19191a", textColor: "white"},
    {variant: "outline-primary", borderColor: "1px solid #1d35ad", textColor: "#1d35ad"},
    {variant: "outline-secondary", borderColor: "1px solid #46464a", textColor: "#46464a"},
    {variant: "outline-success", borderColor: "1px solid #3a802b", textColor: "#3a802b"},
    {variant: "outline-warning", borderColor: "1px solid #f2ef07", textColor: "f2ef07"},
    {variant: "outline-danger", borderColor: "1px solid #bd1111", textColor: "#bd1111"},
    {variant: "outline-info", borderColor: "1px solid #4099e3", textColor: "#4099e3"},
    {variant: "outline-light", borderColor: "1px solid white", textColor: "white"},
    {variant: "outline-dark", borderColor: "1px solid #19191a", textColor: "#19191a"},
]

function Button({text="Button", variant="primary", bgColor="#1d35ad", txtColor="#fff", size="sm"}){
    let variantStyles = null
    if (variant !== "custom"){
        variantStyles = variants.find(variantStyle => variantStyle.variant === variant)
    } else {
        variantStyles = {variant: "custom", backgroundColor: bgColor, textColor: txtColor}
    }
    
    return(
        <button
        style={{
            backgroundColor: variant.includes("outline-") ? "#fff0" : variantStyles.backgroundColor,
            color: variantStyles.textColor,
            border: variant.includes("outline-") ? variantStyles.borderColor : "none",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
            width: size === "lg" ? "100%" : "auto",
        }}
        >{text}</button>
    );
}

export default Button