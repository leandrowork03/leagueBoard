import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import type { Club } from "../clubes";

export function Dashboard() {
  const [clubs, setClubs] = useState<Club[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("https://api-futebol-sqjf.onrender.com/clubs")
      .then((res) => res.json())
      .then(setClubs)
      .catch(console.error);
  }, []);

  const filteredClubs = clubs.filter((club) =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="p-5 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Dashboard de Clubes</h1>
      <input
        type="text"
        placeholder="Buscar clube..."
        className="border rounded p-2 mb-5 w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredClubs.length === 0 && (
          <p className=" text-gray-600 col-span-full">Nenhum clube encontrado.</p>
        )}
        {filteredClubs.map((club) => (
          <Link
            to={`/details/${club.id}`}
            key={club.id}
            className="bg-zinc-700 border rounded p-4 flex items-center gap-4 hover:shadow-lg transition"
          >
            <img src={club.logo} alt={club.name} className="w-12 h-12 object-contain" />
            <div>
              <h2 className="font-semibold text-lg">{club.name}</h2>
              <p className="text-sm text-white">
                Títulos: {club.titulos || "N/A"}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
