import "../styles/CustomButton.css"

const CustomButton = ({ children, type='primary', href, onClick }) => {

    return (
        <a className={`custom-button ${type}`} href={href} onClick={onClick}>
        {children}
        </a>
    );
};
  

export default CustomButton;