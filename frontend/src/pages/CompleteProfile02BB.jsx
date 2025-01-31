/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomDropdown from "../components/CustomDropdown";

const CompleteProfile02 = () => {
  const [selectedBusinessStage, setSelectedBusinessStage] = useState("");
  const [selectedExperience, setSelectedExperience] = useState("");

  const experiences = [
    "Starting a business from scratch",
    "Pitching to investors for funding",
    "Managing business finances and cash flow",
    "Launching and marketing a new product",
    "Hiring, managing, and leading a team",
    "Scaling a business to new markets",
    "Building a brand and online presence",
    "Overcoming business failures and setbacks",
    "Developing leadership and decision-making skills",
    "Networking and forming strategic partnerships",
  ];

  const businessStages = [
    "Idea Stage",
    "Research & Validation Stage",
    "Planning Stage",
    "Startup Stage",
    "Early Growth Stage",
    "Scaling Stage",
    "Established Stage",
    "Expansion Stage",
    "Maturity Stage",
    "Exit or Renewal Stage",
  ];

  const handleBusinessStageChange = (e) => {
    setSelectedBusinessStage(e.target.value);
  };

  const handleExperienceChange = (e) => {
    setSelectedExperience(e.target.value);
  };

  const navigate = useNavigate();

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

            {/* Total Completion  */}
            <div className="flex flex-row gap-4">
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
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
            </div>

            <form
              //  onSubmit={handleSubmit}
              className=" w-[21.5rem] space-y-6"
            >

              {/* Business Stage Section */}
              <div className="w-full">
                <label
                  htmlFor="business-stage"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Business Stage
                </label>
                <div className="w-full">
                  <CustomDropdown
                    options={businessStages}
                    selected={selectedBusinessStage}
                    setSelected={setSelectedBusinessStage}
                    emptySelect={"Select a Business Stage"}
                  />
                </div>

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              {/* Entrepeneurial Experience Section */}
              <div className="w-full">
                <label
                  htmlFor="entrepeneurial-experience"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Entrepeneurial Experience
                </label>
                <div className="w-full">
                  <CustomDropdown
                    options={experiences}
                    selected={selectedExperience}
                    setSelected={setSelectedExperience}
                    emptySelect={"Select your Experience"}
                  />
                </div>

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              {/* Primary Business Goals Section*/}
              <div className="w-full">
                <label
                  htmlFor="primary_business_goals"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Primary Business Goals
                </label>
                <textarea
                  type="text"
                  id="primary_business_goals"
                  name="primary_business_goals"
                  className="w-full h-32 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                  placeholder="What are your main business objectives for the next 6-12 months?"
                  //   value={formData.primary_business_goals}
                  //   onChange={handleChange}
                />

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              <div className="flex flex-col gap-2   items-center  w-[21.875rem]">
                {/* Next button  */}
                <button
                  onClick={() => navigate("/bb/completeprofile-03")}
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
                    onClick={() => navigate("/bb/completeprofile-01")}
                    className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                  border-[#6E00AD] bg-white hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch group"
                  >
                    <div className="flex items-center gap-[0.375rem] group-hover:text-white">
                      <p className=" text-[#6E00AD] group-hover:text-white">
                        Back
                      </p>
                    </div>
                  </button>
                  {/* Skip button  */}
                  <button
                    onClick={() => navigate("/bb/completeprofile-04/")}
                    className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                    border-[#7E7C7C] bg-white hover:bg-[#7E7C7C] hover:border-[#7E7C7C] active:bg-[rgb(95,92,92)] active:border-[rgb(95,92,92)] duration-200 group self-stretch group"
                  >
                    <div className="flex items-center gap-[0.375rem] group-hover:text-white">
                      <p className=" text-[#7E7C7C] group-hover:text-white">
                        Skip
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompleteProfile02;
