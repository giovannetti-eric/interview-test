import { FC } from 'react';
import AgeFilter from './AgeFilter';
import NameFilter from './NameFilter';
import UsersTable from './UsersTable';

const UsersListing: FC = () => {
  const handleAgeFilter = (values) => {
    console.log('Age filter', values);
  };

  return (
    <div className="flex gap-10">
      <div className="p-8 bg-white border border-gray-300 rounded-md shadow-lg shadow-gray-200/80">
        <AgeFilter onSubmit={(values) => handleAgeFilter(values)} />
      </div>
      <div className="flex-auto p-8 bg-white border border-gray-300 rounded-md shadow-lg shadow-gray-200/80">
        <NameFilter />
        <UsersTable users={[]} />
      </div>
    </div>
  );
};

export default UsersListing;
