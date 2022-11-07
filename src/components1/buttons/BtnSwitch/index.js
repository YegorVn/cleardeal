import './index.css'

export const index = ({className, text, onClick}) => {
    return <button className={`btn_switch ${className}`} onClick={onClick}>{text}</button>
}