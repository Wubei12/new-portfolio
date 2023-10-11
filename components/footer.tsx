import React from 'react'

function Footer() {
    return (
        <footer className='mb-10 px-4 text-center text-gray-500'>
            <small className='mb-2 text-xs block'>
                &copy; 2023 Wubshet. All Rights Reserved.
            </small>
            <p className='text-xs'>
                <span>About this website:</span> built with React & Next.js (App Router & Server Actions), Typescript, TailwindCSS, Framer Motion, React Email & Resend.
            </p>
        </footer>
    )
}

export default Footer