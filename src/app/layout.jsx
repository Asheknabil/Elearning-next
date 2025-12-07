import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { AuthProvider } from "../context/AuthContext";
import "./globals.css";


export const metadata = {
  title: "My Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <Navbar />
            {children}
          <Footer />
        </AuthProvider>
        
      </body>
    </html>
  );
}
