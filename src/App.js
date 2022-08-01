import './App.css';
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { useWindowSize } from './hooks/useWindowSize'

function App() {
  const [top, setTop] = useState(0)
  const [left, setLeft] = useState(0)
  const [isEnd, setIsEnd] = useState(false)
  const size = useWindowSize()
  useEffect(() => {
    let leftInterval;
    let rollbackInterval;
    let topInterval;
   

    if (left === size.width - 60) {
      setIsEnd(true)
    }

    if (left === 0) {
      setIsEnd(false)
    }

    if (!isEnd) {
      leftInterval = setInterval(() => {
        setLeft(prev => prev + 10)
      })
    } else {
      rollbackInterval = setInterval(() => {
        setLeft(prev => prev - 10)
      })
    }
    // } else {
    //   if (top < size.height - 60) {
    //     topInterval = setInterval(() => {
    //       setTop(prev => prev + 10)
    //     }, 10)
    //   }
    //   console.log(left)
    // }
    return () => {
      clearInterval(leftInterval)
      clearInterval(topInterval)
      clearInterval(rollbackInterval)
    }
  })
  return (
    <div className="App">
      <Circle top={`${top}px`} left={`${left}px`} />
    </div>
  );
}

export default App;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: lightblue;
  border-radius: 50%;
  position: absolute;
  top: ${props => props.top};
  left: ${props => props.left}
`
