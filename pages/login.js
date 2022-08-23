import { useState, useRef, useContext } from "react";
import Head from 'next/head';

import { MonsterCtx } from '../context/MonsterContext';
import { useRouter } from "next/router";
import { API_LOGIN} from '../util/data';

const Login = () => {
    const [isPassword, setIsPassword] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const usernameRef = useRef();
    const passwordRef = useRef();
    const monterCtx = useContext(MonsterCtx);
    const router = useRouter();

    let passFieldClass =  isPassword ? "fa-eye-slash" : "fa-eye";
    passFieldClass = "fa " + passFieldClass;

    const toggleShowPassword = () => setIsPassword(prev => !prev);

    const handleLogin = (e) =>{
        e.preventDefault();
        setIsSending(true);
        const enteredUsername = usernameRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();
        if(!enteredPassword || !enteredUsername)
            return monterCtx.updateMessage({type:'error', message: 'All fields are required'});
           
        //connect to api
        const userdata = {
            username: enteredUsername,
            password: enteredPassword
        }
        fetch(API_LOGIN, {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers:{'Content-Type': 'application/json', 'charset': 'utf-8'}
        })
        .then(res => res.json())
        .then(data => {
            if(data?.token){
                monterCtx.updateUser(data);
                router.replace('/dashboard');
            }else{
                monterCtx.updateMessage({type:'error', message: data?.message})
            }
        })
        .catch(err => monterCtx.updateMessage({type:'error', message: err}));
        setIsSending(false);
    }

    return <main>
        <Head>
            <title>FxMonsters | Welcome Back</title>
            <meta name="description" content="Free Expert Advisors, Expert Advisors, FxMonsters Login" />
        </Head>
        <center>
            <form className="account-form" onSubmit={handleLogin}>
                <h2>Welcome Back</h2>
                <div className="searchpanel">
                    <input type='text' placeholder='Enter your Username' ref={usernameRef} required />
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
                <div className="searchpanel">
                    <input type={isPassword?'password':'text'} ref={passwordRef} required placeholder='Enter your Password' />
                    <i className={passFieldClass} aria-hidden="true" onClick={toggleShowPassword}></i>
                </div>

                <input type='submit' value={isSending? 'Sending' : 'Login'}/>
            </form>
        </center>
    </main>
}

export default Login;