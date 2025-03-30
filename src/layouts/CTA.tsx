import NavBar from "./NavBar";

const CallToAction = () => {
  return (
    <div className="rounded-b-xl h-screen">
      <NavBar />
      <section>
        <div className="p-8 md:p-12 lg:px-16 lg:py-36">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit
            </h2>

            <p className="hidden text-gray-500 sm:mt-4 sm:block">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae
              dolor officia blanditiis repellat in, vero, aperiam porro ipsum
              laboriosam consequuntur exercitationem incidunt tempora nisi?
            </p>
          </div>

          <div className="mx-auto mt-8 max-w-xl">
            <form action="#" className="sm:flex sm:gap-4">
              <div className="sm:flex-1">
                <label htmlFor="email" className="sr-only">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full rounded-md border-2  border-gray-200 bg-white p-3 text-gray-700 shadow-xs transition focus:border-white focus:ring-3 focus:ring-blue-400 focus:outline-hidden"
                />
              </div>

              <button
                type="submit"
                className="group cursor-pointer mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-3 text-white transition focus:ring-3 focus:ring-blue-800 focus:outline-hidden sm:mt-0 sm:w-auto"
              >
                <span className="text-sm font-medium">Search Recipe</span>

                <svg
                  className="size-5 rtl:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CallToAction;
