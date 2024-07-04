import React from 'react'
import styled, { keyframes } from 'styled-components';
import bgimg from './image/paperbg.jpg'
import highscore from './image/highscore.png'
import { Link } from 'react-router-dom';

const updown = keyframes`
0%{transform: translateY(0px);}
50%{transform: translateY(10px);}
100%{transform: translateY(0px);}

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

  .scoreboard{
      // outline: 1px dotted red;
      text-align : center;
      height : 100%;
      margin-top : 210px;

      li{
          margin-bottom: 20px;
          font-size:40px;
      }
      
  }
      .highscore{
      animation-name : ${updown};
      animation-iteration-count : infinite;
      animation-duration : 0.6s;
      position : absolute;
        width : 200px;
        height : 200px;
        // outline : 1px dotted red;
        left : 15%;
        top: 65px;
        background-image: url(${highscore});
        background-position : center;
        background-size : cover;
      }

      .reset{
      margin : 20px;
    color : black;
    // outline : 1px dotted red;
    display: inline-block;
    right : 0;
    position : absolute;
    padding : 5px 10px;
    z-index : 30;
     background-color: #ffffff7b;
     border-radius : 5px;
     box-shadow : 4px 4px 4px gray;
     transition : 0.2s;
     cursor : pointer;

     &:hover{
     scale : 1.1;
     }
      }
  `


const Scores = () => {

   
    const localList = localStorage.getItem('scores')
    const scores = localList ? JSON.parse(localList) : [];

    const sortedArray = scores.length > 0 ? scores.sort((a, b) => a - b) : [];
    console.log(sortedArray)

    const resetHandler = ()=>{
      localStorage.removeItem('scores')
    }

  return (
    <>
      <Link to={'/'}>
    <Allwrap>
          <div className='reset' onClick={resetHandler}>리셋</div>
        <Link to={'/'}><div className='backbtn'>Back</div></Link>
        <div className='highscore'></div>
        <ul className='scoreboard'>
            {
              sortedArray.map( item =>
                <li>{item}초</li>
                )
              }
        </ul>
    </Allwrap>
      </Link>
    </>
  )
}

export default Scores;
