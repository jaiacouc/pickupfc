import Link from "next/link";

const Header: React.FC<{ visible: boolean }> = (props) => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-white shadow-md p-8">
      <div className="flex items-center flex-shrink-0 text-red-600 mr-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          height="54"
          width="54"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <Link href="/">
          <a className="font-semibold text-2xl tracking-tight">PickUpFC</a>
        </Link>
      </div>
      <div hidden={props.visible}>
        <Link href={"/login"}>
          <a className="inline-block text-sm px-4 py-2 leading-none border rounded border-red-600 text-red-600 hover:border-red-600 hover:text-white hover:bg-red-600 mt-4 lg:mt-0">
            Login
          </a>
        </Link>
        <Link href={"/createAccount"}>
          <a className="inline-block text-sm  px-4 py-2 leading-none rounded border-red-600 text-white bg-red-600 mt-4 hover:border hover:bg-transparent hover:text-red-600 lg:mt-0 ml-2">
            Sign Up
          </a>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
