'use client';

import { Inter } from 'next/font/google';
import { QueryClient, QueryClientProvider } from 'react-query';

import './globals.css';
import StyledComponentsRegistry from '../lib/StyledComponentsRegistry';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <RecoilRoot>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
          </RecoilRoot>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
