import { useContext, useRef, useState } from 'react';
import Head from 'next/head';

import { MonsterCtx } from '../context/MonsterContext';

const Hire = () =>{
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const emailRef = useRef();
    const usernameRef = useRef();
    const budgetRef = useRef();
    const messageRef = useRef();

    const monsterCtx = useContext(MonsterCtx);

    const handleSendRequest = (e) => {
        e.preventDefault();
        setSending(true);
        const enteredEmail = emailRef.current.value;
        const enteredUsername = usernameRef.current.value;
        const enteredBudget = budgetRef.current.value;
        const enteredMessage = messageRef.current.value;

        if(!enteredEmail || !enteredBudget || !enteredUsername || !enteredMessage)
            return monsterCtx.updateMessage({type:'error', message: 'All fields are required'});
        
        fetch('https://fxmonster-c015a-default-rtdb.firebaseio.com/hire.json', {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                name: enteredUsername,
                budget: enteredBudget,
                message: enteredMessage,
                attendedto: false,
                date: new Date().toString()
            })
        })
        .then(res => res.json())
        .then(res => {
            monsterCtx.updateMessage({type: 'success', message: 'Message sent! We will get in touch through the email provided.'});
            setSending(false);
            setSent(true);
            emailRef.current.value = "";
            usernameRef.current.value = "";
            budgetRef.current.value = "";
            document.getElementById('message').value = "";
        })
        .catch(e => {
            monsterCtx.updateMessage({type: 'error', message: 'Error sending message'})
            setSending(false);
        });
    }
  return (
    <>
	  <main>
        <Head>
            <title>Hire A Developer To Automate Your Strategy | FxMonsters</title>
            <meta name="description" content="Free Expert Advisors, Expert Advisors" />
        </Head>
        <section>
            <h1>Lets code your strategy </h1>
            <div>
                <p>
                    Our technical team can help you convert your profitable forex strategy
                        into a clean coded Expert Advisor (EA) in MetaTrader 4
                </p>
            </div>
        </section>

        <section>
            <h1>Benefits Of Working With Our Team</h1>
            <div>
                <ul>
                    <li> 100% Clean Code </li>
                    <li> 100% Customer Service </li>
                    <li> We Provide Source Code </li>
                    <li> Backtesting Support </li>
                    <li> Unlimited Revisions </li>
                    <li> All Budget-wise </li>
                </ul> 
            </div>
        </section>

		<section>
            <h1>Requirements to get started</h1>
            <div>
                <p>A document(doc, docx, pdf, txt) stating:</p>
                <ol>
                    <li> Conditions to select trades </li>
                    <li> Entry of the trade </li>
                    <li> Stop loss decision making </li>
                    <li> Target decision making </li>
                    <li> Risk management plan </li>
                    <li> Money management plan </li>
                    <li> Latest 2 long example of trades from the strategy and 2 short example of trades from the strategy. </li>
                </ol> 
                <p>
                    <b>Important Note!</b> Not all conditions/entry of strategy are possible for coding.
                     Please get in touch with us stating brief description of the strategy you want to automate
                     before you submit the details.
                </p>   
            </div>
		</section>

		<section name="hireus">
			<center>
				<h1>Get in touch</h1>
                   
				<div className='card-container'>
                    <center>
                        <form className="account-form" onSubmit={handleSendRequest}>
                            <div className="searchpanel">
                                <input type='email' placeholder='Enter your Email' ref={emailRef} required />
                                {/* <i className="fa fa-envelope-o" aria-hidden="true"></i> */}
                            </div>

                            <div className="searchpanel">
                                <input type='text' placeholder='Enter your Name' ref={usernameRef} required />
                                {/* <i className="fa fa-user-circle-o" aria-hidden="true"></i> */}
                            </div>
                            <div className="searchpanel">
                                <input type='text' placeholder='Enter your Budget' ref={budgetRef} required />
                                {/* <i className="fa fa-money" aria-hidden="true"></i> */}
                            </div>
                            <div className="searchpanel">
                                <textarea placeholder='Describe your strategy' id='message' ref={messageRef} rows={8}></textarea>
                            </div>

                            <input type='submit' disabled={sending} value={sending?'Sending...':'Send Request'}/>
                            {sent && <p>Message Sent</p>}
                        </form>
                    </center>
                </div>
			</center>
		</section>
	  </main>
	</>
  )
}

export default Hire;