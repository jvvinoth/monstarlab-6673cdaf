import './globals.css';
import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'], 
  variable: '--font-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Monstarlab - Mobile App Development for Startups | Singapore',
  description: 'Leading tech consultancy specializing in mobile app development for ambitious startups. Expert iOS, Android, and React Native development in Singapore.',
  keywords: ['mobile app development', 'startup consulting', 'tech consultancy', 'Singapore', 'iOS development', 'Android development', 'React Native'],
  authors: [{ name: 'Monstarlab' }],
  openGraph: {
    title: 'Monstarlab - Mobile App Development for Startups',
    description: 'Leading tech consultancy specializing in mobile app development for ambitious startups',
    type: 'website',
    locale: 'en_SG',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
