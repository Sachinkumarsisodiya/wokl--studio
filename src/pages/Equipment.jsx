import React from 'react';
import EquipmentCard from '../components/EquipmentCard';

const Equipment = () => {
  const equipmentItems = [
    {
      title: "Mixing Console",
      image: "https://images.unsplash.com/photo-1590608897129-79da98d15969?q=80&w=2000&auto=format&fit=crop"
    },
    {
      title: "Studio Monitors",
      image: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04"
    },
    {
      title: "Microphone",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d"
    },
    {
      title: "Guitar",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1"
    },
    {
      title: "Drum Kit",
      image: "https://images.unsplash.com/photo-1519892300165-cb5542fb47c7"
    },
    {
      title: "MIDI Keyboard",
      image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?q=80&w=2000&auto=format&fit=crop"
    }
  ];

  return (
    <div className="pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Studio Equipment</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          No compromises. Only the best analog and digital tools at your disposal.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {equipmentItems.map((item, index) => (
            <EquipmentCard key={index} title={item.title} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Equipment;
