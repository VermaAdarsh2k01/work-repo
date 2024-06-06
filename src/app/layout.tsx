import "~/styles/globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { TRPCReactProvider } from "~/trpc/react";
import { ClerkProvider , SignedIn ,SignedOut , UserButton , SignInButton} from "@clerk/nextjs";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "SuprDash",
  description: "Build your website with ease",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning={false}>
          <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
