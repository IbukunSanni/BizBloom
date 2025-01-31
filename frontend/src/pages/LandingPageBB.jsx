/* eslint-disable no-unused-vars */
import Button from "../components/buttonBB";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LandingPageBB = () => {
  const navigate = useNavigate();
  const [showOptions, setShowOptions] = useState(false);

  return (
    <>
      {/* Auth Modal  */}
      {showOptions && (
        <>
          {/* Modal Overlay  */}
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 transition-opacity flex items-center justify-center z-50">
            {/* Modal Content  */}
            <div className="bg-white rounded-xl shadow-lg p-6 w-[80%] max-w-md mx-4 relative">
              {/* Close button */}
              <button
                onClick={() => {
                  setShowOptions(false);
                }}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>

              <div className="py-2 flex flex-col gap-2">
                {/* Title  */}
                <div className="flex gap-4">
                  <img src="/images/icons/WeddingGift.png" className="w-[1.5rem] aspect-auto" alt="wedding_gift" />
                  <p className="productbody text-[#1E1E1E] ">
                    Your Journey to Growth
                  </p>
                </div>

                <div className="pt-4 space-y-4">
                  {/* Login button  */}
                  <button
                    className="w-full border-[3px] text-white bg-[#6E00AD] border-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] py-4 px-6 rounded-lg transition-colors duration-200"
                    onClick={() => navigate("/bb/chooseloginpage")}
                  >
                    Login to Continue
                  </button>

                  <div className="flex items-center w-[50%]">
                    <div className="flex-grow h-px bg-gray-300"></div>
                    <span className="px-4 text-gray-500 text-[0.9rem]">OR</span>
                    <div className="flex-grow h-px bg-gray-300"></div>
                  </div>
                  {/* Sign Up button  */}
                  <button
                    className="w-full border-[3px] duration-400 border-[#6E00AD] text-[#6E00AD]  hover:text-white hover:bg-[#3A005C] hover:border-[#3A005C] py-4 px-6 rounded-lg transition-colors duration-200"
                    onClick={() => navigate("/bb/createaccountpage")}
                  >
                    Sign Up Now
                  </button>

                  {/* Go Back button - to exit  */}
                  <button
                    onClick={() => setShowOptions(false)}
                    className="w-full text-sm text-gray-500 hover:text-gray-700 py-2 transition-colors duration-200"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Main Content */}
      <div className="box-border">
        <section className="bg-gray-100 flex flex-col justify-center gap-[1rem] items-center w-[25.75rem] pt-[2.25rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem]">
          <p className="text-[#00299E] font-[700] text-center font-['Montserrat'] text-[2.375rem] leading-[2.85rem]">
            Launch, Grow, and Scale with Confidence
          </p>
          <p className="text-[#555151] font-[400] text-center font-['Open Sans'] text-[1.375rem] leading-[2.0625rem]">
            Get expert mentors, proven marketing systems, and ready-made
            templates to transform your idea into a thriving business.
          </p>
          <div>
            <img
              src="/images/woman-with-curly-hair-smiling_1.png"
              alt="woman smiling"
            />
          </div>
          <div>
            <div className="flex gap-[1.5rem]">
              <Button
                variant="purple_alt"
                label="Get Started"
                onClick={() => setShowOptions(true)}
              />
              <Button variant="purple_enabled" label="Take a Tour" />
            </div>
          </div>
        </section>
        <section className=" bg-white  flex flex-col justify-center gap-[1rem] items-center w-[25.75rem] py-[4rem]">
          <p className="  text-[#696666] text-center font-['Open Sans'] text-[1.625rem] font-[400]">
            Stop struggling alone—start building your dream business with
            confidence.
          </p>
        </section>
        <section className="flex flex-col gap-[4rem]">
          {/* Connect with mentors */}
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex justify-center">
              <img
                src="/images/serious-mature-male-professional-showing-content-tablet-young-colleague.png"
                alt="mentor_with_mentee"
              />
            </div>
            <div className="px-[2.25rem] py-[0.5rem]">
              <div className="gap-[0.5rem]">
                <p className="text-[#1E1E1E]  text-center font-['Open Sans'] text-[1.625rem] font-[700] leading-[2.4375rem]">
                  Connect with Mentors for clarity and guidance
                </p>
                <p className="text-[#1E1E1E] text-center font-['Open Sans'] font-normal text-[1.125rem] text-[400] leading-[2.5rem]">
                  Learn from experienced founders who have walked your path and
                  succeeded.
                </p>
              </div>
            </div>

            <div className="max-w-[375px] mx-auto">
              <Button variant="blue_enabled" label="Go to Mentor Profiles" />
            </div>
          </div>
          {/* Access proven strategies */}
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex justify-center">
              <img
                src="/images/group-young-people-sitting-conference-together-1.png"
                alt="mentor_with_mentee"
              />
            </div>
            <div className="px-[2.25rem] py-[0.5rem]">
              <div className="gap-[0.5rem]">
                <p className="text-[#1E1E1E]  text-center font-['Open Sans'] text-[1.625rem] font-[700] leading-[2.4375rem]">
                  Access proven strategies to reach your target audience
                </p>
                <p className="text-[#1E1E1E] text-center font-['Open Sans'] font-normal text-[1.125rem] text-[400] leading-[2.5rem]">
                  Skip the guesswork and implement data-driven strategies that
                  consistently deliver results.
                </p>
              </div>
            </div>

            <div className="max-w-[375px] mx-auto">
              <div className="max-w-[375px] mx-auto">
                <Button variant="blue_enabled" label="Learn about Marketing" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[1.5rem]">
            <div className="flex justify-center">
              <img
                src="/images\blonde-woman-using-laptop-home.png"
                alt="woman_with _laptop"
              />
            </div>
            <div className="px-[2.25rem] py-[0.5rem]">
              <div className="gap-[0.5rem]">
                <p className="text-[#1E1E1E]  text-center font-['Open Sans'] text-[1.625rem] font-[700] leading-[2.4375rem]">
                  Build a solid foundation with expert-guided planning tools
                </p>
                <p className="text-[#1E1E1E] text-center font-['Open Sans'] font-normal text-[1.125rem] text-[400] leading-[2.5rem]">
                  Turn weeks of planning into hours with our library of
                  expert-crafted business templates.
                </p>
              </div>
            </div>
            <div className="max-w-[375px] mx-auto">
              <Button variant="blue_enabled" label="Check out Business Tools" />
            </div>
          </div>
        </section>

        {/*Testimonials*/}
        <section className="flex flex-shrink-0 py-[2rem]">
          <img
            src="/images/arrows/Back_to.png"
            alt="back_to"
            className="object-contain h-auto w-auto"
          />
          <div className="bg-[#F8F8F8]flex flex-col max-w-[19.875rem] px-[1.5rem] py-[0.25rem] justify-center items-center gap-[0.625rem] flex-shrink-0 rounded-md  shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <div className="flex flex-col items-center gap-[1.5rem] self-stretch">
              <p className="text-[#1E1E1E] text-center font-['Open Sans'] text-lg leading-[2.25rem]">
                As a first-time founder, I was overwhelmed by all the moving
                parts. The mentor matching changed everything; my mentor helped
                me avoid costly mistakes and gave me the confidence to make
                tough decisions. Six months in, we&apos;ve hit our first $100K
                in revenue.
              </p>
              <div className="flex flex-col items-center">
                <img
                  src="/images/Ellipse_joan_hunter.png"
                  alt="Joan_hunter_ellipse"
                />
                <div className="gap-[0.5rem]">
                  <p className="text-[#1E1E1E] text-center font-['Open Sans'] text-lg  font-bold leading-[1.6875rem]">
                    Joan Hunter
                  </p>
                  <p className="text-[#555151] text-center font-['Open Sans'] text-lg  italic leading-[1.6875rem]">
                    Director, Allure Nursery{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/images/arrows/Next.png"
            alt="next"
            className="object-contain h-auto w-auto"
          />
        </section>
      </div>
    </>
  );
};

export default LandingPageBB;
