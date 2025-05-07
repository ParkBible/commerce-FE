// StarRating 컴포넌트
interface StarRatingProps {
  rating: number;
}

export const StarRating = ({ rating }: StarRatingProps) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;
  
  return (
    <div className="flex gap-1 items-center">
      <div className="flex gap-1 text-amber-400">
        {Array.from({ length: 5 }, (_, i) => {
          if (i < fullStars) {
            return <span key={i} className="text-lg">★</span>; // 꽉 찬 별
          } else if (i === fullStars && hasHalfStar) {
            // 반 별 구현 - CSS 그라데이션 사용
            return (
              <span key={i} className="text-lg relative inline-block">
                <span className="absolute inset-0 text-amber-200">☆</span>
                <span className="text-lg" 
                      style={{
                        background: 'linear-gradient(to right, #f59e0b 50%, transparent 50%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        display: 'inline-block',
                        position: 'relative'
                      }}>★</span>
              </span>
            );
          } else {
            return <span key={i} className="text-lg text-amber-200">☆</span>; // 빈 별
          }
        })}
      </div>
      {rating > 0 && <span className="text-sm text-gray-600 ml-1 flex items-center" style={{ position: 'relative', top: '2px' }}>{rating}/5</span>}
    </div>
  );
}; 