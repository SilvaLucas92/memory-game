import React from 'react'
import { Box, Image } from '@chakra-ui/react';

const OneCell = ({oneData, handleClick, id}) => {
  const { img, name, stat, complete } = oneData;
  const handleBorder = () => {
    if(complete === 'correct') {
      return 'solid 3px #48BB78'
    }else if (complete === 'wrong') {
      return 'solid 3px #E53E3E'
    }
  }
  return (
    <Box 
    onClick={() => handleClick(id)} 
    bg='#A0AEC0'
    w={{base:'60px', sm:'80px', md:'100px', xl:'120px'}} 
    h={{base:'60px', sm:'80px', md:'100px', xl:'120px'}}
    borderRadius='10px'
    >
        <Image 
        border={handleBorder}
        w={{base:'60px', sm:'80px', md:'100px', xl:'120px'}}
        h={{base:'60px', sm:'80px', md:'100px', xl:'120px'}}     
        src={ img }
        alt={ name }
        display={stat === 'visible' || complete === 'correct'? 'block' : 'none'}
        borderRadius='10px'
        />
    </Box>
  )
}

export default OneCell