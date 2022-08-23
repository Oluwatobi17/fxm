import { useContext } from 'react';
import { useRouter } from 'next/router';

import { CartCtx } from '../context/CartContext';
import { MonsterCtx } from '../context/MonsterContext';
import { API_LOVE_BOT, API_DOWNLOAD_BOT } from '../util/data';

const BoughtBotAction = ({ data }) =>{
    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx);
    const { id, price } = data;

    const router = useRouter();

    const isOnBotDetails = router.pathname!='/market' ? true: false;

    const handleDownload = () => {
        fetch(API_DOWNLOAD_BOT+id+`?token=${monsterCtx.user?.token}`)
        .then(res =>{
            if(!res.ok) return monsterCtx.updateMessage({type: 'error', message: res.statusText+'. Ensure you are logged in or you have purchased the bot'})
            return res.json();
        })
        .then(data => {
            if(data) window.location.assign(data);
        })
        .catch(err => monsterCtx.updateMessage({type: 'error', message: err.message}))
    }

    return <center>
        <i className="fa fa-download" aria-hidden="true" onClick={handleDownload} title="Download Bot"></i>
        <i className="fa fa-info-circle" aria-hidden="true" title="Check Bot Details" onClick={()=>router.push(`/market/${id}`)}></i>
    </center>
}

export default BoughtBotAction;