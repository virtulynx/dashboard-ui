import { Image } from '@nextui-org/react';
import { Divider } from '@nextui-org/divider';

interface Props {
  children: React.ReactNode;
}

export const AuthLayoutWrapper = ({ children }: Props) => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 flex-col flex items-center justify-center p-6">
        <div className="md:hidden absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-right.png"
            alt="gradient"
          />
        </div>
        {children}
      </div>

      <div className="hidden my-10 md:block">
        <Divider orientation="vertical" />
      </div>

      <div className="hidden md:flex flex-1 relative flex items-center justify-center p-6">
        <div className="absolute left-0 right-0 bottom-0 top-0 z-0">
          <Image
            className="w-full h-full"
            src="https://nextui.org/gradients/docs-right.png"
            alt="gradient"
          />
        </div>

        <div className="flex flex-col items-center justify-center z-10 text-center">
          <Image
            src="/lynx_logo_light.svg"
            alt={'Lynx Logo'}
            width={120}
            height={120}
          />
          <h1 className="font-bold text-[45px]">Welcome to VirtuLynx!</h1>
          <div className="font-light text-slate-400 mt-4">
            Take your business to the next level.
          </div>
        </div>
      </div>
    </div>
  );
};
