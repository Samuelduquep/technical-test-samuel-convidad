import { useState, useEffect } from "react";

type Data = {
    hourly: {
        time: string[];
        temperature_2m: number[];
        wind_speed_10m: number[];
    };
};

interface CustomError extends Error {
    customProperty: string;
}

const useFetch = (url: string) => {
    const [data, setData] = useState<Data | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<CustomError | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Error loading data");
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    const customError: CustomError = new Error("Error") as CustomError;
                    customError.customProperty = "Custom Property Value";
                    setError(customError);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);

    return { data, loading, error };
};

export default useFetch;
