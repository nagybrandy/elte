import React from 'react';
import { Menu } from "./Menu"
export function Layout({ children }) {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        {children}
      </main>
      <footer className='p-5 mt-10 text-center border-t border-1 border-base-300 bg-base-300 rounded-t-xl'>
        ELTE IK ©️ 2025
      </footer>
    </>
  );
}
