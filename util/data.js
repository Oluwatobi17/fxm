export const API_HOST = 'https://fxmonsters.herokuapp.com/api/';
// export const API_HOST = 'http://localhost:8000/api/';
export const API_MARKETS = API_HOST;
export const API_BOT_DETAIL = API_HOST+'bot/';
export const API_RATE_BOT = API_HOST+'bot/rate/';
export const API_DOWNLOAD_BOT = API_HOST+'download/';
export const API_LOVE_BOT = API_HOST+'lovebot/';
export const API_SIGNUP = API_HOST+'auth/create';
export const API_LOGIN = API_HOST+'auth/login';
export const API_ACCOUNT_DETAILS = API_HOST+'account';
export const API_MYBOTS = API_HOST+'account/mybots';
export const API_CHANGEPASSWORD = API_HOST+'account/updatepassword';
export const API_ORDER = API_HOST+'order';
export const API_BOT_IMPRESSION = API_HOST+'bot/impression/';

const introcard = [
    {title: 'Get a free bot', img: '/free.png', story: 'Run our free bots on demo account for test and safety to confirm if you can trust our bots' },
    {title: 'Premium bot', img: '/paid.png', story: 'Shop and own a premium bot that match your budget. Boom! Manual trading routine taken care of nicely as you watch Netflix' },
    {title: 'Code your strategy', img: '/cleancode.png', story: 'We can help you code your trading strategy into a fully automated Expert Advisor if that makes you feel more safe' },
]
const reasons = [
    {title: 'Trade the market with hedging advantange', img: '/hedge.png', story: 'Our hedging bots are equiped to withstand losing days of the strategies by hedging. While you can request removal of the hedging part at no cost' },
    {title: 'Good Customer Support', img: '/customer.png', story: 'We respond super fast to queries and any sort of issues' },
    {title: 'Take volatility as advantage', img: '/volatiliy.png', story: 'Volatility becomes one of the reasons you make money, you profit from volatility of market by getting into the trading party early' },
    {title: 'We Develop Clean Coded Bot', img: '/cleancode.png', story: 'Manual trading can be cumbersome and can become delicate when it comes to hedging and that is why we invest great time developing a clean coded bot' },
    {title: 'We Have Your Interest In Mind', img: '/update.png', story: 'We understand you want and need financial freedom with free time, which makes us one since that is our aim and objective. So, we ensure maintainance are done regularly' },
    {title: 'We are 100% safe', img: '/safety.png', story: 'All our premium bots have guarantee and you will have success story as you acquire our premium bots. Just ensure you follow the instructions for the bot purchased and use accordingly' },
]
const questions = [
    {title: 'Is Human Interaction needed', img: '/human.png', story: 'No, once the bot is running you have to keep it uninterrupted especially when trades are still open because hedging might continue' },
    {title: 'Difference between Hedging bot and normal bot', img: '/finance.png', story: 'Hedging bot needs large account size like $200,000 or more for survival and must be applied to one pair at a time. Normal bots can be applied to low or average account size and can be used with other bots on a single account for more profits' },
    {title: 'Can an account manager use the bot', img: '/manager.png', story: 'Of course, we provide the perfect tools to maximize the profit of your client\'s equity. And you no longer need an account manager for your trades if you a single trader. You are in the good hands of emotionless and doctile manager ' },
    {title: 'Do I need a VPS', img: '/vps.png', story: 'Not always necessary. But we advice you get one. Also, be sure to check instructions for the bot you want to use. Some bots pick trades that last for hours or days you might not be able to keep your computer available' },
    {title: 'How do I choose a VPS provider', img: '/vpsprovider.png', story: 'You should choose VPS provider base on the locations of your broker servers. Be sure you make research on location of your broker servers, you surely want your VPS to be closer to your broker servers. Google Cloud is an example of provider with vast VPS locations' },
    {title: 'When to withdraw from equity', img: '/withdraw.png', story: 'Very important! Withdraw should be done when market is not open, days like weekend. Secondly, ensure there is no open trades because funds might be needed to hedge positions' },
    {title: 'Can I close open trades', img: '/close.png', story: 'No, please do not try to. Trades are in good hands, let the Expert Advisors fully handle the market' },
]

const botsdata = [
    {id: 1, name: 'Dac Bot',doubleDays: 2, img: '/bots/dacbot.jpg', oldprice: 762.11, price: 712.11, pairs: ['AUDUSD', 'EURUSD']},
    {id: 2, name: 'Monster Hunter',doubleDays: 1, img: '/bots/monsterbot.jpg', oldprice: 550.80, price: 450.00, pairs: ['AUDUSD', 'USDCAD']},
    {id: 3, name: 'Raiser',doubleDays: 20, img: '/bots/raiser.jpg', oldprice: 2550.80, price: 1900.50, pairs: ['USDCAD', 'EURUSD']},
    {id: 4, name: 'Bit Raider',doubleDays: 4, img: '/bots/dacbot.jpg', oldprice: 0, price: 0, pairs: ['EURJPY', 'EURUSD']},
    {id: 5, name: 'Pointer',doubleDays: 8, img: '/bots/monsterbot.jpg', oldprice: 250.80, price: 120.00, pairs: ['AUDUSD', 'EURUSD']},
    {id: 6, name: 'Striker',doubleDays: 19, img: '/bots/raiser.jpg', oldprice: 0, price: 0, pairs: ['BTCUSD', 'EURUSD']},
]

const boughtbots = [
    {id: 1, name: 'Dac Bot',doubleDays: 2, img: '/bots/dacbot.jpg', oldprice: 762.11, price: 712.11, pairs: ['AUDUSD', 'EURUSD']},
    {id: 2, name: 'Monster Hunter',doubleDays: 1, img: '/bots/monsterbot.jpg', oldprice: 550.80, price: 450.00, pairs: ['AUDUSD', 'USDCAD']},
    {id: 3, name: 'Raiser',doubleDays: 20, img: '/bots/raiser.jpg', oldprice: 2550.80, price: 1900.50, pairs: ['USDCAD', 'EURUSD']},
    {id: 4, name: 'Bit Raider',doubleDays: 4, img: '/bots/dacbot.jpg', oldprice: 0, price: 0, pairs: ['EURJPY', 'EURUSD']},
    {id: 5, name: 'Pointer',doubleDays: 8, img: '/bots/monsterbot.jpg', oldprice: 250.80, price: 120.00, pairs: ['AUDUSD', 'EURUSD']},
    {id: 6, name: 'Striker',doubleDays: 19, img: '/bots/raiser.jpg', oldprice: 0, price: 0, pairs: ['BTCUSD', 'EURUSD']},
]

const botinfo = {
    id: 1, 
    name: 'Lazer Runner', 
    img: '/bots/monsterbot.jpg', 
    price: 120.00, 
    oldprice: 150.00,
    pairs: ['AUDUSD', 'EURUSD'],
    rating: 2.7,
    loveBy: 11,
    doubleDays: 2,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    strategy: 'Uses 9 and 21 Exponential Moving Average. Fibonacci Extension for entry with 3:1 reward to risk ratio. And most importantly hedge all positions to ensure 99% profitability.',
    note: 'Ensure the Expert Advisor is not interrupted and undisturbed whenever position is open. Only apply to one pair per trading account because the hedging strategy needs unshared and reserved funds to manage positions. Yes, it is tempting to apply the EA to more than one pair per account but please note that applying the EA on one of it strong pairs only per trading account makes doubling the account more certain',
    download: ['maizerunner28397738q7.mq4', 'maizerunner893289329.mq5']


}

export {introcard, reasons, questions, botsdata, botinfo, boughtbots};