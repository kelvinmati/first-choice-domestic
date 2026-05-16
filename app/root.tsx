import "./app.css";
import { Links, Meta, Outlet, Scripts, ScrollRestoration } from "react-router";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import WhatsAppChat from "./components/WhatsAppChat";


export default function App() {
  return (
    <html lang="en">
            <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />   {/* ← this injects the CSS link tag */}
      </head>
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
