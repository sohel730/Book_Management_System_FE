import React, { useState } from 'react'
import './SearchBookrecord.css'

function SearchBookrecord() {
    const [Searchdata, setSearchdata] = useState("")

    const Tabledata = [
        {
            id: 1,
            bookname: "Book1",
            authorname: "Saam",
            bookprice: 500,
            publisheddate: "23 / 2 / 2024",
            bookpdf: "i do not know about integarate pdf"


        },
        {
            id: 2,
            bookname: "Book2",
            authorname: "Saam",
            bookprice: 500,
            publisheddate: "23 / 2 / 2024",
            bookpdf: "i do not know about integarate pdf"


        },
        {
            id: 3,
            bookname: "Book3",
            authorname: "Saam",
            bookprice: 500,
            publisheddate: "23 / 2 / 2024",
            bookpdf: "i do not know about integarate pdf"


        },
        {
            id: 4,
            bookname: "Book4",
            authorname: "Saam",
            bookprice: 500,
            publisheddate:"23 / 2 / 2024",
            bookpdf: "i do not know about integarate pdf"


        }
        ,
        {
            id: 5,
            bookname: "Book5",
            authorname: "Saam",
            bookprice: 500,
            publisheddate: "23 / 2 / 2024",
            bookpdf: "i do not know about integarate pdf"


        }
    ]

    const Handlesearch = () => {

        console.log(Searchdata);
    }

    const  Handledelet=()=>{
        console.log("this is a handle delet")
    }

    return (
        <div className='Search_page_parent'>

            <div className='Search_page_parent_first_child'>

                <input type="text"
                    name='searchdata'
                    value={Searchdata}
                    className='Search_input'
                    placeholder='Search here'
                    onChange={(event) => { setSearchdata(event.target.value) }} />
                <button onClick={Handlesearch} className='search_btn'>Search</button>




            </div>

            <div className='Search_page_parent_secound_child'>

                <table className='Table'>
                    <thead className='Table_header'>
                        <tr className='Table_header_tr'>
                            <th>Book name</th>
                            <th>Author name</th>
                            <th>Book price</th>
                            <th>Published Date</th>
                            <th>Book pdf</th>
                            <th>Delet Book record</th>
                        </tr>

                    </thead>

                    <tbody className='Table_body'>
                        {
                            Tabledata.map((data) => (

                                <tr key={data.id} className='Table_body_tr'>
                                    <td>{data.bookname}</td>
                                    <td>{data.authorname}</td>
                                    <td>{data.bookprice}</td>
                                    <td>{data.publisheddate}</td>
                                    <td>{data.bookpdf}</td>
                                    <td><button onClick={Handledelet}>Delet</button></td>
                                </tr>

                            ))
                        }
                    </tbody>


                </table>

            </div>



        </div>
    )
}

export default SearchBookrecord