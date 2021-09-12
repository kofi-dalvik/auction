import {useEffect, useState, memo} from 'react';
import PropTypes from 'prop-types';

function Timer({date}) {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const endTime = (new Date(date)).getTime();

    useEffect(() => {
        const interval = setInterval(() => {
            const timeleft = endTime - (new Date().getTime());

            setDays(Math.floor(timeleft / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((timeleft % (1000 * 60)) / 1000));
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [endTime])

    return (
        <div className="timer font-big font-weight-bold">
            <span className="mr-2">{days}d</span>
            <span>{hours}h</span> :
            <span>{minutes}m</span> :
            <span>{seconds}s</span>
        </div>
    )
}

Timer.propTypes = {
    date: PropTypes.string
}

export default memo(Timer);
