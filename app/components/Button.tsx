import { ReactNode } from 'react';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  children: ReactNode;
}

const Button = ({ type = 'button', onClick, children }: ButtonProps) => {
  return (
    <button
      className="w-full px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-300 mt-4"
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;