import React from 'react'
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

            <form action="">

                <div>
                    <label htmlFor="">Book Name</label>
                    <input type="text"
                        name='Bookname'
                        value={Bookname}
                        placeholder='Enter Book name'
                        onChange={(event) => setBookname(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Author Name</label>
                    <input type="text"
                        name='Authorname'
                        value={Authornamename}
                        placeholder='Enter Author name'
                        onChange={(event) => setAuthorname(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Book Price</label>
                    <input type="number"
                        name='Bookprice'
                        value={Bookprice}
                        placeholder='Enter Book price'
                        onChange={(event) => setBookprice(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="">Published Date</label>
                    <input type="date"
                        name='Bookprice'
                        value={Publisheddate}
                        onChange={(event) => setPublisheddate(event.target.value)} />
                </div>

                <div>
                    <input type="file"
                        accept='.pdf'
                        value={Bookpdf}
                        onChange={HandleBookpdf} />
                </div>

                <button onClick={HandleBookUpdate}>Update</button>

            </form>

        </div>)
}

export default UpdateBookrecord