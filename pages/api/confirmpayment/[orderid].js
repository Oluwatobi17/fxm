import { API_HOST } from "../../../util/data";
// /api/confirmpayment/<orderid>?amount=3483.00&transactionid=18392382983DA

export default function handler(req, res) {
    const { token, orderid, transactionid, amount } = req.query;
	// fetch(<endpoint to confirm payment >)
	// .then(res => res.json())
	// .then(data => {
	// 	
	// })
	// .catch(err =>{
	// 	return res.status(500).send({ error: 'Error occured' });
	// });
	// return res.status(501).json({ status: 501 });
    //console.log(transactionid);
    //PAYPAL_TOKEN = ''; // FOR THE CONFIRMATION REQUEST
	//CALL PAYPAL CONFIRMATION API(https://api.sandbox.paypal.com/v1/payments/payment/<transactionid>)
	//CHECK IF THE TRANSACTIONID IS VALID:
		//CHECK IF THE AMOUNT IS SAME WITH ONE PROVIDED IN THE QUERY
		//UPDATE: SEND REQUEST TO THE BACKEND(ORDERID,AMOUNT,TRANSACTIONID){
			//IF(AMOUNT==ORDERID.AMOUNT) ADD TRANSACTIONID THE ORDER, CHANGE STATUS=SUCCESS
			//RETURN SUCCESS
		//}

	return res.status(200).send({ data: "" });
}
