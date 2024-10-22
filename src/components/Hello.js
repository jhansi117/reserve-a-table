import React from "react";
import { Box } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";

function Hello() {
  return (
    <>
      <HStack spacing="16px">
        <Box h="40px" bg="yellow.200">
          1
        </Box>
        <Box h="40px" bg="tomato">
          2
        </Box>
        <Box h="40px" bg="pink.100">
          3
        </Box>
      </HStack>
    </>
  );
}

export default Hello;
