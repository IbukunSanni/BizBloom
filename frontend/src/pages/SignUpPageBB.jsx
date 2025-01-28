/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../features/auth/authSlice";
import CompleteProfile01 from "./CompleteProfile01BB";
import Spinner from "../components/Spinner";
const SignUpPageBB = () => {
  const PASSWORD_LENGTH = 8;

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });

  const { first_name, last_name, email, password, re_password } = formData;

  const [showPassword, setShowPassword] = useState({
    password: false,
    re_password: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const handleChange = (e) => {
    setFormData((prev) => ({
      // '...prev' is the spread operator,
      //  Copies all existing properties in formData
      ...prev,
      // "e.target.name" dynamically accesses the name attribute of the input
      //  element that triggered the event.
      [e.target.name]: e.target.value,
    }));
    // console.log(formData)
  };

  const handleSubmit = (e) => {
    // Purpose: Stops the default browser behavior of refreshing the page when the form is submitted.
    e.preventDefault();

    if (password !== re_password) {
      toast.error("Passwords do not match");
    } else if (password.length <= PASSWORD_LENGTH) {
      toast.error("Passwords is too short");
    } else {
      const userData = {
        first_name,
        last_name,
        email,
        password,
        re_password,
      };
      dispatch(register(userData));
    }
  };

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess && user) {
      // TODO: change navigation to CompleteProfile01
      navigate("/bb/completeprofile-01");
      toast.success(
        "An activation email has been sent to your email. Please check your email"
      );
    }

    dispatch(reset());
  }, [isError, isSuccess, user, navigate, dispatch]);

  return (
    <>
      <div className="flex pt=[1.5rem] flex-col items-center self-stretch py-6">
        <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="\images\Logo_and_Name.png"
              alt="BizBloom Logo"
              className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
            />

            <button onClick={() => navigate("/bb/")}>
              <img
                src="/images/arrows/Back_to.png"
                alt="back_to"
                className="flex w -[2.5rem] aspect-square  justify-center items-center shrink-0"
              />
            </button>

            {isLoading && (
              <>
                <Spinner />
                <br />
              </>
            )}

            <form onSubmit={handleSubmit} className=" w-[21.5rem] space-y-5">
              {/* First Name Field */}
              <div>
                <label
                  htmlFor="first_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                  placeholder="First Name"
                />
                {/* {errors.firstName && (
                  <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                )} */}
              </div>

              {/* Last Name Field */}
              <div>
                <label
                  htmlFor="last_name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                  placeholder="Last Name"
                />
                {/* {errors.lastName && (
                  <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                )} */}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                  placeholder="Enter your email"
                />
                {/* {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )} */}
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword.password ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("password")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword.password ? (
                      <img
                        src="/images/toggles/OpenEye.png" // Path to your "visible" image
                        alt="Show Password"
                        className="w-6 h-6"
                      />
                    ) : (
                      <img
                        src="/images/toggles/CloseEye.png" // Path to your "hidden" image
                        alt="Hide Password"
                        className="w-6 h-6"
                      />
                    )}
                  </button>
                </div>
                {/* {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>} */}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="re_password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword.re_password ? "text" : "password"}
                    id="re_password"
                    name="re_password"
                    value={formData.re_password}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                    placeholder="Confirm your password"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("re_password")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword.re_password ? (
                      <img
                        src="/images/toggles/OpenEye.png" // Path to your "visible" image
                        alt="Show Password"
                        className="w-6 h-6"
                      />
                    ) : (
                      <img
                        src="/images/toggles/CloseEye.png" // Path to your "hidden" image
                        alt="Hide Password"
                        className="w-6 h-6"
                      />
                    )}
                  </button>
                </div>
                {/* {errors.re_password && <p className="mt-1 text-sm text-red-600">{errors.re_password}</p>} */}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-[21.5rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                             border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group"
              >
                <div className="flex items-center gap-[0.375rem] ">
                  <p className=" text-white">Sign Up</p>
                </div>
              </button>

              <div className="flex gap-[0.5rem] px-1 justify-center items-center h-full ">
                <p className="text-[#1E1E1E] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]">
                  Already have an account? 
                  <span className="tracking-widest"> </span>
                  <span
                    onClick={() => navigate("/bb/chooseloginpage")}
                    className="text-[#0033C7] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem] cursor-pointer"
                  >Login
                  </span>
                </p>
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </>
  );
};

export default SignUpPageBB;
