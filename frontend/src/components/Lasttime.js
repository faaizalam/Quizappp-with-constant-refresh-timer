// import { time } from 'console';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { Globel } from './Contextapi/Globle';

export const Lasttime = ({ settime,setactive, active }) => {
  const [timer, settimer] = useState(localStorage.getItem("s")>1?localStorage.getItem("s")-1:30);
  const { corr, setcorr } = useContext(Globel);
  // const [ numf, setnuminit ] = useState(localStorage.getItem("savei")||30);
  
//   useEffect(()=>{
    
    
//     const ii=setInterval(()=>{
//       setnuminit(numf-1)
//       localStorage.setItem("savei",numf)
//            console.log(numf)
  
//    },1000)
//         return () => clearInterval(ii);
    
 

 

// },[numf])
      // console.log(numf)
    






   

useEffect(() => {
  if (timer === 0) {
    
    return settime(true);
  }

  const interval = setInterval(() => {
    settimer(timer-1)
    localStorage.setItem("s",timer)
    if(timer<=0){
      
      settimer(30)
    setactive(active+1)
    }
    
    
  }, 1000);
  return () => clearInterval(interval);
}, [active, setactive, settime, timer]);
// console.log(newc)
useEffect(() => {
  
  // if (active!==newc) {
    //   settimer(timer)
    //   console.log("tie")
    
    
    
    // }
    if(corr.correct){
      settimer(30)
    }
        
    

        // console.log(x.correct)
    
  }, [active, corr.correct]);

  return timer;
};
