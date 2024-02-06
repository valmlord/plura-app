import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from '@clerk/themes'
import Navigation from "@/components/site/navigation";
import { ThemeProvider } from "@/providers/theme-povider";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Plura",
  description: "All i one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{ baseTheme: dark }}
    >
      <html lang="en">
        <body className={dm_sans.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navigation />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider >
  );
}
