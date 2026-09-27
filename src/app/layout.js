import "./globals.css";

export const metadata = {
  title: "Instagram Clone",
  description: "Instagram UI Clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
