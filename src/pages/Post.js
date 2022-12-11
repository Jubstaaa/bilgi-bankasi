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
  }, [postName]);

  return (
    <div className="container mx-auto flex flex-wrap py-6">
      <section className="w-full flex flex-col items-center px-3">
        <article className="flex flex-col shadow my-4 w-full">
          {post.thumbnail && (
            <div className="hover:opacity-75">
              <img className="m-auto" src={post.thumbnail} />
            </div>
          )}

          <div className="bg-white flex flex-col justify-start p-6">
            <h1 className="text-3xl font-bold hover:text-gray-700 pb-4">
              {post.title}
            </h1>
            <p className="text-sm pb-3">
              <Link
                to={`/profil/${post?.authorId}`}
                className="font-semibold hover:text-gray-800"
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
