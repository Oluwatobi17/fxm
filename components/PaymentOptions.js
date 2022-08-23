const PaymentOptions = ({ paymentOption }) =>{
    const handlePaymentSelection = (e) =>{
        paymentOption(e.target.value);
    }

    return <div className="paymentoptions">
        <p>Proceed With: </p>
        <input type='radio' name="paymentoption" value='paypal' defaultChecked onChange={handlePaymentSelection} />
        <img src="/paypal.png" alt="paypal" />

        {/* <input type='radio' name="paymentoption" value='gpay' onChange={handlePaymentSelection} />
        <img src="/googlepay.png" alt="googlepay" /> */}

        {/* <input type='radio' name="paymentoption" value='payoneer' onChange={handlePaymentSelection} />
        <img src="/payoneer.png" alt="payoneer" /> */}
    </div>
}

export default PaymentOptions;