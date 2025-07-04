import "@/styles/globals.css";
import "@/vendors/fontawesome/css/all.css";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"]
});

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>{children}</body>
    </html>
  );
}
