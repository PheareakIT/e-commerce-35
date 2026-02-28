import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

function Home() {

  //JavaScript
  const [products, setProduct] = useState([]);

  useEffect(() => {

    //create function
    const fetchingData = async () => {
      const respone = await fetch('https://fakestoreapi.com/products?limit=8');
      // console.log(respone);
      const data = await respone.json();
      console.log(data);
      setProduct(data);
    }
    //call function
    fetchingData();
  }, [])


  //Jsx
  return (
    <>


      <main className="bg-[#F6E6CF] w-full h-screen flex justify-center items-center text-center">

        <div className=" flex flex-col gap-4">
          <h3 className="text-2xl font-bold">New Collection</h3>
          <h1 className="text-4xl font-bold">Luxury Without Labels</h1>
          <p>Explore new-in product and best sellers</p>
          <div>
            <button className="bg-black text-white p-2 rounded-xl pt-2 pb-2 pl-8 pr-8" >View Colletion</button>
          </div>
        </div>

      </main>

      <div className="">
        <h2 className="text-center text-3xl font-bold mt-24">Best Sellers</h2>
        <p className="text-center m-4 text-xl text-gray-500">Explore our best seller products</p>

        <div>

          <div className=" w-[70%] m-auto flex justify-around flex-wrap">

            {products.map( pro => (

              <div className=" w-62 border border-gray-400 p-2 rounded-xl mb-6" key={pro.id}>
                <div className="h-76 p-6 ">
                  <img className="w-full h-full hover:scale-110 hover:cursor-pointer transition-all duration-400 " src={pro.image} alt="" />
                </div>
                <div className="">
                  <p className="line-clamp-1">{pro.title}</p>
                  <p>$ {pro.price}</p>
                </div>
              </div>
              
            ))}

          </div>
          <div className="flex justify-center m-6">
            <button className=" text-black p-2 border rounded-xl pt-2 pb-2 pl-8 pr-8 hover:text-white hover:bg-black hover:cursor-pointer transition-all duration-200">Explore more</button>
          </div>





        </div>



      </div>





    </>
  )
}

export default Home