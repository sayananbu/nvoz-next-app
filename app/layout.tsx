import type { Metadata } from 'next';

import '@gravity-ui/uikit/styles/fonts.css';
import '@gravity-ui/uikit/styles/styles.css';
import '~app/general.css';
import '~app/normalize.css';

export const metadata: Metadata = {
  title: 'Новое Время',
  description: 'Новое время — новые возможности',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="g-root g-root_theme_dark">{children}</body>
    </html>
  );
}
