import {useEffect, useState } from 'react';
import LandingPageCard from './LandingPageCard';
import picture from './picture.webp';


const LandingPage = () => {
  const [clothing, setClothing] = useState([]);
  const [home, setHome] = useState([]);
  const [lifestyle, setLifestyle] = useState([]);
  
  useEffect(()=> {
      fetch('/clothing')
      .then((r)=> r.json())
      .then(setClothing)
      .catch(error => console.error(error))
  },[])
  useEffect(()=> {
      fetch('/home')
      .then((r)=> r.json())
      .then(setHome)
      .catch(error => console.error(error))
  },[])
  useEffect(()=> {
      fetch('/lifestyle')
      .then((r)=> r.json())
      .then(setLifestyle)
      .catch(error => console.error(error))
  },[])

  function sideImages(array, num1, num2){

    let newClothing = array.slice(num1,num2).map((product)=> {
     return (
         <a href={`/products/${product.id}`}>
     <LandingPageCard 
                 name={product.name} 
                 price={product.price} 
                 image={product.image} 
                 color={product.color} 
                 back_image={product.back_image} 
                 id={product.id}
                 key={product.id}/>
      </a> 
        )
             }
     )
     return newClothing
 } 



    return (
    <div className="everythingbox">
         <div className="ad5">
                <a href="/lifestyle">
                    <img src="https://images.ctfassets.net/5de70he6op10/6kBL1V74MuW99MCopainQJ/130a9b3320ad002372a3146aaefb43a4/30_off_entertaining__SECONDARY_BANNER_ends_tonight.jpg?w=2882&q=80&fm=webp" alt="ad5"/> 
                </a>
         </div>
         <div className="topbox">
            <div className="topbox1">
                <div className="headerbox">
                    <div className="boxes headermainbox" >
                            <img src={picture} alt="lady"/>     
                </div>
                    <div className="boxes headersplitbox">
                        <div className="headersplitcolumn">
                        {sideImages(clothing, 25,27)}
                        </div>
                </div>
                <div className="boxes headerlowerbox">
                    {sideImages(home, 8,9)}
                </div>
                </div>
                <div className="sideimages"> 
                {sideImages(clothing,3,7)}
                </div>
           </div>
           <a href="/clothing"><div className="ad1">
                <img src="https://li0.rightinthebox.com/imagegy/202101/a141e622114d4e5c8a494a256b8ba056en5.jpg" alt="ad1" />
            </div></a>
         </div>
          <div className="middlebox">
             <div className="middlebox1"> 
              {sideImages(clothing,30,34)}
              </div>
              <a href="/lifestyle"><div className="ad2">
                 <img src="https://m.media-amazon.com/images/G/01/2021/homepage11.01/HOMEPAGE-HERO-GIFT-GUIDE-BANNER-1440x250.png" alt="ad2" />
             </div></a>
            <div className="middlebox2">
              {sideImages(clothing,12,16)}            
            </div>
            <div className="ad3"><a href="/clothing">
            <img src="https://li0.rightinthebox.com/imagegy/202101/7c6a233dcbba460a8d146449989b0e15en3.jpg" alt="ad" />
            </a>
            </div>
        </div>
        <div className="lowbox">
            <div className="lowbox1">
               {sideImages(lifestyle,4,8)}  
            </div>
        </div>
    </div>
    )
}

export default LandingPage;