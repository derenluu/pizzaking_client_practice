import Image from "next/image";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <section className="mt-8">
        <h1 className="text-center text-primary text-4xl">Register</h1>
        <form
          action=""
          className="block max-w-sm mx-auto"
        >
          <input
            type="email"
            placeholder="Email"
          />
          <input
            type="password"
            placeholder="Password"
          />
          <button type="submit">Register</button>
          <div className="my-4 text-center text-gray-500">
            or login with provider
          </div>
          <button className="flex gap-4 justify-center">
            <Image src={'/google.png'} alt={'Google'} width={24} height={24}/>
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
};

export default RegisterPage;
