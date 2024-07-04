import React, { useState, useEffect } from 'react';
import styled, {keyframes} from 'styled-components'
import './Card.css';
import bgimg from './image/paperbg.jpg'
import Number1 from './image/number1.png';
import Number2 from './image/number2.png';
import Number3 from './image/number3.png';
import Number4 from './image/number4.png';
import Number5 from './image/number5.png';
import { Link } from 'react-router-dom';

const generateCards = () => {
  const colors = ['#FF6666', '#66B2FF', '#FF66FF', '#66FF66', '#FFCC66', '#FF9966', '#99CCFF', '#CC99FF'];
  const cards = [];

  for (let i = 0; i < 8; i++) {
    cards.push({ id: i, color: colors[i], matched: false });
    cards.push({ id: i, color: colors[i], matched: false });
  }

  return cards.sort(() => Math.random() - 0.5);
};

const Allwrap = styled.div`
    background-image: url(${bgimg});
    background-position : center;
    width : 300px;
    height : 600px;
    outline : 3px solid black;
    z-index : 0;
    border-radius : 10px;
    margin : 0 auto;
    position : relative;
    margin-top : 30px;
    overflow : hidden;
    box-shadow : 6px 6px 10px gray;    

    .backbtn{
      margin : 20px;
      color : black;
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

  const Numbox = styled.div`
  .numcount{
    width: 300px;
    height: 300px;
    background-image: ${props => `url(${props.numnum})`};
    background-position: center;
    background-size: cover;
    position : absolute;
    left:50%;
    transform: translateX(-50%);
    top:50px;
    z-index: 2;
    display: ${props => props.display};
  }
  `

const Card = () => {
   // ------------------- 숫자나오기 ------------------
   const [numinput, setNumInput] = useState();
   const [display, setDisplay] = useState('block');
   const numimg =[Number5, Number4, Number3, Number2, Number1];
  
   
  useEffect(() => {
    const startTimer = setTimeout(() => {
      for(let i=0; i<=5; i++){
        setTimeout(() => {
          setNumInput(i);
        },i * 1000);
      }
    }, 5000)

    return () => clearTimeout(startTimer);
  }, [])

  // zindex 낮추기
  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setDisplay('none');
    }, 10100);

    return () => clearTimeout(hideTimer);
  }, []);

   // ------------------- 숫자나오기 끝 ------------------

  

  const [count, setCount] = useState(0);
  const [cards, setCards] = useState(generateCards());
  const [flippedCards, setFlippedCards] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const [showCards, setShowCards] = useState(true);
  const [allMatched, setAllMatched] = useState(false);

  useEffect(() => {
    // 처음 10초 동안 카드 보여주기
    const timer = setTimeout(() => {
      setShowCards(false);
      setDisabled(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  // ---------------------------- 타이머 만들기 -------------------------
  useEffect(() => {
    let timer;
    const startTimer = setTimeout(() => {
      timer = setInterval(() => {
        if (!allMatched) {
          setCount((prevCount) => prevCount + 1);
        } else {
          clearInterval(timer);
        }
      }, 1000);
    }, 10000);

    return () => {
      clearTimeout(startTimer);
      if (timer) clearInterval(timer);
    };
  }, [allMatched]);
  // ------------------------- 타이머 끝 --------------------------

  const handleCardClick = (index) => {
    if (disabled || flippedCards.includes(index) || cards[index].matched) return;

    if (flippedCards.length === 1) {
      setFlippedCards([...flippedCards, index]);
      setDisabled(true);
    } else {
      setFlippedCards([index]);
    }
  };

  const [scores,setScores] = useState(()=>{
    const savedScores = localStorage.getItem('scores');
    return savedScores ? JSON.parse(savedScores) : [];
  })

  useEffect(() => {
    if (flippedCards.length === 2) {
      const [first, second] = flippedCards;
      if (cards[first].id === cards[second].id) {
        setCards(prevCards => {
          const newCards = prevCards.map((card, index) =>
            index === first || index === second ? { ...card, matched: true } : card
          );
          
          // 모든 카드가 매치되었는지 확인
          const allCardsMatched = newCards.every(card => card.matched);
          if (allCardsMatched) {
            setAllMatched(true);
            // localStorage.setItem('score',count.toString());
          }
          
          return newCards;
        });
      }
      setTimeout(() => {
        setFlippedCards([]);
        setDisabled(false);
      }, 1000);
    }
  }, [flippedCards, cards]);

  const saveScore = () => {
    const newScores = [...scores, count];
    setScores(newScores);
    localStorage.setItem('scores', JSON.stringify(newScores));
  };

  const resetGame = () => {
    window.location.reload()
    if(allMatched){
      saveScore();

    }
  };
  
  return (
    <>
      <Allwrap>
        <Link to={'/'}><div className='backbtn'>Back</div></Link>
        <div className="game">
          <Numbox numnum={numimg[numinput]} display={display}>
            <div className='numcount'></div>
          </Numbox>
          <h1>카드 뒤집기 게임</h1>
          <p>{allMatched ? `게임 종료! 총 소요 시간: ${count}초` : `${count}초`}</p>
          <div className="grid">
            {cards.map((card, index) => (
              <div
                key={index}
                className={`card ${flippedCards.includes(index) || card.matched || showCards ? 'flipped' : ''}`}
                onClick={() => handleCardClick(index)}
                style={{ backgroundColor: flippedCards.includes(index) || card.matched || showCards ? card.color : '#DDD' }}
              />
            ))}
          </div>
          <button onClick={resetGame}>점수 저장 및 다시 시작</button>
        </div>
      </Allwrap>
    </>
  );
};

export default Card;