"use client";

import Image from "next/image";

import { useEffect, useState } from "react";
import "react-quill/dist/quill.bubble.css";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import ReactQuill from "react-quill";
import { storage } from "@/Utils/firebase";

const WritePost = () => {
  const { status } = useSession();
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [value, setValue] = useState("");
  const [title, setTitle] = useState("");
  const [catSlug, setCatSlug] = useState("");
  const [uploadSattus, setUploadStatus]=useState("");

  useEffect(() => {

    const upload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setUploadStatus(progress + "%");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        }
      );
    };

    file && upload();
  }, [file]);

  if (status === "loading") {
    return <div className="">Loading...</div>;
  }

  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    // console.log("called");
    if(!title || !value || !media){
      console.log("called");
      return
    };
    const res = await fetch("http://localhost:3000/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        desc: value,
        img: media,
        slug: slugify(title),
        catSlug: catSlug || "Coding", //If not selected, choose the general category
      }),
    });
    console.log(res.status);
    if (res.status === 200) {
      const data = await res.json();
      router.push(`/blogs?type=all`);
      console.log(data);
    }
  };

  return (
    <div className=" w-[100%]  flex flex-col">
      <div className="flex items-center justify-center">
        <input
          type="text"
          required
          placeholder="Title"
          className="h-[45px] w-[100%] max-w-[600px]  font-bold dark:text-white text-[40px] dark:bg-slate-800 pl-3 pr-5 outline-none"
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex items-center  justify-center mt-10 w-[100%] ">
        <select
        required
          className="w-[100%] max-w-[600px] outline-none font-bold opacity-80 dark:text-white dark:bg-slate-800 pl-3"
          onChange={(e) => setCatSlug(e.target.value)}
        >
          <option value="Coding">Coding</option>
          <option value="Fashion">Fashion</option>
          <option value="Food">Food</option>
          <option value="Cooking">Cooking</option>
          <option value="Culture">Culture</option>
          <option value="Travel">Travel</option>
          <option value="Music">Music</option>
          <option value="Drawing">Drawing</option>
          <option value="Photo">Photo</option>
        </select>
      </div>
      <div className="w-[100%] ">
        <div className="flex items-start justify-center">
        <div className="flex mt-5 w-[100%] max-w-[600px] ">
          <button className="w-[40px] h-[40px] rounded-full justify-center items-center border-[2px]  flex  ml-3" >
            <Image onClick={() => setOpen(!open)} src="/plus.png" alt="" width={16} height={16} />
          </button>
          {open && (
            <div className="w-[100px] pl-3 flex items-center justify-between">
              <input
                type="file"
                id="image"
                onChange={(e) => setFile(e.target.files[0])}
                style={{ display: "none" }}
              />
              <button className="">
                <label htmlFor="image">
                  <Image src="/image.png" alt="" width={16} height={16} />
                </label>
              </button>
              <button className="">
              <label htmlFor="image">
                <Image src="/external.png" alt="" width={16} height={16} />
              </label>
              </button>
              <button className="">
              <label htmlFor="image">
                <Image src="/video.png" alt="" width={16} height={16} />
              </label>
              </button>
              <p className="ml-5 text-blue-600 font-bold">{uploadSattus}</p>
            </div>
            
          )}
        </div>
        </div>
        <div className="flex items-center justify-center">
          <ReactQuill
            className="text-[20px] dark:text-white w-[100%] max-w-[600px]"
            theme="bubble"
            value={value}
            onChange={setValue}
            placeholder="Tell your story..."
          />
        </div>
      </div>
      <div className="flex lg:ml-[-8px] justify-center mt-10 w-[100%] max-w-[600px] ">
        <button
          className="bg-green-600 h-[40px] w-[150px]  text-white font-bold"
          onClick={handleSubmit}
        >
          Publish
        </button>
      </div>
      <div className="flex items-center mt-10 w-[100%] ml-0 pl-0 justify-center">
        <div className="flex max-w-[600px] pl-3 lg:pl-0 pr-5 flex-col items-center justify-center">
          <p className="text-[20px] mb-5 dark:text-white">
            Select text to change formatting, add headers, or create links.
          </p>
          <Image
            src="/styling.gif"
            className=" object-cover"
            width={300}
            height={200}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default WritePost;
