// StarRating 컴포넌트
interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const stars = Array.from({ length: 5 }, (_, i) => {
    return (
      <div key={i} className="w-3 h-6 bg-amber-400" />
    );
  });

  return <div className="flex gap-1">{stars}</div>;
}; 