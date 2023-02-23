import DisplayController from '../utils/DisplayController';

export type TimeDisplayDigit = -1 | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;

export type TimeDisplaySegment = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';

export type SegmentMap = Map<TimeDisplaySegment, 0 | 1>;
export type DigitMap = Map<TimeDisplayDigit, SegmentMap>;

export type DigitDriver = (segments: SegmentMap) => void;

export interface DisplayControllerInterface {
  getInstance: (drivers: DigitDriver[]) => DisplayController;
  setTimer: (seconds: number) => void;
  startTimer: () => void;
  stopTimer: () => void;
  resetTimer: () => void;
}
