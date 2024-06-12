import React from 'react'
import { Link } from 'react-router-dom'

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
        <p className='text-2xl mb-4 lg:mt-4'>Animate CC Tutorials</p>
        <iframe className="shadow-xl mb-4 w-[82vw] h-[280px] md:h-[350px] lg:w-[35vw] lg:h-[32vh] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube.com/embed/videoseries?list=PLce5_YZyrUw6Q3aSL4q3owy7rAZ4_ERuM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        
        <p className='text-md lg:mb-12 mt-4 pt-2 pr-5 pl-5 pb-5 h-[100px]'>
     <br />
     How to use Animate CC! Tutorials for Beginner to Advanced users. <br />
      Follow along with me as I explain step by step how to: <br />
      Use Animate CC
     </p>
      </div>
      {/* CARD END */}

    



      

      </div>
      <div className='flex justify-center items-center'>
      <Link to="/contact" className=' '>
<div className='m-12 mb-20 p-2 bg-red-500 text-white hover:text-black hover:border-gray-600 hover:bg-red-300 border-black rounded-xl border-4 text-xl w-[40vw]'>
  <p>Contact for a quote</p>
</div>
</Link>
</div>

    </div>
  )
}
