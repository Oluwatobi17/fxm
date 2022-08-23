import Head from 'next/head';
import { useState, useEffect, useContext } from 'react';

import FilterBot from '../../components/FilterBot';
import SearchPanel from '../../components/SearchPanel';
import BotCard from '../../components/BotCard';
import { API_HOST } from '../../util/data';
import LoadingSpinner from '../../components/LoadingSpinner';
import { MonsterCtx } from '../../context/MonsterContext';

const Market = () =>{
    const [isSearchPanelOpen, setIsSearchPanelOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [bots, setBots] = useState([]);
    const [allbots, setAllbots] = useState([]);

    const monsterCtx = useContext(MonsterCtx);

    useEffect(()=>{
        setIsLoading(true);
        fetch(API_HOST)
        .then(res => res.json())
        .then(data => {
            setBots(data);
            setAllbots(data);
            setIsLoading(false);
        })
        .catch(err => monsterCtx.updateMessage({type: 'error', message: 'Error loading available bots. Please refresh this page'}))
    }, []);

    const sortNumerical = (arr) =>{
        return arr.sort(function(a, b){
            return a-b;
        });
    }
    const handleFilter =  (filterby) =>{
        switch(filterby){
            case "free":
                const freebots = allbots.filter(bot => bot.price == 0);
                return setBots(freebots);
            // case "paid":
            //     const paidbots = allbots.filter(bot => bot.price > 0);
            //     return setBots(paidbots);
            case "speed":
                const speed = [];
                let temp_bots = [...allbots];
                const speedList = sortNumerical( allbots.map(bot => bot.yield_percent) ).reverse();
                for(let i=0; i<speedList.length; i++){
                    const indexOfBot = temp_bots.findIndex(bot => bot.yield_percent==speedList[i]);
                    speed.push(temp_bots[indexOfBot]);
                    temp_bots = temp_bots.filter(bot => bot.id !==  temp_bots[indexOfBot].id);
                }
                return setBots(speed);
            case "paid":
                const botList = [...allbots];
                const priceArr = [];
                const priceList = sortNumerical( botList.map(bot => bot.price) ).reverse();
                priceList = priceList.filter(price => price !=0); //removing free bots from list
                for(let i=0; i<priceList.length; i++){
                    const indexOfBot = botList.findIndex(bot =>bot.price==priceList[i]);
                    priceArr = [...priceArr, botList[indexOfBot]];
                    botList = botList.filter(bot => bot.id !== botList[indexOfBot].id);
                }
                return setBots(priceArr);
            default:
                return setBots(allbots)
        }
    }

    const handleSearchByPair = (query) =>{
        query = query.toUpperCase();
        const result = allbots.filter(bot => bot.strongPairs.includes(query));
        setBots(result);
        if(query==='') return setBots(allbots);
    }

    return <main>
        <Head>
            <title>Shop Classic Forex Hedging Bots At A Classic Place | FxMonsters</title>
            <meta name="description" content="Free Expert Advisors, Expert Advisors" />
        </Head>
        <FilterBot count={bots.length} toggleSearchPanel={()=> setIsSearchPanelOpen(prev => !prev)} filterBot={handleFilter}/>

        {isSearchPanelOpen && <SearchPanel searchByPair={handleSearchByPair} />}

        <div className='bots-container'>
            {bots.map(bot => <BotCard data={bot} key={bot.id} /> )}

            {bots.length==0 && !isLoading && <center>No bots</center> }
            
        </div>
        {isLoading && <LoadingSpinner />}
    </main>
}

export default Market;