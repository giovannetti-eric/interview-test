import { FC, useId } from 'react';

interface Props {
  onChange: (value: any) => void;
}

const NameFilter: FC<Props> = ({ onChange }) => {
  const id = useId();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <div>
      <label htmlFor={`name-filter-${id}`} className="sr-only">
        Filter by name
      </label>
      <div className="relative">
        <img
          className="absolute -translate-y-1/2 pointer-events-none opacity-60 left-4 top-1/2"
          src="/search.svg"
          alt=""
          width="20"
          height="20"
        />
        <input
          type="search"
          placeholder="Search Users"
          className="w-full pl-12"
          id={`name-filter-${id}`}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default NameFilter;
