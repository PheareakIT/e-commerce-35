import React from 'react'

function Contact() {
  return (
    <div>

      <div className=" w-full h-screen flex justify-center items-center">
        <div class="w-120 h-160 border-gray-400 p-5 shadow shadow-gray-400 md:w-[40%]">
          <h1 className="text-center text-4xl font-bold">Contact us</h1>
          <div className="mt-4">
            <label htmlFor="">Name <span className="text-red-500">*</span></label>
            <br />
            <input className="border border-gray-200 w-full p-4 " type="text" placeholder='Enter your name'/>
          </div>
          <div className="mt-4">
            <label htmlFor="">Phone <span className="text-red-500">*</span></label>
            <br />
            <input className="border border-gray-200 w-full p-4" type="text" placeholder='Enter your phone number'/>
          </div>
          <div className="mt-4">
            <label htmlFor="">Message <span className="text-red-500">*</span></label>
            <br />
            <textarea name="" id="" className="border border-gray-200 w-full p-4 h-46" placeholder='type message here...'></textarea>
          </div>
          <div className="flex justify-end mt-4 ">
            <button className="border px-5 py-2 rounded bg-black text-white hover:bg-black/70 hover:cursor-pointer transition-all">Submit</button>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Contact