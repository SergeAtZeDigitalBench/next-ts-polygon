import "./globals.css";
import Navigation from "@/app/components/Navigation";
import { CounterContextProvider } from "@/context/CounterContext";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <CounterContextProvider>
        <header>
          <Navigation />
        </header>
        <main className="max-w-screen-xl mx-auto">{children}</main>
        </CounterContextProvider>
      </body>
    </html>
  );
}
