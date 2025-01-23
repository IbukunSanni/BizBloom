const FooterBB = () => {
  return (
    <>
      <footer>
        <div className=" flex-shrink-0 w-[25.75rem]  bg-[#001E75] ">
          <div className="flex-shrink-0 w-full h-[14.5625rem] bg-[#001E75] pt-[3.25rem] ">
            <div className="flex justify-center gap-[1.5rem] text-white  ">
              <div className="flex flex-col align-center gap-[1.5rem]">
                <p className="text-white font-sans text-[0.9375rem] font-semibold leading-[1.40625rem]">
                  Quicklinks
                </p>
                <div className="flex flex-col text-white  font-sans text-[0.75rem] font-semibold gap-[0.75rem]">
                  <p>About Us</p>
                  <p>Features</p>
                  <p>Resources</p>
                </div>
              </div>
              <div className="flex flex-col gap-[1.5rem]">
                <p className="text-white text-center font-sans text-[0.9375rem] font-semibold leading-[1.40625rem]">
                  Connect
                </p>
                <div className="flex flex-row gap-[0.25rem] items-center self-stretch">
                  
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/images\social_icons\Instagram_Circle.png"
                    alt="instagram"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/images\social_icons\Facebook_Circled.png"
                    alt="facebook"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/images\social_icons\LinkedIn_Circled.png"
                    alt="linkedin"
                  />
                  <img
                    className="w-[1.5rem] h-[1.5rem]"
                    src="/images\social_icons\X_Circle.png"
                    alt="X"
                  />
                  
                </div>
              </div>
              <div className="flex flex-col align-center gap-[1.5rem]">
                <p className="text-white  font-sans text-[0.9375rem] font-semibold leading-[1.40625rem]">
                  Support
                </p>
                <div className="flex flex-col text-white  font-sans text-[0.75rem] font-semibold gap-[0.75rem]">
                  <p className="leading-[1.125rem]">Help Centre</p>
                  <p>FAQs</p>
                  <p>Contact Us</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0 w-full h-[4rem] bg-[#00144D] justify-items-center ">
            <div className="flex flex-row gap-1 py-2">
              <img
                src="/images/Copyright.png"
                alt="copyright"
                className="aspect w-[1.25rem]"
              />
              <div className="flex items-center gap-[1rem]">
                <p className=" text-white text-center font-sans text-xs font-semibold leading-[1.125rem]">
                  2024
                </p>
                <p className=" text-white text-center font-sans text-xs font-semibold leading-[1.125rem]">
                  All rights reserved
                </p>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </footer>
    </>
  );
};

export default FooterBB;
