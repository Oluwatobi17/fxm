import { createContext, useState, useEffect } from "react";

export const CartCtx = createContext();

const CartContext = (props) =>{
    const [cart, setCart] = useState([]);
    const [wish, setWish] = useState([]);
    const [total, setTotal] = useState(0);
    const [oldtotal, setOldTotal] = useState(0);

    useEffect(()=>{
        let storeCart = JSON.parse(localStorage.getItem('cart')) || [];
        if(storeCart.length > cart.length ) setCart(storeCart);

        let storeWish = JSON.parse(localStorage.getItem('wish')) || [];
        if(storeWish.length > cart.length ) setWish(storeWish);
    }, []);

    useEffect(()=>{
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(()=>{
        localStorage.setItem('wish', JSON.stringify(wish));
    }, [wish]);

    useEffect(()=>{
        let totalPrice = 0;
        let oldprice = 0;
        for(let i=0; i<cart.length; i++){
            totalPrice += parseFloat(cart[i].price);
            oldprice += parseFloat(cart[i].oldprice);
        }
        setTotal(Math.ceil(totalPrice));
        setOldTotal(Math.ceil(oldprice));
    }, [cart]);
    
    // const isInsideCart = (arr, id)=>{
    //     const index = arr.findIndex(item => item.id === id);
    //     if(index === -1) return false;
    //     else return true;
    // }

    const isInsideList = (arr, id)=>{
        const index = arr.findIndex(item => item.id === id);
        if(index === -1) return false;
        else return true;
    }
    const context = {
        cart,
        wish,
        total,
        oldtotal,
        isInsideCart: (id) => isInsideList(cart, id),
        isInsideWish: (id) => isInsideList(wish, id),
        emptyCart: () => setCart([]),
        addToCart: (data)=>{
            if(!isInsideList(cart, data.id)){
                setCart(prev => [...prev, data]);
            }
        },
        removeFromCart: (id)=>{
            if(isInsideList(cart, id)){
                setCart(prev => prev.filter(item => item.id !== id));
            }
        },
        addToWish: (data)=>{
            if(!isInsideList(wish, data.id)){
                setWish(prev => [...prev, data]);
            }
        },
        removeFromWish: (id)=>{
            if(isInsideList(wish, id)){
                setWish(prev => prev.filter(item => item.id !== id));
            }
        }
    }

    return <CartCtx.Provider value={context}>
        {props.children}
    </CartCtx.Provider>
}

export default CartContext;