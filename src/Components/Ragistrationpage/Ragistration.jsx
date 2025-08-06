import React, { useEffect, useState } from 'react'
import './Ragistration.css'
import { useNavigate } from 'react-router-dom'


const Ragistration = () => {
    const [Username, setUsername] = useState("")
    const [Number, setNumber] = useState("")
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")


    const NavigatetoLogin=useNavigate();
    



    const Handlesubmit = (event) => {

        event.preventDefault();

       const obj = {

            name: Username,
            number: Number,
            email: Email,
            password: Password

        }

      console.log(obj)
    }


    const Gotologin=()=>{

        NavigatetoLogin("/login")
        
    }
    

    return (

        <div>
            <h1>Ragistration Form</h1>

            <form action="submit">
                <div>
                    <h4>Name</h4>
                    <input type="text" name="Username"
                        value={Username}
                        placeholder='Enter the user name'
                        onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div>
                    <h4>Mobile Number</h4>
                    <input type="number" name="number"
                        value={Number}
                        placeholder='Enter the Mobile Number'
                        onChange={(event) => setNumber(event.target.value)} />
                </div>

                <div>
                    <h4>Email</h4>
                    <input type="email" name="Email"
                        value={Email}
                        placeholder='Enter the Email'
                        onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div>
                    <h4>Password</h4>
                    <input type="password" name="Password"
                        value={Password}
                        placeholder='Enter the Passwrod'
                        onChange={(event) => setPassword(event.target.value)} />
                </div>

                <div>
                    <button onClick={Handlesubmit}> Submit</button>
                </div>

            </form>

            <button onClick={Gotologin}>Log in </button>

        </div>



    )
}

export default Ragistration