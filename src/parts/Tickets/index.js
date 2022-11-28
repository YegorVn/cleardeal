import "./index.css";
import { Index as Ticket } from "./Ticket";

export const Index = ({ items }) => {
  return (
    <div className="tickets d-flex flex-column flex-lg-row flex-wrap px-0">
      {items.map((ticket, index) => {
        return (
          <Ticket content={ticket} animation={{ delay: 0, duration: 0.75 }} />
        );
      })}
    </div>
  );
};
