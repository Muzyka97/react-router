import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { Layout } from './Layout';
import { GlobalStyle } from './GlobalStyle';
import { Toaster } from 'react-hot-toast';
import  {InvoiceDetails } from './InvoiceDetails';


const Sales = lazy(() => import("../pages/Sales"));
const Customers = lazy(() => import('../pages/Customers'));
const CustomersDetail = lazy(() => import('../pages/CustomersDetail'));
const Invoices = lazy(() => import('./Invoices'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Navigate to='dashboard'/>}/>
          <Route path='dashboard' element={<div>Dashboard</div>}/>
          <Route path='sales' element={<Sales/>}>
            <Route index element={<div>Sales</div>}/>
            <Route path='analytics' element={<div>Analytics</div>}/>
            <Route path='invoices' element={<Invoices/>}>
              <Route path=':invoiceId' element={<InvoiceDetails/>}/>
            </Route>
            <Route path='deposits' element={<div>Deposits</div>}/>
          </Route>
          <Route path='feedback' element={<div>Feedback</div>}/>
          <Route path='reports' element={<div>Reports</div>}/>
          <Route path='customers' element={<Customers/>}/>
          <Route path='customers/:customerId' element={<CustomersDetail/>}/>
        </Route>
      </Routes>
      <GlobalStyle />
      <Toaster position='top-right' reverseOrder={false}/>
    </>
  );
};
