import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = 0; // Coloque valor real do carrinho aqui depois

  return (
    <header className="bg-brand-dark w-full shadow-md relative">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3 gap-4">

        {/* ✅ Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src="./logo.png" alt="Logo Elba Festas" className="h-20 w-auto rounded-xl" />
        </Link>

        {/* ✅ Campo de Pesquisa (Desktop) */}
        <div className="hidden md:flex flex-1 max-w-lg relative">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="
              w-full px-4 py-2 border border-brand-metal-medium rounded-full 
              text-brand-metal-light placeholder-brand-metal-light
              focus:outline-none focus:ring-2 focus:ring-brand-metal-medium
            "
          />
          <Search className="absolute right-3 top-2.5 text-brand-metal-medium" size={22} />
        </div>

        {/* ✅ Navegação Desktop + Carrinho + Menu Mobile */}
        <div className="flex items-center gap-4">

          {/* ✅ Menu Desktop */}
          <nav className="hidden md:flex gap-6 font-bold text-brand-metal-light">
            <Link to="/" className="hover:text-brand-metal-medium transition">HOME</Link>
            <Link to="/products" className="hover:text-brand-metal-medium transition">PRODUTOS</Link>
            <Link to="/about" className="hover:text-brand-metal-medium transition">INSTITUCIONAL</Link>
            <Link to="/contact" className="hover:text-brand-metal-medium transition">CONTATOS</Link>
          </nav>

          {/* ✅ Carrinho */}
          <Link to="/cart" className="relative hover:scale-105 transition-transform">
            <ShoppingCart size={26} className="text-brand-metal-medium" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* ✅ Botão Menu Mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden text-brand-metal-light hover:bg-brand-blue-dark rounded-lg"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* ✅ Barra de Pesquisa no Mobile */}
      <div className="md:hidden w-full px-4 mt-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="
              w-full px-4 py-2 border border-brand-metal-medium rounded-full 
              text-brand-metal-light placeholder-brand-metal-light
              focus:outline-none focus:ring-2 focus:ring-brand-metal-medium
            "
          />
          <Search className="absolute right-3 top-2.5 text-brand-metal-medium" size={22} />
        </div>
      </div>

      {/* ✅ Dropdown Mobile */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark z-40 shadow-lg">
          <ul className="flex flex-col items-center space-y-2 p-4 text-brand-metal-light font-bold">
            <li><Link onClick={() => setIsMenuOpen(false)} to="/" className="py-2 w-full text-center hover:text-brand-metal-medium">HOME</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/products" className="py-2 w-full text-center hover:text-brand-metal-medium">PRODUTOS</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/about" className="py-2 w-full text-center hover:text-brand-metal-medium">INSTITUCIONAL</Link></li>
            <li><Link onClick={() => setIsMenuOpen(false)} to="/contact" className="py-2 w-full text-center hover:text-brand-metal-medium">CONTATOS</Link></li>
          </ul>
        </div>
      )}
    </header>
  );
};
