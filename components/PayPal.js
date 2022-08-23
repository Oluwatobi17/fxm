import { useRef, useEffect, useContext } from "react";
import { useRouter } from "next/router";

import { CartCtx } from "../context/CartContext";
import { MonsterCtx } from "../context/MonsterContext";
import { API_ORDER } from "../util/data";

const PayPal = () =>{
    const paypal = useRef();

    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx);

    const router = useRouter();
    useEffect(()=>{
        if(window.paypal?.Buttons.instances.length > 0) return;
        let botsID = cartCtx.cart.map(item => item.id).join();
        let order = {
            user: monsterCtx.user.id,
            bots: botsID,
            total: cartCtx.total,
            couponcode: 'DEFAULT',
            gateway: 'paypal'
        }
        fetch(API_ORDER+`?token=${monsterCtx.user?.token}`, {
            method: 'POST',
            body: JSON.stringify(order),
            headers:{'Content-Type': 'application/json', 'charset': 'utf-8'}
        })
        .then(res => res.json())
        .then(data => {
            order = {...order, id: data.id}
        })
        .catch(err =>{
            monsterCtx.updateMessage({type:'error', message: 'failed to create order'});
        });
        window.paypal?.Buttons({
            createOrder: (data, actions, err) => {
                return actions.order.create({
                    intent: 'CAPTURE',
                    purchase_units: [{
                        description: botsID,
                        amount: {
                            currency_code: 'USD',
                            value: parseFloat(order.total) // Can also reference a variable or function
                        }
                    }]
                });
            },
            onApprove: async (data, actions) => {
                const paypalorder = await actions.order.capture()
                if(!paypalorder.status=='COMPLETED') return monsterCtx.updateMessage({type:'error', message: 'Payment failed, please retry'});
                fetch(`/api/confirmpayment/${order.id}/?token=${monsterCtx.user.token}&amount=${paypalorder.purchase_units[0].amount.value}&transactionid=${paypalorder.id}`)
                .then(res => res.json())
                .then(data => {})
                cartCtx.emptyCart();
                router.push('/dashboard');
            },
            onError: (err) => console.log(err)
        }).render(paypal.current);
    }, []);

    return <div ref={paypal}>

    </div>
}

export default PayPal; 