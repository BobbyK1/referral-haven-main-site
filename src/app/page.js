import { Box, Button, Center, Container, Flex, Heading, Icon, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import { Dashboard, Global, Support } from "./ui/icons";
import GetStarted from "./ui/GetStarted";


export default function Home() {
	return (
		<>
			<Box w="full" bg="gray.800">
				<Container maxW="container.xl">
					<Flex h="90vh" alignItems="center" justifyContent="center">
						<Stack direction={["column", "column", "column", "row"]} alignItems="center">
							<Box w={["100%", "100%", "100%", "70%"]}>
								<Heading as="h1" fontSize={["3xl", "3xl", "6xl"]} color="whitesmoke">Your real estate license's new home at Referral Haven</Heading>

								<Text fontSize={["lg", "lg", "2xl"]} color="whiteAlpha.800" mt="10">Keep your license safe with Referral Haven. Whether you are retiring, changing jobs, taking some time off, or whatever the reason, don't stop earning money!</Text>

								<Stack direction="row" alignItems="center" spacing="4" mt="10">
									<Button as={Link} href="https://app.referralhaven.com/sign-up" varaint="solid" size="lg" colorScheme="gray" rounded="full">Sign Up</Button>

									<Button as={Link} href="#learn" variant="outline" size="lg" colorScheme="gray" color="white" rounded="full" _hover={{ bg: "whiteAlpha.300" }}>Learn More</Button>
								</Stack>
							</Box>
							<Box display={["none", "none", "none", "inline-block"]}>
								<Image src="/Home.svg" height={400} width={400} />
							</Box>
						</Stack>
					</Flex>
					</Container>

				</Box>

					<Box py="20" id="learn">
						<Container maxW="container.lg">
							<Stack direction={["column", "column", "row"]} mx="auto" spacing="16" w="fit-content">
								<Box mx="auto">
									<Image src="/work.svg" height={100} width={300} />
								</Box>
								<Box maxW="container.sm">
									<Heading as="h4" color="gray.700" textAlign={["center", "center", "left"]}>Why choose Referral Haven?</Heading>
									
									<Text fontSize="2xl" mt="5">We set out on one goal. Provide the cheapest option for current Real Estate agents to park their license and maximize their income.</Text>
								</Box>
							</Stack>
						</Container>
					</Box>

					<Box pt="10" pb="20">
						<Container maxW="container.lg">
							<Heading as="h4" color="gray.700" textAlign="center">How do we do that?</Heading>

							<Stack mt="14" direction={["column-reverse", "column-reverse", "column-reverse", "row"]} spacing="5">
								<Box w={["100%", "100%", "70%"]} mx="auto">
									<Heading as="h6" color="gray.700" fontSize="2xl">Haven Preferred® Guarantee</Heading>

									<Text my="7" fontSize="2xl">We offer a one-of-a-kind program that allows our agents to submit their referrals to our in-house network and keep <strong>100%</strong> of their referral fee. No splits taken!</Text>
									
									<Button as={Link} href="/preferred" variant="outline" rounded="full" colorScheme="blue">Learn More About Haven Preferred®</Button>
								</Box>

								<Box w="fit-content" mx="auto">
									<Image src="/preference.svg" height={100} width={300} />
								</Box>
							</Stack>

							<Stack mt="20" direction={["column-reverse", "column-reverse", "column-reverse", "row-reverse"]} spacing="10">
								<Box w={["100%", "100%", "70%"]} mx="auto">
									<Heading as="h6" color="gray.700" fontSize="2xl">Cheaper Membership Fees</Heading>

									<Text my="7" fontSize="2xl">Our membership can be as low as $0/mo with a successful referral! Also, there is no need to pay assocation fees or E&O insurance.</Text>
									
									<Button as={Link} href="/pricing" variant="outline" rounded="full" colorScheme="blue">Learn More About Our Membership Fees</Button>
								</Box>

								<Box mx="auto">
									<Image src="/pay.svg" height={100} width={225} />
								</Box>
							</Stack>

							<Stack mt="20" direction={["column-reverse", "column-reverse", "column-reverse", "row"]} spacing="10">
								<Box w={["100%", "100%", "70%"]} mx="auto">
									<Heading as="h6" color="gray.700" fontSize="2xl">Generous Splits</Heading>

									<Text my="7" fontSize="2xl">Even when not using our Haven Preferred® program, we have a split structure designed to put more cash in pocket!</Text>
									
									<Button as={Link} href="/faq" variant="outline" rounded="full" colorScheme="blue">Learn More About Our Splits</Button>
								</Box>

								<Box mx="auto">
									<Image src="/print.svg" height={100} width={300} />
								</Box>
							</Stack>
						</Container>
					</Box>

				<Box pt="20" pb="20" bgColor="gray.800">
					<Container maxW="container.lg">
						<Heading as="h5" color="white" fontSize="3xl" textAlign="center">Extra Perks For You</Heading>

						<Box mx="auto" w="fit-content">
							<SimpleGrid columns={[1, 1, 1, 2]} gap="20" mt="10">
								<Stack direction="row" spacing="5" mt="10">
									<Flex justifyContent="center" borderRadius="5" alignItems="center" w="fit-content" h="fit-content" py="2" px="2" bg="blue.500">
										<Dashboard fontSize="3xl" color="white" />
									</Flex>
									<Box>
										<Heading as="h6" fontSize="2xl" color="white">Custom Lead Dashboard</Heading>

										<Text mt="5" fontSize="lg" color="whiteAlpha.800">Quick and easy way to submit your leads for referral.</Text>
									</Box>
								</Stack>

								<Stack direction="row" spacing="5" mt="10">
									<Flex justifyContent="center" borderRadius="5" alignItems="center" w="fit-content" h="fit-content" py="2" px="2" bg="blue.500">
										<Global fontSize="3xl" color="white" />
									</Flex>
									<Box>
										<Heading as="h6" fontSize="2xl" color="white">Nationwide Referral Access</Heading>

										<Text mt="5" fontSize="lg" color="whiteAlpha.800">Allows you to refer your lead to any agent in the United States.</Text>
									</Box>
								</Stack>

								<Stack direction="row" spacing="5" mt="10">
									<Flex justifyContent="center" borderRadius="5" alignItems="center" w="fit-content" h="fit-content" py="2" px="2" bg="blue.500">
										<Support fontSize="3xl" color="white" />
									</Flex>
									<Box>
										<Heading as="h6" fontSize="2xl" color="white">Professional Support</Heading>

										<Text mt="5" fontSize="lg" color="whiteAlpha.800">Questions, comments, or concerns, we're here for you!</Text>
									</Box>
								</Stack>

								{/* <Stack direction="row" spacing="5" mt="10">
									<Box h="10" w="10" borderRadius="2" bgColor="blue.600" />
									<Box>
										<Heading as="h6" fontSize="2xl" color="white">Custom Lead Dashboard</Heading>

										<Text mt="5" fontSize="lg" color="whiteAlpha.800">Quick and easy way to submit your leads for referral.</Text>
									</Box>
								</Stack> */}
							</SimpleGrid>
						</Box>

						<Center mt="14">
							<Button as={Link} href="/about-us" variant="outline" size="lg" colorScheme="gray" color="white" rounded="full" _hover={{ bg: "whiteAlpha.300" }}>Learn More About Referral Haven</Button>
						</Center>
					</Container>						
				</Box>

				<GetStarted />
		</>
	);
}
