import { Container } from '../../components/container';
import gremio from '../../assets/gremio.png';
import flamengo from '../../assets/flamengo.png';
import saopaulo from'../../assets/sao-paulo.png';
import fluminense from '../../assets/fluminense.png';
import santos from '../../assets/santos.png';
import cruzeiro from '../../assets/cruzeiro.png';
import inter from '../../assets/internacional.png';
import corinthians from '../../assets/corinthians.png';
import botafogo from '../../assets/botafogo.png';
import vasco from '../../assets/vasco.png';
import atlmg from '../../assets/atletico-mineiro.png';
import palmeiras from '../../assets/palmeiras.png';
import br from '../../assets/Campeonato_Brasileiro_Série_A_logo.png';
import banner from '../../assets/banner.jpeg';
import './home.css';
import { useState, useEffect, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import type { Club } from '../clubes';

export function Home() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showModal, setShowModal] = useState(false); // Novo estado para o modal
  const inputRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    setShowModal(true);
  }, []);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    fetch('https://api-futebol-sqjf.onrender.com/clubs')
      .then(res => res.json())
      .then(setClubs)
      .catch(console.error);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (inputRef.current && !inputRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSelectClub(id: number) {
    setSearchTerm('');
    setShowSuggestions(false);
    navigate(`/details/${id}`);
  }

  return (
    <Container>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4">
          <div className="bg-zinc-800 p-6 rounded-lg text-white max-w-sm w-full shadow-lg">
            <h2 className="text-xl font-bold mb-4">Atenção!</h2>
            <p className="mb-4">
              Este projeto utiliza um serviço de backend gratuito (Render). O servidor pode estar inativo e levar alguns segundos para ser "acordado".
            </p>
            <p className="mb-4">
              Se os dados não aparecerem imediatamente, por favor, aguarde alguns instantes e atualize a página (F5).
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-sky-500 hover:bg-sky-600 transition-colors text-white py-2 rounded-md"
            >
              Entendi
            </button>
          </div>
        </div>
      )}

      {windowWidth <= 750 && (
        <section className="search-filter my-5 p-4">
          <div className="relative max-w-md w-full" ref={inputRef}>
            <input
              type="text"
              placeholder="Buscar clube..."
              className="p-2 rounded w-full outline-none bg-zinc-700 text-white focus:shadow-lg focus:shadow-sky-500 transition-shadow z-0"
              value={searchTerm}
              onChange={e => {
                setSearchTerm(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
            />
            <BiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-white" />
            {showSuggestions && searchTerm && filteredClubs.length > 0 && (
              <ul className="absolute top-full mt-1 left-0 right-0 max-h-60 overflow-y-auto bg-white rounded-md shadow-lg z-50 text-gray-800">
                {filteredClubs.map(club => (
                  <li
                    key={club.id}
                    className="cursor-pointer px-4 py-2 hover:bg-sky-500 hover:text-white transition"
                    onClick={() => handleSelectClub(club.id)}
                  >
                    {club.name}
                  </li>
                ))}
              </ul>
            )}
            {showSuggestions && searchTerm && filteredClubs.length === 0 && (
              <div className="absolute top-full mt-1 left-0 right-0 bg-white rounded-md shadow-lg z-50 text-gray-800 px-4 py-2">
                Nenhum clube encontrado
              </div>
            )}
          </div>
        </section>
      )}

      <div className='flex justify-between gap-15'>
        <main className='w-full bg-zinc-800 p-5 rounded-2xl'>
          <h2 className='py-1'>Partidas de hoje</h2>
          <hr />
          <p className='text-zinc-500'>Brasileirão</p>
          <div className='flex items-center gap-5'>
            <div className='text-center'><p>19:30</p><p>1T 35 min</p></div>
            |
            <div>
              <div className='flex items-center gap-3 p-1'>
                <img src={gremio} alt="" className='w-5'/>
                <p>Grêmio</p> 
                <p>2</p>
              </div>
              <div className='flex items-center gap-3 p-1'>
                <img src={flamengo} alt="" className='w-5'/>
                <p>Flamengo</p>
                <p>1</p>
              </div>
            </div>
          </div>
          <hr className='text-zinc-600 py-2'/>
          <div className='flex items-center gap-5'>
            <div className='text-center'><p>19:30</p><p>1T 39 min</p></div>
            |
            <div>
              <div className='flex items-center gap-3 p-1'>
                <img src={saopaulo} alt="" className='w-5'/>
                <p>São Paulo</p> 
                <p>3</p>
              </div>
              <div className='flex items-center gap-3 p-1'>
                <img src={fluminense} alt="" className='w-5'/>
                <p>Fluminense</p>
                <p>0</p>
              </div>
            </div>
          </div>
          <hr className='text-zinc-600 py-2'/>
          <h2 className='py-1'>Partidas de amanhã</h2>
          <hr />
          <p className='text-zinc-500'>Copa do brasil</p>
          <div className='flex items-center gap-5'>
            <div className='text-center'><p>16:00</p></div>
            |
            <div>
              <div className='flex items-center gap-3 p-1'>
                <img src={santos} alt="" className='w-5'/>
                <p>Santos</p>
                <p>0</p>
              </div>
              <div className='flex items-center gap-3 p-1'>
                <img src={cruzeiro} alt="" className='w-5'/>
                <p>Cruzeiro</p>
                <p>0</p>
              </div>
            </div>
          </div>
           <div className='flex items-center gap-5'>
          <div className='text-center'><p>16:00</p>
          </div>
          |
          <div>
           <div className='flex items-center gap-3 p-1'>
             <img src={inter} alt="" className='w-5'/>
             <p>Internacional</p>
             <p>0</p>
           </div>
            <div className='flex items-center gap-3 p-1'>
               <img src={corinthians} alt="" className='w-5'/>
               <p>Corinthians</p>
               <p>0</p>
            </div>
          </div>
        </div>
        <hr className='text-zinc-600 py-2'/>

            <div className='flex items-center gap-5'>
          <div className='text-center'><p>16:00</p>
          </div>
          |
          <div>
           <div className='flex items-center gap-3 p-1'>
             <img src={botafogo} alt="" className='w-5'/>
             <p>Botafogo</p>
             <p>0</p>
           </div>
            <div className='flex items-center gap-3 p-1'>
               <img src={vasco} alt="" className='w-5'/>
               <p>Vasco</p>
               <p>0</p>
            </div>
          </div>
        </div>
        <hr className='text-zinc-600 py-2'/>

            <div className='flex items-center gap-5'>
          <div className='text-center'><p>18:00</p>
          </div>
          |
          <div>
           <div className='flex items-center gap-3 p-1'>
             <img src={palmeiras} alt="" className='w-5'/>
             <p>Palmeiras</p>
             <p>0</p>
           </div>
            <div className='flex items-center gap-3 p-1'>
               <img src={atlmg} alt="" className='w-5'/>
               <p>Atlético-MG</p>
               <p>0</p>
            </div>
          </div>
        </div>
        <hr className='text-zinc-600 py-2'/>

        </main>
        <aside className='banner w-4xl'>
          <img src={banner} alt="" />
        </aside>
      </div>

      <section className='w-full flex gap-10 items-center bg-zinc-800 p-5 rounded-2xl my-5'>
   <img src={br} alt="logo" className='w-20'/>
   <div>
         <h2>Regulamento</h2>
        <p>Regulamento. A Série A de 2025 é disputada por vinte clubes em dois turnos. Em cada turno, todos os times jogam entre si uma única vez. Os jogos do segundo turno serão realizados na mesma ordem do primeiro, apenas com o mando de campo invertido.</p>
   </div>
      </section>
    </Container>
  );
}