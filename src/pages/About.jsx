import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium '>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <p className='text-lg font-medium mb-6'>About Eric Polley</p>
        <p>
        Eric Polley was born in Portland, Oregon and spent his childhood moving around a lot. Despite the frequent changes in location, Eric always had a passion for creativity and technology. In his free time, he enjoyed playing various musical instruments and building computers.
<br /><br />
After high school, Eric started working a regular day job with long hours, consistently working 60 hours per week. Despite his busy schedule, he continued to pursue his passion for animation as a moonlight freelance animator. Infact, the long hour day job may have funded the opportunity to move forward with a new career.
<br /><br />
In September 2021, Eric made the decision to take on freelance animation full-time. He was skilled in using programs such as Blender and Animate CC, and was always looking for ways to improve his craft.
<br /><br />
<br /><br />
In his free time, Eric continues to enjoy playing musical instruments and building computers. He also loves spending time with his daughter, playing card games such as Dungeon Mayhem and Munchkins; Or playing Minecraft ( If his daughter can convince him to play )
<br /><br />
Overall, Eric is a dedicated and talented individual with a passion for creativity and technology. He is always looking for ways to improve his skills and pursue his passions, and his dedication to his craft is evident in the quality of his work.
<br /><br />




        </p>

        <Link to="/contact" className=' '>
<div className='m-8 mb-16 p-2 bg-red-500 text-white hover:text-black hover:border-gray-600 hover:bg-red-300 border-black rounded-xl border-4 text-xl w-[40vw]'>
  <p>Contact for a quote</p>
</div>
</Link>

        <div className='flex flex-col flex-wrap'>
      <p className='m-6 text-xl'>Eric Polley</p>

      <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6'>
      {/* Social media */}
      <a href="https://www.linkedin.com/in/eric-polley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="Linkedin"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://twitter.com/ericrpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="twitter"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://youtube.com/erpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://www.facebook.com/eric.r.polley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://www.instagram.com/erpolley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
        className='md:w-32 md:h-32 w-16 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}

</div>
      <a href="mailto:ericpolley@live.com" target="_blank" rel="noreferrer" className='focus:text-blue-400 text-blue-700 hover:text-blue-300 m-2'><p>ericpolley@live.com</p></a>
      <p className='m-4'>(509)868-2692</p>
      <p className='m-4'>Discord: erpolley#5318</p>

     
</div>



      </div> </div>
  )
}
