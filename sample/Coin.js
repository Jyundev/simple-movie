import React, { useEffect, useState } from "react";
import styles from './Coin.module.css';

function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([])
    const [myCoin, setMyCoin] = useState(0)
    const [selectedCoin, setSelectedCoin] = useState("");

    const onChange = (event) => { 
        setMyCoin(event.target.value)
        console.log({myCoin})
    }

    const onSelectChange = (event) => {

        const selectedId = event.target.value;
        const coin = coins.find((coin) => coin.id === selectedId);
        setSelectedCoin(coin);
    };

    const onSubmit = (event) => {

        event.preventDefault(); //새로고침 방지
        if (myCoin == "") {
            return;
        }
        setMyCoin("");
    };

    useEffect(() => {

    }, [myCoin])
    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers?limit=20")
            .then(response => response.json())
            .then((json) => {
                setCoins(json)
                setLoading(false)
            })
    }, [])
    return <div>
        <h1>The Coins!</h1>
        <div className={styles.myCoin}>
            <h3>My Coin</h3>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={myCoin}
                    placeholder="Enter your coin"
                    type="number"
                    min="50"
                    max="1000" />
                <button >Enter</button>
            </form>
        </div>
        {loading ? <strong>Loading...</strong> :
            <select onChange={onSelectChange}>
                {coins.map((coin) => (
                    <option key={coin.id}>
                        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                    </option>
                ))}
            </select>}
            <h3>You can buy {} coins</h3>


    </div>
}

export default Coin;