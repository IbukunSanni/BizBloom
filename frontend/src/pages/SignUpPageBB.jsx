// import React from 'react'

const SignUpPageBB = () => {
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
            <img
              src="/images/arrows/Back_to.png"
              alt="back_to"
              className="flex w -[2.5rem] aspect-square  justify-center items-center shrink-0"
            />
            <div
              className="relative w-[21.75rem] h-[18.7rem] bg-[url('/images/medium-shot-colleagues-sitting-desk.png')] bg-cover bg-center 
            bg-[rgba(0,30,117,0.63)] bg-blend-overlay flex items-center justify-center"
            ></div>

            <form
              //  onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-[1.5rem]"
            >
              <div className="flex flex-col gap-4">
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="email"
                  >
                    Email:
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      //   value={formData.email}
                      //   onChange={handleChange}
                    />
                  </div>
                  <p className="text-[#A7A7A7] font-sans text-[0.75rem] font-[600] leading-[1.125rem] ">
                    We&apos;ll never share your email with anyone else
                  </p>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>

                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="email"
                  >
                    Password:
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full flex bg-white ">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      //   value={formData.email}
                      //   onChange={handleChange}
                    />

                    <div className="bg-[url('/images/toggles/OpenEye.png')] hover:bg-[url('/images/toggles/CloseEye.png')] w-8 h-8 ml-auto bg-no-repeat"></div>
                  </div>
                  <p className="text-[#A7A7A7] font-sans text-[0.75rem] font-[600] leading-[1.125rem] ">
                    Must be at least 8 characters long
                  </p>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>
              </div>

              <div>
                <label
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                  htmlFor="email"
                >
                  Confirm Password:
                </label>
                <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full flex bg-white">
                  <input
                    type="password"
                    id="confirm-password"
                    name="confirm-password"
                    //   value={formData.email}
                    //   onChange={handleChange}
                  />

                  <div className="bg-[url('/images/toggles/OpenEye.png')] hover:bg-[url('/images/toggles/CloseEye.png')] w-8 h-8 ml-auto bg-no-repeat"></div>
                </div>
                <p className="text-[#A7A7A7] font-sans text-[0.75rem] font-[600] leading-[1.125rem] ">
                  Must be at least 8 characters long
                </p>
                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              <div className="flex flex-col gap-2   items-center  w-[21.875rem]">
                <button
                  className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch"
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
            </form>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </div>
    </>
  );
};

export default SignUpPageBB;
