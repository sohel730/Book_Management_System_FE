import React, { useState } from 'react'
import './SearchBookrecord.css'

function SearchBookrecord() {
    const [Searchdata, setSearchdata] = useState("")

    const Handlesearch = () => {

        console.log(Searchdata);
    }

    return (
        <div className='Search_page_parent'>

            <div className='Search_page_parent_first_child'>

                <input type="text"
                    name='searchdata'
                    value={Searchdata}
                    placeholder='Search here'
                    onChange={(event) => { setSearchdata(event.target.value) }} />
                <button onClick={Handlesearch}>Search</button>

                <div className='Search_page_parent_secound_child'>

                    <table>
                        <thead>
                            <tr>
                                <th>Book name</th>
                                <th>Author name</th>
                                <th>Book price</th>
                                <th>Published Date</th>
                                <th>Book pdf</th>
                                <th>Delet Book record</th>
                            </tr>

                        </thead>


                    </table>

                </div>


            </div>



        </div>
    )
}

export default SearchBookrecord