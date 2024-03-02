// this is equivalent to Container.astro, but for React components.

import React from 'react';
import type { PropsWithChildren } from 'react';

const Container = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
      {children}
    </div>
  );
};

export default Container;

