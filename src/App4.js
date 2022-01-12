import {useEffect, useState} from "react";

function App(){
    const [loading, setLoding] = useState(true)
    const [coins, setCoins] = useState([])

    useEffect(() =>{
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then( resonse => resonse.json())
            .then( json => {
                setCoins(json)
                setLoding(false)
            } );
    },[]);




    return <div>
        <h1>The Conis! { `${loading}` ? '' :  `(${coins.length})` }</h1>
        {loading ? <strong>Loading..</strong> : null}
        <ul>
            { coins.map( (coin,idx) => <li key={idx}>{coin.name}</li>)}
        </ul>
    </div>
}


export default App;