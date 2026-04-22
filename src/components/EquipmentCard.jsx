import React from 'react';

const EquipmentCard = ({ title, image }) => {
  return (
    <div className="relative w-full h-64 overflow-hidden rounded-xl group">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-10"></div>
      <div className="absolute bottom-4 left-4 z-20 text-white">
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
    </div>
  );
};

export default EquipmentCard;
