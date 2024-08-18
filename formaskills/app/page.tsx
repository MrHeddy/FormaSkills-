"use client";
import {Menu}  from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
            
    <body className="fixed inset-0 bg-gray-900 bg-opacity-100  justify-center items-center transition-opacity duration-300">
      <Menu />

      TEST
      <div className=" fixed inset-0 flex justify-center items-center">
      <div className="w-2/6 bg-slate-500 h-3/6 border-blue-500 rounded-md border-2 mr-20 mt-20 "></div>
      <div className="w-2/6 bg-slate-500 h-3/6 border-blue-500 rounded-md border-2 ml-20 mt-20 "></div>
      <div className="w-2/6 bg-slate-500 h-3/6 border-blue-500 rounded-md border-2 ml-20 mt-20 "></div>
      </div>
    </body>
    
  );
}