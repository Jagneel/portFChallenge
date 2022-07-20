import React, { useEffect, useState } from 'react';
import axios from 'axios';

function useFetch(url) {
        const [data, setData] = useState([]);
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);

        useEffect(() => {
            axios
            .get(url)
            .then((response) => {
                setData(response.data)
            })
            if (error) {
                setError(error);
              }
              if (data?.user) {
                setError(JSON.stringify(data.user));
              }
        }, [url])

        return {data};
    
}

export default useFetch