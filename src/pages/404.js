import React from "react";

function ErrorPage() {
  return (
    <div class="container mx-auto flex flex-wrap py-6">
      <section class="w-full  flex flex-col items-center px-3">
        <div class="w-full flex flex-col text-center md:text-left md:flex-row shadow bg-white mt-10 mb-10 p-6 gap-10">
          <div class="w-full md:w-1/5 flex justify-center md:justify-start pb-4">
            <img src="/img/404.jpg" />
          </div>
          <div class="flex-1 flex flex-col justify-center md:justify-start">
            <p class="font-semibold text-2xl">
              Üzgünüz, bu sayfa kullanılamıyor.
            </p>
            <p class="pt-2">
              İzlediğin bağlantı bozuk olabilir veya sayfa kaldırılmış olabilir.
            </p>
            <div class="flex items-center justify-center md:justify-start text-2xl no-underline text-blue-800 pt-4">
              <a class="" href="#">
                <i class="fab fa-facebook"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-instagram"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-twitter"></i>
              </a>
              <a class="pl-4" href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ErrorPage;
