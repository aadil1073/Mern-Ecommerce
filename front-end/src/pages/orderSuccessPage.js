import { useParams } from "react-router-dom";


const { default: Footer } = require("../components/footer")


const OrderSuccessPage = () =>{

    const params = useParams();
    return (
    <>
    <div className="container my-5">
        <div>
            <h1 className="text-center">e-Shopper</h1>
        </div>

        <div className="d-flex justify-content-center">
           

            <div className="login-box m-auto mt-5 col-4 text-center">
                <h3 className="text-center">Order #{params.orderid} </h3>

                <i className="bi bi-check-circle-fill text-success success-icon"></i>
                 
                <h6>We will deliver your order in 6-7 days</h6>
                <a href="/">Go Back To Home</a>
            </div>

        </div>
   
    </div>
    <Footer />
    </>
    )
}

export default OrderSuccessPage;