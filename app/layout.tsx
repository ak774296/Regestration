import { Toaster } from "react-hot-toast";
import './index.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}
      <Toaster/></body>
    </html>
  );
}
