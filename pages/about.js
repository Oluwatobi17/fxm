import Head from 'next/head';
import Link from 'next/link';

import IntroCard from '../components/IntroCard';
import ReasonCard from '../components/ReasonCard';
import { introcard, reasons, questions } from '../util/data';

const About = () =>{
  return (
    <>
	  <main>
		<Head>
			<title>How We Serve You | FxMonsters</title>
			<meta name="description" content="Free Expert Advisors, Expert Advisors" />
		</Head>
        <section name="aboutus">
			<center>
				<h1>What is FxMonsters? </h1>
				<div className='card-container'>
					<p>
                        <b>FxMonsters</b> is a market place perfect for all forex traders or entrepreneurs who 
                        want to trade the 24/5 market by automation. And most importantly ensure all trades 
                        are hedged for more certain profits.
                    </p>
				</div>
			</center>
        </section>

        <section>
            <center>
                <h1>What you get</h1>
                <div className='card-container'>
                    {introcard.map(data => <IntroCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
                </div>
                <Link href="/signup">
					<a className="transparent-link">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				</Link>
            </center>
        </section>

		<section>
			<center>
				<h1>Why Choose FxMonsters?</h1>
				<div className='card-container'>
					{reasons.map(data => <ReasonCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
				</div>
                <Link href="/market">
                    <a className="request-link">Get a bot now</a>
                </Link>
			</center>
		</section>

		<section name="faqs">
			<center>
				<h1>Frequently Asked Questions</h1>
				<div className='card-container'>
					{questions.map(data => <ReasonCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
				</div>
				<Link href="/market">
					<a className="request-link">Try a free bot</a>
				</Link>
			</center>
		</section>
	  </main>
	</>
  )
}

export default About;