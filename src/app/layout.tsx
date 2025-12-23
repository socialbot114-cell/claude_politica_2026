import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GovChatAI - Chatbots Inteligentes para Governos",
  description:
    "Transforme o atendimento ao cidadão com IA. Chatbots que funcionam 24/7, reduzem custos e aumentam a satisfação da população. Solução para prefeituras e governos estaduais.",
  keywords: [
    "chatbot governo",
    "IA prefeitura",
    "atendimento cidadão",
    "inteligência artificial governo",
    "chatbot WhatsApp prefeitura",
    "transformação digital governo",
  ],
  authors: [{ name: "GovChatAI" }],
  openGraph: {
    title: "GovChatAI - Chatbots Inteligentes para Governos",
    description: "Transforme o atendimento ao cidadão com IA.",
    type: "website",
    locale: "pt_BR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
