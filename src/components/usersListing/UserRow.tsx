import { FC, useId, useRef, useState } from 'react';
import classnames from '../../lib/helpers';
import { User } from '../../types/usersType';

interface Props {
  user: User;
}

const UserRow: FC<Props> = ({ user }) => {
  const id = useId();

  const inputRef = useRef(null);

  const [isSelected, setIsSelected] = useState(false);

  const handleSelected = () => {
    inputRef.current.checked = !inputRef.current.checked;
    setIsSelected(inputRef.current.checked);
  };

  return (
    <tr
      className={classnames('border-t first:border-t-0', isSelected ? 'bg-gray-100/50' : '')}
      onClick={handleSelected}
    >
      <td className="px-8 py-4">
        <label htmlFor={`select-${user.email}-${id}`} className="sr-only">
          Select {user.name.firstName} {user.name.lastName}
        </label>
        <input type="checkbox" id={`select-${user.email}-${id}`} ref={inputRef} onChange={handleSelected} />
      </td>
      <td className="px-8 py-4 text-lg">
        {user.name.firstName} {user.name.lastName}
      </td>
      <td className="px-8 py-4 text-lg">{user.age}</td>
    </tr>
  );
};

export default UserRow;
