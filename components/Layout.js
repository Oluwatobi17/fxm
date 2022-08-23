import { useContext, useEffect } from 'react';
import Head from 'next/head';

import NavPanel from './NavPanel';
import FMFooter from './FMFooter';
import { MonsterCtx } from '../context/MonsterContext';

const Layout = props =>{
    const monsterCtx = useContext(MonsterCtx);

    useEffect(()=>{
        // check backend for announcement;
            // cartCtx.updateMessage({type:'success', message: annoucement})
    }, []);
    
    const removeMessage = () => {
        monsterCtx.updateMessage({});
    }
    return <>
        <Head>
            <title>Perfect Market for Hedging Expert Advisors | FxMonsters</title>
            <meta name="description" content="forex bot, EA," />
            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400&display=swap" rel="stylesheet" />
        </Head>
        <NavPanel />
        
        {Object.keys(monsterCtx.message).length!=0 && <li onClick={removeMessage} className={monsterCtx.message.type}>{monsterCtx.message.message}</li>}
        {props.children}

        {/* should be below the footer */}
        
        <FMFooter />
    </>
}

export default Layout;