import { useState, useEffect, useContext } from 'react';

import BotCard from './BotCard';
import { API_HOST } from '../util/data';
import LoadingSpinner from './LoadingSpinner';
import { MonsterCtx } from '../context/MonsterContext';

const RelatedBots = ({bot}) =>{
    const [relatedbot, setRelatedBot] = useState([]);
    const [allbots, setAllBots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const monsterCtx = useContext(MonsterCtx);

    useEffect(()=>{
        setIsLoading(true);
        fetch(API_HOST)
        .then(res => res.json())
        .then(data => {
            setAllBots(data.slice(0, 3));
            setIsLoading(false);
        })
        .catch(err => monsterCtx.updateMessage({type: 'error', message: 'Error loading related bots.'}))
    }, []);

    useEffect(()=>{
        const newList = allbots.filter(item => item.id != bot.id);
        newList = newList.filter(item => item.price>0);
        setRelatedBot(newList);
    }, [allbots, bot.id]);

    return <div>
        <center>
            <h2>Related Bots</h2>
            <div className='relatedbots'>
                {relatedbot.map(bot => <BotCard data={bot} key={bot?.id} />)}
                {relatedbot.length==0 && <p>No related bots found</p>}
            </div>
            {isLoading && <LoadingSpinner />}
        </center>
    </div>
}

export default RelatedBots;