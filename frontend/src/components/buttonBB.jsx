/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from 'react';

// Basic Button Component
const Button = ({ label, onClick, type = 'button', variant = 'purple_enabled' }) => {

    const variants = {
        purple_enabled: "border-[#6E00AD] text-[#6E00AD]  hover:text-white hover:bg-[#3A005C] hover:border-[#3A005C]" ,
        purple_alt:"text-white bg-[#6E00AD] border-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C]",
        disabled: "border-[#A7A7A7] text-[#7E7C7C] bg-[#A7A7A7]",
        blue_enabled:"border-[#0033C7] text-[#0033C7] hover:bg-[#001E75] hover:text-white hover:border-[#001E75]" ,
        blue_alt:" text-white bg-[#0033C7] border-[#0033C7] hover:bg-[#001E75] hover:text-white hover:border-[#001E75] "
        
      };

    return (
    <button
      type={type}
      onClick={onClick}
      className={`${variants[variant]} inline-flex p-3 justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] `}
    >
      <span>{label}</span>
    </button>
  );
};


export default Button;
