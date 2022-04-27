import { FC } from 'react';
import MainHeader from '../components/structure/MainHeader';

interface Props {
  title: string;
  children: React.ReactNode;
}

const DefaultLayout: FC<Props> = ({ title, children }) => {
  return (
    <>
      <MainHeader />
      <main className="max-w-screen-xl p-16 mx-auto">
        <h1 className="mb-8 text-3xl font-semibold">{title}</h1>
        {children}
      </main>
    </>
  );
};

export default DefaultLayout;
