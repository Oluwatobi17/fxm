import { useRef, useContext, useState } from 'react';
import Head from 'next/head';

import { MonsterCtx } from '../context/MonsterContext';

const Support = () =>{
    const [isLoading, setIsLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const emailRef = useRef();
    const nameRef = useRef();
    const messageRef = useRef();

    const monsterCtx = useContext(MonsterCtx);

    const handleSendRequest = (e) => {
        e.preventDefault();
        const enteredEmail = emailRef.current.value;
        const enteredname = nameRef.current.value;
        const enteredMessage = messageRef.current.value;

        if(!enteredEmail || !enteredname || !enteredMessage)
            return monsterCtx.updateMessage({type:'error', message: 'All fields are required'});
        
        setIsLoading(true);
        const message = {
            name: enteredname,
            email: enteredEmail,
            message: enteredMessage,
            attendedto: false,
            date: new Date().toString()
        }
        fetch('https://fxmonster-c015a-default-rtdb.firebaseio.com/complains.json', {
            method: 'POST',
            body: JSON.stringify(message)
        })
        .then(res => res.json())
        .then(res => {
            monsterCtx.updateMessage({type: 'success', message: 'Message sent! We will get in touch through the email provided.'});
            setIsLoading(false);
            setSent(true);
            emailRef.current.value = "";
            nameRef.current.value = "";
            document.getElementById('message').value = "";
        })
        .catch(e => {
            monsterCtx.updateMessage({type: 'error', message: 'Error sending message'})
            setIsLoading(false);
        });
    }
  return (
    <>
	  <main>
		<Head>
			<title>Contact Us | FxMonsters</title>
			<meta name="description" content="FxMonsters support" />
		</Head>
        <section>
			<center>
				<h4>Have a complain or require specialist assistance?</h4>
				<p>Our dedicated customer service team is here 24/7 to assist you.</p>
                <br />
				<div className='card-container' style={{justifyContent: 'space-evenly'}}>
                    {/* <div style={{marginRight: '10px'}}>
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p>Call Us</p>
                        <p>Hot Number</p>
                    </div> */}

                    <div>
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <p>Email Inquires</p>
                        <p>dac.bot.2021@gmail.com</p>
                    </div>
				</div>
			</center>
        </section>

		<section>
            <center>
                <h1>Send Us a Message</h1>
                <form className="account-form" onSubmit={handleSendRequest}>
                    <div className="searchpanel">
                        <input type='email' placeholder='Enter your Email' ref={emailRef} required />
                    </div>

                    <div className="searchpanel">
                        <input type='text' placeholder='Enter your full name' ref={nameRef} required />
                    </div>
                    <div className="searchpanel">
                        <textarea placeholder='Write your message' id='message' ref={messageRef} rows={8}></textarea>
                    </div>

                    <input type='submit' disabled={isLoading?true:false} value={isLoading?'Sending':'Send Message'}/>
                    {sent && <p>Message Sent</p>}
                </form>
            </center>
		</section>
	  </main>
	</>
  )
}

export default Support;