import React, { useState } from 'react'
import { Flex, Grid } from '@chakra-ui/react';
import OneCell from './OneCell/OneCell';

const Board = ({ list, setList, prev, setPrev }) => {
  
  const check = (index) => {
    if(list[index].id == list[prev].id) {
      list[index].stat = 'visible'
      list[index].complete = 'correct'
      list[prev].complete = 'correct'
      setList([...list])
      setPrev(-1);
    } else {
      list[index].stat = 'visible'
      list[index].complete = 'wrong'
      list[prev].complete = 'wrong'
      setPrev(-1);
      setList([...list])
      setTimeout(() => {
        list[index].stat = ''
        list[prev].stat = ''
        list[index].complete = ''
        list[prev].complete = ''
        setList([...list])
        setPrev(-1);
      }, 1000)
    }
  }
  const handleClick = (id) => {
    if(prev === -1) {
      list[id].stat = 'visible';
      setList([...list])
      setPrev(id);
    } else {
      check(id)
    }
  }
    return (
    <Flex 
    justify='center' 
    align='center'
    >
        <Grid             
            gridColumnGap={{
            base: 3,
            md:5
            }}
            gridRowGap={{
            base: 3,
            md:5
            }} 
            templateColumns='repeat(4, 1fr)'>
            { list.map((oneData, index) => {
                return <OneCell key={index} id={index} oneData={ oneData } handleClick={ handleClick } />
            }) }
        </Grid>
    </Flex>
  )
}

export default Board