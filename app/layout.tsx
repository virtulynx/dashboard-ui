import '@/styles/globals.css';
import type { Metadata } from 'next';
import clsx from 'clsx';
import { Providers } from './providers';
import { fontSans } from '@/config/fonts';

export const metadata: Metadata = {
  title: 'Virtulynx',
  description: 'Virtulynx Dashboard UI',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={clsx('font-sans antialiased', fontSans.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
