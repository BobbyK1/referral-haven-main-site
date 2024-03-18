import { Box, Center, Container, Heading, IconButton, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Plus } from "../ui/icons";
import GetStarted from "../ui/GetStarted";


export default function Page() {
    return (
        <>
            <Box py="20" bgColor="gray.800">
                <Container maxW="container.xl">
                    <Heading as="h1" fontSize={["3xl", "3xl", "3xl", "6xl"]} color="whitesmoke" textAlign="center">Haven Preferred® Program</Heading>
                    <Text fontSize={["lg", "lg", "lg", "2xl"]} color="white" textAlign="center" maxW="container.md" mx="auto" my="10">Our one-of-a-kind preferred program allows you to earn <Text as="span" fontWeight="bold">100%</Text> of your referral split by using one of our in-network agents!</Text>
                    <Box mx="auto" w="fit-content" mt="14">
                        <Image src="/Pricing.svg" height="200" width="300" alt="Pricing" />
                    </Box>
                </Container>
            </Box>

            <Container maxW="container.lg" py="20">
                <Heading as="h2" color="gray.700" fontSize="4xl" textAlign="center">Using The Program Is Simple</Heading>
                <Stack mt="10" direction={["column-reverse", "column-reverse", "column-reverse", "row"]} spacing="5" alignItems="center">
                    <Box>
                        <Text fontSize="2xl" mb="3">1. Log into your lead dashboard</Text>
                        <Text as={Link} href="https://app.referralhaven.com" _hover={{ textDecor: "underline" }} color="blue.500" fontSize="lg">Click here to log in</Text>

                        <Text fontSize="2xl" mt="10">2. Submit your lead to the network</Text>
                        <Text fontSize="lg" mt="3">Click the <IconButton icon={<Plus />} rounded="full" colorScheme="blue" size="sm" /> and fill out the form</Text>

                        <Text fontSize="2xl" mt="10">3. Choose to send your lead to the Preferred® network</Text>
                        <Text fontSize="lg" mt="3">In the "Referral Information" box, select Haven Preferred®</Text>
                    </Box>

                    <Box w="fit-content" mx="auto">
                        <Image src="/Choose.svg" height={250} width={250} alt="Choosing" />
                    </Box>
                </Stack>
            </Container>

            <Box py="10" bgColor="gray.800">
                <Container maxW="container.md">
                    <Center>
                        <Image src="/free.svg" height={300} width={300} alt="Free" />
                    </Center>

                    <Text fontSize="4xl" my="5" textAlign="center" color="white" fontWeight="bold">Earn A Free year</Text>

                    <Text fontSize="lg" color="white" textAlign="center">You can earn an additional free year when you sign up for our 1 Year Membership and have a referral close successfully with our Haven Preferred Program.</Text>
                </Container>
            </Box>

            <GetStarted />
        </>
    )
}