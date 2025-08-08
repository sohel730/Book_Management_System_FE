import React from 'react'
import './Dashboard.css'
import { useNavigate } from 'react-router-dom'
import { IoAddCircleOutline } from "react-icons/io5";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { FaSearchPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";


export default function Dashboard() {

    const BackNavigation = useNavigate();
    const CreateBookNavigation=useNavigate();
    const UpdateBookNavigate=useNavigate();
    const SearchBookNavigate=useNavigate();
    const ProfileNavigate=useNavigate();

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

    const GottoProfile=()=>{

  ProfileNavigate("/Dashboard/Profile")
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
                        <p className='logo'><IoAddCircleOutline /></p>
                        <p className='logo_details'><button onClick={GottoCreateBook} className='create_book_btn'>Creat Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'><MdOutlineBrowserUpdated /></p>
                        <p className='logo_details'><button onClick={GottoUpdateBook} className='create_book_btn'>Update Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'><FaSearchPlus /></p>
                        <p className='logo_details'><button onClick={GottoSearchBookrecord} className='create_book_btn'>Search Book Record</button></p>
                    </div>
                </div>
                <div className='elem_one'>
                    <div>
                        <p className='logo'><CgProfile /></p>
                        <p className='logo_details'><button onClick={GottoProfile} className='create_book_btn'>Profile</button></p>
                    </div>
                </div>
            </div>
        </div>
    )
}
