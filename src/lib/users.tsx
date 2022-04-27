import { orderBy } from 'lodash-es';
import { Users } from '../types/usersType';

export const getFilteredUsers = (users: Users, minAge: number, maxAge: number, nameFilter: string): Users => {
  if (!users?.length) {
    return [];
  }

  let filteredUsers = users;

  if (minAge && minAge >= 0) {
    filteredUsers = filteredUsers.filter((user) => user.age > minAge);
  }

  if (maxAge && maxAge >= 0 && maxAge >= minAge) {
    filteredUsers = filteredUsers.filter((user) => user.age < maxAge);
  }

  if (nameFilter) {
    filteredUsers = filteredUsers.filter((user) =>
      `${user.name.firstName.toLowerCase()} ${user.name.lastName.toLowerCase()}`.includes(nameFilter.toLowerCase()),
    );
  }

  return filteredUsers;
};

export const getSortedUsers = (users: Users, sortColumn: 'name' | 'age'): Users => {
  if (!users?.length) {
    return [];
  }

  // todo: handle reverse sorting
  const columnsSorting = {
    name: {
      sort: ['name.firstName', 'name.lastName', 'age'],
      order: ['asc', 'asc', 'desc'],
    },
    age: {
      sort: ['age', 'name.firstName', 'name.lastName'],
      order: ['asc', 'asc', 'asc'],
    },
  };

  const column = columnsSorting?.[sortColumn] || columnsSorting.name;
  const sortedUsers = orderBy(users, column.sort, column.order);

  return sortedUsers;
};
