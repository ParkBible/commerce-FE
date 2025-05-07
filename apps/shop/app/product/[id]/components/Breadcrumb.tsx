// Breadcrumb 컴포넌트
export const Breadcrumb = () => {
  return (
    <nav className="flex gap-3 items-center self-start mt-6 text-base text-black whitespace-nowrap">
      <div className="flex gap-1 items-center self-stretch my-auto">
        <a href="/" className="self-stretch my-auto hover:underline">
          Home
        </a>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0420c8252a0cfd051740f756610df1a404ea63e"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Breadcrumb separator"
        />
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto">
        <a href="/shop" className="self-stretch my-auto hover:underline">
          Shop
        </a>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0420c8252a0cfd051740f756610df1a404ea63e"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Breadcrumb separator"
        />
      </div>
      <div className="flex gap-1 items-center self-stretch my-auto">
        <a href="/shop/men" className="self-stretch my-auto hover:underline">
          Men
        </a>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0420c8252a0cfd051740f756610df1a404ea63e"
          className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
          alt="Breadcrumb separator"
        />
      </div>
      <span className="self-stretch my-auto text-black">T-shirts</span>
    </nav>
  );
}; 