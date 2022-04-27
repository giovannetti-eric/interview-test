import { FC } from 'react';

const MainHeader: FC = () => {
  return (
    <header className="flex items-center text-lg bg-white border-b border-gray-200">
      <img src="/logo.svg" alt="Planned Logo" width="64" height="64" />
      <div className="px-4">Planned Test</div>
    </header>
  );
};

export default MainHeader;
