import './index.css'
import vk from "../../../assets/images/modal/vk.svg";
import wa from "../../../assets/images/modal/wa.svg";
import tg from "../../../assets/images/modal/tg.svg";
const Index = ({ className }) => {
    return (
      <div className={`${className}`}>
        <div className="text-s ml-md-3 mb-lg-4">Посмотрите наши соцсети</div>
        <div className={`social-media d-flex ${className}`}>
          <a>
            <img src={vk} width={93} />
          </a>
          <a className="ml-3">
            <img src={wa} width={93} />
          </a>
          <a href="https://t.me/a_kolotii" className="ml-3">
            <img src={tg} width={93} />
          </a>
        </div>
      </div>
    );
  };