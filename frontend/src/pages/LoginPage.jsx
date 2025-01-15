/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import Spinner from "../components/Spinner"
import { BiLogInCircle } from "react-icons/bi"

const LoginPage = () => {
    return (
        <>
            <div className="container auth__container">
                <h1 className="main__title">Login <BiLogInCircle /></h1>

                {/* {isLoading && <Spinner />} */}

                <form className="auth__form">
                    <input type="text"
                        placeholder="email"
                        name="email"
                        // onChange={handleChange}
                        // value={email}
                        required
                    />
                    <input type="password"
                        placeholder="password"
                        name="password"
                        // onChange={handleChange}
                        // value={password}
                        required
                    />
                    <Link to="/reset-password">Forget Password ?</Link>

                    <button className="btn btn-primary" type="submit"
                    //  onClick={handleSubmit}
                     >Login</button>
                </form>
            </div>
        </>

    )
}

export default LoginPage
