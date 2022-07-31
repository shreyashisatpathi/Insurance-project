import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import TourList from './TourList';
const url = 'https://course-api.com/react-tours-project'
console.log('url',url)
function App(){

const [isLoading,setLoading] = useState(true)
const [data,setData] = useState(url)

async function fetchData(){
try{
   const apiResponse  = await fetch(url);
    const result   = await apiResponse.json(); 
    setData(result);  
    setLoading(false);   
    console.log('data',result)
   }catch(error){
    setLoading(true)
    console.log(error)
 }
};

useEffect(()=>{
  fetchData();
},[])

// fetchData();

if(isLoading){
  return(
    <main>
      <Loading/>
    </main>
  )
}
return (
    <div>
     <TourList tours ={data}/>
    </div>
  )
};
export default App; 