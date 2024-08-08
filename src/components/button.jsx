const variants = [
    {variant: "primary", backgroundColor: "blue", textColor: "white"},
    {variant: "secondary", backgroundColor: "grey", textColor: "white"},
    {variant: "success", backgroundColor: "green", textColor: "white"},
    {variant: "warning", backgroundColor: "yellow", textColor: "black"},
    {variant: "danger", backgroundColor: "red", textColor: "white"},
    {variant: "info", backgroundColor: "lightblue", textColor: "black"},
    {variant: "light", backgroundColor: "white", textColor: "black"},
    {variant: "dark", backgroundColor: "black", textColor: "white"},
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