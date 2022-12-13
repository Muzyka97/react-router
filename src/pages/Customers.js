import { getCustomers } from 'fakeAPI';
import { useEffect, useMemo, useState } from 'react';
import { SearchBox } from '../components/SearchBox';
import { Link, useLocation, useSearchParams } from 'react-router-dom';


const Customers = () => {
    const location = useLocation();
    const [customers, setCustomers] = useState([]);
    const [searchParams, setSearchParam] = useSearchParams();
    const filterParam = searchParams.get('filter') ?? "";

    useEffect(() =>{
        getCustomers().then(setCustomers);
    },[]);

    const changeFilter = value => {
        setSearchParam(value !== '' ? {filter: value}: {})
    };

    const visibleCustomers = useMemo(()=>{
        return customers.filter(customer => 
        customer.name.toLowerCase().includes(filterParam.toLowerCase())
    )
    },[customers, filterParam])
    
    return <main>
        <SearchBox value={filterParam} onChange={changeFilter}/>
        {visibleCustomers.length > 0 && (
            <ul>
                {visibleCustomers.map(customer => (
                <li key={customer.id}>
                    <Link to={`${customer.id}`} state={{ from: location }}>{customer.name}</Link>
                </li>
                ))}
            </ul>
        )}
    </main>;
};
export default Customers;