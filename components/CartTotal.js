const CartTotal = ({total, originalTotal}) =>{
    const discount = originalTotal - total;
    let save = (total/originalTotal) * 100;
    save = 100 - parseInt(save);
    return <div className="cart-total">
        {total>0 && <>
            <h4>Save {save}%: ${discount}</h4>
            <h3>Total: ${total} <span>${originalTotal}</span></h3>
        </>
        }
        {/* {discount > 0 && <h3>Discount: ${discount}</h3>} */}
    </div>
}

export default CartTotal;
