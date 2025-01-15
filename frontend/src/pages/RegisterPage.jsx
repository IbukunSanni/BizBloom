/* eslint-disable no-unused-vars */
import { BiUser } from 'react-icons/bi'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        "first_name": "",
        "last_name": "",
        "email": "",
        "password": "",
        "re_password": "",
    })

    const { first_name, last_name, email, password, re_password } = formData

    const handleChange = (e) => {
        setFormData((prev) => ({
            // '...prev' is the spread operator,
            //  Copies all existing properties in formData
            ...prev, 
            // "e.target.name" dynamically accesses the name attribute of the input
            //  element that triggered the event.
            [e.target.name]: e.target.value
        })
        )
        // console.log(formData)
    }

    const handleSubmit = (e) => {
        // Purpose: Stops the default browser behavior of refreshing the page when the form is submitted.
        e.preventDefault()


        if (password !== re_password) {
            toast.error("Passwords do not match")
        } 
        // else {
        //     const userData = {
        //         first_name,
        //         last_name,
        //         email,
        //         password,
        //         re_password
        //     }
        //     dispatch(register(userData))
        // }
    }


    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Register <BiUser /> </h1>

                {/* {isLoading && <Spinner />} */}

                <form className="auth__form">
                    <input type="text"
                        placeholder="First Name"
                        name="first_name"
                        onChange={handleChange}
                        value={first_name}
                        required
                    />
                    <input type="text"
                        placeholder="Last Name"
                        name="last_name"
                        onChange={handleChange}
                        value={last_name}
                        required
                    />
                    <input type="email"
                        placeholder="Email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                    />
                    <input type="password"
                        placeholder="Password"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                    />
                    <input type="password"
                        placeholder="Retype Password"
                        name="re_password"
                        onChange={handleChange}
                        value={re_password}
                        required
                    />

                    <button className="btn btn-primary" type="submit" 
                    onClick={handleSubmit}
                    >Register</button>
                </form>
            </div>
        </>
    )

}

export default RegisterPage