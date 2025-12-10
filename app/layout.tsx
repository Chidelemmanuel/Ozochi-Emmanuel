import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ozochi Emmanuel Frontend Engineer || Web Developer Portfolio",
  description: `Ozochi Emmanuel is a Frontend Engineer skilled in HTML,
  CSS, JavaScript (ES6+), and React. He builds clean, responsive, and
  user-friendly web interfaces, focusing on maintainable code, performance 
  optimization, and modern frontend best practices. Passionate about delivering 
  thoughtful design and development for high-quality web applications.`,          
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
         className={`${geistSans.variable} ${geistMono.variable} antialiased 
        bg-white dark:bg-black text-black dark:text-white`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}