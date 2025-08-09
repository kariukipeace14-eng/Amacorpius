import './globals.css';

export const metadata = {
  title: 'Amacorpius - Football Hub',
  description: 'Player rankings, league tables, and latest transfers with a sleek design.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
