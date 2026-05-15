import "./app.css";
import { Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppChat from "./components/WhatsAppChat";


export default function App() {
  return (
    <html lang="en">
      <body>
        <Navbar /> 
        <main>
        <Outlet />
        </main>
        <Footer />
        <WhatsAppChat />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
