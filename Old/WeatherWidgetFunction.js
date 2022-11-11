import { useState, useEffect } from "react";

function WeatherWidget({ location }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        if (location) {
            fetch("")
                .then((res) => res.json())
                .then((obj) => setData(obj));
        }
    }, [location]);

    if (!data) {
        return <></>;
    }

    return (
        <div className="card">
            <img src="" alt="" />
            <div className="card-body">
                <h5 className="card-title">{data.location.name}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">
                    Temp: {data.current.temperature}
                </li>
                <li className="list-group-item">
                    {data.current.weather_description}
                </li>
                <li className="list-group-item">
                    Wind: {data.current.wind_speed} {data.current.wind_dir}
                </li>
                <li className="list-group-item">
                    Humidity: {data.current.humidity}
                </li>
                <li className="list-group-item"></li>
            </ul>
        </div>
    );
}

export default WeatherWidget;
