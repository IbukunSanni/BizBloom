import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CompleteProfile05 = () => {
  const navigate = useNavigate();

  // State for input fields
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  // Handle input change
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Check if all fields are filled
  const isFormValid =
    formData.cardNumber.trim() !== "" &&
    formData.expiry.trim() !== "" &&
    formData.cvv.trim() !== "" &&
    formData.nameOnCard.trim() !== "";

  return (
    <div className="flex pt=[1.5rem] flex-col items-center self-stretch py-2">
      <div className="flex w-[25.75rem] flex-col flex-end justify-end items-center">
        <div className="flex flex-col items-center gap-2">
          {/* BizBloom Image */}
          <img
            src="/images/Logo_and_Name.png"
            alt="BizBloom Logo"
            className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
          />

          {/* Progress Dots */}
          <div className="flex flex-row gap-4">
            <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
            <div className="w-3 h-3 rounded-full bg-[#6E00AD]"></div>
            <div className="w-3 h-3 rounded-full bg-[#CFCFCF]"></div>
          </div>

          <img src="/images/icons/OnlinePayment.png" alt="feature-icon" />

          {/* Title & Subtitle */}
          <div className="flex flex-col items-center gap-4 self-stretch">
            <div className="flex flex-col py-[0.5rem] px-[2.25rem] justify-center items-center gap-[0.5rem] self-stretch">
              <div className="gap-2">
                <p className="text-[#1E1E1E] text-center font-sans text-[1.625rem] font-bold leading-[2.4375rem]">
                  Payment Details
                </p>
                <p className="text-[#1E1E1E] text-center font-sans text-[1.125rem] leading-[2.25rem] self-stretch">
                  Secure your account
                </p>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="flex flex-col w-full max-w-xs mt-4 space-y-3">
            {/* Card Number */}
            <input
              type="text"
              name="cardNumber"
              placeholder="1234 5678 0987 1234"
              value={formData.cardNumber}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Expiry & CVV */}
            <div className="flex space-x-2">
              <input
                type="text"
                name="expiry"
                placeholder="MM/YY"
                value={formData.expiry}
                onChange={handleInputChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
              <input
                type="password"
                name="cvv"
                placeholder="***"
                value={formData.cvv}
                onChange={handleInputChange}
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Name on Card */}
            <input
              type="text"
              name="nameOnCard"
              placeholder="Name on Card"
              value={formData.nameOnCard}
              onChange={handleInputChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
            />

            {/* Free Trial Info */}
            <p className="text-xs text-gray-500 flex items-center">
              <span className="mr-1">⏳</span> 14-day free trial, cancel anytime
            </p>
          </div>

          {/* Page Navigation Buttons */}
          <div className="flex flex-col gap-2 mt-4 items-center w-[21.875rem]">
            {/* Confirm Button (Disabled Until All Fields Are Filled) */}
            <button
              onClick={() => navigate("/bb/welcomeaboardpage")}
              disabled={!isFormValid}
              className={`flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
              ${
                isFormValid
                  ? "border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] text-white"
                  : "border-gray-400 bg-gray-400 text-gray-200 cursor-not-allowed"
              }`}
            >
              Confirm
            </button>

            {/* Back Button */}
            <button
              onClick={() => navigate("/bb/completeprofile-04")}
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
              border-[#6E00AD] bg-white hover:bg-[#3A005C] hover:border-[#3A005C] group self-stretch group"
            >
              <p className="text-[#6E00AD] group-hover:text-white">Back</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompleteProfile05;
