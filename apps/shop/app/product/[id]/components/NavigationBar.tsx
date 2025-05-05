// NavigationBar 컴포넌트
export const NavigationBar = () => {
  return (
    <>
      <div className="flex justify-center w-full bg-white border-b border-gray-100">
        <div className="flex flex-col self-center w-full max-w-[1240px] py-4">
          <div className="flex justify-between items-center w-full">
            <h1 className="text-xl font-bold text-black">
              801 COFFEE
            </h1>
            <div className="flex overflow-hidden gap-3 items-center px-4 py-2 text-base text-black bg-zinc-100 rounded-[32px] w-[500px]">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/4980b5e907fdf8fae229011eb2af12e417640a5f?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                className="object-contain w-5 aspect-square"
                alt="Search icon"
              />
              <input
                type="text"
                placeholder="어떤 상품을 찾으시나요..."
                className="bg-transparent outline-none flex-1"
              />
            </div>
            <div className="flex gap-4 items-center">
              <button>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b5e3f50c44bce7c8563de675dc18441131747a3?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                  className="object-contain w-5 aspect-square"
                  alt="장바구니"
                />
              </button>
              <button>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/97301dab40dc819ef659872c1b3cc1eb4fd0e9f2?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
                  className="object-contain w-5 aspect-square"
                  alt="계정"
                />
              </button>
            </div>
          </div>

          <div className="flex justify-center mt-4">
            <nav className="flex gap-8 text-base">
              <a href="#" className="font-medium">버츄오</a>
              <a href="#" className="font-medium">오리지널</a>
              <a href="#" className="font-medium">커피머신</a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}; 