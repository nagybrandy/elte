import React from 'react';
import { Menu } from './Menu';

export function Layout({ children }) {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        {children}
      </main>
      <footer className='w-full py-10 mt-10 text-center border-t border-1 border-base-300'>
          ELTE IK ©️ 2025
      </footer>
    </>
  );
}
