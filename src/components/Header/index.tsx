'use client';

import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  Flex,
  Text
} from '@chakra-ui/react'

const Header = () => {
  return (
    <Flex
    justify="space-between"
    p= "30px"
    alignItems={"center"}
    pt="2rem"
    borderBottom= "1px solid #333"
    mb="1rem"
    >
          <Text 
           fontSize="1.25rem"
           fontWeight="bold"
           margin={0}
          >
            Todo-dapp Next.js Starter
          </Text>

          <ConnectButton
            showBalance={false}
            accountStatus="address"
            label="Connect"
          />
    </Flex>
  );
};

export default Header;