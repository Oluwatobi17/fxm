import Link from "next/link";
import { useContext } from "react";

import { CartCtx } from "../context/CartContext";

const CartTable = () =>{
    const cartCtx = useContext(CartCtx);

    const removeFromCart = (id) => cartCtx.removeFromCart(id);

    return <>
        <table className="cart-table">
        
        <thead>
            <tr>
                <th>Bot(s)</th>
                <th>Price(USD)</th>
                <th>Yield</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {cartCtx.cart.map(bot => (
                <tr key={bot?.id}>
                    <td className="bot-td">
                        <img src={bot?.img} alt={bot?.name} />
                        {/* <span>{bot?.name}</span> */}
                        <Link href={`/market/${bot?.id}`}>
                            <a>{bot?.name}</a>
                        </Link>
                    </td>
                    <td>{bot?.price} <span className="oldprice">{bot?.oldprice}</span></td>
                    <td>{bot?.yield_percent}%</td>
                    <td><i className="fa fa-times" aria-hidden="true" title="Remove from Cart" onClick={()=>removeFromCart(bot?.id)}></i></td>
                </tr>
            ))}
        </tbody>
    </table>
    {cartCtx.cart.length==0 && <>
        <br />
        Currently no bot in your shopping cart
        <br/>
        <Link href={'/market'}>
            <a>Shop Now</a>
        </Link>
        </>}
    </>
}

export default CartTable;