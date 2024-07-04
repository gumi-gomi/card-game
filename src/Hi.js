import React from 'react'
import styled, {keyframes} from 'styled-components'
import bgimg from './image/paperbg.jpg'
import hihuman from './image/hihuman.png'
import { Link } from 'react-router-dom'


const upani = keyframes`
    0%{transform : translateY(600px);}
    100%{transform : translateY(-700px);}
   
    `

    const Allwrap = styled.div`
    // background-color : #ccd5f0;
    background-image: url(${bgimg});
    background-position : center;

    width : 300px;
    height : 600px;
    outline : 3px solid black;
    border-radius : 10px;
    margin : 0 auto;
    position : relative;
    margin-top : 30px;
    overflow : hidden;
    box-shadow : 6px 6px 10px gray;
    
    .hihuman{
         position: absolute;
      z-index : 5;
      width:300px;
    height : 600px;
    bottom : 0px;
    background-image: url(${hihuman});
    background-position : center;
    background-repeat : no-repeat;
    background-size : cover;
    
    }

    .lorem{
        animation-name : ${upani};
        animation-iteration-count : infinite;
        animation-duration : 30s;
        position:absolute;
        padding : 20px;
        line-height : 1.5;
        font-weight : 600;
        
    
    }

    .backbtn{
      margin : 20px;
      color : black;
      // outline : 1px dotted red;
      display: inline-block;
      position : absolute;
      padding : 5px 10px;
      z-index : 10;
       background-color: #ffffff7b;
       border-radius : 5px;
       box-shadow : 4px 4px 4px gray;
       transition : 0.2s;

       &:hover{
       scale : 1.1;
       }
    }
`

const Hi = () => {

    


  return ( 
    <>
    <Link to={'/'}>
      <Allwrap>
        <Link to={'/'}><div className='backbtn'>Back</div></Link>
        <div className='hihuman'></div>
        <div className='lorem'>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
        </div>
      </Allwrap>
    </Link>
    </>
  )
}

export default Hi;
