/* eslint-disable react/react-in-jsx-scope */
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import "../globals.css";

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang='en'>
      <body>
        <Header />
        <Banner />
        {children}
      </body>
    </html>
  );
}
