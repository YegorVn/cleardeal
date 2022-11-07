import "./index.css";
import {Index as Tab} from './Tab'
export const Index = ({ content}) => {
  return (
    <div className="disclosure col-12 px-0">
      {content.map((tab) => {
        return <Tab tab={tab} className="col-12" />;
      })}
    </div>
  );
};
