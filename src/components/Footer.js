import { Flex, Icon, Text } from '@chakra-ui/react'
import React from 'react'
import { AiFillHeart } from 'react-icons/ai'

const Footer = () => {
  return (
    <Flex
    justifyContent='center'
    alignItems='center'
    w='100%'
    m='5px'
    bottom='0'
    position='fixed'
    zIndex='1'
    >
        <Text
        alignItems='center'
        color='gray.500'
        >
            Made with love  
            <Icon
            textAlign='center'
            m={2}
            color='red'
            >
                <AiFillHeart 
                size='20px'
                />
            </Icon>
            by Lucas Silva
        </Text>

    </Flex>
    )
}

export default Footer