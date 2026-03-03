import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import HomeSidebar from '@/components/sidebar/home-sidebar';
import Header from '@/components/header';

const inter = localFont({
    src: '../assets/fonts/inter/Inter-VariableFont_opsz,wght.ttf',
    variable: '--font-inter',
    display: 'swap',
});

const notoSerif = localFont({
    src: '../assets/fonts/noto-serif/NotoSerif-VariableFont_wdth,wght.ttf',
    variable: '--font-noto-serif',
    display: 'swap',
});

const sourceCodePro = localFont({
    src: '../assets/fonts/source-code-pro/SourceCodePro-VariableFont_wght.ttf',
    variable: '--font-source-code-pro',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Note Taking App',
    description: 'A note taking web app',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.variable} ${notoSerif.variable} ${sourceCodePro.variable} font-sans antialiased`}>
                <SidebarProvider>
                    <HomeSidebar />
                    <main className="w-full">
                        <Header />
                        {children}
                    </main>
                </SidebarProvider>
            </body>
        </html>
    );
}
