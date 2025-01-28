// import React from 'react'

const CompleteProfile02 = () => {
  return (
    <frame className="flex w-[25.75rem]  flex-col justify-center">
      <body className="mobilebody">
        <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
          <div className="flex flex-col items-center gap-2">
            <img
              src="\images\Logo_and_Name.png"
              alt="BizBloom Logo"
              className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
            />

            <div className="flex flex-row gap-4">
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
            </div>

            <div>
              <img src="" alt="" />
              <img src="" alt="" />
              <img src="" alt="" />
            </div>

            <form
              //  onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-[1.5rem]"
            >
              <div className="flex flex-col gap-4">
                {/* industry div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="industry"
                  >
                    Industry
                  </label>
                  <div className="flex h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="industry"
                      id="industry"
                      name="industry"
                      placeholder="Selet your industry"
                      className="w-[90%]"
                      //   value={formData.industry}
                      //   onChange={handleChange}
                    />

                    <img src="/images/icons/Arrows.svg" alt="arrows" />
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
                  <div className="flex h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="country_name"
                      id="country_name"
                      name="country_name"
                      placeholder="Country of residence"
                      className="w-[90%]"
                      //   value={formData.country_name}
                      //   onChange={handleChange}
                    />

                    <img src="/images/icons/Arrows.svg" alt="arrows" />
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
                  <div className="flex h-[3.5rem] py-4 px-3 rounded-[0.25rem] border-[1px] w-full bg-white">
                    <input
                      type="country_name"
                      id="country_name"
                      name="country_name"
                      placeholder="Country of residence"
                      className="w-[90%]"
                      //   value={formData.country_name}
                      //   onChange={handleChange}
                    />

                    <img src="/images/icons/Arrows.svg" alt="arrows" />
                  </div>
                  {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
                </div>

                {/* primary_business_goals div */}
                <div>
                  <label
                    className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                    htmlFor="primary_business_goals"
                  >
                    Last Name
                  </label>
                  <div className="flex h-[13.6875rem] py-4 px-3 rounded-[0.25rem] border-[1px] border-[#7E7C7C] w-full bg-white">
                    <textarea
                      type="primary_business_goals"
                      id="primary_business_goals"
                      name="primary_business_goals"
                      className="w-full h-full"
                      placeholder="What are your main business objectives for the next 6-12 months?"
                      //   value={formData.primary_business_goals}
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

export default CompleteProfile02;
