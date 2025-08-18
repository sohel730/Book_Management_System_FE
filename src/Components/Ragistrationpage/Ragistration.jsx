import React, { useEffect, useState } from 'react'
import './Ragistration.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const Ragistration = () => {
    const [Username, setUsername] = useState("")
    const [Number, setNumber] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const NavigatetoLogin = useNavigate();
    const NavigatetoDashboard = useNavigate();




    const Handlesubmit = (event) => {

        event.preventDefault();

        const obj = {


            username: Username,
            number: Number,
            email: Email,
            password: Password


        }

        console.log(obj)

        axios.post("http://localhost:8080/api/CreateUser", obj)
            .then((response) => {

                console.log(response);

                if(response.data===true)
                {
                     NavigatetoDashboard("/Dashboard")
                }
            })
            .catch((error) => console.error(error));


    }


    const Gotologin = () => {

        NavigatetoLogin("/login")

    }

    const GotoDahsboard = () => {

        NavigatetoDashboard("/Dashboard")

    }

    return (

        <div>
            <h1 className='Ragistraiton_form_heading'>Ragistration Form</h1>

            <form action="submit" className='form'>
                <div className='child'>
                    <h4>Name</h4>
                    <input type="text" name="Username"
                        value={Username}
                        placeholder='Enter the user name'
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className='child'>
                    <h4>Mobile Number</h4>
                    <input type="number" name="number"
                        value={Number}
                        placeholder='Enter the Mobile Number'
                        onChange={(event) => setNumber(event.target.value)} />
                </div>

                <div>
                    <h4 className='child'>Email</h4>
                    <input type="email" name="Email"
                        value={Email}
                        placeholder='Enter the Email'
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className='child'>
                    <h4>Password</h4>
                    <input type="password" name="Password"
                        value={Password}
                        placeholder='Enter the Passwrod'
                        onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div>
                    <button onClick={Handlesubmit} className='submit'> Submit</button>
                </div>



            </form>

            <p>if you registar  <button onClick={Gotologin} className='gotologin'> Click here for Log in </button></p>
            <button onClick={GotoDahsboard}>Dashboard</button>
        </div>



    )
}

export default Ragistration