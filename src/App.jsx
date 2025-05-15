import React, { useState, useEffect } from "react";
import AvatarCard from "./components/AvatarCard";
import CreateAvatarModal from "./components/CreateAvatarModal";

export default function App() {
  const [people, setPeople] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setloading] = useState(false);
  const greetingName = "User";

  const getAlluser = async () => {
    setloading(true);
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users?_limit=3"
      );
      const data = await response.json();
      setPeople(data);
      setloading(false);
    } catch (error) {
      alert("Something went Wrong");
      console.log("Getting error in getalluser fn ", error);
      setloading(false);
    }
  };

  useEffect(() => {
    getAlluser();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          👋 Welcome back, {greetingName}!
        </h1>
      </header>
      <div className="flex items-center justify-center">
      {loading && (
        <button className="flex items-center justify-center px-4 py-2 text-black rounded text-xl">
            <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-black mr-2 "></div>
            Loading...
          </button>
        )}
        </div>
      <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        
        {!loading &&
          people.map((person) => (
            <AvatarCard
              key={person.id}
              name={person.name}
              imageUrl={`https://i.pravatar.cc/150?u=${person.id}`}
            />
          ))}
      </section>
      <button
        className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-transform transform hover:scale-110"
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
      {isModalOpen && (
        <CreateAvatarModal onClose={() => setIsModalOpen(false)} />
      )}
    </div>
  );
}
