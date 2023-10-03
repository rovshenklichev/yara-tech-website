import React, { useState, useEffect } from 'react';
import Greetings from "./Greetings";

const Clock = () => {
    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        // Запускаем интервал обновления времени каждую секунду
        const interval = setInterval(() => {
            const newTime = new Date(currentTime.getTime() + 1000); // Увеличиваем текущее время на 1 секунду
            setCurrentTime(newTime);
        }, 1000);

        <Greetings/>
        // Очищаем интервал при размонтировании компонента
        return () => clearInterval(interval);
    }, [currentTime]);

    // Функция для изменения времени
    const changeTime = (hours: number, minutes: number, seconds: number) => {
        const newTime = new Date();
        newTime.setHours(hours);
        newTime.setMinutes(minutes);
        newTime.setSeconds(seconds);
        setCurrentTime(newTime);
    };

    return (
        <div>
            <h1>Текущее время: {currentTime.toLocaleTimeString()}</h1>
            <button onClick={() => changeTime(11, 0, 0)}>Установить время 11:00:00</button>
            <button onClick={() => changeTime(14, 0, 0)}>Установить время 14:00:00</button>
            <button onClick={() => changeTime(20, 0, 0)}>Установить время 20:00:00</button>
    </div>
);
};

export default Clock;
