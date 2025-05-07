// ProductGallery 컴포넌트
export const ProductGallery = () => {
  return (
    <div className="w-[36%] max-md:ml-0 max-md:w-full">
      <div className="overflow-hidden grow pb-28 w-full rounded-2xl bg-zinc-400 max-md:pb-24 max-md:mt-10 max-md:max-w-full">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/d5cde5a6e1a3b59d49644ac410d8e8d750487974"
          className="object-contain w-full aspect-[1.04] max-md:max-w-full"
          alt="Product image"
        />
      </div>
    </div>
  );
}; 