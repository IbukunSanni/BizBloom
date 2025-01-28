// import React from 'react'
import { useSelector } from "react-redux";

const DashboardPageBB = () => {
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <>
      <div className="w-full bg-[#FFF4E8]">
        <h1>Welcome, {userInfo.first_name} </h1>
        {/* Waving Hand */}
        <img src="" alt="" />
        <p>You&apos;re all set - no upcoming sessions!</p>
      </div>

      {/* Options */}
      <div className="flex flex-col">
        <div className="bg-white h-32 w-full rounded-2xl  border border-[#E4E4E4]  flex items-center justify-center text-[#555151] font-bold">
          Find a Mentor
        </div>
        <div className="flex flex-row">
          <div className="bg-white h-32 w-full rounded-2xl  border border-[#E4E4E4]  flex items-center justify-center text-[#555151] font-bold">
            Resources
          </div>
          <div className="flex flex-col">
            <div className="bg-white h-32 w-full rounded-2xl  border border-[#E4E4E4]  flex items-center justify-center text-[#555151] font-bold">
              Take a Tour
            </div>
            <div className="bg-white h-32 w-full rounded-2xl  border border-[#E4E4E4]  flex items-center justify-center text-[#555151] font-bold">
              Set Goals
            </div>
          </div>
        </div>
      </div>

      {/* Available Mentors */}
      <div className="bg-white  rounded-2xl  border border-[#E4E4E4] px-6 py-8 w-full gap-6">
        <p>Available Mentorship Sessions</p>
        <div>Mentor 1</div>

        <div>Mentor 2</div>
      </div>

      {/* For You */}

      <div className="bg-white  rounded-2xl  border border-[#E4E4E4] px-6 py-8 w-full gap-6">
        <p>For You</p>
        <div>Business Plan</div>

        <div>Business Model Canvas</div>
        <div>Social Media Marketing</div>
      </div>
      {/* TODO: remove filler */}
      <div className="h-[100rem]"></div>

      {/* Bottom Navigation Bar */}

      <div className="fixed bottom-0 left-auto w-full bg-white shadow-lg border-t border-gray-300">
        <div className="flex justify-around items-center h-16">
          {/* Home - Navigation Item */}
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="material-icons">icon</span>
            <span className="text-sm">Home</span>
          </button>

          {/* Mentors - Navigation Item */}
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="material-icons">icon</span>
            <span className="text-sm">Mentors</span>
          </button>

          {/* Book - Navigation Item */}
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="material-icons">icon</span>
            <span className="text-sm">Book</span>
          </button>

          {/* Templates - Navigation Item */}
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="material-icons">icon</span>
            <span className="text-sm">Templates</span>
          </button>

          {/*Learn - Navigation Item*/}
          <button className="flex flex-col items-center text-gray-600 hover:text-blue-500">
            <span className="material-icons">icon</span>
            <span className="text-sm">Learn</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default DashboardPageBB;
