import "../styles/CustomButton.css"

const CustomButton = ({ children, type='primary', mode='outlined', href, onClick }) => {

    return (
        <a className={`custom-button ${type} ${mode}`} href={href} onClick={onClick}>
        {children}
        </a>
    );
};
  

export default CustomButton;