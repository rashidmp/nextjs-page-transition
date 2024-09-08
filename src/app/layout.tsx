import localFont from 'next/font/local';
import Link from 'next/link';
import AnimationLayout from '@/components/AnimationLayout';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="p-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            K72
          </Link>
          <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/projects">Projects</Link>
          </nav>
        </header>
        <main className="min-h-screen">
          <AnimationLayout>{children}</AnimationLayout>
        </main>
      </body>
    </html>
  );
}
