const variants = [
    {variant: "primary", backgroundColor: "#1d35ad", textColor: "white"},
    {variant: "secondary", backgroundColor: "#46464a", textColor: "white"},
    {variant: "success", backgroundColor: "#3a802b", textColor: "white"},
    {variant: "warning", backgroundColor: "#f2ef07", textColor: "black"},
    {variant: "danger", backgroundColor: "#bd1111", textColor: "white"},
    {variant: "info", backgroundColor: "#4099e3", textColor: "black"},
    {variant: "light", backgroundColor: "white", textColor: "black"},
    {variant: "dark", backgroundColor: "#19191a", textColor: "white"},
]

function Button({text, variant}){
    let variantStyles = variants.find(variantStyle => variantStyle.variant === variant)
    return(
        <button
        style={{
            backgroundColor: variantStyles.backgroundColor,
            color: variantStyles.textColor,
            border: "none",
            padding: "5px",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >{text}</button>
    );
}

export default Button