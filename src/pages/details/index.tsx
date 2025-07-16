// src/pages/details/index.tsx
import { useParams, Link } from "react-router-dom";
import { Container } from "../../components/container";
import { useEffect, useState } from "react";
import type { Club } from "../clubes";

export function Details() {
  const { id } = useParams();
  const [club, setClub] = useState<Club | null>(null);

  useEffect(() => {
    console.log("ID recebido:", id);

    if (!id) {
      console.warn("ID ausente, não foi possível buscar clube");
      return;
    }

    fetch(`https://api-futebol-sqjf.onrender.com/clubs${id}`)
      .then((response) => {
        console.log("Status da resposta:", response.status);
        return response.json();
      })
      .then((data) => {
        console.log("Dados recebidos do fetch:", data);
        setClub(data);
      })
      .catch((error) => console.error("Erro ao buscar clube:", error));
  }, [id]);

  if (!club) {
    return (
      <Container>
        <p>Carregando...</p>
      </Container>
    );
  }

  // Verifica se club.titulos é um array antes de dar .map
  const titulosArray = Array.isArray(club.titulos)
    ? club.titulos
    : typeof club.titulos === "string"
    ? club.titulos.split(",")
    : [];

  return (
    <Container>
      <Link to="/">Voltar</Link>
      <div className="flex items-center gap-10 bg-zinc-600 p-5 rounded-2xl my-2">
        <img src={club.logo} alt={club.name} className="w-10" />
        <h1 className="font-black">{club.name}</h1>
      </div>

      <div className="items-center gap-10 bg-zinc-600 p-5 rounded-2xl my-2">
        <p className="text-2xl text-amber-300">
          <strong>Títulos:</strong>
        </p>
        <ul className="list-disc ml-5">
          {titulosArray.map((titulo: string, index: number) => (
            <li key={index} style={{ listStyleType: "none" }}>
              🏆{titulo}
            </li>
          ))}
        </ul>

        <p className="text-2xl text-pink-800">
          <strong>História:</strong>
        </p>
        <p>{club.historia || club.historia}</p>

        <p className="text-emerald-950">
          <strong>Torcedores:</strong> {club.torcedores}
        </p>
      </div>
    </Container>
  );
}
