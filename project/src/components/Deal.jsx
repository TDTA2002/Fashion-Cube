import React, { useState, useEffect } from 'react';
import './SCSS/deal.scss';
import deal from './images/deal_ofthe_week.png';

function PomodoroDeal() {
    const [remainingTime, setRemainingTime] = useState(0);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const dealEndTime = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;
        const interval = setInterval(() => {
            const currentTime = new Date().getTime();
            const timeDiff = Math.max(0, dealEndTime - currentTime) / 1000;
            setRemainingTime(timeDiff);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            const triggerPosition = window.innerHeight / 2;

            if (scrollPosition > triggerPosition) {
                setShow(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = Math.floor(time % 60);
        return (
            <div className="time-container">
                <div className="time-segment">
                    <span className="time">0{days}</span><br />
                    <span className="unit">Days</span>
                </div>
                <div className="time-segment">
                    <span className="time">{hours}</span><br />
                    <span className="unit">Hours</span>
                </div>
                <div className="time-segment">
                    <span className="time">{minutes}</span><br />
                    <span className="unit">Mins</span>
                </div>
                <div className="time-segment">
                    <span className="time">{seconds}</span><br />
                    <span className="unit">Sec</span>
                </div>
            </div>
        );
    };

    return (
        <div className={`pomodoro-deal${show ? ' show' : ''}`}>
            <div className="deal-image">
                <img src={deal} alt="Deal of the Week" />
            </div>
            <div className="deal-info">
                <h1>Deal of the Week</h1>
                <div className="timer-container">
                    <p className='line'></p>
                    {formatTime(remainingTime)}
                </div>
                <button className="btn btn-dark">Shop Now</button>
            </div>
        </div>
    );
}

export default PomodoroDeal;
