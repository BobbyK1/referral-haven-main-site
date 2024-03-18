"use client"

import { Box, Container } from "@chakra-ui/react";
import { Terms } from "../ui/TermsOfService";

export default function Page() {

    return (
        <>
            <Container maxW="container.xl" py="20" px="5">
                <Box as="span" dangerouslySetInnerHTML={{ __html: Terms }} />
            </Container>
        </>
    )
}