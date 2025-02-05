/* eslint-disable no-unused-vars */

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login, reset, getUserInfo } from "../features/auth/authSlice";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";
import { BiLogInCircle } from "react-icons/bi";

const LoginPageBB = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      // TODO: check that email lowercase works
      [e.target.name]: e.target.name === "email" ? e.target.value.toLowerCase(): e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      navigate("/bb/dashboardpage");
    }

    dispatch(reset());
    dispatch(getUserInfo());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <frame className="flex w-[25.75rem]  flex-col justify-center">
        <body className="mobilebody">
          <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
            <div className="flex flex-col items-center gap-2">
              {/* Bizbloom Logo */}
              <img
                src="\images\Logo_and_Name.png"
                alt="BizBloom Logo"
                className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
              />

              <form
                //  onSubmit={handleSubmit}
                className="flex flex-col justify-center gap-[1.5rem] py-[7rem]"
              >
                <div className="flex flex-col gap-4">
                  {/* Email input */}
                  <div className="w-[21.5rem]">
                    <label
                      className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                      htmlFor="first_name"
                    >
                      Email
                    </label>
                    <div className="h-[3.5rem]  py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                      <input
                        type="text"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        value={email}
                        required
                        className="w-full ring-0 outline-none"
                      />
                    </div>

                    {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                  </div>

                  {/* Password div */}
                  <div className="w-[21.5rem]">
                    <label
                      className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                      htmlFor="last_name"
                    >
                      Password
                    </label>
                    <div className="h-[3.5rem]  py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                      <input
                        type="password"
                        placeholder="********"
                        name="password"
                        onChange={handleChange}
                        value={password}
                        required
                        className="w-full ring-0 outline-none"
                      />
                    </div>
                    {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                  </div>
                </div>
                {/* Forget Password reset */}
                <Link className="text-[#0033C7] " to="/reset-password">Forget Password ?</Link>
                {/* Login Button */}
                <div className="flex flex-col items-center gap-2 w-[21.875rem]">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="flex w-[21.5rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                             border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group"
                  >
                    <div className="flex items-center gap-[0.375rem] ">
                      <p className=" text-white">Login</p>
                    </div>
                  </button>

                  <div className="flex flex-row gap-[0.5rem]">
                    <p className="text-[#1E1E1E] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]">
                      Don&apos;t have an account?
                    </p>
                    <Link to="/bb/createaccountpage"
                      className="text-[#0033C7] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]"
                    >
                      Sign Up Here</Link>           
                  </div>
                </div>
              </form>
            </div>
          </div>
        </body>
      </frame>

    </>
  );
};

export default LoginPageBB;
