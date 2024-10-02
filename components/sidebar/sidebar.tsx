import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Sidebar } from './sidebar.styles';
import { HomeIcon } from '../icons/sidebar/home-icon';
import { PaymentsIcon } from '../icons/sidebar/payments-icon';
import { AccountsIcon } from '../icons/sidebar/accounts-icon';
import { CustomersIcon } from '../icons/sidebar/customers-icon';
import { SettingsIcon } from '../icons/sidebar/settings-icon';
import { SidebarItem } from './sidebar-item';
import { SidebarMenu } from './sidebar-menu';
import { useSidebarContext } from '../layout/layout-context';

export const SidebarWrapper = () => {
  const pathname = usePathname();
  const { collapsed, setCollapsed } = useSidebarContext();

  return (
    <aside className="h-screen z-[20] sticky top-0">
      {collapsed ? (
        <div className={Sidebar.Overlay()} onClick={setCollapsed} />
      ) : null}
      <div
        className={Sidebar({
          collapsed: collapsed,
        })}
      >
        <div className={Sidebar.Header()}>
          <Image
            src="/lynx_logo_light.svg"
            alt={'Lynx Logo'}
            width={70}
            height={70}
          />
          <p className="justify-center text-4xl text-center">VirtuLynx</p>
        </div>
        <div className="flex flex-col justify-between h-full">
          <div className={Sidebar.Body()}>
            <SidebarItem
              title="Dashboard"
              icon={<HomeIcon />}
              isActive={pathname === '/'}
              href="/"
            />
            <SidebarMenu title="Menu">
              <SidebarItem
                isActive={pathname === '/listings'}
                title="Listings"
                icon={<PaymentsIcon />}
                href="/listings"
              />
              <SidebarItem
                isActive={pathname === '/analytics'}
                title="Analytics"
                icon={<CustomersIcon />}
                href="/analytics"
              />
              <SidebarItem
                isActive={pathname === '/account'}
                title="Your Account"
                icon={<AccountsIcon />}
                href="/account"
              />
            </SidebarMenu>
          </div>

          <div className={Sidebar.Body()}>
            <SidebarItem
              isActive={pathname === '/settings'}
              title="Settings"
              icon={<SettingsIcon />}
              href="/settings"
            />
          </div>
        </div>
      </div>
    </aside>
  );
};
