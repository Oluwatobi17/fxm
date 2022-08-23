import { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import { useRouter } from "next/router";

import CartTable from '../components/CartTable';
import CartTotal from '../components/CartTotal';
import PaymentOptions from '../components/PaymentOptions';
import PayPal from '../components/PayPal';
import GPay from '../components/GPay';
import { CartCtx } from "../context/CartContext";
import { MonsterCtx } from "../context/MonsterContext";

const Cart = () =>{
    const [gateway, setGateway] = useState('paypal');
    const [proceed, setProceed] = useState(false);
    const [disableCheckout, setDisableCheckout] = useState(false);
    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx)
    const [total, setTotal] = useState(cartCtx.total);
    const [oldtotal, setOldTotal] = useState(cartCtx.oldtotal);
    // Test client id
    const client_id = 'ARC8ZO0p2qKr82zepADfFA9DW-sno9kKbswRzV6NTb3xhE_YI8jnQpfn7LdtitxZddPS_qX1iL1SRyB5';
    const router = useRouter();

    useEffect(()=>{
        setTotal(cartCtx.total);
        setOldTotal(cartCtx.oldtotal);
    }, [cartCtx.total, cartCtx.oldtotal]);

    const handlePaymentOption = (option) =>{
        setGateway(option);
    }

    const handleProceedToCheckout= (e) =>{
        if(monsterCtx.user?.token){
            setDisableCheckout(true);
            setProceed(true);
        }else{
            monsterCtx.updateMessage({type:'error', message: 'Ensure you are logged in or Sign up'});
            router.push('/login');
        }
    }

    return <main>
        <Head>
            <title>Shopping for the best Expert Advisors | FxMonsters</title>
        </Head>
            
        <h1>Your Cart</h1>

        <Link href={'/market'}>
            <a> <i className="fa fa-angle-double-left" aria-hidden="true"></i> Back to Market</a>
        </Link>

        <CartTable />

        <CartTotal originalTotal={oldtotal} total={total} />

        {total>0 && <>
            <PaymentOptions paymentOption={handlePaymentOption} />

            <center>
                {gateway=='paypal' && proceed && <PayPal />}
                {gateway=='gpay' && proceed && <GPay />}
            </center>
        </>
        }

        {total>0 && 
            <center>
                <Link href='/checkout'>
                    <a className="request-link" onClick={(e)=>{
                        e.preventDefault();
                        !disableCheckout ? handleProceedToCheckout(): {} }
                        }><i className="fa fa-lock" aria-hidden="true"></i> PROCEED TO CHECKOUT</a>
                </Link>
            </center>
        }
        <Script src={`https://www.paypal.com/sdk/js?client-id=${client_id}&currency=USD`}></Script>
    </main>
}

export default Cart;