import Link from 'next/link';

import Banner from '../components/Banner';
import IntroCard from '../components/IntroCard';
import ReasonCard from '../components/ReasonCard';
import { introcard, reasons, questions } from '../util/data';

export default function Home() {
  return (
    <>
      <Banner />
	  <main>
		<section>
			<center>
				<h1>Hedging Strategy in the hands of FxMonsters </h1>
				<div className='card-container'>
					{introcard.map(data => <IntroCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
				</div>
				<Link href="/market">
					<a className="request-link" target="_blank">Get a bot now</a>
				</Link>
			</center>
		</section>

		<section>
			<center>
				<h1>Why Choose FxMonsters?</h1>
				<div className='card-container'>
					{reasons.map(data => <ReasonCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
				</div>
				<Link href="/signup">
					<a className="transparent-link">Get Started <i className="fa fa-arrow-right" aria-hidden="true"></i></a>
				</Link>
			</center>
		</section>

		{/* <section>
			<center>
				<h1>Frequently Asked Questions</h1>
				<div className='card-container'>
					{questions.map(data => <IntroCard key={data.title} img={data.img} title={data.title} story={data.story} />)}
				</div>
				<Link href="/market">
					<a className="request-link">Shop a bot</a>
				</Link>
			</center>
		</section> */}
	  </main>
	</>
  )
}
