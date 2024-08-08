const variants = [
    {variant: "primary", backgroundColor: "blue", textColor: "white"}
]

function Button({text, variant}){
    const variantStyles = variants.find(variantStyle => variantStyle.variant === variant)
    return(
        <button
        style={{
            backgroundColor: variantStyles.backgroundColor,
            color: variantStyles.textColor,
            border: "none",
            padding: "5px",
            borderRadius: "5px"
        }}
        >{text}</button>
    );
}

export default Button