import { Link, useLocation, useParams } from "react-router-dom";
import { getCustomerById } from "fakeAPI";
import { useState, useEffect } from 'react';

const CustomersDetail = () => {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState(null);
    const location = useLocation();

    useEffect(() =>{
        getCustomerById(Number(customerId)).then(setCustomer);
    },[customerId]);

    if(!customer){
        return
    };
    
    const { id, name } = customer;
    const backIdHref = location.state?.from ?? '/customers';

    return (
    <main>
        <Link to={backIdHref}>Back to customers</Link>
        <p>id: {id}</p>
        <p>Name: {name}</p>
    </main>)
};
export default CustomersDetail;