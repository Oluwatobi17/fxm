import { useContext } from 'react';
import { useRouter } from 'next/router';

import { MonsterCtx } from '../context/MonsterContext';
import { CartCtx } from '../context/CartContext';
import { API_DOWNLOAD_BOT, API_LOVE_BOT } from '../util/data';

const CartAction = ({ data }) =>{
    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx);
    const { id, price } = data;

    const router = useRouter();

    const isOnBotDetails = router.pathname!='/market' ? true: false;

    const addToCart = () => cartCtx.addToCart(data);

    const removeFromCart = () => cartCtx.removeFromCart(id);
    
    const addToWishList = () =>{
        cartCtx.addToWish(data);
        fetch(API_LOVE_BOT+id+`?token=${monsterCtx.user?.token}`)
        .then(res =>{
            return;
        })
    }

    const removeFromWish = () => cartCtx.removeFromWish(id);

    const handleDownload = () => {
        fetch(API_DOWNLOAD_BOT+id+`?token=${monsterCtx.user?.token}`)
        .then(res =>{
            if(!res.ok) return monsterCtx.updateMessage({type: 'error', message: res.statusText+'. Ensure you are logged in'})
            return res.json();
        })
        .then(data => {
            if(data) window.location.assign(data);
        })
        .catch(err => monsterCtx.updateMessage({type: 'error', message: err.message}))
    }

    return <center>
        {price==0 && <i className="fa fa-download" aria-hidden="true" onClick={handleDownload} title="Download Bot"></i>}
        {price!=0 && monsterCtx.user?.bots?.indexOf(id)!=-1 && monsterCtx.user?.bots?.indexOf(id)!=undefined && <i className="fa fa-download" aria-hidden="true" onClick={handleDownload} title="Download Bot"></i>}
        {price!=0 && (monsterCtx.user?.bots?.indexOf(id)==-1 || monsterCtx.user?.bots?.indexOf(id)==undefined) && cartCtx.isInsideCart(id) && <i className="fa fa-times" aria-hidden="true" title="Remove from Cart" onClick={removeFromCart}></i>}
        {price!=0 && (monsterCtx.user?.bots?.indexOf(id)==-1 || monsterCtx.user?.bots?.indexOf(id)==undefined) && !cartCtx.isInsideCart(id) &&  <i className="fa fa-shopping-cart" aria-hidden="true" title="Add Bot to Cart" onClick={addToCart}></i>}
        {cartCtx.isInsideWish(id) && <i className="fa fa-heart" aria-hidden="true" title="Remove from Wishlist" onClick={removeFromWish}></i>}
        {!cartCtx.isInsideWish(id) && <i className="fa fa-heart-o" aria-hidden="true" title="Add Bot to Wishlist" onClick={addToWishList}></i>}
        {!isOnBotDetails && <i className="fa fa-info-circle" aria-hidden="true" title="Check Bot Details" onClick={()=>router.push(`/market/${id}`)}></i>}
    </center>
}

export default CartAction;