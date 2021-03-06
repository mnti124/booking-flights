import { React, useState } from 'react'
import StripeCheckout from 'react-stripe-checkout';

function Payment() {
    
    //button state
    const [isPaymentProcessed, setPaymentProcessed] = useState(false);

    //Creating state of the component that will be sent to the server via post request 
    //using fetch
    const [product, setProduct] = useState({
        name: 'Flight Ticket',
        price: 250 * 100,
        productBy: 'AirLines'
    })

    //token is automatically generated by the StripeCheckout Componenet as long as we have token name as property
    const makePayment = (token)=>{
        //Sending the body and header to the server
        const body = {
            token,
            product
        }
        console.log(token.id)
        //header contains the format type (json) that we will send to the server
        const headers = {
            "Content-Type": "application/json"
        }

        //fire up post request to the backend at: http://localhost:3000/payment
        return fetch('http://localhost:8080/payment',{
            method: 'POST',
            headers: headers,
            //Changing information from the body to json format, as we make the post request
            body: JSON.stringify(body)
            
        })//If the request completes successfully then we get a response from the server
        .then(res => {
            console.log('Response from server:',res);
            if(res.status === 200){
                console.log('Status is ', res.status,' Payment Sucessful');
                setPaymentProcessed(!isPaymentProcessed);
            }
            
        })
        //if request failed
        .catch(e => console.log(e))
    }
    

    return (
       <StripeCheckout
        token={makePayment}
        stripeKey='pk_test_51HpGlBJlh5CZAQrwfXxYDhcqegHUcBBIJjlr104cJMe101hjTGfQ1B7UQfFyecTY1sGJ7BWsip1EIjOps7twrQfr00g00bhClp'
        name="By AirLines"
        amount={product.price}
       >
           <button className="flights__details__booknow" disabled={isPaymentProcessed}> {isPaymentProcessed? 'booked': 'book now'}</button>
       </StripeCheckout>
    )
}

export default Payment
