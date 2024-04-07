import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container, 
    Preview,
    Section,
    Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind"


type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

export default function ContactFormEmail({message, senderEmail}: ContactFormEmailProps ) {
    
  return (
    <Html >
        <Head />
        <Preview>Ny melding fra min portfolio!</Preview>
        <Tailwind>
        <Body className='bg-gray-100 text-black'>
            <Container>
                <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'><Heading className='leading-tight'>Du mottok følgende melding fra kontakskjemaet</Heading>
                <Text>{message}</Text>
                <Hr />
                <Text>Sendt fra: {senderEmail}</Text>
                </Section>
            </Container>
        </Body>
        </Tailwind>
    </Html>
    )
}
