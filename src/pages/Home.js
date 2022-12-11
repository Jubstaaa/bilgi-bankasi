import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import CountUp from "react-countup";
import {
  HiOutlineBookOpen,
  HiOutlineUser,
  HiOutlineClock,
} from "react-icons/hi";
import { getPosts, getUsers } from "../firebaseConfig";
import { Link } from "react-router-dom";
function Home() {
  // Makalelerin ve kullanıcıların bilgilerin tutan stateler
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  //Toplam makale görüntülenme sayısını hesaplayan fonksiyon
  const calculateViewCount = () => {
    let final = 0;
    posts.map((post) => {
      final += post.viewCount;
    });
    return final;
  };
  // Sayfa Yüklendiğinde makalelerin ve kullanıcıların bilgilerini database üzerinden getirecek fonksiyon
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPosts(await getPosts());
        setUsers(await getUsers());
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <header className="w-full container mx-auto">
        <div className="flex flex-col items-center py-12">
          <a
            className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
            href="#"
          >
            Bilgi Bankası
          </a>
          <p className="text-lg text-gray-600">Lorem Ipsum Dolor Sit Amet</p>
        </div>
      </header>
      <div>
        <Carousel
          autoPlay
          showThumbs={false}
          showArrows={false}
          showStatus={false}
          showIndicators={false}
          infiniteLoop={true}
        >
          <div>
            <img src="/img/1.jpg" />
            <div className="flex justify-around items-center absolute inset-0 container mx-auto">
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineBookOpen className="h-8 w-8" />
                <CountUp className="text-3xl font-bold" end={posts.length} />

                <h2 className="text-xl font-semibold">Makale</h2>
              </div>
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineUser className="h-8 w-8" />
                <CountUp className="text-3xl font-bold" end={users.length} />

                <h2 className="text-xl font-semibold">Yazar</h2>
              </div>
              <div className="h-36 w-56 rounded-xl bg-white p-5 flex flex-col justify-center items-center">
                <HiOutlineClock className="h-8 w-8" />
                <CountUp
                  className="text-3xl font-bold"
                  end={calculateViewCount()}
                />

                <h2 className="text-xl font-semibold">Okunan Makale</h2>
              </div>
            </div>
          </div>
          <div>
            <img src="/img/2.jpg" />
            <h2 className="absolute inset-0 pt-5 text-3xl font-bold">
              En Çok Okunan Makaleler
            </h2>
            <div className="flex justify-around items-center absolute inset-0 container mx-auto">
              {posts
                .sort((a, b) => b.viewCount - a.viewCount)
                .slice(0, 3)
                .map((post) => (
                  <div className="h-80 w-80 rounded-xl bg-white p-5 flex flex-col justify-center items-center overflow-hidden">
                    <Link to={`/${post.id}`} className="hover:opacity-75">
                      <img src={post.thumbnail || "/img/placeholder.png"} />
                    </Link>
                    <div className="bg-white flex flex-col justify-start p-6">
                      <Link
                        to={`/${post.id}`}
                        className="text-3xl font-bold hover:text-gray-700 pb-4"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div>
            <img src="/img/3.jpg" />
            <h2 className="absolute inset-0 pt-5 text-3xl font-bold">
              En Son Yayınlanan Makaleler
            </h2>
            <div className="flex justify-around items-center absolute inset-0 container mx-auto">
              {posts
                .sort((a, b) => b.date - a.date)
                .slice(0, 3)
                .map((post) => (
                  <div className="h-80 w-80 rounded-xl bg-white p-5 flex flex-col justify-center items-center overflow-hidden">
                    <Link to={`/${post.id}`} className="hover:opacity-75">
                      <img src={post.thumbnail || "/img/placeholder.png"} />
                    </Link>
                    <div className="bg-white flex flex-col justify-start p-6">
                      <Link
                        to={`/${post.id}`}
                        className="text-3xl font-bold hover:text-gray-700 pb-4"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </Carousel>
      </div>
      <div className="container mx-auto flex flex-wrap py-6">
        <section className="w-full flex flex-row flex-wrap items-center px-3">
          {posts
            .sort((a, b) => b.date - a.date)
            .map((post) => (
              <article className="flex flex-col w-1/4  my-4 min-h-[450px] max-h-[450px] justify-between items-center p-5">
                <Link
                  to={`/${post.id}`}
                  className="hover:opacity-75 self-start  overflow-hidden "
                >
                  <img src={post.thumbnail || "/img/placeholder.png"} />
                </Link>
                <div className="bg-white flex flex-col justify-start p-6 shadow">
                  <Link
                    to={`/${post.id}`}
                    className="text-3xl font-bold hover:text-gray-700 pb-4"
                  >
                    {post.title}
                  </Link>
                  <p className="text-sm pb-3">
                    <Link
                      to={`/profil/${post?.authorId}`}
                      className="font-semibold hover:text-gray-800"
                    >
                      {post?.author}
                    </Link>{" "}
                    tarafından {new Date(post.date).toLocaleString("tr-TR")}{" "}
                    tarihinde yayınlandı.
                  </p>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.content.slice(0, 50),
                    }}
                  ></div>

                  <Link
                    to={`/${post.id}`}
                    className="uppercase text-gray-800 hover:text-black font-semibold"
                  >
                    daha fazla... <i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
              </article>
            ))}
        </section>
      </div>
    </>
  );
}

export default Home;
