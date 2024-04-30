"use client"
import Image from "next/image";
import useAxiosPublic from "./Hooks/useAxiosPublic";
import { useEffect, useState } from "react";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";
import Link from "next/link";

export default function Home() {
  const [users, setUsers] = useState([]);
  const axiosPublic=useAxiosPublic();

  const navItems=[
    {
      route: "Home",
      path:"/"
    },
    {
      route:"Registration",
      path:"/Registration"
    },
    {
      route:"Login",
      path:"/Login"
    },
    {
      route:"Products",
      path:"/Products"
    }
  ]

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axiosPublic.get('/users'); // Adjust the endpoint URL as needed
        setUsers(res.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();}, []);
   
        
  return (
    <main className="flex flex-col items-center justify-between p-24">
      {
        navItems.map((item,index)=>
         <div key={item} className="flex mr-3 items-center">
           <Link href={item.path}>
            <button className="text-xl font-semibold rounded-xl px-3 text-white bg-amber-600">{item.route}</button>
          </Link>
         </div>
        )
      }
     <h1>Total Users:{users.length}</h1>
     <div>
     <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="bg-[#C6A921] text-white font-medium">
          <th className="text-xl">Count</th>
          <th className="text-xl">User Id</th>
            <th className="text-xl">Username</th>
            <th className="text-xl">Role</th>
            <th className="text-xl">Contact no</th>
            <th className="text-xl">Email</th>
            <th className="text-xl">Remove</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.userId}>
              <th className=" text-center">{index + 1}</th>
              <th className=" text-center">{user.userId}</th>
              <div>
              <td className="text-[#C6A921] text-center text-xl font-semibold rounded-xl">
                {user.username}
              </td>
              </div>
              <td className="text-[#C6A921] text-center text-xl font-semibold rounded-xl">
                {user.role}
              </td>
              <td className="text-[#C6A921] text-xl font-semibold rounded-xl">
                {user.contact}
              </td>
              <td className="text-[#C6A921] text-xl font-semibold text-center">
                {user.email}
              </td>
            
              <td className="text-[#C6A921] text-xl font-semibold text-center">
                <button
                 
                  className="btn btn-ghost btn-lg"
                >
                  <FaTrashAlt className="text-red-600"></FaTrashAlt>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </main>
  );
}
