import { useContext } from "react";
import Image from "next/image";

import NavLink from "./NavLink";
import { MonsterCtx } from "../context/MonsterContext";
import Link from "next/link";

const FMFooter = () =>{
    const monsterCtx = useContext(MonsterCtx);
    const activeToken = monsterCtx.token;

    return <footer>
        <div className="footer-faq">
            <div>
                <NavLink href="/" exact className="logo">
                    <Image src="/logo.png" width={35} height={35} alt="FxMonster icon" />

                    <h1 className="nav-title">
                        <span className="special">Fx</span>Monsters
                    </h1>
                </NavLink>
                <p>
                    <b>FxMonsters</b> is a market place perfect for all forex traders or entrepreneurs who 
                    want to trade the 24/5 market by automation. And most importantly ensure all trades 
                    are hedged for more certain profits.
                </p>
            </div>

            <div>
                <br />
                <NavLink href="/" exact className="white">HOME</NavLink>
                <NavLink href="/market">MARKETS</NavLink>
                <NavLink href="/hire">HIRE</NavLink>
                {activeToken.length<7 && <NavLink href="/signup">TRY A FREE DEMO</NavLink>}
            </div>

            <div>
                <br />
                <NavLink href="/articles/forex-trading-advisors" exact className="white">TRADER GUILD</NavLink>
                <NavLink href="/hire" exact className="white">CODE MY STRATEGY</NavLink>
                <NavLink href="/hire#hireus">MODIFY MY BOT</NavLink>
                <NavLink href="/support">SUPPORT</NavLink>
                <NavLink href="/about#aboutus">ABOUT US</NavLink>
                <NavLink href="/about#faqs">FAQs</NavLink>
            </div>
        </div>

        <div className="risk-warning">
            <p>
                <b>Risk Warning:</b> You will be trading with hedge but Trading Derivatives
                 carries a high level of risk to your
                 capital and you should only trade with money you can afford to lose. 
                 Trading Derivatives may not be suitable for all investors, so please ensure
                  that you fully understand the risks involved and seek independent advice if
                   necessary.
            </p>
            <p>
                All services and products accessible through the site 
                 <Link href="/market">
                    <a target="_blank"> https://fxmonsters.vercel.app/market</a>    
                </Link> are provided by FXMONSTERS Markets Limited.
            </p>
            <p>&copy; 2022 FxMonsters | All rights reserved.</p>
        </div>
    </footer>
}

export default FMFooter;