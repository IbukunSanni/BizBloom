const LandingPageBB = () => {
  return (
    <>
      {/* Main Content */}
      <div className="box-border">
      <section className="bg-gray-100 flex flex-col justify-center gap-[1rem] items-center w-[25.75rem] pt-[2.25rem] pr-[1.5rem] pb-[1.5rem] pl-[1.5rem]">
        <p className="text-[#00299E] font-[700] text-center font-['Montserrat'] text-[2.375rem] leading-[2.85rem]">
          Launch, Grow, and Scale with Confidence
        </p>
        <p className="text-[#555151] font-[400] text-center font-['Open Sans'] text-[1.375rem] leading-[2.0625rem]">
          Get expert mentors, proven marketing systems, and ready-made templates
          to transform your idea into a thriving business.
        </p>
        <div>
          <img
            src="images/woman-with-curly-hair-smiling_1.png"
            alt="woman smiling"
          />
        </div>
        <div>
          <div className="flex gap-[1.5rem]">
            <button className="flex w-[5.75rem] bg-[#6E00AD] text-white font-[700] text-[1.125rem] p-[0.45rem] justify-center items-center gap-[1rem] rounded-md border-[3px] border-[#6E00AD]">
              Sign Up
            </button>
            <button className="flex w-[5.75rem] text-[#6E00AD] font-[700] text-[1.125rem] p-[0.45rem] justify-center items-center gap-[1rem] rounded-md border-[3px] border-[#6E00AD] leading-[2.5rem]">
              Login
            </button>
          </div>
        </div>
      </section>
      <section className=" bg-white  flex flex-col justify-center gap-[1rem] items-center w-[25.75rem] py-[4rem]">
        <p className="  text-[#696666] text-center font-['Open Sans'] text-[1.625rem] font-[400]">
          Stop struggling alone—start building your dream business with
          confidence.
        </p>
      </section>

      </div>      
      <main className="p-6 space-y-8">
        {[...Array(20)].map((_, index) => (
          <section key={index} className="bg-gray-100 p-6 rounded-md shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">
              Section {index + 1}
            </h2>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              vel ligula scelerisque, vehicula dui eu, fermentum velit. Cras at
              lectus id justo aliquet pharetra. Curabitur gravida nisl eget est
              blandit, a pharetra orci dignissim.
            </p>
          </section>
        ))}
      </main>
    </>
  );
};

export default LandingPageBB;
