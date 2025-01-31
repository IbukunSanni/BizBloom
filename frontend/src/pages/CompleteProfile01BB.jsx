/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomDropdown from "../components/CustomDropdown";

const CompleteProfile01 = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const countries = ["Canada", "United States"];

  const industries = [
    "E-commerce",
    "Graphic design",
    "Technology",
    "Content Creation",
    "Sales",
    "Fashion Design",
    "Finance",
    "IT Consulting",
  ];

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value);
  };

  const handleIndustrynChange = (e) => {
    setSelectedIndustry(e.target.value);
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
              <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
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
              className=" w-[21.5rem] space-y-3"
            >
              {/* Profile Image  */}
              <div className="flex flex-col items-center justify-center gap-[0.5rem]">
                <div className="flex items-center justify-center w-40 h-40 bg-[#E4E4E4] rounded-full">
                  <img
                    className=""
                    src="/images/icons/Camera.png"
                    alt="Camera"
                  />
                </div>

                <p className="productlabel text-center text-[#A7A7A7]">
                  Upload your profile picture
                </p>
              </div>

              {/* Business Name Section*/}
              <div className="w-full">
                <label
                  htmlFor="business_name"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business_name"
                  name="business_name"
                  //   value={formData.business_name}
                  //   onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#6E00AD] focus:border-[#6E00AD] outline-none"
                  placeholder="Enter your business name"
                />

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              {/* Country Section */}
              <div className="w-full">
                <label
                  htmlFor="country"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Country
                </label>
                <div className="w-full">
                  {/* TODO: Add Custom Dropdown */}

                  <CustomDropdown
                    options={countries}
                    selected={selectedCountry}
                    setSelected={setSelectedCountry}
                    emptySelect={"Select a Country"}
                  />
                </div>

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              {/* Industry Section */}
              <div className="w-full">
                <label
                  htmlFor="industry"
                  className="text-[#555151] font-sans text-[1.125rem] font-[700] leading-[1.6875rem] "
                >
                  Industry
                </label>
                <div className="w-full">
                  <CustomDropdown
                    options={industries}
                    selected={selectedIndustry}
                    setSelected={setSelectedIndustry}
                    emptySelect={"Select an Industry"}
                  />
                </div>

                {/* {errors.email && <p style={{ color: "red" }}>{errors.email}</p>} */}
              </div>

              <div className="flex flex-col gap-2   items-center  w-[21.875rem]">
                {/* Next button  */}
                <button
                  // TODO: save the info to the database 
                  onClick={() => navigate("/bb/completeprofile-02")}
                  className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
                  border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch"
                >
                  <div className="flex items-center gap-[0.375rem] ">
                    <p className=" text-white">Next</p>
                  </div>
                </button>
                <div className="flex flex-row gap-2 w-full">
                  {/* Skip button  */}
                  <button
                    onClick={() => navigate("/bb/completeprofile-04")}
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

export default CompleteProfile01;
