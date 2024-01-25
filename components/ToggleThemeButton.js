// ThemeToggle.js by ChatGPT <3

import React from "react";
import { Box, Button, useColorMode } from "@chakra-ui/react";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Box py={{ base: 4 }} px={{ base: 4 }}>
      <Button onClick={toggleColorMode}>Toggle Dark Mode</Button>
    </Box>
  );
};

export default ThemeToggle;
