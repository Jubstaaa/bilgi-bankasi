import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="w-full py-4 bg-blue-800 shadow">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between">
        <nav>
          <div className="flex items-center text-lg no-underline text-white pr-6">
            <Link to="/">Bilgi Bankası</Link>
          </div>
        </nav>
        <ul className="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link
              to="/yeni-makale"
              className="hover:text-gray-200 hover:underline px-4"
              href="#"
            >
              Makale Yaz
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
