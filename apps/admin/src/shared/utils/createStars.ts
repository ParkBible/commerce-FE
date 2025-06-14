export const createStars = (rating: number) => {
    let stars = "";

    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars += "★";
        } else {
            stars += "☆";
        }
    }

    return stars;
};
