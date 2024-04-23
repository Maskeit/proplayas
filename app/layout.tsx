import '@/app/ui/global.css'
import {inter, opens} from '@/app/ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${opens.className} antialiased`}>{children}</body>
    </html>
  );
}