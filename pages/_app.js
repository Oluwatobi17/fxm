import '../styles/globals.css'
import Layout from '../components/Layout';
import CartContext from '../context/CartContext';
import MonsterContext from '../context/MonsterContext';

function MyApp({ Component, pageProps }) {
	return <MonsterContext>
		<CartContext>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</CartContext>
	</MonsterContext>
}

export default MyApp
