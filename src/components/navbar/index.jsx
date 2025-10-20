import { Link } from "react-router-dom";
import { useState } from "react";
import { Search, ShoppingCart, Menu } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const totalItems = 0; // Substituir depois pela lógica real do carrinho

  return (
    <header className="bg-brand-pink-light w-full shadow-md relative">
      {/* ✅ Topo da Navbar */}
      <div className="flex items-center max-w-7xl mx-auto px-4 py-3 gap-4">

        {/* ✅ Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="./logo.jpg" alt="Logo Elba Festas" className="h-14 sm:h-16 w-auto rounded-4xl" />
        </Link>

        {/* ✅ Barra de pesquisa (agora sempre no centro e responsiva) */}
        <div className="flex-1 relative min-w-0">
          <input
            type="text"
            placeholder="Pesquisar produtos..."
            className="
              w-full px-4 py-2 border border-brand-metal-medium rounded-full 
              text-brand-metal-light placeholder-brand-metal-light
              focus:outline-none focus:ring-2 focus:ring-brand-metal-medium
            "
          />
          <Search className="absolute right-3 top-2.5 text-brand-metal-medium" size={20} />
        </div>

        {/* ✅ Ícones (carrinho + menu mobile) */}
        <div className="flex items-center gap-3 flex-shrink-0">
          {/* Carrinho */}
          <Link to="/cart" className="relative hover:scale-105 transition-transform">
            <ShoppingCart size={24} className="text-brand-metal-light" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>

          {/* Botão menu (mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 md:hidden text-brand-metal-light hover:bg-brand-blue-dark rounded-lg"
          >
            <Menu size={26} />
          </button>
        </div>
      </div>

      {/* ✅ Navegação para DESKTOP */}
      <nav className="hidden md:flex bg-brand-blue-dark shadow-inner shadow-brand-blue-dark/50">
        <ul className="flex justify-center gap-8 max-w-7xl mx-auto py-3 text-brand-metal-light font-bold text-lg">
          <li><Link to="/" className="hover:text-brand-metal-medium transition">HOME</Link></li>
          <li><Link to="/products" className="hover:text-brand-metal-medium transition">PRODUTOS</Link></li>
          <li><Link to="/about" className="hover:text-brand-metal-medium transition">INSTITUCIONAL</Link></li>
          <li><Link to="/contact" className="hover:text-brand-metal-medium transition">CONTATOS</Link></li>
        </ul>
      </nav>

      {/* ✅ Dropdown do menu MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-dark z-40 shadow-lg">
          <ul className="flex flex-col items-center space-y-2 p-4 text-brand-metal-light font-bold">
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/" className="py-2 w-full text-center hover:text-brand-metal-medium">HOME</Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/products" className="py-2 w-full text-center hover:text-brand-metal-medium">PRODUTOS</Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/about" className="py-2 w-full text-center hover:text-brand-metal-medium">INSTITUCIONAL</Link>
            </li>
            <li>
              <Link onClick={() => setIsMenuOpen(false)} to="/contact" className="py-2 w-full text-center hover:text-brand-metal-medium">CONTATOS</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
