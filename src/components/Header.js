import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="w-full py-4 bg-blue-800 shadow">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
        <nav>
          <div class="flex items-center text-lg no-underline text-white pr-6">
            <Link to="/">Bilgi Bankası</Link>
          </div>
        </nav>
        <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
          <li>
            <Link
              to="/yeni-makale"
              class="hover:text-gray-200 hover:underline px-4"
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
