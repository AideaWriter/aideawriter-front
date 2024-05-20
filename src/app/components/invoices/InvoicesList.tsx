'use client';

import {useEffect, useState} from 'react';
import axios from 'axios';
import Link from 'next/link';

const InvoicesList = () => {
    const [invoice, setInvoices] = useState(null)
    // const [popUpDelete, setPopUpDelete] = useState(null);
    // const [totalArticles, setTotalArticles ] = useState(1)
    // const [page, setPage] = useState(1);
    // const [take, setTake] = useState(7);
    const [reloadTrigger, setReloadTrigger] = useState(false);

    // const totalPages = Math.ceil(totalArticles / take);
    // const handlePopUpDelete = (uid) => {
    //     setPopUpDelete(uid)
    // }
    // const handlePopUpCansel = () => {
    //     setPopUpDelete(null)
    // }
    //
    // const handleNextPage = () => setPage(currentPage => {
    //     if (currentPage < totalPages){
    //         return currentPage + 1;
    //     }else {
    //         return currentPage;
    //     }
    //
    // });
    // const handlePreviousPage = () => setPage(currentPage => Math.max(1, currentPage - 1));


    useEffect(() => {
        // const getInvoiceLength = async () => {
        //     try {
        //         const {data} = await axios.get('/api/articles/get_length_article', {
        //         });
        //         setTotalArticles(data);
        //     }catch (e){
        //         console.log(e);
        //     }
        // }

        const getInvoices = async () => {
            try {
                const {data} = await axios.get('/api/payment/get_invoices' );
                setInvoices(data);
            }catch (e){
                console.log(e);
            }
        }
        // getArticlesLength()
        getInvoices();
    }, [reloadTrigger])

    function formatNumber(num) {
        return (num / 100).toFixed(2);
    }


    return <div className="articles-list-block">
        <ul className="articles-list">
            {
                invoice?.map((invoice, i) => (
                    <li key={i}>

                        <h4 className={'sub-name'}>{invoice.account_name}</h4>
                        <h4>{ formatNumber(invoice.amount_paid)}</h4>
                        {/*<h4 className="word-heading">{invoice.words}</h4>*/}
                        <Link target="_blank" href={invoice.hosted_invoice_url}>
                            <h4>Invoice Url</h4>
                        </Link>
                        {/*<Link target="_blank" href={invoice.invoice_pdf}>*/}
                        {/*    <h4>Invoice PDF</h4>*/}
                        {/*</Link>*/}
                    </li>
                ))
            }
        </ul>

        {/*<div className="pagination-block">*/}
        {/*    <button className="prev-button" onClick={handlePreviousPage}>Prev</button>*/}
        {/*    <Pagination*/}
        {/*        totalPages={totalPages}*/}
        {/*        currentPage={page}*/}
        {/*        onPageChange={(pageNumber) => setPage(pageNumber)}*/}
        {/*    />*/}
        {/*    <button className="next-button" onClick={handleNextPage}>Next</button>*/}
        {/*</div>*/}

    </div>
}

export default InvoicesList
