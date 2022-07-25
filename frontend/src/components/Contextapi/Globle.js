import {  createContext, useState } from "react";
// import { createContext } from "vm";

export const Globel=createContext(null)

const Accountinfo=(({children})=>{
    const [active ,setactive]=useState(1)
    const [corr,setcorr]=useState({})
    
    return(
        <Globel.Provider
        value={{corr,setcorr,active,setactive}}
   >
    {children}
        </Globel.Provider>
    )


})
export default Accountinfo