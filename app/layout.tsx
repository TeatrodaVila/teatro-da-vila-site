export const metadata = {
  title: "Teatro da Vila",
  description: "Arte, comunidade e inclusão."
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
