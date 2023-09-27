"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Login = () => {
  const { data, status } = useSession();
  console.log(data);
  const router = useRouter();

  if (status === "loading") {
    return <div className="text-[20px] text-blue-500">Loading...</div>;
  }

  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="w-[100%] h-[100%]  flex items-center justify-center">
      <div className="flex flex-col items-center justify-center  w-[100%] max-w-[415px] h-[500px] rounded-md bg-purple-500">
        <div
          className="w-[80%] h-[45px] mb-5 rounded-3xl cursor-pointer flex items-center justify-center bg-red-600"
          onClick={() => signIn("google")}
        >
          <Image
            src="/google.svg"
            className="pr-2"
            width={30}
            height={30}
            alt=""
          />
          <p className="font-bold text-white">Sign in with Google</p>
        </div>
        <div
          className="w-[80%] h-[45px] mb-5 rounded-3xl flex items-center  cursor-pointer justify-center bg-slate-700"
          onClick={() => signIn("github")}
        >
          <Image
            src="/github.svg"
            className="pr-2 "
            width={30}
            height={30}
            alt=""
          />
          <p className="font-bold text-white">Sign in with Github</p>
        </div>
        <div
          className="w-[80%] h-[45px] rounded-3xl flex items-center cursor-pointer  justify-center bg-blue-600"
          onClick={() => signIn("facebook")}
        >
          <Image
            src="/facebook.svg"
            className="pr-2"
            width={30}
            height={30}
            alt=""
          />
          <p className="font-bold text-white">Sign in with Facebook</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
