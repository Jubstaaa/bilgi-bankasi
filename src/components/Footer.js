import React from "react";

function Footer() {
  return (
    <footer className="w-full border-t bg-white pb-12">
      <div className="w-full container mx-auto flex flex-col items-center">
        <div className="flex flex-col md:flex-row text-center md:text-left md:justify-between py-6">
          <a href="#" className="uppercase px-3">
            Hakkımızda
          </a>
          <a href="#" className="uppercase px-3">
            Gizlilik Koşulları
          </a>
          <a href="#" className="uppercase px-3">
            Şartlar ve Koşullar
          </a>
          <a href="#" className="uppercase px-3">
            İletişim
          </a>
        </div>
        <div className="uppercase pb-6">&copy; Bilgi Bankası</div>
      </div>
    </footer>
  );
}

export default Footer;
