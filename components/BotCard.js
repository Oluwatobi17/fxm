import { useContext, useEffect, useState } from 'react';
import Link from "next/link";

import CartAction from './CartAction';
import Rating from './Rating';

const BotCard = ({data: {img, id, price, name, oldprice, yield_percent, ratings, hedged}}) =>{
    const [rate, setRate] = useState(5);

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
        <span className='doublebadge' title={`${yield_percent}% yield`}>{yield_percent}%</span>
        {hedged && <span className='hedgebadge' title='Hedge all trades'>Hedged</span>}
        <img src={img} alt={name} />

        <Link href={`/market/${id}`}>
            <a>{name}</a>
        </Link>
        <center>
            <Rating rate={rate} />
        </center>

        {price>0 ?<div className="price">
            <div title='Original Price'>
                <span className="oldprice">{oldprice}</span>
                <span className="currency">USD</span>
            </div>

            <div title='Discounted Price'>
                <span>{price}</span>
                <span className="currency">USD</span>
            </div>
        </div>:
            <span className="freetag">
                <img src="/freetag.png" alt="freeicon" />
            </span>
        }

        <CartAction data={{img, id, price, name, oldprice, yield_percent}} />
    </div>
}

BotCard.defaultProps = {
    data:{img: '', id: '', price: 0, name: '', oldprice: 0, yield_percent: 0, ratings: ''}
}

export default BotCard;