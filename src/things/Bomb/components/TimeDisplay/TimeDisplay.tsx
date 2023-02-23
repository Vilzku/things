import { useEffect, useState } from 'react';
import { SegmentMap } from '../../types/TimeDisplay';
import DisplayController from '../../utils/DisplayController';
import Digit from './Digit';
import Divider from './Divider';

const TimeDisplay = () => {
  const [digit0, setDigit0] = useState<SegmentMap | null>(null);
  const [digit1, setDigit1] = useState<SegmentMap | null>(null);
  const [digit2, setDigit2] = useState<SegmentMap | null>(null);
  const [digit3, setDigit3] = useState<SegmentMap | null>(null);

  useEffect(() => {
    const controller = DisplayController.getInstance([
      setDigit0,
      setDigit1,
      setDigit2,
      setDigit3,
    ]);
    controller.setTimer(120);
  }, []);

  return (
    <>
      <div className="time-display">
        <Digit segments={digit0} />
        <Digit segments={digit1} />
        <Divider />
        <Digit segments={digit2} />
        <Digit segments={digit3} />
      </div>
      <button onClick={() => DisplayController.getInstance().startTimer()}>
        Start timer
      </button>
      <button onClick={() => DisplayController.getInstance().stopTimer()}>
        Stop timer
      </button>
    </>
  );
};

export default TimeDisplay;
