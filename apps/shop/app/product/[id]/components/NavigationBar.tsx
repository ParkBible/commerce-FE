// NavigationBar 컴포넌트
export const NavigationBar = () => {
  return (
    <>
      <div className="flex w-full bg-black min-h-[38px] max-md:max-w-full" />
      <nav className="flex flex-col self-center mt-6 w-full max-w-[1240px] max-md:max-w-full">
        <div className="flex flex-wrap gap-10 justify-center items-center w-full max-md:max-w-full">
          <h1 className="gap-2.5 self-stretch my-auto text-3xl font-bold text-black">
            801 COFFEE
          </h1>
          <div className="flex overflow-hidden flex-wrap flex-1 shrink gap-3 items-start self-stretch px-4 py-3 my-auto text-base text-black basis-0 bg-zinc-100 min-w-60 rounded-[62px] max-md:max-w-full">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4980b5e907fdf8fae229011eb2af12e417640a5f?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
              className="object-contain shrink-0 w-6 aspect-square"
              alt="Search icon"
            />
            <input
              type="text"
              placeholder="Search for products..."
              className="bg-transparent outline-none flex-1"
            />
          </div>
          <div className="flex gap-3.5 items-start self-stretch my-auto">
            <button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/97301dab40dc819ef659872c1b3cc1eb4fd0e9f2?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="User account"
              />
            </button>
            <button>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5e3f50c44bce7c8563de675dc18441131747a3?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                className="object-contain shrink-0 w-6 aspect-square"
                alt="Shopping cart"
              />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}; 