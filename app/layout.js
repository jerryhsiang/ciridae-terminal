import './globals.css';

export const metadata = {
  title: 'Ciridae Terminal — PE × AI Intelligence',
  description: 'Bloomberg-style intelligence terminal for PE fund AI transformation analysis. 147 funds, 5,426 portfolio companies, 27 verticals.',
  openGraph: {
    title: 'Ciridae Terminal',
    description: 'PE × AI Intelligence Terminal — Analyze 147 funds and 5,426 portfolio companies across AI transformation metrics.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ciridae Terminal',
    description: 'PE × AI Intelligence Terminal',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Roboto+Condensed:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
