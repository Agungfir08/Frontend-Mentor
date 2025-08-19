import type { Metadata } from 'next';
import { Nunito_Sans } from 'next/font/google';
import './globals.css';

const nunitoSans = Nunito_Sans({
    weight: ['300', '600', '800'],
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Frontend Mentor | Rest Countries API',
    description:
        'A project that consumes the REST Countries API and displays country information.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nunitoSans.className} antialiased bg-grey-50`}>
                {children}
            </body>
        </html>
    );
}
