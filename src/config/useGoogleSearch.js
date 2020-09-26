import { useState, useEffect } from 'react';
import API_KEY from './Keys'

const CONTEXT_KEY = "c7f5496c82a29b6d5"

const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            fetch(
                `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                // `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}:omuauf_lfve&q=${term}`
            )
            .then(response => response.json())
            .then(result => {
                setData(result)
            })
        }

        fetchData()
    }, [term])

    return { data }
}

export default useGoogleSearch;