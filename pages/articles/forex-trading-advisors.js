import Head from "next/head";
import Link from "next/link";

const Advisors = () => {
    return (
        <>
          <main>
            <Head>
                <title>Forex Trading Advisor for MT4</title>
                <meta name="description" content="Free Expert Advisors, Expert Advisors" />
            </Head>
            <section>
                <h1>Forex Markets</h1>
                <div>
                    <p>
                        Forex Markets are capital market that operate five days a week. 
                        The markets are constantly changing, with millions of variables affecting 
                        trading opportunities. Due to hardcore technical analysis or tight routine
                        of the trader, 
                        it can become cumbersome for forex traders to handle the trades themselves.
                         In such case, many traders and investors option for a Forex Expert Advisor.
                    </p>
                </div>
            </section>

            <section>
                <h1>What is an Expert Advisor?</h1>
                <div>
                    <p>
                    An expert advisor is a specially designed software that assists you in the
                     trading process, sometimes by conducting the trades when you are occupied
                      or asleep. An expert advisor takes care of emotional factors like greed 
                      and fear which can prevent you from making intelligent decisions.
                    <br />
                    Trading with an expert advisor makes decision making about trades faster 
                    than humans and getting into the party earlier which increase your chance 
                    of making more pips then profits. 
                    An expert advisor can be programmed using Meta Quotes Language (MQL) which 
                    works on the Meta Trader platform. 
                    </p>
                </div>
            </section>

            <section>
                <h1>How to use a Forex Expert Advisor</h1>
                <div>
                    <p>After downloading then installing an EA, you might need to set it parameters 
                        according to the trading strategies you want it to use. 
                        Using the default or custom parameter(s), the Forex EA analyse different market
                        for trade opportunities and decides whether or not to invest in them.
                    </p>
                    <ol>
                        <li> You either build your own EA yourself or hire a programmer to build 
                            for you or download one built by someone else. Using the signals of 
                            the EA, you can make decisions or choose to act quickly. </li>
                        <li> Before using an EA on a live account, you should always try it on
                            demo account first. In this way, you will be able to confirm and tell
                            if the software suit your trading style and goals. </li>
                    </ol>  
                </div>
            </section>

            <section>
                <h1>Forex Expert Advisor Pros and Cons</h1>
                <div>
                    <p>Pros</p>
                    <ul>
                        <li> An EA Trades without Emotions like Greed and Fear </li>
                        <li> An EA Analyse and Trades faster. </li>
                        <li> An EA Trades 24/7. </li>
                        <li> An EA Can trade multipairs at a time. </li>
                        <li> An EA Makes Hedging of trades easier. </li>
                        <li> An EA Ease Backtesting. </li>
                        <li> An EA Eliminate needs for Expertise of another trader.</li>
                    </ul>  
                </div>

                <div>
                    <p>Cons</p>
                    <ul>
                        <li> An EA does not understand fundamental data. </li>
                        <li> Not all strategies can be coded/programmed. </li>
                        <li> An EA can be subject to technical problems like connectivity issues, 
                            hardware failures, and power outages. </li>
                    </ul>  
                </div>
            </section>
    
            <section>
                <h1>Rules of Using Forex Expert Advisor</h1>
                <div>
                    <p>Things you should do and consider before launching a Forex Expert
                         Advisor on live account: </p>
                    <ol>
                        <li> Pay close attention to backtesting results </li>
                        <li> Ensure EA have a good money and risk management </li>
                        <li> Ensure your trading device internet connection is active and never disturbed </li>
                        <li> Ensure your Metatrader platform is active </li>
                        <li> Ensure you are using the right parameters </li>
                    </ol> 
                </div>
            </section>

            <center>
                <Link href="/market">
					<a className="request-link">Get a bot now</a>
				</Link>
            </center>
          </main>
        </>
    )
}

export default Advisors;