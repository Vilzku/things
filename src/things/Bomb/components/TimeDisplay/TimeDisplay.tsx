import Digit from './Digit';
import Divider from './Divider';

const TimeDisplay = () => {
  return (
    <div className="time-display">
      <Digit />
      <Digit />
      <Divider />
      <Digit />
      <Digit />
    </div>
  );
};

export default TimeDisplay;
