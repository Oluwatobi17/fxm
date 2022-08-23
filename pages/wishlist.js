import { useContext } from "react";
import Link from "next/link";

import { CartCtx } from '../context/CartContext';
import BotCard from '../components/BotCard';

const WishList = () =>{
    const cartCtx = useContext(CartCtx);
    
    return <main>
        <h1>Your Wish List</h1>

        <Link href={'/market'}>
            <a> <i className="fa fa-angle-double-left" aria-hidden="true"></i> Back to Market</a>
        </Link>

        <div className='bots-container'>
            {cartCtx.wish.map(bot => <BotCard key={bot.id} data={bot} />)}

            {cartCtx.wish.length==0 && <center>No bot in your wishlist</center> }
        </div>
    </main>
}

export default WishList;