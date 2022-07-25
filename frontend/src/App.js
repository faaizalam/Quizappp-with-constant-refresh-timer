// import logo from './logo.svg';
import { useContext, useEffect, useState } from 'react';
import './App.css';
import { Mainquizs } from './components/Mainquizs';
import { Lasttime, Timer } from './components/Lasttime';
import { Globel } from './components/Contextapi/Globle';

function App() {
  // const [active ,setactive]=useState(1)
  const {active,setactive}=useContext(Globel)
  const [qno ,setqno]=useState(1)
  const [timess ,settime]=useState(false)
  const [earned,setearned]=useState("$ 0")
  console.log(active)
  const payra=[
  {
      id:1,amount:"$100"
    },
    {
      id:2,amount:"$200"
    },
    {
      id:3,amount:"$300"
    },
    {
      id:4,amount:"$400"
    },
    {
      id:5,amount:"$500"
    },
    {
      id:6,amount:"$600"
    },
    {
      id:7,amount:"$700"
    },
    {
      id:8,amount:"$800"
    },
    {
      id:9,amount:"$900"
    },
    {
      id:10,amount:"$1000"
    },
    {
      id:11,amount:"$1100"
    },
    {
      id:12,amount:"$1200"
    },
    {
      id:13,amount:"$1300"
    },
    {
      id:14,amount:"$1400"
    },
    {
      id:15,amount:"$1500"
    },
  ].reverse()

 const data=[
  {
    id:1,
    Qs:"pakistan was come into being on ___ agust",
    answer:[
      {
        text:"1999",
        correct:false,
      },
      {
        text:"1947",
        correct:true,
      },
      {
        text:"1891",
        correct:false,
      },
      {
        text:"1988",
        correct:false,
      },
    ]
  },
  {
    id:1,
    Qs:"Imran khan was the ___ leader",
    answer:[
      {
        text:"honest",
        correct:true,
      },
      {
        text:"dishonest",
        correct:false,
      },
      {
        text:"1891",
        correct:false,
      },
      {
        text:"1988",
        correct:false,
      },
    ]
  },
  {
    id:1,
    Qs:"who was the founder of pakistan",
    answer:[
      {
        text:"AMir liaquit",
        correct:false,
      },
      {
        text:"shiekh",
        correct:false,
      },
      {
        text:"Quiade-azam",
        correct:true,
      },
      {
        text:"1988",
        correct:false,
      },
    ]
  }
 ]



 useEffect(()=>{
  const amounts=payra.find((x)=>x.id===active-1)
  active>1 &&setearned(amounts.amount)
 },[active, payra])


  return (
    <div className="App">
      <div className="main">
      <div className='center'>
        <Mainquizs earned={earned} timess={timess} data={data} settime={settime} setactive={setactive} active={active}/>
      </div>
      </div>
        <div>
      </div>
      {
        timess?(<div>you have earned:{earned}</div>):(
          <div className="money">
            <div className='timer'><Lasttime settime={settime} setactive={setactive} active={active}/></div>
          <ul>
          {
            payra.map((x)=>(
              <div className='sides' key={x.id}>
                <div className={x.id===active?"active":"sides"}>  
                <span>{x.id}</span>
              <li >{x.amount}</li>
              </div>
              </div>
              
            ))
          }
          </ul>
        </div>

        )
      }
     
    </div>
  );
}

export default App;
