import { useState, useEffect } from 'react'
import './styles/App.css'
import { Header } from './components/page-header'
import { Cards } from './components/cards';

function App() {

  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0)
  const [gifArray, setGifArray] = useState([])

  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/trending?api_key=1ex70ZRGU816PrztYIOu6mhCmiuU1Oxa&2&s=random', {mode: 'cors'})
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      setGifArray([
        {link: response.data[10].images.fixed_height.url, used: false},
        {link: response.data[1].images.fixed_height.url, used: false},
        {link: response.data[2].images.fixed_height.url, used: false},
        {link: response.data[3].images.fixed_height.url, used: false},
        {link: response.data[4].images.fixed_height.url, used: false},
        {link: response.data[5].images.fixed_height.url, used: false},
        {link: response.data[6].images.fixed_height.url, used: false},
        {link: response.data[7].images.fixed_height.url, used: false},
        {link: response.data[8].images.fixed_height.url, used: false},
        {link: response.data[9].images.fixed_height.url, used: false}
      ])
      console.log(response)
      return
    });
  }, [])

    function cardClick(event) {
      for (let i = 0; i < gifArray.length; i++) {
        if (event.target.src == gifArray[i].link && gifArray[i].used == false) {
          shuffleArray();
          setScore(score + 1)
          if (score >= bestScore) {
            setBestScore(bestScore + 1)
          }
          gifArray[i].used = true;
          console.log(gifArray)
        } else if (event.target.src == gifArray[i].link && gifArray[i].used == true) {
          setScore(0)
          console.log('Game Over! Try Again?')
        }
      } 
    }

    const shuffleArray = () => {
      let shuffledArray = [...gifArray];
      setGifArray(shuffledArray.sort(() => Math.random() - 0.5))
    }

  return (
    <div className='container'>
      <Header score={score} bestScore={bestScore}/>
      <div className='card-container'>
        {gifArray.map((item, index) => (
          <Cards key={index} data={item} setter={cardClick}/>
        ))}
      </div>
    </div>
  )
}

export default App
