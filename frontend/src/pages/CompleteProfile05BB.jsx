// import React from 'react'

const CompleteProfile04 = () => {
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
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
            </div>

            <div className="flex flex-col justify-center items-center gap-2 py-[1.5rem] px-[2.25rem]">
              <div className="flex flex-col items-center">
                <img src="/images/icons/WeddingGift.png" alt="present" />
                <p className="producttitle text-center text-[#1E1E1E]">
                  Choose Your Plan
                </p>
                <p className="productbody !font-[400]  text-center text-[#1E1E1E] ">
                  Select a plan that fits your needs
                </p>
              </div>
            </div>

            {/* Plans  */}
            <div className="flex flex-col gap-2">
              {/* card -Free Trial */}
              <div className="flex flex-col w-[21.875rem] shrink-0 pt-[1.4rem] pb-[2.0rem] px-[1.6rem] gap-[1.5rem] rounded-2xl border-[0.1rem] border-[#E4E4E4]">
                {/* Title */}
                <div className="flex flex-col gap-2">
                  {/* Maintitle  */}
                  <div className=" productbody flex justify-between">
                    <p>Free Trial</p>
                    <p>$0</p>
                  </div>
                  {/* Subtitle */}
                  <p className="productlabel !font-[400]">
                    14-day access with 2 mentor sessions{" "}
                  </p>
                </div>

                {/* Features  */}
                <div className="flex flex-col gap-4">
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className=" text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Limited mentor sessions
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Basic Dashboard
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Community access
                    </p>
                  </div>
                </div>
              </div>
              {/* card - Basic */}
              <div className="flex flex-col  w-[21.875rem] shrink-0 pt-[1.4rem] pb-[2.0rem] px-[1.6rem] gap-[1.5rem] rounded-2xl border-[0.1rem] border-[#E4E4E4]">
                {/* Title */}
                <div className="flex flex-col gap-2">
                  {/* Maintitle  */}
                  <div className=" productbody flex justify-between">
                    <p>Basic</p>
                    <p>$30/mnth or $300/yr</p>
                  </div>
                  {/* Subtitle */}
                  <p className="productlabel !font-[400]">
                    Monthly entrepreneurship support{" "}
                  </p>
                </div>
                {/* Features  */}
                <div className="flex flex-col gap-4">
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className=" text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      4 mentor sessions/month
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Advanced Dashboard
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Priority support
                    </p>
                  </div>
                </div>
              </div>
              {/* card - Premium */}
              <div className="flex flex-col  w-[21.875rem] shrink-0 pt-[1.4rem] pb-[2.0rem] px-[1.6rem] gap-[1.5rem] rounded-2xl border-[0.1rem] border-[#E4E4E4]">
                {/* Title */}
                <div className="flex flex-col gap-2">
                  {/* Maintitle  */}
                  <div className=" productbody flex justify-between">
                    <p>Premium</p>
                    <p>$40/mnth or $400/yr</p>
                  </div>
                  {/* Subtitle */}
                  <p className="productlabel !font-[400]">
                    Comprehensive business guidance{" "}
                  </p>
                </div>
                {/* Features  */}
                <div className="flex flex-col gap-4">
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className=" text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Unlimited mentor sessions
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Full dashboard features
                    </p>
                  </div>
                  {/* Feature  */}
                  <div className="flex gap-2 items-center">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="present"
                      className="w-4 h-4"
                    />

                    <p className="text-[#1E1E1E] font-sans text-[0.9375rem] font-[600] leading-[1.4rem]">
                      Dedicated account manager
                    </p>
                  </div>
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

export default CompleteProfile04;
