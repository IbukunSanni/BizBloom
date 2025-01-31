// import React from 'react'
// import SocialButton from "../components/SocialButtonBB";

import { Link, useNavigate } from "react-router-dom";

const CreateAccountPageBB = () => {
  const navigate = useNavigate();

  return (
    <>
      <frame className=".outerframe">
        <body className="h-auto flex flex-col pt-[1.5rem] pb-12 items-center gap-[1.2rem] shrink-0 self-stretch">
          {/* BizBlooom Logo*/}
          <img
            src="\images\Logo_and_Name.png"
            alt="BizBloom Logo"
            className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
          />

          {/* Back arrow*/}
          <button onClick={() => navigate("/bb/")}>
            <img
              src="/images/arrows/Back_to.png"
              alt="back_to"
              className="flex w -[2.5rem] aspect-square  justify-center items-center shrink-0"
            />
          </button>

          <div className="flex flex-col px-[0.5rem] py-[2.25rem] justify-center items-center gap-[0.5rem] self-stretch">
            <div>
              <p className="text-[#1E1E1E] text-center font-sans text-[1.625rem] font-bold leading-[2.4375rem]">
                Create an Account
              </p>
            </div>
            <div>
              <p className="text-[#1E1E1E] text-center font-sans text-[1.125rem] leading-[2.25rem]">
                Choose your preferred sign up method
              </p>
            </div>
            <div className="flex flex-row gap-[0.5rem]">
              <p className="text-[#1E1E1E] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]">
                Do you already have an account?
              </p>
              <a
                href="#"
                className="text-[#0033C7] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]"
              ></a>

              <Link
                to="/bb/chooseloginpage"
                className="text-[#0033C7] text-center font-sans text-[0.75rem] font-bold  leading-[1.125rem]"
              >
                Login Here
              </Link>
            </div>
          </div>
          {/* Social media Buttons  */}
          <div className="flex flex-col items-center gap-2">
            <button
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
          border-[#1E1E1E] hover:bg-[#1E1E1E] group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <div className="bg-[url('/images/social_icons/Google.png')] group-hover:bg-[url('/images/social_icons/Google_hover.png')] w-8 h-8"></div>
                <p className="group-hover:text-white group">
                  Continue with Google
                </p>
              </div>
            </button>

            <button
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
          border-[#3C63E7] bg-[#3C63E7] hover:bg-white group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <div className="bg-[url('/images/social_icons/Facebook.png')] group-hover:bg-[url('/images/social_icons/Facebook_hover.png')] w-8 h-8"></div>
                <p className="group-hover:text-[#3C63E7] text-white">
                  Continue with Facebook
                </p>
              </div>
            </button>

            <button
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
          border-[#1E1E1E] bg-[#1E1E1E] hover:bg-white group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <div className="bg-[url('/images/social_icons/X.png')] group-hover:bg-[url('/images/social_icons/X_hover.png')] w-8 h-8"></div>
                <p className="group-hover:text-[#1E1E1E]  text-white">
                  Continue with X
                </p>
              </div>
            </button>

            <button
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
          border-[#4F81F3] bg-[#4F81F3] hover:bg-white group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <div className="bg-[url('/images/social_icons/LinkedIn.png')] group-hover:bg-[url('/images/social_icons/LinkedIn_hover.png')] w-8 h-8"></div>
                <p className="group-hover:text-[#4F81F3]  text-white">
                  Continue with linkedin
                </p>
              </div>
            </button>
          </div>
          <div className="flex items-center w-[21.75rem]">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-4 text-gray-500">or continue with</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>
          <div className="flex flex-col items-center gap-2 w-[21.875rem]">
            <button
              onClick={() => {
                navigate("/bb/signuppage");
              }}
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                        border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <p className=" text-white">Sign Up with Email</p>
              </div>
            </button>
            <p className="w-[21.75rem] text-center text-black_bb">
              By signing up, you agree to our{" "}
              <span className="text-[#0033C7]">Terms of Service</span> and{" "}
              <span className="text-[#0033C7]">Privacy Policy</span>
            </p>
          </div>
        </body>
      </frame>
    </>
  );
};

export default CreateAccountPageBB;
