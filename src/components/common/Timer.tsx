import ms from "ms";
import { useEffect, useState } from "react";

interface Props {
  time: number;
  active: boolean;
  onTimerFinsh: () => void;
}

550;

const Timer = ({ time, active, onTimerFinsh }: Props) => {
  const [currentTime, setTime] = useState(time);

  const decrementTime = () => setTime(currentTime - 1);

  useEffect(() => {
    if (!active) return;

    const id = window.setInterval(() => {
      decrementTime();
    }, ms("1s"));

    return () => window.clearInterval(id);
  }, [active, currentTime]);

  const minutesAndSeconds = (seconds: number) => {
    let min = Math.floor(seconds / 60);
    let sec = seconds % 60;
    let minStr = min.toString();
    let secStr = sec.toString();

    if (min < 10) minStr = "0" + min;
    if (sec < 10) secStr = "0" + sec;

    return `${minStr}:${secStr}`;
  };

  return <p className="timer">{minutesAndSeconds(currentTime)}</p>;
};

export default Timer;
