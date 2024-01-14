import Globe from './JetGlobe20.json'
import { useState } from "react";
import Lottie from 'lottie-react';
import "./css/AnimateGlobe.css"

function AnimateGlobe() {
    const [pos, setPos] = useState(0)

    let prevScrollPos = window.scrollY
    function pushDwn() {
         setPos((prevNum)=> prevNum + 1)
         
       }       

    function pullUp(){
        setPos((prevNum)=> {
           return prevNum - 1
        })
    }

    window.onscroll = ()=>{
        // let currScrollPos = window.scrollY

        // if (prevScrollPos > currScrollPos) {
        //     pullUp()
        // }
        // else{
        //      pushDwn()
               
        // }
        // setPos((prevVal)=> prevVal = window.scrollY)
    }

    return (
      
        <div className='AnimateGlobe' style={{transform:`translateY(${pos}px)`}} >
            
            <Lottie className='lotie'  animationData={Globe}/>
        </div>
    )
}


export default AnimateGlobe;


// const increase =()=>{
//     let num = 0
//     if (window.onscroll) {
//         num++
//         console.log("scrolling windyy");
//     }
// }

// increase()