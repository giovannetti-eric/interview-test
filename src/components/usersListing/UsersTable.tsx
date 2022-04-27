import { FC } from 'react';
import { Users } from '../../types/users';

interface Props {
  users: Users;
}

const UsersTable: FC<Props> = ({ users }) => {
  return <div>Users Table Component</div>;
};

export default UsersTable;
