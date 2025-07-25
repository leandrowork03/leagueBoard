//src/pages/clubes/index.tsx
import { useEffect, useState } from 'react';

import { Container } from '../../components/container';

export interface Club {
  id: number;
  name: string;
  logo: string;
  titulos: string;
  historia: string;
  torcedores: string;
}

export function Clubes() {
  const [clubs, setClubs] = useState<Club[]>([]);

  useEffect(() => {
    fetch('https://api-futebol-sqjf.onrender.com/clubs')
      .then((response) => response.json())
      .then((data) => setClubs(data))
      .catch((error) => console.error('Erro ao buscar clubes:', error));
  }, []);

  return (
    <Container>
      <h1>Clubes</h1>
      <ul>
        {clubs.map((club) => (
          <li key={club.id}>
            <img src={club.logo} alt={club.name} width="50" />
            <span>{club.name}</span>
          </li>
        ))}
      </ul>
    </Container>
  );
}

