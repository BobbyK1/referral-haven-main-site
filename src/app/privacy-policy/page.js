import { Box, Container } from "@chakra-ui/react";
import { Privacy } from "../ui/PrivacyPolicy";


export default function Page() {
    return (
        <>
            <Container maxW="container.xl" py="20" px="5">
                <Box dangerouslySetInnerHTML={{ __html: Privacy }} />
            </Container>
        </>
    )
}