import "./globals.css";

export const metadata = {
  title: "HairScore Challenge",
  description: "Rate your hairline",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
