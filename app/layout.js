
import MyContext from "@/Helper/Context";
import "./globals.css";





export default function RootLayout({ children }) {
  MyContext
  return (
    <html lang="en">
      <body >
       <MyContext>
        {children}
       </MyContext>
      </body>
    </html>
  );
}
