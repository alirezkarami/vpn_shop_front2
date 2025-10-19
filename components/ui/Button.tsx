import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 active:scale-95';

  const variantStyles = {
    primary: 'bg-[#64ffda] hover:bg-opacity-90 text-[#0a192f] focus:ring-[#64ffda]/50 shadow-lg hover:shadow-[#64ffda]/40',
    secondary: 'bg-slate-700/50 hover:bg-slate-700 text-slate-200 focus:ring-slate-500 border border-slate-600',
    ghost: 'bg-transparent hover:bg-cyan-400/10 text-cyan-400 focus:ring-cyan-500/50',
  };

  const sizeStyles = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-8 text-lg',
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
