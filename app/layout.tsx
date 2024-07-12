import "./globals.css";
import { Poppins } from "next/font/google";

export const metadata = {
  title: "Prakiraan Cuaca 🌤",
  description: "Prakiraan Cuaca Hari ini",
};

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.className}>
      <body>{children}</body>
    </html>
  );
}
