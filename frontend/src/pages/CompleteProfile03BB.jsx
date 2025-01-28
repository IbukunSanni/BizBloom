// import React from 'react'

const CompleteProfile03 = () => {
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
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
            </div>
            {/* Areas of Interest Section*/}
            <div className="flex flex-col gap-4">
              <p className="productbody">
                Areas of Interest (Select all that apply)
              </p>
              {/* Checkboxes  */}
              <div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Checkbox:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/Checkbox_notick_gray.png"
                        alt="checkbox tick"
                      />
                    </div>
                  </div>
                  {/* Checkbox: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    Mentorship
                  </p>
                </div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Checkbox:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/Checkbox_notick_gray.png"
                        alt="checkbox tick"
                      />
                    </div>
                  </div>
                  {/* Checkbox: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    Marketing Strategy
                  </p>
                </div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Checkbox:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/Checkbox_notick_gray.png"
                        alt="checkbox tick"
                      />
                    </div>
                  </div>
                  {/* Checkbox: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    Market Research
                  </p>
                </div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Checkbox:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/Checkbox_notick_gray.png"
                        alt="checkbox tick"
                      />
                    </div>
                  </div>
                  {/* Checkbox: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    Business Planning
                  </p>
                </div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Checkbox:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/Checkbox_notick_gray.png"
                        alt="checkbox tick"
                      />
                    </div>
                  </div>
                  {/* Checkbox: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    Networking
                  </p>
                </div>
              </div>
            </div>

            {/* Areas of Interest Section*/}
            <div className="flex flex-col gap-4">
              <p className="productbody">
                You will be participating as (Pick One)
              </p>
              <div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Radio:  */}
                  <div className="flex items-center">
                    <div className="">
                    <img
                        src="/images/icons/RadioClear.png"
                        alt="radio_clear"
                      />
                    </div>
                  </div>
                  {/* Radio: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    A Business Owner
                  </p>
                </div>
                <div className="p-[0.625rem] gap-2 flex flex-row items-center">
                  {/* Radio:  */}
                  <div className="flex items-center">
                    <div className="">
                      <img
                        src="/images/icons/RadioClear.png"
                        alt="radio_clear"
                      />
                    </div>
                  </div>
                  {/* Radio: text  */}
                  <p className="font-sans text-[1.125rem] font-[400] leading-[1.6875rem] text-[#555151]">
                    A Mentor
                  </p>
                </div>
              </div>
            </div>


            <form
              //  onSubmit={handleSubmit}
              className="flex flex-col justify-center gap-[1.5rem]"
            >
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

export default CompleteProfile03;
