import './index.css'

export const index = ({className, text, disabled, onClick}) => {
    return <button disabled={disabled} className={`btn_slide ${className}`} onClick={onClick}>{text}</button>
}