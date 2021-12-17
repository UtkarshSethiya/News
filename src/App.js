
import './App.css';
import React, {useEffect, useState } from 'react';

import News from './components/news';
//drawer
/*


*/

function App() {
  const[general,set_general]=useState([]);
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
let data=general
 
//TOP HEADLINES TOP HEADLINES TOP HEADLINES

const[general2,set_general2]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/general/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      set_general2(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)


//BUSINESS BUSINESS BUSINESS BUSINESS
  const[getnews,setnews]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/business/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      setnews(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)



//Entertainment Entertainment Entertainment Entertainment
const[getnews1,setnews1]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/entertainment/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      setnews1(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)


//SPORTS SPORTS SPORTS SPORTS

const[getnews2,setnews2]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/sports/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      setnews2(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)

// TECHNOLOGY TECHNOLOGY TECHNOLOGY TECHNOLOGY
const[getnews3,setnews3]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      setnews3(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)

console.log(getnews3);

//HEALTH HEALTH HEALTH HEALTH

const[getnews4,setnews4]=useState([]);
useEffect(()=>{
  fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json")
  .then(response=>{
    return response.json();
  }).then(
    data=>{

      setnews4(data.articles);
    }
  ) .catch(error => {
    console.log(error)
  })
}
,[]
)




//rough
const detailschangehandler_general=()=>{
  set_general(general2);
}
const detailschangehandler_sport=()=>{
  set_general(getnews2);
}

const detailschangehandler_entertainment=()=>{
  set_general(getnews1);
}
const detailschangehandler_business=()=>{
  set_general(getnews);
}
const detailschangehandler_technology=()=>{
  set_general(getnews3);
}
const detailschangehandler_health=()=>{
  set_general(getnews4);
}




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
        <div className='tm'> {ist}</div>
        
         </div>
<br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
         <div className='type row'>
           <div className='col-md-4'></div>
           <div className='btn col-md-4'>
           <button className='button' onClick={detailschangehandler_general} ><i class="bi bi-newspaper"></i> Top Headlines</button><br></br><br></br>
           <button className='button' onClick={detailschangehandler_sport} ><i class="bi bi-newspaper"></i> Sports</button>
<button className='button'  onClick={detailschangehandler_entertainment} ><i class="bi bi-newspaper"></i> Entertainment</button>
<button className='button'  onClick={detailschangehandler_business} ><i class="bi bi-newspaper"></i> Business</button>
<button className='button' onClick={detailschangehandler_technology} ><i class="bi bi-newspaper"></i> Technology</button>
<button className='button' onClick={detailschangehandler_health} ><i class="bi bi-newspaper"></i> Health</button>

           </div>
           

</div>
<h2>HeadLines</h2>
         <div className='container-md'>
         <div className='newswrapper row'>
           
           
           {
        data&&data.map((data)=>{
         
           return <div className='col-md-6'><News image={data.urlToImage} content={data.description} time={data.publishedAt} headline={data.title} more={data.author} details={data.url}></News></div>
         }

         )
        
        }
           
       <div className='newsbox'>
      
       
       
  </div>
  </div>
         </div>

         <footer class="footer">
         <div class="container text-center">
           <h1>By Utkarsh Sethiya</h1>
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


