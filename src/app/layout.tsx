import type { Metadata } from 'next';
import { Nunito } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import RQueryClientProvider from '@/providers/RQueryClientProvider';
import { Toaster } from '@/components/ui/sonner';

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  style: ['normal', 'italic'],
  fallback: ['system-ui', 'sans-serif'],
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: {
    default: 'HOK Engagement',
    template: '%s | HOK Engagement',
  },
  description: "A platform for HOK's employee engagement.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <Toaster />
          <RQueryClientProvider>{children}</RQueryClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
