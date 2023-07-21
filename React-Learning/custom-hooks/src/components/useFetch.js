import React, {useEffect, useState} from 'react'

function useFetch(url) {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        async function getData () {
            const apiData = await fetch(url);
            const res = await apiData.json();
            setData(res);
        }
        getData();
    })

  return [data]
}

export default useFetch