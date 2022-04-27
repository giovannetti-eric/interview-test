import { FC } from 'react';
import { Users } from '../../types/usersType';

interface Props {
  users: Users;
}

const UsersTable: FC<Props> = ({ users }) => {
  if (!users?.length) {
    return <div className="p-8 text-center opacity-60">No users found</div>;
  }

  return (
    <table className="w-full table-fixed">
      <thead>
        <tr>
          <th className="px-8 py-4 text-lg text-left">Name</th>
          <th className="px-8 py-4 text-lg text-left">Age</th>
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
