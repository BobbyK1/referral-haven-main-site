import { Box, Container, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import GetStarted from "../ui/GetStarted";


export default function Page() {
    return (
        <>
            <Box py="20" bgColor="gray.800">
                <Container maxW="container.xl">
                    <Heading as="h1" fontSize={["3xl", "3xl", "3xl", "6xl"]} color="whitesmoke" textAlign="center">About Us</Heading>
                    <Box mx="auto" w="fit-content" mt="10">
                        <Image src="/AboutUs.svg" height="200" width="350" alt="Pricing" />
                    </Box>
                </Container>
            </Box>

            <Container maxW="container.md" py="20">
                <Heading as="h2" fontSize="4xl">Overview</Heading>

                <Text fontSize="lg" mt="5">We are a referral program based out of Northwest Indiana with the goal of offering excellent service and competetive splits to agents, seasoned or new, looking to transition out of their Real Estate career.</Text>
            
                <Text fontSize="lg" mt="5">Our referral program is designed to reward agents for their hard work and dedication. We offer competitive splits that allow our agents to earn a significant income from their referral business. Additionally, we provide performance tracking, so agents can see exactly how their referral business is performing and make informed decisions about their future growth.</Text>
            
                <Heading as="h2" fontSize="4xl" mt="10">Who are we looking for?</Heading>
            
                <Text fontSize="lg" mt="5">Referral Haven is looking for individuals who want to profit of the sphere of influence they've amassed.</Text>

                <Text fontSize="lg" mt="5">These agents can range from:</Text>
                <Box ml="10" mt="2">
                    <ul>
                        <li>New Agents</li>
                        <li>Experience Agents</li>
                        <li>Agents that are retiring</li>
                        <li>Agents looking to make a career switch</li>
                        <li>Just about any other agent type there is!</li>
                    </ul>
                </Box>

                <Heading as="h2" fontSize="4xl" mt="10">What we offer...</Heading>

                <Box ml="10" mt="2">
                    <ul>
                        <li>Generous splits</li>
                        <li><Text as={Link} color="blue.500" _hover={{ textDecor: "underline" }} href="/preferred">Opportunity to earn 100% of your split</Text></li>
                        <li>Lead tracking dashboard</li>
                        <li>Low monthly cost</li>
                        <li>Nationwide referrals</li>
                        <li>Professional support</li>
                        <li>More to come...</li>
                    </ul>
                </Box>

            </Container>

            <GetStarted />
        </>
    )
}