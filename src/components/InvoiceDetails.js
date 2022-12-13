import { useParams} from "react-router-dom";
import { useState, useEffect } from 'react';
import { getInvoiceById } from "fakeAPI";

export const InvoiceDetails = () => {
    const {invoiceId} = useParams()
    const [invoice, setInvoice] = useState(null)

    useEffect(()=>{
        getInvoiceById(invoiceId).then(setInvoice)
    },[invoiceId])

    if (!invoice) {
        return null;
    };

    const { recipient, account, total, date } = invoice;

    return(
        <div>
            <p>
                <b>Recipient:</b> ${recipient}
            </p>
            <p>
                <b>Account number:</b> ${account}
            </p>
            <p>
                <b>Total due:</b> ${total}
            </p>
            <p>
                <b>Invoice date:</b> {new Date(date.created).toLocaleDateString()}
            </p>
            <p>
                <b>Due date:</b> {new Date(date.due).toLocaleDateString()}
            </p>
        </div>
    )
    
};