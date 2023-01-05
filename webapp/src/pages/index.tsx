// src/pages/index.tsx
import type { NextPage } from 'next'
import Head from 'next/head'
import NextLink from "next/link"
import { VStack, Heading, Box, LinkOverlay, LinkBox } from "@chakra-ui/layout"
import { Text, Button } from '@chakra-ui/react'
import ConnectMetamask from 'components/ConnectMetamask'
import ETHBalance from 'components/ETHbalance'
import ETHBalanceSWR from 'components/ETHBalanceSWR'
import ReadERC20 from 'components/ReadERC20'
import TransferERC20 from 'components/TransferERC20'

const addressContract='0x0165878A594ca255338adfa4d48449f69242Eb8F'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>My DAPP</title>
      </Head>

      <Heading as="h3" my={4}>Explore Web3</Heading>
      <ConnectMetamask />

      <VStack>
        <Box my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>Task 1</Heading>
          <Text>local chain with hardhat</Text>
        </Box>

        <Box my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>Task 2</Heading>
          <Text>DAPP with React/NextJS/Chakra</Text>
        </Box>

        <LinkBox my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <NextLink href="https://github.com/NoahZinsmeister/web3-react/tree/v6" passHref>
            <LinkOverlay>
              <Heading my={4} fontSize='xl'>Task 3 with link</Heading>
              <Text>Read docs of Web3-React V6</Text>
            </LinkOverlay>
          </NextLink>
        </LinkBox>

        <Box mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4} fontSize='xl'>ETH Balance</Heading>
          <ETHBalance />
        </Box>

        <Box  mb={0} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>ETH Balance <b>using SWR</b></Heading>
          <ETHBalanceSWR />
        </Box>

        <Box  my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>ClassToken: ERC20 Smart Contract</Heading>
          <ReadERC20 addressContract={addressContract} />
        </Box>

        <Box  my={4} p={4} w='100%' borderWidth="1px" borderRadius="lg">
          <Heading my={4}  fontSize='xl'>Transfer ClassToken ERC20 token</Heading>
          <TransferERC20 addressContract={addressContract} />
        </Box>

      </VStack>
    </>
  )
}

export default Home
