import React from 'react'
import { TbMathGreater } from "react-icons/tb";

function ProductDetail() {
  return (
    <div className="h-140">

        <div className="bg-blue-500 p-4 ">

            <div className="bg-pink-300 flex items-center m-auto gap-2 max-w-[90%] lg:max-w-[70%] mx-auto text-sm">
                <a href="">Home</a>
                <TbMathGreater />
                <a href="">Product</a>
                <TbMathGreater />
                <p>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</p>
            </div>

            <div className="bg-amber-400 flex justify-center items-center max-w-[90%] lg:max-w-[70%] m-auto">
                <div className="w-[50%] h-120">
                    <div className="w-[100%] h-[100%] px-24">
                        <img className="w-[100%] h-[100%]" src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png" alt="" />
                    </div>
                </div>
                <div className="w-[50%]">
                    <h3>men's clothing</h3>
                    <h2>Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h2>
                    <h2>109.95$</h2>
                    <div>
                        <div>
                            - 1 +
                        </div>
                        <div>
                            <button>Add to cart</button>
                        </div>
                    </div>
                    <hr />
                    <p>
                        Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday
                    </p>

                </div>
            </div>

        </div>

    </div>
  )
}

export default ProductDetail