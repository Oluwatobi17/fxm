import { useContext, useRef, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MonsterCtx } from "../context/MonsterContext";
import Rating from "./Rating";
import CartAction from "./CartAction";
import { API_RATE_BOT } from "../util/data";
//import Modal from "./Modal";
//import RateBot from "./RateBot";

const BotInfo = ({bot}) =>{
    //const [rateMe, setRateMe] = useState(true);
    const [pairs, setPairs] = useState([]);
    const [botrate, setBotRate] = useState(5);
    const monterCtx = useContext(MonsterCtx);
    const rateRef = useRef();
    const rateButRef = useRef();
    const date = new Date(bot?.date).toDateString();

    const { id } = useRouter().query;
 
    useEffect(()=>{
        if(Object.values(bot).length!=0) setPairs( bot?.strongPairs.split(',') );
    }, [bot?.strongPairs]);

    useEffect(()=>{
        let rates = bot.ratings.split(',');
        let ave = 0;
        for(let i=0; i<rates.length; i++){
            ave += parseFloat(rates[i]);
        }
        let res = parseFloat( (ave/rates.length).toFixed(1) );
        setBotRate(res);
    }, []);

    const handleBotRating = () =>{
        const ratebtn = document.querySelector('.rate-me');
        if(ratebtn.classList.contains('unactive')) return; 
        ratebtn.classList.add('unactive');
        ratebtn.textContent += 'd';

        fetch(API_RATE_BOT+id+`?rate=${rateRef.current.value}&token=${monterCtx.user?.token}`)
        .then(res => {})
    }

    return <section className="bot-info">
        {/* {rateMe && <Modal closeModal={()=>setRateMe(false)}> <RateBot/> </Modal>} */}
        <div>
            <img src={bot?.img} alt="Bot Cover Image" />
        </div>

        <div>
            <h2>{bot?.name}</h2>
            {bot?.price!=0 ?
                <div>
                    <h3 className="botprice" title="Discounted Price">${bot?.price}
                        &nbsp;
                        <span className="oldprice" title="Original Price">${bot?.oldprice}</span>
                    </h3>
                </div> :

                <p> <b>Free</b> </p>
            }

            <Rating rate={botrate}/>

            {/* Only show to user that have bought or access it */}
            &nbsp;
            {monterCtx.user?.token && monterCtx.user?.ratedbots.indexOf(bot?.id)==-1 && 
                <select ref={rateRef}>
                    <option value={5}>5</option>
                    <option value={4}>4</option>
                    <option value={3}>3</option>
                    <option value={2}>2</option>
                    <option value={1}>1</option>
                </select>
            }
            {monterCtx.user?.token && monterCtx.user?.ratedbots.indexOf(bot?.id)==-1 && <a className="rate-me" ref={rateButRef} onClick={handleBotRating}>Rate</a>}

            {/* {monterCtx.user?.token && monterCtx.user?.ratedbots.indexOf(bot?.id)!=-1 && <span>Rated</span>} */}
           
            <div className="moreinfo">
                <p>STRONG PAIR{pairs.length>1 && 'S'}: {pairs.map(pair => pair + ' ')}</p>
                <p>YIELD (%): {bot?.yield_percent}%</p>
                {bot?.lovedBy.split(',').length>0 && 
                    <p>LOVED BY: {bot?.lovedBy.split(',').length} Trader{bot?.lovedBy.split(',').length>1 && 's'}</p>}
            </div>

            <div className="moreinfo">
                <p>PUBLISHED: { date.toLocaleString() }</p>
            </div>

            <div className="moreinfo">
                <p>{bot?.strategy} {bot?.hedged}</p>
            </div>

            {bot?.hedged && <span className='hedged' title="This bot uses hedging strategy">Hedged</span>}
            
            <div className="moreinfo">
                <CartAction data={bot} />
            </div>
        </div>
    </section>
}

BotInfo.defaultProps = {
    bot: {
        strategy: '', 
        download: '', 
        note: '', 
        botid: null, 
        botprice: 0
    },
}

export default BotInfo;