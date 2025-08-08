import React from 'react'
import { useState } from 'react';
import './UpdateBookrecord.css'

function UpdateBookrecord() {
    const [Bookname, setBookname] = useState("");
    const [Authorname, setAuthorname] = useState("")
    const [Bookprice, setBookprice] = useState("")
    const [Publisheddate, setPublisheddate] = useState("")
    const [Bookpdf, setBookpdf] = useState(null)

    const HandleBookUpdate = (event) => {

        setPublisheddate(event.target.files[0]);

    }

    const HandleBookpdf=(event)=>{
        setPublisheddate(event.target.files[0]);
    }

    const HandleBookcreate = (event) => {

        event.preventDefault();

        const obj = {
            bookname: Bookname,
            authorname: Authorname,
            bookprice: Bookprice,
            publisheddate: Publisheddate,
            bookpdf: Bookpdf
        }

        console.log(obj);
    }

    return (
        <div>

            <h1 className='update_book_record_heading'>Update Book Record</h1>

            <form action="">

                <div className='update_book_record_child'>
                    <label htmlFor="">Book Name</label>
                    <input type="text"
                        name='Bookname'
                        value={Bookname}
                        placeholder='Enter Book name'
                        onChange={(event) => setBookname(event.target.value)} />
                </div>

                <div className='update_book_record_child'>
                    <label htmlFor="">Author Name</label>
                    <input type="text"
                        name='Authorname'
                        value={Authorname}
                        placeholder='Enter Author name'
                        onChange={(event) => setAuthorname(event.target.value)} />
                </div>

                <div className='update_book_record_child'>
                    <label htmlFor="">Book Price</label>
                    <input type="number"
                        name='Bookprice'
                        value={Bookprice}
                        placeholder='Enter Book price'
                        onChange={(event) => setBookprice(event.target.value)} />
                </div>
                <div className='update_book_record_child'>
                    <label htmlFor="">Published Date</label>
                    <input type="date"
                        name='Bookprice'
                        value={Publisheddate}
                        onChange={(event) => setPublisheddate(event.target.value)} />
                </div>

                <div className='update_book_record_child'>
                    <input type="file"
                        accept='.pdf'
                        value={Bookpdf}
                        onChange={HandleBookpdf} />
                </div>

                <button onClick={HandleBookUpdate} className='update_book_record_btn'>Update</button>

            </form>

        </div>)
}

export default UpdateBookrecord