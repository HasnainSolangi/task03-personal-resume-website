import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Hasnain Ahmed - Resume",
  description: "Layout of Hasnain Ahmed's Resume",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
