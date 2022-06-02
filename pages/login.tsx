import { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/header";
import Link from "next/link";

const Login: NextPage = () => {
  return (
    <Fragment>
      <Header visible={true}></Header>
      <div className="flex justify-center">
        <div className="w-full max-w-md mt-20">
          <form className="flex flex-col items-center bg-white shadow-md border rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">
              Sign In
            </h2>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-400 leading-tight mb-2"
                placeholder="Username"
                id="username"
                type="text"
              ></input>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-sm text-gray-400 leading-tight"
                placeholder="Password"
                id="password"
                type="password"
              ></input>
            </div>
            <div className="flex items-center">
              <button className="shadow bg-red-600 rounded text-white font-semibold py-2 px-4 hover:bg-red-700">
                Sign In
              </button>
            </div>
            <Link href="/createAccount">
              <a className="mt-2 text-blue-600 hover:text-gray-700">
                Dont have an account? Sign Up!
              </a>
            </Link>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
