import { FC, useId } from 'react';

interface Props {
  label: string;
  name: string;
  value: number;
  onChange?: (value: any) => void;
}

const NumberSelector: FC<Props> = ({ label, name, value, onChange }) => {
  const id = useId();

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (typeof onChange === 'function') {
      onChange(e.target.value);
    }
  };

  return (
    <div className="flex items-center gap-4 px-4 py-1 border border-gray-300 rounded-md">
      <label htmlFor={`${name}-${id}`} className="opacity-50 min-w-[4rem]">
        {label}
      </label>
      <input
        id={`${name}-${id}`}
        name={name}
        value={value}
        type="number"
        className="bg-transparent border-none"
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberSelector;
