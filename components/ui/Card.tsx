import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  isPopular?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', isPopular = false }) => {
  const popularStyles = isPopular 
    ? 'border-cyan-400/50' 
    : 'border-slate-800';

  return (
    <div
      className={`relative bg-[#172a45] border rounded-xl p-8 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-cyan-400/30 hover:shadow-lg hover:shadow-cyan-500/10 ${popularStyles} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;