import { FC } from 'react';

interface Props {
  type?: 'button' | 'submit';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: FC<Props> = ({ type = 'button', disabled = false, children, onClick }) => {
  const handleClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <button
      className="bg-[#52a27e] hover:bg-[#4d9876] focus:bg-[#4d9876] disabled:bg-gray-800 py-3 px-6 text-white rounded-full"
      type={type}
      disabled={disabled}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
