import React, { useState } from 'react'
import styled from 'styled-components';

const Cardgame = () => {
  {/* ---------------------------------------   들어가야하는것 
    1. 같은 숫자가 적힌 카드 8쌍, 카드 총 16개 생성
    2. 16개의 숫자를 랜덤으로 배치
    3. 뒤집었을때 같은 숫자가 나오면 카드가 사라진다.
    4. 뒤집었을때 다른 숫자가 나오면 다시 원래대로 뒤집힌다.
    5. 시작할때 카드는 전부 뒤집어져있다가(숫자가 보이도록) 3초뒤에 다시 뒤집힌다.
    6. 3초뒤 카드가 뒤집혔을때 타이머가 작동한다.
    7. 게임이 끝나면 로컬스토리지에 정보를 저장하고 큰 순서대로 record에 위부터 정렬한다.
    8.
  */}


    // --------------------------------------------- 스타일드 컴포넌트 --------------------
    const Allwrap = styled.div`
    // background-color : #ccd5f0;
    width : 300px;
    height : 600px;
    outline : 3px solid black;
    border-radius : 10px;
    margin : 0 auto;
    position : relative;
    margin-top : 30px;
    overflow : hidden;
    box-shadow : 6px 6px 10px gray;  
  
    .cardarea{
      outline : 1px dotted red;
      width : 300px; 
      height : 300px;
      top : 80px;
      position : absolute;
    }
  `


  // 1번 작업 수행 (카드 8쌍 만들기)


  
  const makeCards = ()=>{
    const colors = ['#FF6666', '#66B2FF', '#FF66FF', '#66FF66', '#FFCC66', '#FF9966', '#99CCFF', '#CC99FF'];
    const cards =[];
    
    
    for( let i =0; i<8; i++){
      cards.push({id : i, color : colors[i]});
      cards.push({id : i, color : colors[i]});
    }
    
    return cards.sort(()=> Math.random() - 0.5)
    
  }
  const [cards , setCards] = useState(makeCards())
  
  setCards(makeCards());

  // console.log(cards);





  return (
    <>
      <Allwrap>
        <div className='cardarea'>
        </div>


      </Allwrap>
    </>
  )
}

export default Cardgame;