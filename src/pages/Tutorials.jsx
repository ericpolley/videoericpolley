import React from 'react'

export default function Tutorials() {
  return (
    <div className='w-full text-center'>
      <h1 className='text-2xl font-medium'>Tutorial Videos</h1>

      <div className='flex flex-col lg:flex-row w-full justify-center items-center'>

{/* CARD START */}
      <div className='flex flex-col w-full  items-center text-black bg-slate-400 lg:mr-6 rounded-xl border-4 border-black mt-4'>
        <p className='text-2xl mb-4 mt-4'>Blender Tutorials</p>
        <iframe className="shadow-xl mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[35vw]  lg:h-[32vh] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw5UZ4t0586vz3p1RqTKTJPP" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>How to use Blender! Tutorials for Beginner to Advanced users. <br /> Follow along with me as I explain step by step how to: <br /> Use Blender</p>
      </div>
      {/* CARD END */}
{/* CARD START */}
      <div className='flex flex-col w-full items-center text-black bg-slate-400  rounded-xl border-4 border-black  mt-4'>
        <p className='text-2xl mb-4 lg:mt-4'>Video Editing Tutorials
        </p>
        <iframe className="shadow-xl mb-4 w-[82vw] h-[280px] md:h-[350px] lg:w-[35vw] lg:h-[32vh] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube.com/embed/videoseries?si=Bd41xxAHENgA-t8A&amp;list=PLce5_YZyrUw6yDtVcf06xNAAxjYrVil3w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>
     <br />
      Tutorials for Beginner to Advanced users. <br />
      Follow along with me as I explain step by step how to: <br />
      Edit Videos
     </p>
      </div>
      {/* CARD END */}

    



      

      </div>
      

    </div>
  )
}
