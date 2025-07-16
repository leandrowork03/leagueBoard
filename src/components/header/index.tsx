import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { LuCircleUser } from "react-icons/lu";
import { useState, useEffect, useRef, useContext } from "react";
import type { Club } from "../../pages/clubes";
import { AuthContext } from "../../contexts/authContext";
import './header.css';

export function Header() {
  const { user, signed, logout } = useContext(AuthContext);
  const [clubs, setClubs] = useState<Club[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  const inputRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch('https://api-futebol-sqjf.onrender.com/clubs')
      .then((res) => res.json())
      .then(setClubs)
      .catch(console.error);
  }, []);

  const filteredClubs = clubs.filter(club =>
    club.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleSelectClub(id: number) {
    setSearchTerm('');
    setShowSuggestions(false);
    navigate(`/details/${id}`);
  }

  function handleLogout() {
    logout();
    navigate("/login");
  }

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current && !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }

      if (
        menuRef.current && !menuRef.current.contains(event.target as Node)
      ) {
        setShowMenu(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="header-main bg-zinc-900 h-30 w-full fixed">
      <nav className="flex items-center max-w-7xl mx-auto justify-around">
        <Link to="/" className="flex flex-col items-center">
          <img src={logo} alt="logo" className="w-10" />
          <p className="font-black text-sky-400">LeagueBoard</p>
        </Link>

        <div
          className="relative div-header flex gap-3 items-center"
          ref={inputRef}
          style={{ minWidth: 250 }}
        >
          <input
            type="text"
            className="bg-amber-50 h-9 rounded-md px-3 text-gray-700 placeholder-gray-400 outline-none shadow-sm"
            placeholder="Buscar clube..."
            value={searchTerm}
            onChange={e => {
              setSearchTerm(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            autoComplete="off"
          />
          <FaSearch color="#333" size={20} />

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

        {signed && user ? (
          <div className="relative" ref={menuRef}>
            <div
              className="flex items-center gap-2 text-white cursor-pointer"
              onClick={() => setShowMenu(prev => !prev)}
            >
              <LuCircleUser />
              <span className="hidden sm:inline truncate max-w-[120px]">
                {user.name ? user.name.charAt(0).toUpperCase() + user.name.slice(1) : ''}
              </span>
            </div>

            {showMenu && (
              <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow z-50 overflow-hidden">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-sky-500 hover:text-white transition"
                  onClick={() => { navigate('/dashboard'); setShowMenu(false); }}
                >
                  Dashboard
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-sky-500 hover:text-white transition"
                  onClick={() => { navigate('/'); setShowMenu(false); }}
                >
                  Home
                </button>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-red-500 hover:text-white transition"
                  onClick={handleLogout}
                >
                  Sair
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link
            to="/login"
            className="bg-white flex items-center p-2 rounded gap-1"
          >
            <LuCircleUser />
            SignIn
          </Link>
        )}
      </nav>

      <nav className="nav-2 flex items-center max-w-7xl mx-auto justify-around py-4 overflow-x-auto space-x-4">
        {clubs.map(club => (
          <Link
            to={`/details/${club.id}`}
            key={club.id}
            className="inline-block"
          >
            <img
              src={club.logo}
              alt={club.name}
              className="w-5 hover:border-b-sky-500 hover:border-b-2 pb-2 transition"
            />
          </Link>
        ))}
      </nav>
    </header>
  );
}
