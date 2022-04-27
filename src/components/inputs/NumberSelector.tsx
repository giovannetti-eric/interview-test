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
    <div className="relative">
      <label
        htmlFor={`${name}-${id}`}
        className="absolute w-24 text-lg -translate-y-1/2 opacity-50 left-4 top-1/2 text-ellipsis"
      >
        {label}
      </label>
      <input id={`${name}-${id}`} name={name} value={value} type="number" className="pl-28" onChange={handleChange} />
    </div>
  );
};

export default NumberSelector;
