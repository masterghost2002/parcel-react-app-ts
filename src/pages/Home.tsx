import React, { ReactNode,  useState } from 'react';
import { Box, Flex, Heading, Button, Text, HStack } from '@chakra-ui/react';
export default function Home():ReactNode {
    const [count, setCount] = useState<number>(0);
    return (
        <Flex
            bg={'whiteAlpha.500'} 
            minH={'100dvh'} 
            justifyContent={'center'}
            flexDir={'column'}
            alignItems={'center'}
            gap={5}
        >
            <Heading>
                Parcel 📦 + React + TypeScript
            </Heading>
            <HStack gap={10}>
                <Button onClick={()=>setCount(count-1)}>
                    -
                </Button>
                <Text>
                {count}
                </Text>
                <Button onClick={()=>setCount(count+1)}>
                    +
                </Button>
            </HStack>
            <Box></Box>
        </Flex>
    )
}
