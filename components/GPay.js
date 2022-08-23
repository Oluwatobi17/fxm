import { useContext, useState } from "react";
import { useRouter } from "next/router";
import GooglePayButton from "@google-pay/button-react";

import { CartCtx } from "../context/CartContext";
import { MonsterCtx } from "../context/MonsterContext";
import { API_ORDER } from "../util/data";

const GPay = () =>{
    const [continuePayment, setContinuePayment] = useState(false);
    const cartCtx = useContext(CartCtx);
    const monsterCtx = useContext(MonsterCtx);

    const router = useRouter();

    let botsID = cartCtx.cart.map(item => item.id).join();
    let order = {
        user: monsterCtx.user.id,
        bots: botsID,
        total: cartCtx.total,
        couponcode: 'DEFAULT',
        gateway: 'gpay'
    }
    const transactionid = new Date().toString();
    fetch(API_ORDER+`?token=${monsterCtx.user?.token}`, {
        method: 'POST',
        body: JSON.stringify(order),
        headers:{'Content-Type': 'application/json', 'charset': 'utf-8'}
    })
    .then(res => res.json())
    .then(data => {
        order = {...order, id: data.id}
        setContinuePayment(true);
    })
    .catch(err =>{
        monsterCtx.updateMessage({type:'error', message: 'Failed to create order. Please refresh this page'});
    });

    const handleAuthorizedPayment = () =>{
        fetch(`/api/confirmpayment/${order.id}/?token=${monsterCtx.user.token}&amount=${order.total}&transactionid=${transactionid}`)
        .then(res => res.json())
        .then(data => {})
        cartCtx.emptyCart();
        router.push('/dashboard');
    }

    return <>
        {continuePayment &&
            <GooglePayButton
                environment="TEST"
                paymentRequest={{
                    apiVersion: 2,
                    apiVersionMinor: 0,
                    allowedPaymentMethods: [
                    {
                        type: 'CARD',
                        parameters: {
                        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                        allowedCardNetworks: ['MASTERCARD', 'VISA'],
                        },
                        tokenizationSpecification: {
                        type: 'PAYMENT_GATEWAY',
                        parameters: {
                            gateway: 'example',
                            gatewayMerchantId: 'exampleGatewayMerchantId',
                        },
                        },
                    },
                    ],
                    merchantInfo: {
                    merchantId: '12345678901234567890',
                    merchantName: 'Demo Merchant',
                    },
                    transactionInfo: {
                    totalPriceStatus: 'FINAL',
                    totalPriceLabel: 'Total',
                    totalPrice: cartCtx.total.toString(),
                    currencyCode: 'USD',
                    countryCode: 'US',
                    },
                    callbackIntents: ['PAYMENT_AUTHORIZATION']
                }}
                onLoadPaymentData={paymentRequest => {
                    console.log('load payment data', paymentRequest);
                }}
                onPaymentAuthorized={paymentData => handleAuthorizedPayment()}
            />
        }
    </>
}

export default GPay;