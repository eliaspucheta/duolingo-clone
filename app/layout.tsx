import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";
import { ExitModal } from "@/components/modals/exit-modal";
import { HeartsModal } from "@/components/modals/hearts-modal";
import "./globals.css";
import { PracticeModal } from "@/components/modals/practice-modal";

const font = Nunito({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "¡Lingo! Aprende idiomas con facilidad",
  description: "Aprende idiomas con facilidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="es">
        <body
          className={font.className}>
            <Toaster />
            <ExitModal />
            <HeartsModal />
            <PracticeModal />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
