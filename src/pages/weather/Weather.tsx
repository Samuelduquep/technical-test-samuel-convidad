import useFetch from "../../hooks/useFetch"
import useGlobal from "../../hooks/useGlobal"
import { useEffect } from "react"
import { Table, Spin } from 'antd';
import styles from "./Weather.module.scss"


const Weather = () => {

    const { setTitlePage, setActivePage } = useGlobal()

    useEffect(() => {
        setTitlePage("Weather")
        setActivePage("weather")
    }, [setTitlePage, setActivePage])

    const { data, loading, error } = useFetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&past_days=10&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m")

    const dataSource = data?.hourly

    interface HourlyData {
        time: string;
        temperature: number;
        windSpeed: number;
    }

    const columns = [
        {
            title: 'Time',
            dataIndex: 'time',
            key: 'time',
            sorter: (a: HourlyData, b: HourlyData) => a.time.localeCompare(b.time)
        },
        {
            title: 'Temperature',
            dataIndex: 'temperature',
            key: 'temperature',
            sorter: (a: HourlyData, b: HourlyData) => a.temperature - b.temperature

        },
        {
            title: 'Wind Speed',
            dataIndex: 'windSpeed',
            key: 'windSpeed',
            sorter: (a: HourlyData, b: HourlyData) => a.windSpeed - b.windSpeed

        }
    ];


    const dataEx = dataSource?.time.map((itemA, index) => ({
        key: index,
        time: itemA,
        temperature: dataSource?.temperature_2m[index],
        windSpeed: dataSource?.wind_speed_10m[index]
    }));

    return (
        <div className={styles.container_grid}>
            {error ? (
                <div className={styles.weather_error_message}>
                    <p>An error has occurred</p>
                </div>
            ) : (
                loading ? (
                    <div className={styles.weather_spin}>
                        <Spin size="large" />
                    </div>
                ) : (
                    <Table className={styles.custom_table} columns={columns} dataSource={dataEx} />
                )
            )}
        </div>

    )
}

export default Weather