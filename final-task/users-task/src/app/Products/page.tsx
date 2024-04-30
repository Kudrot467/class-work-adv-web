"use client"
import { useEffect, useState } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const page = () => {
    const [products, setProducts] = useState([]);
    const axiosPublic=useAxiosPublic();
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const res = await axiosPublic.get('/products'); // Adjust the endpoint URL as needed
            setProducts(res.data);
          } catch (error) {
            console.error('Error fetching users:', error);
          }
        };
    
        fetchProducts();}, []);
    return (
        <div>
            <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="bg-[#C6A921] text-white font-medium pr-2">
         
            <th className="text-xl">Title</th>
            <th className="text-xl">Description</th>
            <th className="text-xl">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.postId}>
              <th className=" text-center">{product.postId}</th>
              <div>
              <td className="text-[#C6A921] text-center text-xl font-semibold rounded-xl">
                {product.productTitle}
              </td>
              </div>
              <td className="text-[#C6A921] text-center text-xl font-semibold rounded-xl">
                {product.productDescription}
              </td>
              <td className="text-[#C6A921] text-xl font-semibold rounded-xl">
                {product.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
            
        </div>
    );
};

export default page;