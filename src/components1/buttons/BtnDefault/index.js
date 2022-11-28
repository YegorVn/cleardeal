import './index.css'

export const Index = ({className, text, onClick, disabled}) => {
    return <button disabled={disabled} className={`btn ${className}`} onClick={onClick}>{text}</button>
}