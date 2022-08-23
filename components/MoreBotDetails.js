import { useState, useContext } from 'react';

import FilterDetails from './FilterDetails';
import { API_DOWNLOAD_BOT } from '../util/data';
import { MonsterCtx } from '../context/MonsterContext';

const MoreBotDetails = ({strategy, name, note, botid, botprice}) =>{
    const [openDetails, setOpenDetails] = useState('strat');
    const [downloadLinks, setDownloadLinks] = useState([]);
    const monsterCtx = useContext(MonsterCtx);

    let boughtBotsId = []
    if(monsterCtx.user?.bots != undefined){
        boughtBotsId =  monsterCtx.user?.bots?.split(',');
    }
    const handleFilterInfo = (by) =>{
        setOpenDetails(by);
    }

    note = note.split('.').filter(n => n!=' ');
    strategy = strategy.split('.').filter(n => n != '');
    // download = download.split(',').filter(n => n != '');

    const getDownloadLinks = () =>{
        fetch(API_DOWNLOAD_BOT+botid+`?token=${monsterCtx.user?.token}`)
        .then(res =>{
            if(!res.ok && !monsterCtx.user?.token) return monsterCtx.updateMessage({type: 'error', message: res.statusText+'. Ensure you are logged in'})
            if(!res.ok && monsterCtx.user?.token) return monsterCtx.updateMessage({type: 'error', message: res.statusText+'. You have no access to this bot, ensure you checkout from cart'})
            
            return res.json();
        })
        .then(data => {
            setDownloadLinks(data);
        })
    }

    const fetchDownloadLink = () =>{
        if(!boughtBotsId.includes(botid.toString()) && botprice!=0)
            return <p>You have to purchase the bot to access the bot</p>

        if(boughtBotsId.includes(botid.toString()) || botprice==0)
            return <p>Download: <a href={downloadLinks}>{name}</a></p>
        // let downloadLink = ["MT4 link: ", <a href='{downloadLinks[0]}' key={11}>{name}</a>];
        // if(downloadLinks.length>1) downloadLink = [...downloadLink,<br key={12} />, <br key={13} />, "MT5 link: ", <a href='{downloadLinks[1]}' key={14}>{name}</a>]
        // if(boughtBotsId.includes(botid) && botprice!=0) return ['You have to purchase the bot to access the bot'];
        
        // return downloadLink;
    }
    return <section className="morebotdetails">
        <FilterDetails filterInfo={handleFilterInfo} getDownloadLinks={getDownloadLinks} />
        <>
            {openDetails==='strat' && <ul>
                {strategy.map(strat => <li key={strat}>{strat}</li>)}
            </ul>}
            {openDetails==='download' && fetchDownloadLink()}
            {openDetails==='note' && <ol>
                {note.map(warning => <li key={warning}>{warning}</li>)}
            </ol>}
        </>
    </section>
}

MoreBotDetails.defaultProps = {
    strategy: '', 
    download: '', 
    note: '', 
    botid: null, 
    botprice: 0
}

export default MoreBotDetails;