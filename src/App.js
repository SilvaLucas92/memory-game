
import Board from './components/Board';
import { useEffect, useState } from 'react';
import data from '../src/data'
import { Button, VStack, Heading, Divider } from '@chakra-ui/react';
import Footer from './components/Footer';

function App() {
  const [newGame, setNewGame] = useState(false);
  const [list, setList] = useState([]);
  const [prev, setPrev] = useState(-1);

  useEffect(() => {
      const newList = data;
      newList.sort(() => {
        return 0.5 - Math.random();
      });
      console.log(newList)
      setList(newList)

  }, [newGame])

  const setItems = () => {
    if(newGame) {
      list.map(item => {
          item.stat = ''
          item.complete= ''
      })
      setNewGame(false)
      setPrev(-1);
    } else {
      list.map(item => {
        item.stat = ''
        item.complete= ''
    })
      setNewGame(true)
      setPrev(-1);
    }
  }
  
  return (
    <VStack 
    mx='auto' 
    w='90%' 
    h='100vh' 
    justify='center' 
    spacing={{base:'40px', md:'50px', xl:'60px'}} 
    textAlign='center'
    >
      <Heading opacity={0.8} size='4xl'>Memory Game</Heading>
      <Divider />
      <Board setList={setList} list={ list } prev={prev} setPrev={setPrev} />
      <Divider />
      <Button 
      onClick={ setItems } 
      colorScheme='red' 
      variant='outline'
      >new game</Button>
      <Footer />
    </VStack>
  );
}

export default App;
