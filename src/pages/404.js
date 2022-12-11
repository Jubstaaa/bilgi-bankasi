import React from "react";
import { Helmet } from "react-helmet";

function ErrorPage() {
  return (
    <div className="container mx-auto flex flex-wrap py-6">
      <Helmet>
        <title>404 | Bilgi Bankası</title>
      </Helmet>
      <section className="w-full  flex flex-col items-center px-3">
        <div className="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6 gap-10">
          <div className="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
            <img src="/img/404.jpg" />
          </div>
          <div className="flex-1 flex flex-col justify-center md:justify-start">
            <p className="font-semibold text-2xl">
              Üzgünüz, bu sayfa kullanılamıyor.
            </p>
            <p className="pt-2">
              İzlediğin bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir.
            </p>
            <div className="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
              <a className="" href="#">
                <i className="fab fa-facebook"></i>
              </a>
              <a className="pl-4" href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a className="pl-4" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="pl-4" href="#">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
