import './index.css'

export const index = ({className, text, onClick, disabled}) => {
    return <button disabled={disabled} className={`btn ${className}`} onClick={onClick}>{text}</button>
}