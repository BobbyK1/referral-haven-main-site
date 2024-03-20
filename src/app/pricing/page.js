import { Box, Button, Container, Flex, Heading, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";


export default function Page() {
    return (
        <>
            <Box py="20" bgColor="gray.800">
                <Container maxW="container.xl">
                    <Heading as="h1" fontSize={["3xl", "3xl", "3xl", "6xl"]} color="whitesmoke" textAlign="center">Pricing</Heading>
                    <Box mx="auto" w="fit-content" mt="10">
                        <Image src="/Pricing.svg" height="200" width="350" alt="Pricing" />
                    </Box>
                </Container>
            </Box>

            <Container maxW="container.xl" py="20">
                <SimpleGrid columns="3" gap="5">
                <Box>
                        <Flex justifyContent="center" alignItems="center" h="8" bgColor="blue.500" borderRadius="5" mb="2">
                            <Text fontSize="xl" color="white" textAlign="center">Most Popular</Text>
                        </Flex>
                        <Box borderWidth="thin" borderColor="blackAlpha.300" borderRadius="5" py="4" px="6">
                            <Stack direction="row" justify="space-between" alignItems="center">
                                <Text fontSize="lg" fontWeight="semibold">1 Year Membership</Text>
                                <Text fontSize="lg" color="blue.500">$10/mo</Text>
                            </Stack>

                            <Box my="10">
                                <Text fontSize="5xl" fontWeight="bold" textAlign="center">$120</Text>
                                <Text fontSize="md" color="blackAlpha.600" mt="2" textAlign="center">Billed yearly</Text>
                            </Box>

                            <Button as={Link} href="https://app.referralhaven.com/" variant="outline" colorScheme="blue" w="full" rounded="full">Get Started</Button>
                        </Box>
                    </Box>

                    <Box>
                        <Flex h="8" mb="2" />
                        <Box borderWidth="thin" borderColor="blackAlpha.300" borderRadius="5" py="4" px="6">
                            <Stack direction="row" justify="space-between" alignItems="center">
                                <Text fontSize="lg" fontWeight="semibold">6 Month Membership</Text>
                                <Text fontSize="lg" color="blue.500">$15/mo</Text>
                            </Stack>

                            <Box my="10">
                                <Text fontSize="5xl" fontWeight="bold" textAlign="center">$90</Text>
                                <Text fontSize="md" color="blackAlpha.600" mt="2" textAlign="center">Billed every 6 months</Text>
                            </Box>

                            <Button as={Link} href="https://app.referralhaven.com/" variant="outline" colorScheme="blue" w="full" rounded="full">Get Started</Button>
                        </Box>
                    </Box>

                    <Box>
                        <Flex h="8" mb="2" />

                        <Box borderWidth="thin" borderColor="blackAlpha.300" borderRadius="5" py="4" px="6">
                            <Stack direction="row" justify="space-between" alignItems="center">
                                <Text fontSize="lg" fontWeight="semibold">1 Month Membership</Text>
                                <Text fontSize="lg" color="blue.500">$20/mo</Text>
                            </Stack>

                            <Box my="10">
                                <Text fontSize="5xl" fontWeight="bold" textAlign="center">$20</Text>
                                <Text fontSize="md" color="blackAlpha.600" mt="2" textAlign="center">Billed every month</Text>
                            </Box>

                            <Button as={Link} href="https://app.referralhaven.com/" variant="outline" colorScheme="blue" w="full" rounded="full">Get Started</Button>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Container>
        </>
    )
}