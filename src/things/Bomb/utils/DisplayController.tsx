import {
  DigitDriver,
  SegmentMap,
  TimeDisplayDigit,
  TimeDisplaySegment,
  DisplayControllerInterface,
  DigitMap,
} from '../types/TimeDisplay';

// TODO: add implements interface
class DisplayController {
  private static instance: DisplayController | null = null;
  private drivers: DigitDriver[] = [];
  private time: number = 0;
  private timer: number = 0;
  private divider: boolean = true;
  // TODO: blinking divider

  private createMap = (segmentData: (0 | 1)[]): SegmentMap => {
    const segments: TimeDisplaySegment[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    return new Map(segmentData.map((value, i) => [segments[i], value]));
  };

  private digitMap: DigitMap = new Map([
    [-1, this.createMap([0, 0, 0, 0, 0, 0, 0])],
    [0, this.createMap([1, 1, 1, 1, 1, 1, 0])],
    [1, this.createMap([0, 1, 1, 0, 0, 0, 0])],
    [2, this.createMap([1, 1, 0, 1, 1, 0, 1])],
    [3, this.createMap([1, 1, 1, 1, 0, 0, 1])],
    [4, this.createMap([0, 1, 1, 0, 0, 1, 1])],
    [5, this.createMap([1, 0, 1, 1, 0, 1, 1])],
    [6, this.createMap([1, 0, 1, 1, 1, 1, 1])],
    [7, this.createMap([1, 1, 1, 0, 0, 0, 0])],
    [8, this.createMap([1, 1, 1, 1, 1, 1, 1])],
    [9, this.createMap([1, 1, 1, 1, 0, 1, 1])],
  ]);

  private constructor(drivers: DigitDriver[]) {
    this.drivers = drivers;
  }

  static getInstance = (drivers?: DigitDriver[]) => {
    if (!this.instance && drivers) {
      this.instance = new DisplayController(drivers);
    }
    if (!this.instance?.drivers) {
      throw 'DisplayContoller: getInstance: Missing DigitDrivers';
    }
    return this.instance;
  };

  private update = () => {
    const digit0 = Math.floor(this.time / 60 / 10) || -1;
    const digit1 = Math.floor((this.time / 60) % 10);
    const digit2 = Math.floor((this.time % 60) / 10);
    const digit3 = Math.floor((this.time % 60) % 10);

    [digit0, digit1, digit2, digit3].forEach((digit, i) => {
      const segmentMap = this.digitMap.get(digit as TimeDisplayDigit);
      if (!segmentMap)
        throw (
          'DisplayContoller: update: Error in digitMap. Digit ' +
          i +
          ' with value ' +
          digit
        );
      this.drivers[i](segmentMap);
    });
  };

  // TODO: timer cannot go negative
  setTimer = (seconds: number) => {
    this.time = seconds;
    this.update();
  };

  startTimer = () => {
    this.timer = setInterval(() => {
      this.time = this.time - 1;
      this.update();
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.timer = 0;
  };

  resetTimer = () => {
    null;
  };
}

export default DisplayController;
