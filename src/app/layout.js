import { Inter } from "next/font/google";
import "../css/thestyles.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kungfu Quiz",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
