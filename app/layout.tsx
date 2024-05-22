import '@/app/ui/global.css'
import {inter, opens} from '@/app/ui/fonts';
import Layout from './components/layout';
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${opens.className} antialiased`}>
        <Layout children={children}/>
      </body>
    </html>
  );
}