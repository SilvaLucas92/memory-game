
import Board from './components/Board';
import { useEffect, useState } from 'react';
import data from '../src/data'
import { Button, VStack, Heading, Divider, Text } from '@chakra-ui/react';
import Footer from './components/Footer';

function App() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [prev, setPrev] = useState(-1);
  const [ winner, setWinner ] = useState(false);

  useEffect(() => {
      const newList = data;
      newList.sort(() => {
        return 0.5 - Math.random();
      });
      console.log(newList)
      setList(newList)

  }, [newGame])
  
  const checkWinner = (list) => {
    if(list.every(item => item.complete === 'correct')) {
      setWinner(true)
    }
  }

  const setItems = () => {
    if(newGame) {
      list.map(item => {
          item.stat = ''
          item.complete= ''
      })
      setNewGame(false)
      setPrev(-1);
      setWinner(false)
    } else {
      list.map(item => {
        item.stat = ''
        item.complete= ''
    })
      setNewGame(true)
      setPrev(-1);
      setWinner(false)
    }
  }

  return (
    <VStack 
    mx='auto' 
    w='90%' 
    justify='center' 
    spacing={{base:'40px', md:'50px', xl:'60px'}} 
    textAlign='center'
    mt='20px'
    >
      <Heading opacity={0.8} size='4xl'>Memory Game</Heading>
      {winner && <Text
                  textAlign='center'
                  color='red'
                  fontSize={{base:'30px', xl:'40px'}}
                  fontWeight='600'
                  > Congratulations, you' re the Winner!!
                  </Text>}
      <Board setList={setList} list={ list } prev={prev} setPrev={setPrev} winner={winner} checkWinner={checkWinner} />
      <Button 
      onClick={ setItems } 
      colorScheme='red' 
      >new game</Button>
      <Footer />
    </VStack>
  );
}

export default App;
