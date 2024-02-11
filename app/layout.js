import "./globals.css";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
  description: "Frontend Mentor | Time tracking dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased bg-very-dark-blue`}>{children}</body>
    </html>
  );
}
