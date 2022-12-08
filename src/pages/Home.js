import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CountUp from "react-countup";
import {
  HiOutlineBookOpen,
  HiOutlineUser,
  HiOutlineClock,
} from "react-icons/hi";
function Home() {
  return (
    <>
      <header class="w-full container mx-auto">
        <div class="flex flex-col items-center py-12">
          <a
            class="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Bilgi Bankası
          </a>
          <p class="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>
      <div>
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
        >
          <div>
            <img src="https://picsum.photos/1920/500" />
            <div className="flex justify-around items-center absolute inset-0 container mx-auto">
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineBookOpen className="h-8 w-8" />
                <CountUp className="text-3xl font-bold" end={100} />

                <h2 className="text-xl font-semibold">Makale</h2>
              </div>
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineUser className="h-8 w-8" />
                <CountUp className="text-3xl font-bold" end={100} />

                <h2 className="text-xl font-semibold">Yazar</h2>
              </div>
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineClock className="h-8 w-8" />
                <CountUp className="text-3xl font-bold" end={100} />

                <h2 className="text-xl font-semibold">Okunan Makale</h2>
              </div>
            </div>
          </div>
          {/* <div>
          <img src="https://picsum.photos/1920/500" />
        </div>
        <div>
          <img src="https://picsum.photos/1920/500" />
        </div> */}
        </Carousel>
      </div>
      <div class="container mx-auto flex flex-wrap py-6">
        <section class="w-full flex flex-row gap-5 items-center px-3">
          <article class="flex flex-col shadow my-4">
            <a href="#" class="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=1" />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </a>
              <p href="#" class="text-sm pb-3">
                By{" "}
                <a href="#" class="font-semibold hover:text-gray-800">
                  David Grzyb
                </a>
                , Published on April 25th, 2020
              </p>
              <a href="#" class="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </a>
              <a href="#" class="uppercase text-gray-800 hover:text-black">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article class="flex flex-col shadow my-4">
            <a href="#" class="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=2" />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </a>
              <p href="#" class="text-sm pb-3">
                By{" "}
                <a href="#" class="font-semibold hover:text-gray-800">
                  David Grzyb
                </a>
                , Published on January 12th, 2020
              </p>
              <a href="#" class="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </a>
              <a href="#" class="uppercase text-gray-800 hover:text-black">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>

          <article class="flex flex-col shadow my-4">
            <a href="#" class="hover:opacity-75">
              <img src="https://source.unsplash.com/collection/1346951/1000x500?sig=3" />
            </a>
            <div class="bg-white flex flex-col justify-start p-6">
              <a href="#" class="text-3xl font-bold hover:text-gray-700 pb-4">
                Lorem Ipsum Dolor Sit Amet Dolor Sit Amet
              </a>
              <p href="#" class="text-sm pb-3">
                By{" "}
                <a href="#" class="font-semibold hover:text-gray-800">
                  David Grzyb
                </a>
                , Published on October 22nd, 2019
              </p>
              <a href="#" class="pb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                quis porta dui. Ut eu iaculis massa. Sed ornare ligula lacus,
                quis iaculis dui porta volutpat. In sit amet posuere magna..
              </a>
              <a href="#" class="uppercase text-gray-800 hover:text-black">
                Continue Reading <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </article>
        </section>
      </div>
    </>
  );
}

export default Home;
