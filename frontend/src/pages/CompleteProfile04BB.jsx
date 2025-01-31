import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteProfile04 = () => {
  const navigate = useNavigate();

  const [selectedPlanIndex, setSelectedPlanIndex] = useState(0);

  const plans = [
    {
      id: 1,
      name: "Free Trial",
      price: "$0",
      description: "14-day access with 2 mentor sessions",
      features: [
        "Limited mentor sessions",
        "Basic Dashboard",
        "Community access",
      ],
      color: "border-gray-300 shadow-lg",
      selectedColor: "border-blue-500 bg-blue-100",
    },
    {
      id: 2,
      name: "Basic",
      price: "$30/mnth or $300/yr",
      description: "Monthly entrepreneurship support",
      features: [
        "4 mentor sessions/month",
        "Advanced Dashboard",
        "Priority support",
      ],
      color: "border-gray-300 shadow-lg",
      selectedColor: "border-green-500 bg-green-100",
    },
    {
      id: 3,
      name: "Premium",
      price: "$40/mnth or $400/yr",
      description: "Comprehensive business guidance",
      features: [
        "Unlimited mentor sessions",
        "Full dashboard features",
        "Dedicated account manager",
      ],
      color: "border-gray-300 shadow-lg",
      selectedColor: "border-purple-500 bg-purple-100",
    },
  ];

  const handleNext = () => {
    setSelectedPlanIndex((prev) => (prev + 1) % plans.length);
  };

  const handlePrevious = () => {
    setSelectedPlanIndex((prev) => (prev - 1 + plans.length) % plans.length);
  };

  const selectedPlan = plans[selectedPlanIndex];

  return (
    <>
      <div className="flex pt=[1.5rem] flex-col items-center self-stretch py-2">
        <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
          <div className="flex flex-col items-center gap-2">
            {/* BizBloom Image */}
            <img
              src="\images\Logo_and_Name.png"
              alt="BizBloom Logo"
              className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
            />

            {/* Progress Dots */}
            <div className="flex flex-row gap-4">
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
            </div>

            <img src="/images/icons/WeddingGift.png" alt="feature-icon" />

            {/* Title & Subtitle Section */}
            <div className="flex flex-col items-center gap-4 self-stretch">
              {/* Title & Subtitle */}
              <div className="flex flex-col py-[0.5rem] px-[2.25rem] justify-center items-center gap-[0.5rem] self-stretch">
                <div className="gap-2">
                  <p className="text-[#1E1E1E] text-center font-sans text-[1.625rem] font-bold leading-[2.4375rem]">
                    Choose Your Plan
                  </p>

                  <p className="text-[#1E1E1E]  text-center  font-sans text-[1.125rem] leading-[2.25rem] self-stretch">
                    Select a plan that fits your needs
                  </p>
                </div>
              </div>
            </div>

            {/* Plan Card - Improved Alignment */}
            <div
              className={`flex flex-col w-80 p-5 rounded-lg border ${
                selectedPlanIndex === selectedPlan.id - 1
                  ? selectedPlan.selectedColor
                  : selectedPlan.color
              } bg-white mt-4`}
            >
              {/* Title & Price */}

              <div className="flex justify-between w-full">
                <p className="text-[#1E1E1E] font-bold text-lg">
                  {selectedPlan.name}
                </p>
                <p className="text-black font-bold text-lg">
                  {selectedPlan.price}
                </p>
              </div>

              {/* Subtitle */}
              <p className="text-gray-600 text-sm mt-1">
                {selectedPlan.description}
              </p>

              {/* Features List - Fully Adjusted Alignment */}
              <div className="mt-3 space-y-3 justify-start ">
                {selectedPlan.features.map((feature, index) => (
                  <div key={index} className="">
                    <img
                      src="/images/icons/WeddingGift.png"
                      alt="feature-icon"
                      className="w-5 h-5 text-blue-500 inline-block"
                    />
                    <span className="ml-4  text-[#1E1E1E] text-sm">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Progress Dots - Centered Below Features */}
              <div className="flex justify-center mt-4 space-x-2">
                {plans.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full ${
                      selectedPlanIndex === index
                        ? "bg-[#6E00AD]"
                        : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            {/* Navigation for Plans */}
            <div className="flex justify-between w-[18rem] mt-4">
              <button
                onClick={handlePrevious}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 text-black hover:bg-gray-500"
              >
                ◀
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 flex justify-center items-center rounded-full bg-gray-300 text-black hover:bg-gray-500"
              >
                ▶
              </button>
            </div>

            {/* Page Navigation Buttons */}
            <div className="flex flex-col gap-2 mt-4  items-center  w-[21.875rem]">
              {/* Next button  */}
              <button
                onClick={() => navigate("/bb/completeprofile-05")}
                className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                  border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch"
              >
                <div className="flex items-center gap-[0.375rem] ">
                  <p className=" text-white">Next</p>
                </div>
              </button>
              <div className="flex flex-row gap-2 w-full">
                {/* Back button  */}
                <button
                  onClick={() => navigate("/bb/completeprofile-03")}
                  className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                  border-[#6E00AD] bg-white hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch group"
                >
                  <div className="flex items-center gap-[0.375rem] group-hover:text-white">
                    <p className=" text-[#6E00AD] group-hover:text-white">
                      Back
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile04;
