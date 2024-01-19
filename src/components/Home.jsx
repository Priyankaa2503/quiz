import React from "react";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate = useNavigate();

    const handleSubmit = (event) => {
      event.preventDefault();
      const email = event.target.value;
      localStorage.setItem("userEmail", email);
      navigate("/quiz");
    };

  return (
    <div className=" p-10 h-screen  w-full  bg-[#313131]">
      <div className="bg-[#FCC822] rounded-2xl shadow-2xl h-[500px] md:h-full w-full pl-6 py-6">
        <div className="bg-[#545757] w-full h-[500px] md:h-full  rounded-2xl p-6">
          <div className="flex flex-row h-full w-full   justify-center items-center  gap-6 ">

            <div className="flex  justify-center items-center w-full h-12 rounded-full md:w-[330px] md:h-[330px] p-2 lg:rounded-lg md:rounded-lg cursor-pointer">
              <div className="flex flex-col gap-6 font-bold  text-white">
                <p className="text-5xl">Welcome back!</p>
                <div className="text-sm leading-3 text-white font-bold w-full">
                  <form
                    className="flex flex-col gap-4 "
                    onSubmit={handleSubmit}
                  >
                    <div className="relative">
                      <div className="text-md -top-2.5 bg-[#545757] py-1  absolute ">
                        Enter email to start
                      </div>
                      <input
                        className="px-3 py-2 text-[#FCC822] rounded-none bg-transparent  border border-[#FCC822] outline-none"
                        type="email"
                        name="email"
                        required
                      />
                    </div>
                    <button
                      className="bg-[#FCC822]  w-fit text-lg px-3 py-2"
                      type="submit"
                    >
                      Start Quiz
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="">
              <img src="../../quiz2.png" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
