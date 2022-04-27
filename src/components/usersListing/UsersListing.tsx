import { FC, useEffect, useState } from 'react';
import AgeFilter from './AgeFilter';
import NameFilter from './NameFilter';
import UsersTable from './UsersTable';
import { useUsers } from '../../hooks/usersHook';
import { getFilteredUsers, getSortedUsers } from '../../lib/users';

const UsersListing: FC = () => {
  const defaultMinAge = 0;
  const defaultMaxAge = 100;

  const { users, isLoading, isError } = useUsers();

  const [minAge, setMinAge] = useState(defaultMinAge);
  const [maxAge, setMaxAge] = useState(defaultMaxAge);
  const [nameFilter, setNameFilter] = useState('');
  const [sortColumn, setSortColumn] = useState<'name' | 'age'>('name');
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [sortedUsers, setSortedUsers] = useState(users);

  useEffect(() => {
    const result = getFilteredUsers(users, minAge, maxAge, nameFilter);
    setFilteredUsers(result);
  }, [users, minAge, maxAge, nameFilter]);

  useEffect(() => {
    const result = getSortedUsers(filteredUsers, sortColumn);
    setSortedUsers(result);
  }, [filteredUsers, sortColumn]);

  const handleAgeFilter = (ageRange: { minAge: number; maxAge: number }) => {
    setMinAge(ageRange.minAge);
    setMaxAge(ageRange.maxAge);
  };

  const handleNameFilter = (search: string) => {
    setNameFilter(search);
  };

  const handleColumnSort = (sortColumn: 'name' | 'age') => {
    setSortColumn(sortColumn);
  };

  return (
    <div className="flex flex-col items-start gap-10 lg:flex-row">
      <div className="p-8 bg-white border border-gray-100 rounded-md shadow-lg shadow-gray-200/80">
        <AgeFilter
          defaultMinAge={defaultMinAge}
          defaultMaxAge={defaultMaxAge}
          onSubmit={(values) => handleAgeFilter(values)}
        />
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
            <UsersTable users={sortedUsers} sortColumn={sortColumn} onSort={handleColumnSort} />
          )}
        </div>
      </div>
    </div>
  );
};

export default UsersListing;
