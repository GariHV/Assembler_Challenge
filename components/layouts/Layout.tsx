import * as React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'Assembler Challenge'}</title>
        <meta name="author" content="Garikoitz Herrero" />
        <meta
          name="description"
          content="Assembler Institute of Technology Challenge"
        />
        <meta
          name="keywords"
          content="challenge, frontend, assembler, assembler challenge, assembler challenge frontend, assembler challenge frontend nextjs"
        />
      </Head>
      <main>{children}</main>
    </>
  );
};
