// ThemeToggle.js by ChatGPT <3

import React from 'react';
import { Button, useColorMode } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode}>
      Toggle Dark Mode
    </Button>
  );
};

export default ThemeToggle;
