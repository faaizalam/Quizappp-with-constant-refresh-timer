import React, { useContext, useEffect, useState } from 'react'
import { Globel } from './Contextapi/Globle'
import { Lasttime } from './Lasttime'
// import { Lasttime } from '.components/Lasttime'

// import { Timer } from '.components/Timer'


export const Mainquizs = ({earned,timess,data,settime,setactive,active}) => {
  const [q,setq]=useState(null)
  const [selectedans,setselectedans]=useState({})
  const [ans,setasn]=useState('')
  const [clasname,setclassname]=useState("act")
  const { corr, setcorr } = useContext(Globel);
  // setcor("hello")

  useEffect(()=>{
    setq(data[active-1])
   
    // console.log(active.id)
    
  },[active, data])
  
  //  console.log(selectedans)
 
  const anserhand=(x)=>{
    setcorr(x)
    setselectedans(x.text)
    // <Lasttime/>
   
    console.log(x);
    setclassname("active")
    // console.log(selectedans);
    setclassname(x.correct? "correct":"wrong")
  
    setTimeout(()=>{

      // console.log(clasname)
      if(x.correct){
        setactive(active+1)
        
      
        
      }else{
        settime(true)
      selectedans({})
      }
      
    },3000)

  
  // setTimeout(()=>{
  //   setclassname(x.correct? "correct" :'wrong')
  // },2000)

  
}
console.log(clasname);
  return (
    <div className='mainin'>
        <div className='Question'>
          {
            
            q?(q.Qs):(<div>no found</div>)
          }
       

        </div>
        <div className='center'>
          {
            timess?(<div>you have earned:{earned} </div>):(
              
                q?q.answer.map((x)=>(
                  
                  <div className='in' key={x.text} onClick={()=>{anserhand(x)}}>
                    <div  className={selectedans===x.text?clasname:"answer"}>
                 
                    {x.text}
                    </div>
                    </div>
                    
      
                )):<div>no </div>
              

            )
          }
       </div>
        </div>


    
  )
}
