import React, { useState, useEffect } from 'react';

const Greetings = () => {
    const [timeOfDay, setTimeOfDay] = useState('');

    useEffect(() => {
        // Функция для получения текущего времени суток
        const getTimeOfDay = () => {
            const currentTime = new Date().getHours();

            if (currentTime >= 5 && currentTime < 12) {
                return 'Good morning';
            } else if (currentTime >= 12 && currentTime < 18) {
                return 'Good afternoon';
            } else {
                return 'Good evening';
            }
        };

        // Обновление времени суток каждые 10 секунд
        const interval = setInterval(() => {
            setTimeOfDay(getTimeOfDay());
        }, 10000);

        // Очистка интервала при размонтировании компонента
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <h1>{timeOfDay}</h1>
        </div>
    );
};

export default Greetings;