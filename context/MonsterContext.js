import { createContext, useState, useEffect } from "react";

export const MonsterCtx = createContext();

const MonsterContext = (props) =>{
    const [message, setMessage] = useState({});
    const [user, setUser] = useState({});
    const [userIsLoaded, setUserIsLoader] = useState(false); //to ensure the useEffect run once
    const [token, setToken] = useState('');

    useEffect(()=>{
        if(!userIsLoaded){
            let storedUser = JSON.parse(localStorage.getItem('user'));
            setUser(storedUser);
            setUserIsLoader(true);
        }
    }, []);

    useEffect(()=>{
        if(userIsLoaded) localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    useEffect(()=>{
        let sendMessage = setTimeout(()=> setMessage({}), 5000);
        clearTimeout(sendMessage);
    }, [message]);

    const context = {
        user,
        updateUser: (newdata) => setUser(newdata),
        token,
        message,
        updateToken: (newtoken)=> setToken(newtoken),
        updateMessage: (message)=> setMessage(message)
    }

    return <MonsterCtx.Provider value={context}>
        {props.children}
    </MonsterCtx.Provider>
}

export default MonsterContext;