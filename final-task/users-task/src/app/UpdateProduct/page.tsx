"use client"

import { useForm } from "react-hook-form";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import Swal from "sweetalert2";

const page = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();

      const axiosPublic=useAxiosPublic();
      const onSubmit =async (data) => {
        const productTitle = data.productTitle;
        const  productDetails=data.productDetails;
        const price = data.price;
    
        const product = {
          productTitle,
          productDetails,
          price 
        };
        console.log(product);
        try {
        const response = await axiosPublic.put("/products/createProduct", data, {
          headers: {
            'Content-Type': 'application/json', // Ensure this matches the expected content type
          },
        })
        //   .then((response) => response.json())
        const responseData = response.data;
        console.log(responseData);
        if (response.status === 201) {
         reset();
          Swal.fire("Thank You!", "Product added!", "success");
        }
        }
        catch(error){
          console.error("Error:", error);
        }
        };

    return (
        <div className="max-w-[1220px] mx-auto py-6">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content md:w-3/4 lg:w-full flex-col md:flex-row">
          <div className="card flex-shrink-0 w-full md:w-3/4 lg:w-1/2 shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body pl-4">
              <div className="flex flex-col md:flex-col lg:flex-row gap-1">
                <div className="form-control"></div>
                <div className="form-control w-full">
                  <div className=" text-[#C6A921] font-medium text-lg text-center flex">
                   
                    <h1 className=" text-[#C6A921] font-bold text-2xl rounded-xl w-full underline">
                     Update Product
                    </h1>
                  </div>
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                      Product Title
                    </span>
                  </label>
                  <div>
                  <input
                    type="text"
                    {...register("productTitle", { required: true })}
                    placeholder="enter product title"
                    name="productTitle"
                    className="border-2 border-[#C6A921]"
                  />
                  {errors.productTitle && (
                    <span className="text-red-700">*Product Title is required</span>
                  )}
                  </div>
                </div>
              </div>
              <div>
                   <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                     Product Details
                    </span>
                  </label>
                  <div>
                  <input
                    type="text"
                    {...register("productDetails", { required: true })}
                    placeholder="Details"
                    name="productDetails"
                    className="border-2 border-[#C6A921]"
                  />
                  {errors.productDetails && (
                    <span className="text-red-700">*Details is required</span>
                  )}
                  </div>
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-[#C6A921] font-medium text-lg">
                     Price
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("price", { required: true })}
                    placeholder="Price"
                    name="price"
                    className="border-2 border-[#C6A921]"
                  />
                  {errors.price && (
                    <span className="text-red-700">*Price is required</span>
                  )}
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="text-white hover:bg-[#C6A921] bg-[#C6A921] p-2 rounded-lg">
                  Update Product
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default page;