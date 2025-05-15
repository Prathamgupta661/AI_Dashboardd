import React from 'react';

export default function AvatarCard({ name, imageUrl }) {
  return (
    <div className="bg-white rounded-2xl shadow p-4 flex flex-col items-center hover:shadow-lg transition-shadow">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full mb-4 object-cover"
      />
      <h2 className="text-lg font-semibold mb-2">{name}</h2>
      <button className="mt-auto bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg transition-colors">
        Edit
      </button>
    </div>
  );
}