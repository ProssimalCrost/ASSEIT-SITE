import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

export const metadata = {
  title: "ASSEIT - Associação das Empresas Industriais de Timóteo",
  description:
    "Associação que une empresas industriais para o desenvolvimento de Timóteo e região.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR ">
      <body className="flex flex-col min-h-screen bg-asseit-gradient">
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
