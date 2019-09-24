import React, { useState, useEffect } from 'react';
import './schedule.scss';
import axios from 'axios';

const getSchedule = async () => {
    try {
        const response = await axios.get('http://localhost:3000/data/schedule.json');
        console.log("Response Line 8: ", response);
        if (response.error) {
            throw response.error;
        } else {
            return response.data.schedule;
        }
    } catch (error) {
        console.log(error);
    }
}

export default () => {
    const [schedule, setSchedule] = useState([]);
    useEffect(() => {
        getSchedule()
            .then(response => {
                setSchedule(response);
                console.log("Hello Line 25: ", response);
            })
            .catch(error => {
                console.log("There was an error: ", error);
            })
    }, []);
    console.log("Schedule Line 31: ", schedule);
    return (
        <div>
            {
                schedule.map(v => (
                    <div key={v.pid} className="schedule">
                        <div className="day">{v.day}</div>
                        <div className="time">{v.open} - {v.close}</div>
                    </div>
                ))
            }
        </div>
    );
}
