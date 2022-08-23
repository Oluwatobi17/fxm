import { useState, useRef, useContext, useLayoutEffect, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Link from "next/link";

import { MonsterCtx } from "../context/MonsterContext";
import { API_ACCOUNT_DETAILS, API_MYBOTS, API_CHANGEPASSWORD } from "../util/data";
import BoughtBotCard from "../components/BoughtBotCard";
import NavLink from "../components/NavLink";
import LoadingSpinner from "../components/LoadingSpinner";

const Dashboard = () =>{
    const [isPassword, setIsPassword] = useState(true);
    const [boughtbots, setBoughtbots] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const passwordRef = useRef();
    const password2Ref = useRef();
    const router = useRouter();
    const monterCtx = useContext(MonsterCtx);
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    useLayoutEffect(()=>{
        if(!isAuthenticated) router.replace('/login');
    }, [isAuthenticated]);

    let passFieldClass =  isPassword ? "fa-eye-slash" : "fa-eye";
    passFieldClass = "fa " + passFieldClass;

    useEffect(()=>{
        if(monterCtx.user?.token){
            fetch(API_ACCOUNT_DETAILS+`?token=${monterCtx.user?.token}`)
            .then(res => res.json())
            .then(data => {
                monterCtx.updateUser({...monterCtx.user, ...data});
            })
            .catch(err => monterCtx.updateMessage({type:'error', message: 'Unable to load your details. Kindly refresh this page'}));
        }
    }, []);

    useEffect(()=>{
        if(monterCtx.user?.token){
            setIsLoading(true)
            fetch(API_MYBOTS+`?token=${monterCtx.user?.token}`)
            .then(res => res.json())
            .then(data => {
                setBoughtbots(data);
                setIsLoading(false);
            })
            .catch(err => monterCtx.updateMessage({type:'error', message: 'Unable to load your details. Kindly refresh this page'}));
        }
    }, [monterCtx.user]);

    const handleLogout = (e) =>{
        e.preventDefault();
        monterCtx.updateUser({});
        setIsAuthenticated(false);
        router.replace('/login');
    }

    const handleChangePassword = (e) =>{
        e.preventDefault();
        const oldpasswordRef = passwordRef.current.value;
        const newpasswordRef = password2Ref.current.value;
        if(oldpasswordRef.trim()=='' || newpasswordRef.trim()=='')
            return monterCtx.updateMessage({type:'error', message: 'All fields must be filled'});
        
        fetch(API_CHANGEPASSWORD+`?token=${monterCtx.user?.token}`, {
            method: 'POST',
            body: JSON.stringify({
                old_password: oldpasswordRef,
                new_password: newpasswordRef
            }),
            headers:{'Content-Type': 'application/json', 'charset': 'utf-8'}
        })
        .then(res => res.json())
        .then(data => {
            let errType = 'error';
            if(data.message=='Password updated successfully') errType='success';
            monterCtx.updateMessage({type: errType, message: data.message});
            passwordRef.current.value = '';
            password2Ref.current.value = '';
        })
        .catch(err => monterCtx.updateMessage({type:'error', message: 'Unable to load your details. Kindly refresh this page'}));

    }
    return <main className="ashbg">
        <div className="dashboard">
            <Head>
                <title>Welcome Back Dashboard | FxMonsters</title>
            </Head>
            <div className="personal">
                <div className="personal-card">
                    <i className="fa fa-user" aria-hidden="true" title="My Account"></i>
                    <h3>{monterCtx.user?.username}</h3>
                    <span>{monterCtx.user?.email}</span>

                    <div className="personal-card-base">
                        <NavLink href="/logout" className="transparent-link" onClick={handleLogout}>Logout</NavLink>
                    </div>
                </div>

                <div className="personal-card">
                    {/* <i className="fa fa-money" aria-hidden="true" title="My Account"></i> */}
                    
                    <form className="account-form" onSubmit={handleChangePassword}>
                        <h4>Change Password</h4>
                        <div className="searchpanel">
                            <input type={isPassword?'password':'text'} ref={passwordRef} required placeholder='Enter Current Password' />
                        </div>
                        <div className="searchpanel">
                            <input type={isPassword?'password':'text'} ref={password2Ref} required placeholder='Choose a Password' />
                        </div>

                        <input type='submit' value='Change Password'/>
                    </form>
                </div>
            </div>

            <div className="boughtbots-container">
                <div>
                    &nbsp;
                    <Link href={'/market'}>
                        <a> <i className="fa fa-angle-double-left" aria-hidden="true"></i> Go to Market</a>
                    </Link>
                </div>
                <h2>My Bots ({boughtbots.length})</h2>
                <div className="boughtbots">
                    {boughtbots.map(bot =><BoughtBotCard data={bot} key={bot.id} /> )}
                    {boughtbots.length==0 && !isLoading && <p>You do not have any premium bot yet.
                        <Link href='/market'>
                            <a> Get a Premium Bot Now</a>
                        </Link>
                        </p>}
                    {isLoading && <p>Loading...</p>}
                </div>
            </div>
        </div>
    </main>
}

export default Dashboard;