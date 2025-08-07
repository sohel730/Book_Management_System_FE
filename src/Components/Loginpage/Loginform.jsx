import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Loginform.css'

export default function Loginform() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const gotoragisterpage = useNavigate();
    const gottoforgetpasswordpage = useNavigate();


    const Handlelogin = (event) => {

        event.preventDefault();

        const obj = {

            email: Email,
            Password: Password

        }
        console.log(obj);

    }

    const Gotoragistar = () => {

        gotoragisterpage("/registration")

    }


    const Handleforgetpasswordpage = () => {

        gottoforgetpasswordpage("/ForgetPassWord")
    }

    return (
        <div >
            <h1 className='Login_form_heading'>Login Form</h1>


            <form action="">

                <div>
                    <h4 className='login_form_child'>Email</h4>
                    <input type="email" name="Email"
                        value={Email}
                        placeholder='Enter the Email'
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div>
                    <h4 className='login_form_child'>Password</h4>
                    <input type="password" name="Password"
                        value={Password}
                        placeholder='Enter the Passwrod'
                        onChange={(event) => setPassword(event.target.value)} />
                </div>
                <button onClick={Handlelogin} className='log_in_btn'> Log in</button>
                <p>if you not registar <button onClick={Gotoragistar} className='gotoragister_btn'>Click here</button></p>
                <button onClick={Handleforgetpasswordpage} className='gotoforgetpass_btn'>Forget Password</button>

            </form>


        </div>

    )
}
