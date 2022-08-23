import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { API_BOT_DETAIL, API_BOT_IMPRESSION } from "../../util/data";
import MoreBotDetails from "../../components/MoreBotDetails";
import BotInfo from "../../components/BotInfo";
import RelatedBots from "../../components/RelatedBots";
import LoadingSpinner from "../../components/LoadingSpinner";

const BotDetails = () =>{
    const [bot, setBot] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();
    const { id } = router.query;

    useEffect(()=>{
        setIsLoading(true);
        fetch(API_BOT_DETAIL+id)
        .then(res => res.json())
        .then(data => {
            setBot(data);
            setIsLoading(false);
        })
        .catch(err => {
            setIsLoading(false);
            // monsterCtx.updateMessage({type: 'error', message: 'Error loading bot details. Please refresh this page'})
        })
    }, [id]);

    
    useEffect(()=>{
        fetch(API_BOT_IMPRESSION+id)
        .then(res => res.json())
        .then(data => {})
    }, []);

    if(Object.values(bot).length==0) return <LoadingSpinner />

    return <main>
        <div>
            <Link href={'/market'}>
                <a> <i className="fa fa-angle-double-left" aria-hidden="true"></i> Back to Market</a>
            </Link>
        </div>

        <div className="bot-details">
            {/*  */}
            <BotInfo bot={bot}/>

            {/* section for how it works, download links and note */}
            <MoreBotDetails botprice={bot?.price} botid={bot?.id} strategy={bot?.strategy} name={bot?.name} note={bot?.note} />
        </div>

        {isLoading && <LoadingSpinner />}

        <RelatedBots bot={bot}/>
    </main>
}

export default BotDetails;