export function Footer(){
    return(
          <footer className="w-full bg-zinc-900 text-white py-6 mt-10 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 gap-4 text-sm">
        <p className="text-center sm:text-left">
          © {new Date().getFullYear()} DevLeandro. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/leandrowork03"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/leandro-santos-front-end/" 
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
    )
}