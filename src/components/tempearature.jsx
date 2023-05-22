import React,{useState,useEffect} from 'react';
import "../components/css/style.css"
function Temparature(){


const[city,setCity] =useState(null);
const[ search,setSearch]=useState('Nagpur')


useEffect(()=>{
    const fetchApi=async()=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${search}&APPID=dbd3b02d8958d62185d02e944cd5f522`  
    const response=await fetch(url);
    const res= await response.json();
    // console.log(res);
    setCity(res.main)
}




    fetchApi()
},[search])

    return(
<>
<div>

<div className="box">

<div className='inputData'>

    <input type="search" value={search} className='inputfield' onChange={(e)=>{
       setSearch(e.target.value) 
    }} />

{
    !city ? (
        <p className='err'>no data Found</p>
    ):(
        <div>
        
        <div className='info'>
<h2 className='location'>
<span className="material-symbols-outlined">
person_pin_circle
</span>{search}


</h2>
<h1 className='temp'>
{city.temp} °F

</h1>

<h4 className='temo'>
               Min:55.25°F | Max: 65.25°F</h4>



</div>
        
     </div>   
        
        

    )
}




</div>



</div>


    </div>
</>


    )
}
export default Temparature;


