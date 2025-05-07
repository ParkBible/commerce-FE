import { StarRating } from "./StarRating";

// ReviewCard 인터페이스
export interface ReviewCardProps {
  author: string;
  rating: number;
  content: string;
  date: string;
  verified?: boolean;
}

export const ReviewCard = ({
  author,
  rating,
  content,
  date,
  verified = true
}: ReviewCardProps) => {
  return (
    <article className="flex overflow-hidden flex-wrap items-start px-8 py-7 w-full rounded-3xl border border-solid border-black border-opacity-10 max-md:px-5 max-md:mt-5 max-md:max-w-full">
      <div className="flex flex-wrap flex-1 shrink justify-between items-start w-full basis-0 min-w-60 max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink basis-0 min-w-60 max-md:max-w-full">
          <StarRating rating={rating} />
          <div className="flex flex-col mt-4 w-full max-md:max-w-full">
            <div className="flex gap-1 items-center self-start text-xl font-bold leading-none text-black">
              <span className="self-stretch my-auto">{author}</span>
              {verified && (
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/ace4c826578982eb5797cbeec9cc33d9e8c3bb96"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                  alt="Verified purchaser"
                />
              )}
            </div>
            <p className="mt-3 text-base leading-6 text-black max-md:max-w-full">
              {content}
            </p>
          </div>
        </div>
        <button className="flex gap-3.5 items-start w-6">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/745d047f17c2cf3a32a8cd364da6480bb8c625b1"
            className="object-contain w-6 aspect-square"
            alt="More options"
          />
        </button>
      </div>
      <time className="text-base font-medium leading-none text-black w-[546px] max-md:max-w-full">
        Posted on {date}
      </time>
    </article>
  );
}; 