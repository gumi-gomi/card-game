import React from 'react'
import styled, {keyframes} from 'styled-components'
import {Link} from 'react-router-dom'
import tree from './image/tree.png'
import human from './image/human.png'
import cloud from './image/cloud.png'
import titleimg from './image/title.png'
import startbtn from './image/start.png'
import recordbtn from './image/record.png'
import hibtn from './image/hi.png'
import bgimg from './image/paperbg.jpg'


const scaleup = keyframes`
    0%{scale : 1;}
    50%{scale : 1.11;}
    100%{scale : 1;}
    `
    const scaleup2 = keyframes`
    0%{scale : 1;}
    50%{scale : 1.1;}
    100%{scale : 1;}
    `
    const updown = keyframes`
    0%{transform: translateY(0px);}
    50%{transform: translateY(10px);}
    100%{transform: translateY(0px);}

    `
    const rightleft = keyframes`
    0%{transform: translateX(0px);}
    100%{transform: translateX(-600px);}
    `

    const rightleft2 = keyframes`
    0%{transform: translateX(0px);}
    100%{transform: translateX(-600px);}
    `
    const rightleft3 = keyframes`
    0%{transform: translateX(0px);}
    100%{transform: translateX(-600px);}
    `
    const rotate = keyframes`
    0%{transform : rotateZ(0deg);}
    25%{transform : rotateZ(-5deg);}
    50%{transform : rotateZ(0deg);}
    75%{transform : rotateZ(5deg);}
    100%{transform : rotateZ(0deg);}
    `
    const rotate2 = keyframes`
    0%{transform : rotateZ(0deg);}
    25%{transform : rotateZ(-5deg);}
    50%{transform : rotateZ(0deg);}
    75%{transform : rotateZ(5deg);}
    100%{transform : rotateZ(0deg);}
    `
    const rotate3 = keyframes`
    0%{transform : rotateZ(0deg);}
    25%{transform : rotateZ(-5deg);}
    50%{transform : rotateZ(0deg);}
    75%{transform : rotateZ(5deg);}
    100%{transform : rotateZ(0deg);}
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

.tre{
  animation-name : ${scaleup};
  animation-iteration-count : infinite;
  animation-duration : 2s;
  position: absolute;
  z-index : 3;
  width:300px;
height : 300px;
bottom : 0px;
background-image: url(${tree});
background-position : center;
background-repeat : no-repeat;
background-size : cover;


}

.human{
  animation-name : ${updown};
  animation-iteration-count : infinite;
  animation-duration : 0.6s;
  position: absolute;
  z-index : 4;
  width:300px;
  height : 300px;
  background-image: url(${human});
  bottom : 0px;
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  
  }

.cloud{
  animation-name : ${rightleft};
  animation-iteration-count : infinite;
  animation-duration : 9s;
  animation-duration: normal;
  z-index : 3;
  width:300px;
  height : 300px;
  left : 300px;
  top : 0px;
  background-image: url(${cloud});
  background-position : center;
  background-repeat : no-repeat;
  position: absolute;
  background-size : cover;
  //  outline : 1px dotted red;

}
  .cloud2{
  animation-name : ${rightleft2};
  animation-iteration-count : infinite;
  animation-duration : 15s;
  animation-duration: ease-in;
  animation-delay: 4.5s;
  z-index : 3;
  width:300px;
  height : 300px;
  left : 300px;
  top : 0px;
  background-image: url(${cloud});
  background-position : center;
  background-repeat : no-repeat;
  position: absolute;
  background-size : cover;
  //  outline : 1px dotted red;

}

  .cloud3{
  animation-name : ${rightleft3};
  animation-iteration-count : infinite;
  animation-duration : 12s;
  animation-duration: normal;
  animation-delay: 6s;
  z-index : 3;
  width:300px;
  height : 300px;
  left : 300px;
  top : 0px;
  background-image: url(${cloud});
  background-position : center;
  background-repeat : no-repeat;
  position: absolute;
  background-size : cover;
  //  outline : 1px dotted red;

}


.title{

  animation-name : ${scaleup2};
  animation-iteration-count : infinite;
  animation-duration : 1s;
  position: absolute;
  z-index : 9;
  width:300px;
  left : -3px;
  height : 140px;
  top : 50px;
  background-image: url(${titleimg});
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  }
  
  .startbtn{
  animation-name : ${rotate};
  cursor: pointer;
  animation-iteration-count : infinite;
  animation-duration : 2s;
  position: absolute;
  z-index : 9;
  width:120px;
  height : 40px;
  left : 90px;
  top : 220px;
  background-image: url(${startbtn});
  background-position : center;
  background-repeat : no-repeat;
  background-size : cover;
  transition:0.3s;

  &:hover{
        scale : 1.3;
        }
        }
        
        .recordbtn{
        cursor: pointer;
          animation-name : ${rotate2};
          animation-iteration-count : infinite;
          animation-duration : 3s;
          position: absolute;
          z-index : 9;
          width:120px;
          height : 40px;
          left : 90px;
          top : 270px;
          background-image: url(${recordbtn});
          background-position : center;
          background-repeat : no-repeat;
          background-size : cover;
          transition : 0.3s;
        
        &:hover{
          scale : 1.3;
        }
        }
        
        .hibtn{
        cursor: pointer;
         animation-name : ${rotate3};
          animation-iteration-count : infinite;
          animation-duration : 4.5s;
          position: absolute;
          z-index : 9;
          width:120px;
          height : 40px;
          left : 90px;
          top : 320px;
          background-image: url(${hibtn});
          background-position : center;
          background-repeat : no-repeat;
          background-size : cover;
          transition : 0.3s;
          
          &:hover{
        scale : 1.3;
        }
        }
        
        `

const Main = () => {

    


// ---------------------------------------------------스타일드 컴포넌트 시작 ---------------------

            const clickHnadler = ()=>{

            
            }

// ----Main 리턴 시작 ------------------------------------------------------
  return (

    <>
        <Allwrap>
            <div className='title'></div>
            <Link to={'./card'}>
            <div className='startbtn'></div>
            </Link>
            <Link to={'./scores'}>
            <div className='recordbtn'></div>
            </Link>
            <Link to={'./hi'}>
              <div className='hibtn'></div>
            </Link>
            <div className='tre'></div>
            <div className='human'></div>
            <div className='cloud'></div>
            <div className='cloud2'></div>
            <div className='cloud3'></div>
        </Allwrap>
    </>
  )
}

export default Main
