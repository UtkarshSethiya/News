import './news.css'
import React from 'react';
function News(props){

const date=new Date(props.time).toLocaleString('en-IN', { timeZone: 'Asia/Jakarta' });
return(
   
    <div  className='headline  '>
        <div className='row '>
            <div className='col-md-4 col-lg-5 '><div className='imagewrapper  '><img src={props.image} height="220px" width="240px"   ></img></div>
            
        </div>
   
        <div className=' col-md-8 col-lg-7 ' > <span className='head' >{props.headline}</span>
        <div className='content'>{props.content}
        <br></br>
      <a href={props.details}><button className='smart'>Readmore</button></a>
      
        </div>
        </div>
  
  <div  className='time'><span >Published :-{props.more}   {date}</span><br></br>
  
  </div> 

   </div>


  


    </div>



   






          
         
)

}
export default News;