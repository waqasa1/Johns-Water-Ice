import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: "John's Water Ice | Philadelphia's Finest Water Ice Since 1945",
  description: "John's Water Ice has been serving Philadelphia's finest water ice, gelati, ice cream, and pretzels since 1945.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
