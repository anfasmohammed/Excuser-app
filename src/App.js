import { useState } from "react";
import axios from "axios";


function App() {
  const [excuse,setExcuse]=useState("I was passing by a school lane so I was driving slow")
  const fetchData=async(reason)=>{
    const{data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${reason}/`)
    
   setExcuse(data[0].excuse)
  }
  return (
    <div className="App bg-slate-900 flex flex-col gap-9 justify-center items-center h-screen mt-9">
  <h1 className="text-3xl lg:text-5xl text-gray-400">Generate an excuse</h1>
  <button onClick={()=>{fetchData("funny")}} className="rounded-xl bg-gray-100 text-slate-600 px-5 lg:px-7 py-2 text-2xl">Funny</button>
  <button onClick={()=>{fetchData("office")}} className="rounded-xl bg-stone-400 text-slate-600 px-5 lg:px-7 py-2 text-2xl">Office</button>
  <button onClick={()=>{fetchData("developers")}} className="rounded-xl bg-red-200 text-slate-600 px-5 lg:px-7 py-2 text-2xl">Developers</button>
  <h1 className="text-base lg:text-3xl text-gray-400 mr-3 ml-3">{excuse}</h1>
    </div>
  );
}

export default App;
