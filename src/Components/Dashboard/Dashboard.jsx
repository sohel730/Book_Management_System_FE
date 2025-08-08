import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'

export default function Dashboard() {

    const BackNavigation = useNavigate();
    const CreateBookNavigation=useNavigate();
    const UpdateBookNavigate=useNavigate();
    const SearchBookNavigate=useNavigate();

    const GototBack = () => {

        BackNavigation(-1);

    }

    const GottoCreateBook=()=>{

        CreateBookNavigation("/Dashboard/CreatBookRecord");
    }

    const GottoUpdateBook=()=>{
 
        UpdateBookNavigate("/Dashboard/UpdateBookrecord");

    }

    const GottoSearchBookrecord=()=>{
             
        SearchBookNavigate("/Dashboard/SearchBookrecord");

    }

    return (
        <div className='parent_Dashboard'>

            <div className='Dashbord_first_child'>
                <div className='Dashboard_heading'>Book Management System</div>
                <button className='Dashboard_back_btn' onClick={GototBack}>Back</button>
            </div>


            <div className='Dashboard_secound_child'>

                <div className='elem_one'>
                    <div>
                        <p className='logo'>logo1</p>
                        <p className='logo_details'><button onClick={GottoCreateBook} className='create_book_btn'>Creat Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'>logo2</p>
                        <p className='logo_details'><button onClick={GottoUpdateBook} className='create_book_btn'>Update Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'>logo3</p>
                        <p className='logo_details'><button onClick={GottoSearchBookrecord} className='create_book_btn'>Search Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'>logo4</p>
                        <p className='logo_details'>Profile</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
