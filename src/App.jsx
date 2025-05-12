import React from 'react';

const App = () => {
  return ( 
   <div className='h-screen'>
      <div className="relative h-[130%] bg-amber-800  w-full bg-[url('./image1.jpg')] bg-cover bg-center flex flex-col items-center">
      
     
      <h1 className="text-white text-4xl font-bold mt-2">IMPULSE</h1>
      
     
      <div className="absolute top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-6 px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">A taste of every style</h1>
        <button className="bg-amber-500 text-white font-bold py-2 px-6 rounded-md hover:bg-amber-600 transition">
          READ THE BLOG
        </button>
      </div>

      <div className="absolute bottom-6 w-full flex items-center  justify-between px-8 md:px-16">
        <a className="underline text-lg md:text-xl text-white" href="#">FIND OUT MORE</a>
        <a className="underline text-lg md:text-xl text-white" href="#">GET IN TOUCH</a>
      </div>
      </div>
      <div className='h-screen  bg-gray-100 w-full   flex'>
      <div className=' bg-white flex items-center justify-center w-1/2'>
      <img   className='h-[50%] m-auto'  src="pic2.jpg" alt="" />
      </div>
      <div className='h-full flex flex-col  justify-center gap-8 p-20    w-1/2'>
      <div className='h-[2%]   w-[22%] bg-amber-800'></div>
      <h1 className='font-bold  text-5xl text-gray-600'>This is my third & latest post</h1>
      <p className=' text-gray-600 place-content-center '>Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution.</p>
      <button className='border-2 border-amber-800 hover:bg-amber-800 py-2 px-8 w-fit'>READ MORE</button>
      </div>
        </div>
      <div className='h-[98%] bg-[url("pic3.jpg")] bg-cover bg-center w-full'></div>
      <div className='h-[90%] flex flex-col items-center  p-60 gap-2 justify-center w-full '>
      <div className='h-[2%] w-[22%] bg-amber-800 mb-3'> </div>
      <h1 className='text-gray-400 font-bold text-5xl'> We love to travel</h1>
      <h2 className='text-center '>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition.</h2>
      </div>
      <div className='h-[60%] w-full flex'>
      <div className='h-full w-1/3 bg-[url("sandi.jpg")] bg-neutral-700 bg-blend-overlay   bg-cover flex justify-center items-center  bg-center'>
      <h1 className='text-white text-xl'>SANDI BEACHES</h1>
      </div>
      <div className='h-full w-1/3  bg-[url("forest.jpg")]  bg-neutral-700 bg-blend-overlay flex justify-center items-center bg-cover bg-center'>
      <h1 className='text-white text-xl'>FOREST TRAILS</h1>
       </div> 
      <div className='h-full w-1/3  bg-[url("city.jpg")]  bg-neutral-700 bg-blend-overlay flex justify-center items-center  bg-cover bg-center'>
      <h1 className='text-white text-xl'>CITY STREETS</h1>
      </div>
    </div>
    <div className='h-screen bg-gray-100 w-full flex'>
    <div className='h-full flex flex-col  justify-center gap-8 p-20    w-1/2'>
      <div className='h-[2%]   w-[22%] bg-amber-800'></div>
      <h1 className='font-bold  text-4xl text-gray-600'>This is my second post</h1>
      <p className=' text-gray-600 place-content-center '>Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
      <button className='border-2 border-amber-800 hover:bg-amber-800 py-2 px-8 w-fit'>READ MORE</button>
      </div>
      <div className=' bg-white flex items-center justify-center w-1/2'>
      <img   className='h-[50%] m-auto'  src="pic4.jpg" alt="" />
      </div>
      </div>
    <div className=' h-[110%] w-full bg-[url("pic5.jpg")] flex flex-col justify-center items-center gap-10   text-white bg-cover bg-center '>
      <h1 className='text-6xl font-bold text-zinc-100   '>Endlessly customizable</h1>
      <h2 className='font-bold text-zinc-100' >Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment</h2>
      <button className='border-2 bg-amber-900 border-none p-2 w-fit '>FIND OUT MORE</button>
    </div>
    <div className='h-[98%] w-full bg-amber-100'>
      <div className='h-2/3 w-full flex  bg-amber-300 '>
        <div className='h-[100%] w-1/4 flex items-center justify-center bg-gray-700'>
          <h1 className=' text-4xl text-gray-400 font-extrabold'>IMPULSE</h1>
          </div>
        <div className='h-[100%] flex flex-col justify-evenly w-1/4 text-gray-400 font-bold bg-gray-700'>
          <h1 className='text-white font-bold '>MORE INFO</h1>
          <a  href="">ABOUT</a>
          <a href="">INFO</a>
          <a href="">FAQ</a>
          </div>
          <div className='h-[100%] flex flex-col justify-evenly w-1/4 text-gray-400 font-bold bg-gray-700'>
          <h1 className='text-white font-bold '>MORE INFO</h1>
          <a  href="">ABOUT</a>
          <a href="">INFO</a>
          <a href="">FAQ</a>
          </div>
          <div className='h-[100%] flex flex-col justify-evenly w-1/4 text-gray-400 font-bold bg-gray-700'>
          <h1 className='text-white font-bold '>MORE INFO</h1>
          <a  href="">ABOUT</a>
          <a href="">INFO</a>
          <a href="">FAQ</a>
          </div>
       
        
      </div>
      <div className='h-1/3 w-full flex justify-center   bg-gray-700 '>
      <h2 className='text-gray-400 font-semibold'>©2021 DESIGN BY NOVOLIO. IMAGES BY UNSPLASH</h2>
      </div>
    </div>
   </div>
  );
}

export default App;
