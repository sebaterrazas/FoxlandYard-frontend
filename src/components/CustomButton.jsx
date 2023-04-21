import "../styles/CustomButton.css"

const CustomButton = ({ children, type, href, onClick }) => {

    const handleClick = () => {
        if (onClick !== undefined) {
            console.log("Click!");
        }
    };
    return (
        <a className={`custom-button ${type}`} href={href} onClick={handleClick}>
        {children}
        </a>
    );
};
  

export default CustomButton;