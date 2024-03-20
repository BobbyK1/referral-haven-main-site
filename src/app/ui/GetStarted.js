import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";


export default function GetStarted() {
    return (
        <Box pt="20" pb="20" px="5">
            <Heading as="h4" color="gray.700" textAlign="center">Ready to start earning?</Heading>

            <Text fontSize="xl" textAlign="center" my="7">Wait no longer. Get started with Referral Haven today!</Text>

            <Center>
                <Button as={Link} href="https://app.referralhaven.com/sign-up" variant="outline" rounded="full" colorScheme="blue">Get Started</Button>
            </Center>
        </Box>
    )
}