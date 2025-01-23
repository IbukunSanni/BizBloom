// import React from 'react'

const CompleteProfile01 = () => {
  return (
    <frame className="flex w-[25.75rem] h -[72.25rem] flex-col justify-center">
      <body className="mobilebody">
        <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="\images\Logo_and_Name.png"
              alt="BizBloom Logo"
              className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
            />

            <div className="flex flex-row">

            </div>

            <img
              src="/images/arrows/Back_to.png"
              alt="back_to"
              className="flex w -[2.5rem] aspect-square  justify-center items-center shrink-0"
            />
            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>

            {/* Profile Section  */}
            <div className="flex flex-col items-center gap-4 self-stretch">
              {/* Profile Title  */}
              <div className="flex flex-col py-[0.5rem] px-[2.25rem] justify-center items-center gap-[0.5rem] self-stretch">
                <div className="gap-2">
                  <p className="text-[#1E1E1E] text-center font-sans text-[1.625rem] font-bold leading-[2.4375rem]">
                    Complete Your Profile
                  </p>

                  <p className="text-[#1E1E1E]  text-center  font-sans text-[1.125rem] leading-[2.25rem] self-stretch">
                    Help us personalize your entrepreneurial journey
                  </p>
                </div>
              </div>
              {/* Profile Image  */}
              <div className="flex flex-col items-center justify-center gap-[0.5rem]">
                <div className="flex items-center justify-center w-40 h-40 bg-[#E4E4E4] rounded-full">
                  <img
                    className=""
                    src="/images/icons/Camera.png"
                    alt="Camera"
                  />
                </div>

                {/* <div className="flex items-center justify-center w-32 h-32 bg-blue-500 rounded-full">
                  <div className="w-16 h-16 bg-white rounded-full"></div>
                </div> */}

                <p className="productlabel text-center text-[#A7A7A7]">
                  Upload your profile picture
                </p>
              </div>
            </div>

            <form
              //  onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-[1.5rem]"
            >
              <div className="flex flex-col gap-4">
                {/* first_name div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="first_name"
                  >
                    First Name
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="first_name"
                      id="first_name"
                      name="first_name"
                      //   value={formData.first_name}
                      //   onChange={handleChange}
                    />
                  </div>

                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>

                {/* last_name div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="last_name"
                  >
                    Last Name
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="last_name"
                      id="last_name"
                      name="last_name"
                      //   value={formData.last_name}
                      //   onChange={handleChange}
                    />
                  </div>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>

                {/* business_name div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="business_name"
                  >
                    Business Name
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="business_name"
                      id="business_name"
                      name="business_name"
                      //   value={formData.business_name}
                      //   onChange={handleChange}
                    />
                  </div>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>

                {/* country_name div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="country_name"
                  >
                    Country
                  </label>
                  <div className="h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="country_name"
                      id="country_name"
                      name="country_name"
                      //   value={formData.country_name}
                      //   onChange={handleChange}
                    />
                  </div>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>
              </div>

              <div className="flex flex-col gap-2   items-center  w-[21.875rem]">
                {/* Next button  */}
                <button
                  className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch"
                >
                  <div className="flex items-center gap-[0.375rem] ">
                    <p className=" text-white">Next</p>
                  </div>
                </button>

                {/* Back button  */}
                <button
                  className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                border-[#6E00AD] bg-white hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch"
                >
                  <div className="flex items-center gap-[0.375rem] ">
                    <p className=" text-[#6E00AD]">Back</p>
                  </div>
                </button>
               
              </div>
            </form>
          </div>
          <div className="flex flex-col items-center gap-2"></div>
        </div>
      </body>
    </frame>
  );
};

export default CompleteProfile01;
