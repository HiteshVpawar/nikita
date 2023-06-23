import React from "react";
import { Button } from "@material-tailwind/react";
import { product_list } from "../helpher/DataProvider";
import { useNavigate, useNavigation } from "react-router";
// import { useNavigation } from "react-router";

export default function Product() {
  const navigate = useNavigate();
  const handleChange = (element) => {
    navigate("/Mproductlist",  { state: { element1:element }});
  };
  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <div className="flex mx-auto flex-wrap ">
        {product_list.length == 0 && <p>Data Not Found</p>}
        {product_list.map((element, index) => (
          <div
            key={index}
            
            className="flex-container p-3 ml-3 mr-3 mt-3 w-30% max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="img-left">
              <img
                src={element.image}
                alt="Mobile"
                width="180"
                height="150"
                onClick={() => handleChange(element)}
              />
              <div className="">
                <div className="flex items-center mt-1 mb-1">
                  <h1 className="ml-3 text-lg font-medium">{element.name}</h1>
                </div>
                <span className="ml-3 text-lg font-normal">
                  ${element.price}
                </span>
              </div>
              <Button>
                <input type="submit" value="By Now" />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
