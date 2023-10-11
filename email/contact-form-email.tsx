import React from 'react'
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';


type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

function ContactFormEmail({
    message, senderEmail
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>New Message from your Portfolio Site</Preview>
            <Body className=' bg-gray-100 text-black'>
                <Container>
                    <Section className=' bg-white borderBlack my-10 px-10 py-4 rounded-md'>
                        <Heading className='leading-tight'>You Received this message from the contact form:</Heading>
                        <Text>
                            {message}
                        </Text>
                        <Hr />
                        <Text>The sender's email is: {senderEmail}</Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    )
}

export default ContactFormEmail