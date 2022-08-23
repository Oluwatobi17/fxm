import Link from 'next/link';

const Banner = () =>{
    return <div className="banner-container">
        <div>
            <h1>Dedicating your Trades <br /> to capable hands </h1>

            <p>Fine trading strategies with high win rate 
                <br /> combined with hedging strategy to never loss any trade</p>

            <p>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                <i className="fa fa-star" aria-hidden="true"></i>
                Only a bot is capable 
                <br/>
                <span>of 99% win rate with hedging of trades</span>
            </p>

            <Link href="/articles/forex-trading-advisors">
                <a className="request-link">Trader Guild To Earn</a>
            </Link>
        </div>

        <div className="banner-slide">
            <img src="/headerpic.png" width="100%" alt="headerpic" />
        </div>
    </div>
}

export default Banner;