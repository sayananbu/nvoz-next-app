import type { Metadata } from 'next';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '~app/general.css';
import '~app/normalize.css';

export const metadata: Metadata = {
  title: '«Новое Время» 1-ая риэлторская компания | Орехово-Зуево',
  description: 'Новое время — новые возможности',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" type="image/x-icon" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <body className="g-root g-root_theme_dark">{children}</body>
    </html>
  );
}
