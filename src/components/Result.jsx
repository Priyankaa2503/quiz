import React from 'react'

function Result() {
  return (
    <div className=" p-10 h-screen bg-[#313131] w-full">
    <div className="bg-[#734EDC] rounded-2xl shadow-2xl h-[500px] md:h-[820px] w-full pl-6 py-6 mt-10 md:m-0">
      <div className="bg-[#545757] w-full h-[500px] md:h-[850px] rounded-2xl  p-6 flex flex-col justify-center gap-4 md:gap-10 items-center">
      
        <p className="font-poppins font-bold text-center text-white text-xl md:text-5xl  ">
          Congratulations 🎊
        </p>
        <p className='font-poppins font-bold text-center text-white text-xl md:text-5xl '> Your Score is : 10</p>
      
      
        
        <img src="./winners.svg" alt="" className="md:mt-10 w-[450px] h-[450px]"></img>
        </div>
    </div>
  </div>
  )
}

export default Result