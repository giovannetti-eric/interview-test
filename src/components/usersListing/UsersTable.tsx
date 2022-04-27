import { FC } from 'react';
import { Users } from '../../types/usersType';
import classnames from '../../lib/helpers';

interface Props {
  users: Users;
  sortColumn: 'name' | 'age';
  onSort: (value: any) => void;
}

const UsersTable: FC<Props> = ({ users, sortColumn, onSort }) => {
  const handleSort = (sortColumn: 'name' | 'age') => {
    if (typeof onSort === 'function') {
      onSort(sortColumn);
    }
  };

  if (!users?.length) {
    return <div className="p-8 text-center opacity-60">No users found</div>;
  }

  // todo: transform this table into a reusable dumb component
  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          <th className="px-8 py-4 text-lg text-left text-semibold">
            <button type="button" className="flex items-center gap-2 group" onClick={() => handleSort('name')}>
              Name
              <img
                className={classnames('opacity-30 group-hover:opacity-100', sortColumn === 'name' ? 'opacity-100' : '')}
                src="/sort-arrows.svg"
                alt="Sort by name"
                width="10"
                height="10"
              />
            </button>
          </th>
          <th className="px-8 py-4 text-lg text-left text-semibold">
            <button type="button" className="flex items-center gap-2 group" onClick={() => handleSort('age')}>
              Age
              <img
                className={classnames('opacity-30 group-hover:opacity-100', sortColumn === 'age' ? 'opacity-100' : '')}
                src="/sort-arrows.svg"
                alt="Sort by age"
                width="10"
                height="10"
              />
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.email} className="border-t first:border-t-0">
            <td className="px-8 py-4 text-lg">
              {user.name.firstName} {user.name.lastName}
            </td>
            <td className="px-8 py-4 text-lg">{user.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UsersTable;
