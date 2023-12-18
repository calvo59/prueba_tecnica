import { useState, useEffect } from "react";


export const useFetch = (url: string) => {
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setData(data.results);
            });
    }, []);


    return data;
};


