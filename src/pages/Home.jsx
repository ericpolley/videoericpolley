import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
           <iframe className="shadow-xl mb-2 md:mb-4 w-[85vw] h-[280px] md:h-[350px] md:w-[82vw] lg:w-[70vw] lg:h-[550px] border-8 rounded-xl border-black" width="560" height="235" src="https://www.youtube-nocookie.com/embed/videoseries?list=PLce5_YZyrUw6cXu0RujxX5kBiVl9zxJT7" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
       
      <div className='md:flex lg:flex-row items-center md:ml-4 md:mr-4'>
        <div className='md:flex md:flex-col md:justify-center md:object-center text-center md:items-center'>
      <h1 className='text-2xl font-medium mt-4 hidden'>Eric Polley - Software Engineer, Animator, Game Designer, Jack of all hats</h1>

     
<p className=' font-bold text-3xl md:mb-2 mt-4 border-b-2 border-black p-1'> Eric Polley </p>
<p className=' font-bold text-lg md:mb-2'> 
2d Character Animator</p>
<p className='border-black border-2  border-t-4 p-4 mt-2 md:m-4 md:mb-4 rounded-lg w-full md:w-[75%] bg-slate-200'>Eric Polley is a skilled 2D character animator who offers his services for creating digital assets. With expertise in this field, he caters to individual project requirements and provides personalized quotes based on the unique approach needed for each project. The range of time to complete one minute of animation varies based on the individual need of the project. If you're interested in discussing your project, feel free to get in touch with Eric today as he is enthusiastic about collaborating and bringing your ideas to life.</p>
</div>
<div className=' m-2 flex justify-center items-center'>
<iframe className='md:w-[260px] md:h-[480px] sm:w-[180px] sm:h-[360px] shadow-xl md:mb-4 md:mr-16 border-8 rounded-xl border-black' width="315" height="560" src="https://www.youtube-nocookie.com/embed/videoseries?si=FRm9G0gG6cFa5pKd&amp;list=PLce5_YZyrUw7J8jSN5vAaqg5YOTrJ4z0v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
