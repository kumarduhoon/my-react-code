import React, { useEffect, useState } from 'react'

function useCurrencyinfo(currency) {
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
            .then((data) => {
                return data.json()
            })
            .then((val) => {
                return setData(() => (val))
            })
    }, [currency])

    return data
}

export default useCurrencyinfo