import React, { useCallback } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  Avatar,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  NavbarItem,
} from '@nextui-org/react';
import { DarkModeSwitch } from './darkmodeswitch';
import { deleteAuthCookie } from '@/actions/auth.action';

export const UserDropdown = () => {
  const router = useRouter();

  const handleLogout = useCallback(async () => {
    await deleteAuthCookie();
    router.replace('/login');
  }, [router]);

  return (
    <Dropdown>
      <NavbarItem>
        <DropdownTrigger>
          <Avatar as="button" color="secondary" size="md" src="/vl_logo.jpg" />
        </DropdownTrigger>
      </NavbarItem>
      <DropdownMenu
        aria-label="User menu actions"
        onAction={(actionKey) => console.log({ actionKey })}
      >
        <DropdownItem
          key="profile"
          className="flex flex-col justify-start w-full items-start"
        >
          <p>Signed in as</p>
          <p>info@virtulynx.ca</p>
        </DropdownItem>
        <DropdownItem key="settings">
          <Link href="/settings">Settings</Link>
        </DropdownItem>
        <DropdownItem key="analytics">
          <Link href="/analytics">Analytics</Link>
        </DropdownItem>
        <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
        <DropdownItem
          key="logout"
          color="danger"
          className="text-danger"
          onPress={handleLogout}
        >
          Log Out
        </DropdownItem>
        <DropdownItem key="switch">
          <DarkModeSwitch />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
