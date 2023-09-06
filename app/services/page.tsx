import Image from "next/image";
import Link from "next/link";

// import React, { useState } from "react";

export default function Services() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32">
        <h2 className="mb-12 text-center text-3xl font-bold">Pricing</h2>

        <div className="grid gap-6 lg:grid-cols-3 lg:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Basic</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 129</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>

                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Advanced</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 299</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>
                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Code examples
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium snippets
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="block h-full rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
              <div className="border-b-2 border-neutral-100 border-opacity-100 p-6 text-center dark:border-opacity-10">
                <p className="mb-4 text-sm uppercase">
                  <strong>Enterprise</strong>
                </p>
                <h3 className="mb-6 text-3xl">
                  <strong>$ 499</strong>
                  <small className="text-base text-neutral-500 dark:text-neutral-300">
                    /year
                  </small>
                </h3>
                <button
                  type="button"
                  className="inline-block w-full rounded bg-primary-100 px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                >
                  Buy
                </button>
              </div>
              <div className="p-6">
                <ol className="list-inside">
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Unlimited updates
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Git repository
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    npm installation
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Code examples
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium snippets
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Premium support
                  </li>
                  <li className="mb-4 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      className="mr-3 h-5 w-5 text-primary dark:text-primary-400"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M4.5 12.75l6 6 9-13.5"
                      />
                    </svg>
                    Drag&amp;Drop builder
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// export const Login = () => {
//   const [isVerified, setIsVerified] = useState(false);

//   const checkPw = () => {
//     // gets the current input value
//     const answer = (document.getElementById("password") as HTMLInputElement)
//       .value;

//     if (answer === "yourSecretPassword") {
//       setIsVerified(true);
//     } else {
//       alert("Sorry, that's not it");
//     }
//   };

//   return (
//     <>
//       {isVerified ? null : (
//         <form onSubmit={checkPw}>
//           <input id="password" name="password" />
//           <button>open sesame</button>
//         </form>
//       )}
//     </>
//   );
// };
