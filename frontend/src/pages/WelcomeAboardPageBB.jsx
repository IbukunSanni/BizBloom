
import { useNavigate } from "react-router-dom";
const WelcomeAboardPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="h-[57.3125rem] flex flex-col gap-[0.5rem]  pt-[1.5rem] pb-12 items-center shrink-0 self-stretch">
        <img
          src="\images\Logo_and_Name.png"
          alt="BizBloom Logo"
          className="flex w-[13.75rem] h-[3.6875rem] justify-center items-center shrink-0"
        />
        <img
          src="/images/icons/Approval.png"
          alt=""
          className="w-[5.625rem] h-[5.625rem]"
        />

        <div className="flex flex-col px-[0.5rem] py-[2.25rem] justify-center items-center gap-[0.5rem] self-stretch">
          <div>
            <p className="text-[#1E1E1E] text-center font-sans text-[1.625rem] font-bold leading-[2.4375rem]">
              Welcome Aboard!
            </p>
          </div>
          <div>
            <p className="text-[#1E1E1E] text-center font-sans text-[1.125rem] leading-[2.25rem]">
              Let&apos;s get you started with the essentials
            </p>
          </div>
          <div className="flex flex-row gap-[0.5rem]">
            <p className="text-[#0033C7] text-center font-sans text-[0.75rem] font-normal  leading-[1.125rem]">
              Please check your email for a confirmation link to activate your
              account.
            </p>
          </div>

          <div
            className="relative w-[21.75rem] h-[18.7rem] bg-[url('/images/medium-shot-colleagues-sitting-desk.png')] bg-cover bg-center 
            bg-[rgba(0,30,117,0.63)] bg-blend-overlay flex items-center justify-center"
          ></div>

          <p className="text-[#1E1E1E] text-center font-sans text-[1.375rem] font-bold leading-[2.0625rem]">
            Here&apos;s what you can do:
          </p>

          <div className="flex flex-col  gap-[1.0rem]">
            <div className="flex gap-1 items-center ">
              <img
                src="/images/icons/CheckMark.png"
                alt=""
                className="w-6 h-6"
              />

              <p className="text-[#1E1E1E] font-sans text-[1rem] font-[400] leading-8">
                Connect with experienced mentors
              </p>
            </div>
            <div className="flex gap-1 items-center ">
              <img
                src="/images/icons/CheckMark.png"
                alt=""
                className="w-6 h-6"
              />

              <p className="text-[#1E1E1E] font-sans text-[1rem] font-[400] leading-8">
                Access business plan templates and tools
              </p>
            </div>
            <div className="flex gap-1 items-center ">
              <img
                src="/images/icons/CheckMark.png"
                alt=""
                className="w-6 h-6"
              />

              <p className="text-[#1E1E1E] font-sans text-[1rem] font-[400] leading-8">
                Explore marketing tutorial strategies
              </p>
            </div>
          </div>
          <br className="my-4" />
          <div className="flex flex-col items-center gap-2 w-[21.875rem]">
            <button
              onClick={() => navigate("/bb/dashboardpage")}
              className="flex w-[21.75rem] p-[0.75rem] justify-center items-center gap-4 rounded-md border-[3px] duration-400 ease-in-out font-['Open Sans'] text-lg font-bold leading-[1.6875rem] 
              border-[#6E00AD] bg-[#6E00AD] hover:bg-[#3A005C] hover:border-[#3A005C] group"
            >
              <div className="flex items-center gap-[0.375rem] ">
                <p className=" text-white">Get Started</p>
              </div>
            </button>

            <br />
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeAboardPage;
