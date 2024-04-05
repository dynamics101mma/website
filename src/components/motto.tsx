
import { Avatar, Blockquote } from "flowbite-react";

export function Motto() {
  return (
    <div className="mx-auto max-w-screen text-center flex flex-col gap-1">
      <svg
        className="mx-auto mb-3 h-10 w-10 text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 14"
      >
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
      <div>
        <p className="md:text-2xl text-xl font-black_ops_one font-medium md:line-clamp-2 text-white">
          It Takes 21 Days to Build a Habit, and 90 Days to Build a Lifestyle
        </p>
      </div>
        {/* <div className="flex items-center justify-center divide-x-2">
          <cite className="pr-3 font-medium text-white">Dr. Maxwell Maltz's</cite>
        </div> */}
    </div>
  );
}
