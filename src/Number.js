import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import './Number.scss'
import Number1 from './image/number1.png';
import Number2 from './image/number2.png';
import Number3 from './image/number3.png';
import Number4 from './image/number4.png';
import Number5 from './image/number5.png';


const Numbox = styled.div`

.numcount{
  outline: 1px dotted red;
  width: 100px;
  height: 100px;
    background-image: ${props => `url(${props.numnum})`};
  background-position: center;
  background-size: cover;
  // transition : 0.2s
  }
`

const Number = () => {
  const [numinput, setNumInput] = useState();
  const numimg =[Number5, Number4, Number3, Number2, Number1];
 


  useEffect(()=>{

    setTimeout(()=>{

      
      for(let i=0; i<=5; i++){
        setTimeout(() => {
          setNumInput(i);
        },i * 1000);
        if(i===5){
        }
      }
    },5000)

  },[])
    
  return (
    <>
      <Numbox numnum={numimg[numinput]}>
        <h1>number test</h1>
        <p>{numinput}</p>
        <div className='numcount'></div>
      </Numbox>
    </>
  )
}

export default Number;