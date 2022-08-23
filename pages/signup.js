import { useState, useRef, useContext } from "react";
import { useRouter } from "next/router";
import Head from 'next/head'

import { MonsterCtx } from '../context/MonsterContext';
import { API_SIGNUP } from '../util/data';

const Signup = () => {
    const [isPassword, setIsPassword] = useState(true);
    const [isSending, setIsSending] = useState(false);
    const emailRef = useRef();
    const usernameRef = useRef();
    const passwordRef = useRef();
    const monterCtx = useContext(MonsterCtx);
    const router = useRouter();

    let passFieldClass =  isPassword ? "fa-eye-slash" : "fa-eye";
    passFieldClass = "fa " + passFieldClass;

    const toggleShowPassword = () => setIsPassword(prev => !prev);

    const handleSignup = (e) =>{
        e.preventDefault();
        setIsSending(true)
        const enteredEmail = emailRef.current.value.trim();
        const enteredUsername = usernameRef.current.value.trim();
        const enteredPassword = passwordRef.current.value.trim();
        if(!enteredEmail || !enteredPassword || !enteredUsername)
            return monterCtx.updateMessage({type:'error', message: 'All fields are required'});
           
        if(enteredPassword.length<8)
            return monterCtx.updateMessage({type:'error', message: 'Password must be longer than 8 characters'});
        
        let data = {
            email: enteredEmail,
            username: enteredUsername,
            password: enteredPassword
        }
        fetch(API_SIGNUP, {
            method: 'POST',
            body: JSON.stringify(data),
            headers:{'Content-Type': 'application/json', 'charset': 'utf-8'}
        })
        .then(res => res.json())
        .then(data => {
            monterCtx.updateUser(data);
            router.replace('/dashboard');
        })
        .catch(err => console.log(err));
        setIsSending(false)
        
    }

    return <main>
        <Head>
            <title>Create A Free FxMonsters Account | FxMonsters</title>
            <meta name="description" content="Free Expert Advisors, Expert Advisors, create FxMonsters Account" />
        </Head>
        <center>
            <form className="account-form" onSubmit={handleSignup}>
                <h2>Create An Account</h2>
                <div className="searchpanel">
                    <input type='email' placeholder='Enter your Email' ref={emailRef} required />
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </div>

                <div className="searchpanel">
                    <input type='text' placeholder='Enter your Username' ref={usernameRef} required />
                    <i className="fa fa-user-circle-o" aria-hidden="true"></i>
                </div>
                <div className="searchpanel">
                    <input type={isPassword?'password':'text'} ref={passwordRef} required placeholder='Choose a Password' />
                    <i className={passFieldClass} aria-hidden="true" onClick={toggleShowPassword}></i>
                </div>

                <input type='submit' value={isSending? 'Loading...':'Sign Up'}/>
            </form>
        </center>
    </main>
}

export default Signup;