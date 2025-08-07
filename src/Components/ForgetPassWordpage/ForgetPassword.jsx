import React, { useState } from 'react'
import './ForgetPassWord.css'

export default function ForgetPassword() {

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPass, setConfirmPass] = useState("")

    const Handleforgetpass = (event) => {
        event.preventDefault();

        const obj = {
            email: Email,
            Password: Password,
            confirpass: ConfirmPass
        }
        console.log(obj)
    }

    return (

        <div>
            <h1>Forget PassWord</h1>

            <form action="" className='forgetpass_form'>
                <div className='forget_pass_child'>
                    <h4>Email</h4>
                    <input type="email" name="Email"
                        value={Email}
                        placeholder='Enter the Email'
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className='forget_pass_child'>
                    <h4>New Password</h4>
                    <input type="password" name="Password"
                        value={Password}
                        placeholder='Enter the New Password'
                        onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div className='forget_pass_child'>
                    <h4>Confirm Password</h4>
                    <input type="password" name="Password"
                        value={ConfirmPass}
                        placeholder='Enter the Password'
                        onChange={(event) => setConfirmPass(event.target.value)} />
                </div>

                <button onClick={Handleforgetpass} className='update_password'>Update Password</button>
            </form>

        </div>
    )
}
