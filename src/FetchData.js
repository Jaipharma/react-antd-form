import React, { useEffect, useState } from 'react';

export default function FetchData() {
    const [data, setData] = useState({});

	useEffect(() => {		
		fetch('http://localhost/test-api/user.php')
		.then(res => {
            return res.json()
        })
		.then(data => {
            console.log('data:')
            console.log(data);
            setData(data);
        })
        .catch(err => {
            console.log(err);
        })

	}, []);

    return (
        <div>
            <h1>FetchData</h1>

            <p>
                {JSON.stringify(data)}
            </p>
        </div>
    )
}
