import { useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Formik, Form } from "formik";
import { addPost } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
function NewPost() {
  const [content, setContent] = useState("");
  let navigate = useNavigate();
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
    <div class="container mx-auto flex flex-wrap py-6 relative items-center justify-center">
      <section class="w-full flex flex-col justify-center items-center px-3 space-y-6">
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
              <div className="flex items-start justify-center space-x-5 w-full">
                <label className=" font-semibold pt-1 text-end">
                  Profil Fotoğrafı
                </label>
                <img
                  className="h-10 w-10 cursor-pointer col-span-2 justify-self-end rounded-full object-cover"
                  src={values.profilePhoto || "/img/no-avatar.jpeg"}
                  alt=""
                />
                <div className=" w-full flex flex-col justify-center items-start space-y-3">
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
              <div className="flex items-start justify-center space-x-5 w-full">
                <label className=" font-semibold pt-1 text-end">İsim</label>
                <div className=" w-full flex flex-col justify-center items-start space-y-3">
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

              <div className="flex items-start justify-center space-x-5 w-full">
                <label className="font-semibold pt-1 text-end">Özgeçmiş</label>
                <div className=" w-full flex flex-col justify-center items-start space-y-3">
                  <textarea
                    className="w-full border-[1px] border-secondaryBorder p-1 resize-none	"
                    type="text"
                    name="bio"
                    onChange={handleChange}
                    value={values.bio}
                  />
                </div>
              </div>
              <div className="flex items-start justify-center space-x-5 w-full">
                <label className=" font-semibold pt-1 text-end">Başlık</label>
                <div className=" w-full flex flex-col justify-center items-start space-y-3">
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
              <div className="flex items-start justify-center space-x-5 w-full">
                <label className=" font-semibold pt-1 text-end">
                  Kapak Resmi
                </label>

                <div className=" w-full flex flex-col justify-center items-start space-y-3">
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
      <section class="w-full h-96 flex flex-col justify-center items-center px-3 space-y-6"></section>
    </div>
  );
}

export default NewPost;
