import React from 'react';
import { Navbar, NavbarContent } from '@nextui-org/react';
import { BurguerButton } from './burguer-button';
import { UserDropdown } from './user-dropdown';

interface Props {
  children: React.ReactNode;
}

export const NavbarWrapper = ({ children }: Props) => {
  return (
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <Navbar
        isBordered
        className="w-full"
        classNames={{
          wrapper: 'w-full max-w-full',
        }}
      >
        <NavbarContent className="md:hidden">
          <BurguerButton />
        </NavbarContent>
        <NavbarContent className="flex justify-between items-center w-full">
          <div className="flex-1"></div>
          <div className="flex-shrink-0">
            <UserDropdown />
          </div>
        </NavbarContent>
      </Navbar>
      {children}
    </div>
  );
};
