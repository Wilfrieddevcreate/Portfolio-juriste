import React from 'react';

interface SectionPgProps {
  imageSrc: string;
  title: string;
}

const SectionPg: React.FC<SectionPgProps> = ({ imageSrc, title }) => {
  return (
    <div className="relative mt-10">
      <img src={imageSrc} alt="Background" className="w-full h-48 object-cover opacity-100 bg-gray-100" />
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
};

export default SectionPg;
