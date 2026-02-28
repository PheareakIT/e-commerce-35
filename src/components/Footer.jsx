import React from 'react'

function Footer() {
  return (
    <div className="bg-black flex justify-center">
        <div className="w-[80%] max-w-360  bg-black flex justify-around pt-10 pb-10 text-white">
            <div>
                <p>Copyright © 2023 - MasterIT Store</p>
            </div>
            <div className="flex gap-4">
                <a href="#">Home</a>
                <a href="#">Contact us</a>
                <a href="#">About us</a>
                <a href="#">Term and Conditional</a>
            </div>

        </div>
    </div>
  )
}

export default Footer