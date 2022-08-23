import { useContext, useState, useEffect } from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

import { CartCtx } from '../context/CartContext';
import BoughtBotAction from './BoughtBotAction';
import Rating from './Rating';

const BoughtBotCard = ({data: {img, id, price, name, oldprice, yield_percent, ratings, hedged}}) =>{
    const [rate, setRate] = useState(5);
    const cartCtx = useContext(CartCtx);

    useEffect(()=>{
        if(!ratings) return;
        let rating = 0;
        const ratingsList = ratings.split(',');
        for(let i=0; i<ratingsList.length; i++){
            rating += parseFloat(ratingsList[i]);
        }
        setRate( parseFloat( (rating/ratingsList.length).toFixed(1) ) );
    }, [ratings]);

    return <div className="bot">
        {hedged && <span className='hedgebadge'>Hedged</span>}
        <img src={img} alt={name} />

        <Link href={`/market/${id}`}>
            <a>{name}</a>
        </Link>
        <center>
            <Rating rate={rate} />
        </center>
        
        <BoughtBotAction data={{img, id, price, name, oldprice, yield_percent}} />
    </div>
}

export default BoughtBotCard;