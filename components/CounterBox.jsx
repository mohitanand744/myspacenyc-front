// CounterBox.jsx
const CounterBox = ({ icon, title, count }) => {
  return (
    <div className="counter-box">
      <div className="box-icon">
        <span className="cIcon">{icon}</span>
      </div>
      <div className="content-box">
        <div className="title-count text-variant-1">{title}</div>
        <div className="box-count d-flex align-items-end">
          <div className="number">{count}</div>
        </div>
      </div>
    </div>
  );
};

export default CounterBox;
