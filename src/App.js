
import './App.css';
import React, {useEffect, useState } from 'react';

import News from './components/news';
//drawer
/*

 const[general,set_general]=useState([]);
  useEffect(()=>{
    fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=e031eb172a3e45aaa171ea8cea9b402f")
    .then(response=>{
      return response.json();
    }).then(
      data=>{
  
        set_general(data);
      }
    ) .catch(error => {
      console.log(error)
    })
  }
  ,[]
  )
  console.log(general);
*/

function App() {
  const[general,set_general]=useState([]);
/*useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      set_general(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)*/

useEffect(()=>{

  
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      set_general(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)
console.log(general);





let data=general
 
//TOP HEADLINES TOP HEADLINES TOP HEADLINES






let d = new Date();

let utc =  + d.getTime() + (d.getTimezoneOffset() * 60000);
let nd = new Date(utc + (3600000*+5.5));
var ist =  nd.toLocaleString();

const indtime= new Date().toLocaleString('en-IN', { timeZone: 'Asia/Jakarta' });
//date object
  return (
    //drawer
    
   
    
       <div className="App  ">
         

          <div className='heading container-fluid sticky'>
             <h1> <i class="bi bi-newspaper icon"></i> Daily HeadLines </h1>
     
        
  
           

</div>
<h2>HeadLines</h2>
         <div className='container-md'>
         <div className=' newscont row'>
           
           
           {
        data&&data.map((data)=>{
         
           return <div className='col-md-6 topmain'><News image={data.urlToImage} content={data.description} time={data.publishedAt} headline={data.title} more={data.author} details={data.url}></News></div>
         }

         )
        
        }
           
       <div className='newsbox'>
      
       
       
  </div>
  </div>
         </div>

         <footer class="footer">
         <div class="container text-center">
           
        <a href="#"><i class="fa fa-facebook">Facebbok</i></a>
        <a href="#"><i class="fa fa-twitter">Twitter</i></a>
        <a href="#"><i class="fa fa-linkedin">Linkedin</i></a>
        <a href="#"><i class="fa fa-google-plus">Google+</i></a>
        <a href="#"><i class="fa fa-skype">Skype</i></a>
      </div>
    </footer>

        
    </div>
 
   
  );
}

export default App;


