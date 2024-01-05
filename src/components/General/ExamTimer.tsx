import { useTimer } from "react-timer-hook";

function ExamTimer({ expiryTimestamp, timerExpired }) {
    const {
      seconds,
      minutes,
      hours
    } = useTimer({ expiryTimestamp, onExpire: timerExpired })
    let isDanger = hours == 0 && minutes === 0 && seconds < 60;
    return (
        <h3 className={isDanger ? "text-red" : "text-blue"}>{`${hours}:${minutes}:${seconds}`}</h3>
    )
}

export default ExamTimer;