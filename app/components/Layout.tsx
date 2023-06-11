import { Container } from '@mantine/core';
import type { ReactNode } from 'react';
import { BlogHeader } from './Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <Container size='md'>
      <BlogHeader
        links={[
          {
            link: '/',
            label: 'Home',
          },
          {
            link: '/blog',
            label: 'Blog',
          },
          {
            link: '/about',
            label: 'About',
          },
        ]}
      />
      {children}
    </Container>
  );
};

export default Layout;
