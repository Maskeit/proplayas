import '@/app/ui/global.css'
import {inter, opens} from '@/app/ui/fonts';
import { Footer } from './ui/footer';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${opens.className} antialiased`}>
        {children}
        <Footer/>
      </body>
    </html>
  );
}