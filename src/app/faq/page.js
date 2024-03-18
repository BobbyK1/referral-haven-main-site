import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Container, Heading, SimpleGrid, Spinner, Stack, Text } from "@chakra-ui/react"
import { Minus, Plus } from "../ui/icons"
import { Suspense } from "react"
import GetStarted from "../ui/GetStarted"


const content = [
    {
        id: 1,
        title: "How do Referral Haven's plans work?",
        description: `<p>We offer 3 different plans to work with your needs. A 1 month, 6 month, and 1 year subscription.</p>
                      <p style="margin-top: 10px;"><a style="color: #4299E1" href="/pricing">Plans can be viewed here.</a></p>
        `
    },
    {
        id: 2,
        title: "What is the split structure like?",
        description: `
            <p>The splits are as follows:</p>

            <ul style="margin-left: 35px; margin-top: 10px;">
                <li>25% for checks up to $1,300</li>
                <li>$325 for checks between $1,300 and $3,600</li>
                <li>9% for checks above $3,600</li>
            </ul>

            <p style="margin-top: 10px">You can earn 100% of you referral split when you use the Haven Preferred Program. Learn more by clicking on the tab.</p>
        `
    },
    {
        id: 3,
        title: "What is the Haven Preferred Program?",
        description: `
            <p>The Haven Preferred Program allows you to submit your referral lead to our in-network agents and earn 100% of your referral split. (Splits are capped at 25% of the deal.)</p>

            <p style="margin-top: 10px;">The following states are elligble for the Haven Preferred Program:</p>

            <ul style="margin-left: 35px; margin-top: 10px;">
                <li>Illinois</li>
                <li>Indiana</li>
            </ul>
        `
    },
    {
        id: 4,
        title: "Can I get a refund on my membership?",
        description: `
            <p>Unfortunately, we cannot offer refunds at this time. You are free to move your license back to active with a real estate firm whenever you'd like, but your membership will remain active until the next billing date.</p>

            <p style="margin-top: 10px; color: #4299E1;"><a href="/">Click here to manage your subscription.</a></p>
        `
    },
]

const contentTwo = [
    {
        id: 1,
        title: "Do I have to pay any other fees?",
        description: `
            <p>No other fees required! When you transfer your license, association fees and E&O are not applicable.</p>
        `
    },
    {
        id: 2,
        title: "Can I represent buyers/sellers in a transaction?",
        description: `
            <p>No. Agents in referral status may only refer their business out to other agents and receive compensation once the deal is closed.</p>
        `
    },
    {
        id: 3,
        title: "How do I transfer my license/Does it cost to transfer my license?",
        description: `
            <p>You can transfer your license easily through your state's professional licensing authority. Costs differ per state. Indiana, for example, is $10.</p>

            <p style="margin-top: 10px;">If you need help, feel free to contact us and we will assist in any way we can!</p>
        `
    },
    {
        id: 4,
        title: "Can I pick who works the clients I refer?",
        description: `
            <p>You can choose any registered agent in the United States to represent your client.</p>

            <p style="margin-top: 10px;">To earn more from your referrals, <a style="color: #4299E1;" href="/preferred">click here</a> to check out our Haven Referred Program.</p>
        `
    }
]

export default function Page() {
    return (
        <>
            <Container maxW="container.xl" py="20">
                <Heading as="h1" fontSize="4xl" mb="10">Frequently Asked Questions</Heading>
                <Stack w="full" direction={["column", "column", "column", "row"]}>
                    <Box w="full">
                        {content.map(doc => (
                            <Accordion h="fit-content" key={doc.id} w="full" bgColor="gray.100" allowToggle mt="2" border="transparent">
                                <AccordionItem h="fit-content">
                                    <AccordionButton h="fit-content" py="5">
                                        <Box as="span" flex='1' textAlign='left'>
                                            {doc.title}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    
                                    <AccordionPanel h="fit-content" bgColor="white">
                                        <Text as="span" dangerouslySetInnerHTML={{__html: doc.description}}></Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </Box>
                    <Box w="full">
                        {contentTwo.map(doc => (
                            <Accordion h="fit-content" key={doc.id} w="full" bgColor="gray.100" allowToggle mt="2" border="transparent">
                                <AccordionItem h="fit-content">
                                    <AccordionButton h="fit-content" py="5">
                                        <Box as="span" flex='1' textAlign='left'>
                                            {doc.title}
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                    
                                    <AccordionPanel h="fit-content" bgColor="white">
                                        <Text as="span" dangerouslySetInnerHTML={{__html: doc.description}}></Text>
                                    </AccordionPanel>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </Box>
                </Stack>
            </Container>

            <GetStarted />  
        </>
    )
}