import './index.css'

export const index = ({className, text, onClick}) => {
    return <button className={`btn_open ${className}`} onClick={onClick}>{text}</button>
}