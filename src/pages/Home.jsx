import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
           <iframe className="shadow-xl mb-2 md:mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[70vw] lg:h-[550px] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube.com/embed/videoseries?si=hdEiQG-LXGGudA4Y&amp;list=PLce5_YZyrUw7E8cKu0041Yp-bSPBmNifU" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       
      <div className='md:flex lg:flex-row items-center md:ml-4 md:mr-4'>
        <div className='md:flex md:flex-col md:justify-center md:object-center text-center md:items-center'>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

     
<p className=' font-bold text-3xl md:mb-2 mt-4 border-b-2 border-black p-1'> Eric Polley </p>
<p className=' font-bold text-lg md:mb-2'> 
Video Editor and Videographer</p>
<p className='border-black border-2  border-t-4 p-4 mt-2 md:m-4 md:mb-4 rounded-lg w-full md:w-[75%] bg-slate-200'>
I am a dedicated video editor and videographer with a rich background in animation and a keen eye for the perfect shot. Proficient in Adobe Premiere Pro, After Effects, and Blender, I blend technical prowess with creative flair to produce captivating videos.

Over the past few months in my current role, I've refined my videography and editing skills, ensuring each project I undertake is visually stunning and narratively compelling. My expertise in animation allows me to infuse dynamic visual effects that enhance the storytelling experience.

Whether capturing moments behind the camera or crafting them in the editing suite, my mission is to create content that not only meets but exceeds expectations. Let's work together to bring your vision to life and create videos that truly stand out.
</p>
</div>
<div className=' m-2 flex justify-center items-center'>

</div>
</div>

      <Link to="/contact" className=' '>
<div className='m-2 mb-12 p-2 bg-red-500 text-white hover:text-black hover:border-gray-600 hover:bg-red-300 border-black rounded-xl border-4 text-xl w-[40vw]'>
  <p>Contact for a quote</p>
</div>
</Link>

    </div>
  )
}
