/* eslint-disable no-unused-vars */

import { BiLogInCircle } from "react-icons/bi";
import { useEffect, useState } from "react"

const ResetPasswordPage = () => {
  const [formData, setFormData] = useState({
    email: "",
  })

  const { email } = formData

  const handleSubmit = (e) => {
    e.preventDefault();

      const userData = {
          email
      }

    //   dispatch(resetPassword(userData))
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div className="container auth__container">
        <h1 className="main__title">
          Reset Password <BiLogInCircle />
        </h1>

        {/* {isLoading && <Spinner />} */}

        <form className="auth__form">
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />

          <button
            className="btn btn-primary"
            type="submit"
            onClick={handleSubmit}
          >
            Reset Password
          </button>
        </form>
      </div>
    </>
  );
};

export default ResetPasswordPage;
