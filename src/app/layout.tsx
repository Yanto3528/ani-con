import { ReactNode } from 'react';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';
import { Toaster } from 'react-hot-toast';
import colors from 'tailwindcss/colors';

import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <NextTopLoader color={colors.blue[500]} showSpinner={false} />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
