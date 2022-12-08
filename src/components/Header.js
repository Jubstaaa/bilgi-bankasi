import React from "react";

function Header() {
  return (
    <nav class="w-full py-4 bg-blue-800 shadow">
      <div class="w-full container mx-auto flex flex-wrap items-center justify-between">
        <nav>
          <ul class="flex items-center justify-between font-bold text-sm text-white uppercase no-underline">
            <li>
              <a class="hover:text-gray-200 hover:underline px-4" href="#">
                Giriş
              </a>
            </li>
            <li>
              <a class="hover:text-gray-200 hover:underline px-4" href="#">
                Kayıt Ol
              </a>
            </li>
          </ul>
        </nav>

        <div class="flex items-center text-lg no-underline text-white pr-6">
          <button>Makale Yaz</button>
        </div>
      </div>
    </nav>
  );
}

export default Header;
