import './Button.css';

const Button = ({onClick, children, theme, disabled}) => {
    return <button 
        disabled={!!disabled}
        className={`Button ${theme} ${!!disabled && 'disabled'}`} 
        onClick={onClick} >
            {children}
        </button>
}


Button.defaultProps = {
    theme: 'dark',
    onClick: () => console.log('forggeting something??'),
    disabled: false,
  
}

export default Button;
