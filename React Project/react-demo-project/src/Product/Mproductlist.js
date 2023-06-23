import {} from "@material-tailwind/react";
import React from "react";
import { Mproductlist_list } from "../helpher/DataProvider";
import { useLocation, useNavigate } from "react-router";
// import { useLocation } from "react-router";
export default function Mproductlist() {
  console.log(Mproductlist_list);
  const location = useLocation();
  const navigate=useNavigate();
    let  element1  = location.state;
    console.log('element1 : ', element1 );
    const handlalcartbutton=(element)=>{
      alert(22)
      // navigate("/Productcard");
      navigate("/Productcard",  { state: { element1:element }});
    }
  return (
    <div className="w-[700px]">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="flex mx-auto" />
        <div
          className=" p-3 ml-2 mr-2 mt-3  h-[5]  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
                  <div className="flex ">
            <a target="_blank" href="/images/iphone.jpg" />
            {/* <img
              className="flex justify"
              src="/images/iphone.jpg"
              alt="Mobile"
              sizes= "16x16" 
              width="350"
              height="100"
            /> */}
             <img
                src={element1.element1.image}
                alt="Mobile"
                width="180"
                height="150"
              />
            <div>
            <div className="px-3 pb-3">
              <div className="flex items-center mt-0.25 mb-0.75">
                <strong >{element1.element1.name}</strong>
              </div>
              <h1>{element1.element1.description}</h1>
            </div>
            <h1>{element1.element1.Ram}</h1>
            <p>{element1.element1.cemera}</p>
            <p>
              <strong>{element1.element1.Network}</strong>{" "}
            </p>
            <p>{element1.element1.Battery}</p>
            <p>{element1.element1.Sensor}</p>
            {/* <span>&#8360;</span> */}
          <strong>&#8360;{element1.element1.price}</strong>
        <p></p>
        <div className="flex items-center">
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>First star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Second star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Third star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-yellow-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fourth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    <svg aria-hidden="true" className="w-5 h-5 text-gray-300 dark:text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Fifth star</title><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
</div>
          <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
          onClick={()=>handlalcartbutton()}
          >
  Add to cart
</button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  By Now
</button>

        </div>
        </div>
        </div>
      
    </div>
  );
}
