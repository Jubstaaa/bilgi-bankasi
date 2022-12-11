import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPost, updateViewCount } from "../firebaseConfig";
function Post() {
  const { postName } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        setPost(await getPost(postName));
        updateViewCount(postName);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <div class="container mx-auto flex flex-wrap py-6">
      <section class="w-full flex flex-col items-center px-3">
        <article class="flex flex-col shadow my-4 w-full">
          {post.thumbnail && (
            <div class="hover:opacity-75">
              <img className="m-auto" src={post.thumbnail} />
            </div>
          )}

          <div class="bg-white flex flex-col justify-start p-6">
            <h1 class="text-3xl font-bold hover:text-gray-700 pb-4">
              {post.title}
            </h1>
            <p class="text-sm pb-3">
              <Link
                to={`/profil/${post?.authorId}`}
                class="font-semibold hover:text-gray-800"
              >
                {post?.author}
              </Link>{" "}
              tarafından {new Date(post.date).toLocaleString("tr-TR")} tarihinde
              yayınlandı.
            </p>
            <div
              dangerouslySetInnerHTML={{
                __html: post.content,
              }}
            ></div>
          </div>
        </article>
      </section>
    </div>
  );
}

export default Post;
