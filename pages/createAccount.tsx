import { NextPage } from "next";
import { Fragment } from "react";
import Header from "../components/header";

const CreateAccount: NextPage = () => {
  return (
    <Fragment>
      <Header visible={true}></Header>
      <div className="flex justify-center mt-6">
        <form className="w-full max-w-lg border shadow-md rounded">
          <div className="flex flex-col-2 mx-3 mt-2">
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase text-black text-sm mb-1 tracking-wide"
                htmlFor="first-name"
              >
                First Name
              </label>
              <input
                className="border w-full rounded text-sm block bg-gray-200 border-gray-200 leading-tight"
                id="first-name"
                placeholder="First"
              ></input>
            </div>
            <div className="w-full px-3 mb-6">
              <label
                className="block uppercase text-black text-sm mb-1 tracking-wide"
                htmlFor="last-name"
              >
                Last Name
              </label>
              <input
                className="border w-full rounded text-sm block bg-gray-200 border-gray-200 leading-tight"
                id="last-name"
                placeholder="Last"
              ></input>
            </div>
          </div>
          <div className="flex flex-wrap mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase text-black text-sm mb-1 tracking-wide"
                htmlFor="password"
              >
                PassWord
              </label>
              <input
                className="border w-full rounded text-sm block mb-2 bg-gray-200 border-gray-200 leading-tight"
                id="password"
                type={"password"}
                placeholder="**************"
              ></input>
              <div className="w-full mb-6">
                <label
                  className="block uppercase text-black text-sm mb-1 tracking-wide"
                  htmlFor="confirm-pass"
                >
                  Retype Password
                </label>
                <input
                  className="border w-full rounded text-sm block bg-gray-200 border-gray-200 leading-tight"
                  id="confirm-pass"
                  type={"password"}
                  placeholder="**************"
                ></input>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default CreateAccount;
