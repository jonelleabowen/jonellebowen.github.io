import { useEffect, useState } from 'react';

export function useCountries() {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error(`Returned with status ${response.status}`);
            })
            .then((data) => {
                setCountries(data)
            })
            .catch(e => {
                console.log('error retrieving countries: ', e.message ?? e);
                setCountries([]);
            })
    }, [])
    return countries;
}