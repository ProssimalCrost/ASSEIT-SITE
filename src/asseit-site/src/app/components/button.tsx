interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`bg-asseitBlue hover:bg-blue-700 text-white px-6 py-3 rounded-lg shadow-md transition ${className}`}
    >
      {children}
    </button>
  );
}
