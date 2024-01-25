import React from 'react'
import Head from 'next/head'
import { Box, Flex, Text, Stack, Button, useColorModeValue } from '@chakra-ui/react'

const Layout = ({ children }) => {
  return (
    <>X
    <Head><title>E.commers App</title></Head>
    <Box>
        <Flex 
            bg={useColorModeValue('white', 'gray.800')} 
            minH={'60px'} 
            py={{base:2}} 
            px={{base:4}}
            borderTop={1}
            borderBottom={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('gray.200', 'gray.900')}
            align={'center'}
            >
            <Flex flex={{base:1}} justify={{base: 'center', md: 'start'}}>
                <Text fontFamily={'heading'} color={useColorModeValue('gray.800', 'white')}>Hello World!</Text>
            </Flex>
             <Stack
                flex={{base:1, md: 0}}
                justify={'flex-end'}
                direction={'row'}
                spacing={6}
             >
                <Button
                    fontSize={'sm'}
                    fontWeight={400}
                    variant={'link'}
                    href={'#'}
                >Sign in</Button>
                <Button
                    display={{base: 'none', md:'inline-flex'}}
                    fontSize={'sm'}
                    fontWeight={600}
                    color={'white'}
                    variant={'link'}
                    href={'#'}
                    bg={'pink.400'}
                    _hover={{bg: 'pink.300'}}
                >Sign ouut</Button>
             </Stack>
        </Flex>
    </Box>
    {children}
    </>
  )
}

export default Layout