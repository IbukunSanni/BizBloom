/* eslint-disable no-unused-vars */
// import React from 'react'

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteProfile03 = () => {
  const [selectedItems, setSelectedItems] = useState({});
  const [userType, setUserType] = useState("A Business Owner");

  const interests = [
    { id: 1, name: "Mentorship" },
    { id: 2, name: "Marketing Strategy" },
    { id: 3, name: "Market Research" },
    { id: 4, name: "Business Planning" },
    { id: 5, name: "Networking" },
  ];

  const userTypes = [
    { id: 1, name: "A Mentor" },
    { id: 2, name: "A Business Owner" },
  ];

  const handleCheckboxChange = (itemId) => {
    setSelectedItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleRadioChange = (event) => {
    setUserType(event.target.value);
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
              <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
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

            <div
              //  onSubmit={handleSubmit}
              className=" w-[22.5rem] space-y-6"
            >
              {/* Areas of interests */}
              <div>
                <p className="productbody">
                  Areas of Interest (Select all that apply)
                </p>
                {interests.map((interest) => (
                  <div className="flex items-center" key={interest.id}>
                    <input
                      type="checkbox"
                      id={`item-${interest.id}`}
                      checked={selectedItems[interest.id] || false}
                      onChange={() => handleCheckboxChange(interest.id)}
                      className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                    <label
                      htmlFor={`interest${interest.id}`}
                      className="ml-4 font-medium text-gray-700"
                    >
                      <div className="font-medium">{interest.name}</div>
                    </label>
                  </div>
                ))}
              </div>

              {/* You will be participating as (Pick One) */}
              <div>
                <p className="productbody">
                  You will be participating as (Pick One)
                </p>
                {userTypes.map((type) => (
                  <div className="flex items-center" key={type.id}>
                    <input
                      type="radio"
                      id={`userType-${type.id}`}
                      name="userType"
                      value={type.name}
                      checked={userType === type.name}
                      onChange={handleRadioChange}
                      className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-[#6E00AD]"
                    />
                    <label
                      htmlFor={`userType-${type.id}`}
                      className="ml-4 font-medium text-gray-700"
                    >
                      {type.name}
                    </label>
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-2   items-center  w-[21.875rem]">
                {/* Next button  */}
                <button
                  onClick={() => navigate("/bb/completeprofile-04")}
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
                    onClick={() => navigate("/bb/completeprofile-02")}
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
      </div>
    </>
  );
};

export default CompleteProfile03;
