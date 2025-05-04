import { ReviewCard } from "./ReviewCard";

// ReviewSection 컴포넌트
export const ReviewSection = () => {
  return (
    <section className="mt-6 w-full max-md:max-w-full">
      <div className="flex flex-wrap gap-10 w-full max-md:max-w-full">
        <div className="flex flex-1 gap-1 my-auto">
          <h2 className="grow text-2xl font-bold text-black">All Reviews</h2>
          <span className="my-auto text-base leading-none text-black">(451)</span>
        </div>
        <div className="flex flex-1 gap-2.5 items-start">
          <button className="flex overflow-hidden justify-between items-center p-3 w-12 h-12 bg-zinc-100 min-h-12 rounded-[62px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/bab462c8b4146379e69dbbe7df32c0acfb2b5c5b?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
              className="object-contain self-stretch my-auto w-6 aspect-square"
              alt="Filter"
            />
          </button>
          <button className="flex overflow-hidden gap-5 justify-between items-center px-5 py-4 text-base font-medium text-black whitespace-nowrap bg-zinc-100 min-h-12 rounded-[62px] w-[120px]">
            <span className="self-stretch my-auto">Latest</span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/39bf37b5776bcb17763e8a8f1fb61bd1cae26c59?placeholderIfAbsent=true&apiKey=95b922efedab48eaaced6331a37c6fcd"
              className="object-contain shrink-0 self-stretch my-auto w-4 aspect-square"
              alt="Sort"
            />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-5 mt-6 max-md:grid-cols-1">
        <ReviewCard
          author="Samantha D."
          rating={4.5}
          content="I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          date="August 14, 2023"
        />
        <ReviewCard
          author="Alex M."
          rating={4}
          content="The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
          date="August 15, 2023"
        />
        <ReviewCard
          author="Ethan R."
          rating={3.5}
          content="This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          date="August 16, 2023"
        />
        <ReviewCard
          author="Olivia P."
          rating={4}
          content="As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
          date="August 17, 2023"
        />
        <ReviewCard
          author="Liam K."
          rating={4}
          content="This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
          date="August 18, 2023"
        />
        <ReviewCard
          author="Ava H."
          rating={4.5}
          content="I'm not just wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
          date="August 19, 2023"
        />
      </div>

      <button className="overflow-hidden gap-3 self-center px-11 py-4 mt-3.5 max-w-full text-base font-medium text-black border border-solid border-black border-opacity-10 min-h-[52px] rounded-[62px] w-[230px] max-md:px-5">
        Load More Reviews
      </button>
    </section>
  );
}; 