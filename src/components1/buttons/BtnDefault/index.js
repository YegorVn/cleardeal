import './index.css'

export const index = ({className, text, onClick}) => {
    return <button className={`btn ${className}`} onClick={onClick}>{text}</button>
}