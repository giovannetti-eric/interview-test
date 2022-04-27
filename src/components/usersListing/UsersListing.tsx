import { FC } from 'react';
import AgeFilter from './AgeFilter';
import NameFilter from './NameFilter';
import UsersTable from './UsersTable';
import { useUsers } from '../../hooks/usersHook';

const UsersListing: FC = () => {
  const { users, isLoading, isError } = useUsers();

  const handleAgeFilter = (values) => {
    console.log('Age filter', values);
  };

  const handleNameFilter = (value) => {
    console.log('Name filter', value);
  };

  return (
    <div className="flex gap-10">
      <div className="p-8 bg-white border border-gray-100 rounded-md shadow-lg shadow-gray-200/80">
        <AgeFilter onSubmit={(values) => handleAgeFilter(values)} />
      </div>
      <div className="flex-auto bg-white border border-gray-100 rounded-md shadow-lg shadow-gray-200/80">
        <div className="p-8 border-b border-gray-100">
          <NameFilter onChange={(value) => handleNameFilter(value)} />
        </div>
        <div className="py-8">
          {isLoading ? (
            <div className="p-8 text-center opacity-60">Loading...</div>
          ) : isError ? (
            <div className="p-8 text-center opacity-60">Users can't be loaded</div>
          ) : (
            <UsersTable users={users} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersListing;
