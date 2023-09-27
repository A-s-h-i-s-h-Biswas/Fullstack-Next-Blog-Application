"use client";
import Link from "next/link";
// import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = ({style}) => {
//   const [open, setOpen] = useState(false);

  const { status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login" className={`${style}`}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={`${style}`}>
            Write
          </Link>
          <span className={`${style} cursor-pointer`} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      
    </>
  );
};

export default AuthLinks;
