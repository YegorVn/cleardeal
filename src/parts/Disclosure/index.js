import "./index.css";
import {Index as Tab} from './Tab'
export const Index = ({ items }) => {
  return (
    <div className="disclosure">
      {items.map((tab) => {
        return <Tab tab={tab} className="" />;
      })}
    </div>
  );
};
