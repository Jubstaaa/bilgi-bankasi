import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Form } from "formik";
import { addPost } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function NewPost() {
  // Post içeriğini tutacak state
  const [content, setContent] = useState("");
  // Postu yayınladıktan sonra kullanıcıyı anasayfaya useNavigate ile yönlendiriyoruz.
  let navigate = useNavigate();
  // Text editör için custom tool
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  return (
    <div className="container mx-auto flex flex-wrap py-6 relative items-center justify-center">
      <Helmet>
        <title>Yeni Makale | Bilgi Bankası</title>
      </Helmet>
      <section className="w-full flex flex-col justify-center items-center px-3 space-y-6">
        <Formik
          initialValues={{
            profilePhoto: "",
            displayName: "",
            title: "",
            bio: "",
            thumbnail: "",
          }}
          onSubmit={({ profilePhoto, displayName, title, bio, thumbnail }) => {
            addPost(profilePhoto, displayName, title, bio, thumbnail, content);
            navigate("/");
          }}
        >
          {({ values, handleSubmit, handleChange }) => (
            <Form
              onSubmit={handleSubmit}
              className="flex flex-col justify-start items-center w-full space-y-5"
            >
              <div className="grid grid-cols-12 items-start justify-center space-x-5 w-full">
                <div className="col-span-1 flex space-x-2">
                  <label className="font-semibold pt-1 text-end">
                    Profil Fotoğrafı
                  </label>
                  <img
                    className="h-10 w-10 cursor-pointer rounded-full object-cover"
                    src={values.profilePhoto || "/img/no-avatar.jpeg"}
                    alt=""
                  />
                </div>

                <div className="col-span-11 flex flex-col justify-center items-start space-y-3">
                  <input
                    className="w-full border-[1px] border-secondaryBorder p-1"
                    type="text"
                    name="profilePhoto"
                    placeholder="URL"
                    onChange={handleChange}
                    value={values.profilePhoto}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-start justify-center space-x-5 w-full">
                <label className="col-span-1 font-semibold pt-1 text-end">
                  İsim
                </label>
                <div className="col-span-11 flex flex-col justify-center items-start space-y-3">
                  <input
                    required
                    className="w-full border-[1px] border-secondaryBorder p-1"
                    type="text"
                    name="displayName"
                    onChange={handleChange}
                    value={values.displayName}
                  />
                </div>
              </div>

              <div className="grid grid-cols-12 items-start justify-center space-x-5 w-full">
                <label className=" col-span-1 font-semibold pt-1 text-end">
                  Özgeçmiş
                </label>
                <div className="col-span-11 flex flex-col justify-center items-start space-y-3">
                  <textarea
                    className="w-full border-[1px] border-secondaryBorder p-1 resize-none	"
                    type="text"
                    name="bio"
                    onChange={handleChange}
                    value={values.bio}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-start justify-center space-x-5 w-full">
                <label className="col-span-1 font-semibold pt-1 text-end">
                  Başlık
                </label>
                <div className="col-span-11 flex flex-col justify-center items-start space-y-3">
                  <input
                    required
                    className="w-full border-[1px] border-secondaryBorder p-1"
                    type="text"
                    name="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                </div>
              </div>
              <div className="grid grid-cols-12 items-start justify-center space-x-5 w-full">
                <label className="col-span-1 font-semibold pt-1 text-end">
                  Kapak Resmi
                </label>

                <div className="col-span-11 flex flex-col justify-center items-start space-y-3">
                  <input
                    className="w-full border-[1px] border-secondaryBorder p-1"
                    type="text"
                    name="thumbnail"
                    placeholder="URL"
                    onChange={handleChange}
                    value={values.thumbnail}
                  />
                </div>
              </div>
              {values.thumbnail && (
                <div className="flex items-start justify-center space-x-5 w-full">
                  <img
                    className="h-[500px] w-full cursor-pointer justify-self-end object-cover"
                    src={values.thumbnail || "/img/placeholder.png"}
                    alt=""
                  />
                </div>
              )}
              <h3 className="w-full text-start text-2xl font-semibold">
                İçerik
              </h3>
              <ReactQuill
                className="w-full h-72"
                theme="snow"
                value={content}
                onChange={setContent}
                modules={modules}
                formats={formats}
              />

              <div className="flex items-center justify-center w-full py-10">
                <div className=" w-full flex justify-between items-center">
                  <button
                    className="h-[30px] w-full mt-1  flex items-center justify-center gap-x-2 rounded-md bg-brand font-semibold text-sm text-white bg-green-500 disabled:opacity-60 "
                    type="submit"
                  >
                    <div> Yayınla</div>
                  </button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </section>
      <section className="w-full h-96 flex flex-col justify-center items-center px-3 space-y-6"></section>
    </div>
  );
}

export default NewPost;
