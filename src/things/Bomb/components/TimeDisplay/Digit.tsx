import {
  SegmentMap,
  TimeDisplayDigit,
  TimeDisplaySegment,
} from '../../types/TimeDisplay';

interface Props {
  segments: SegmentMap | null;
}

const Digit = ({ segments }: Props) => {
  const isOn = (segment: TimeDisplaySegment) => {
    if (!segments) return 'off';
    return segments.get(segment) ? 'on' : 'off';
  };

  return (
    <div className="digit">
      <div className={`segment horizontal top ${isOn('a')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment vertical top right ${isOn('b')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment vertical bottom right ${isOn('c')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment horizontal bottom ${isOn('d')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment vertical bottom left ${isOn('e')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment vertical top left ${isOn('f')}`}>
        <div className="fill"></div>
      </div>
      <div className={`segment horizontal center ${isOn('g')}`}>
        <div className="fill"></div>
      </div>
    </div>
  );
};

export default Digit;
