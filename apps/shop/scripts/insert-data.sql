-- 카테고리 그룹 생성
INSERT INTO category_groups (id, title) VALUES 
(1, '강도'),
(2, '컵사이즈');

-- 강도 카테고리
INSERT INTO categories (id, group_id, name, sort_order) VALUES 
(1, 1, '연함', 1),
(2, 1, '중간', 2), 
(3, 1, '진함', 3),
(4, 1, '매우진함', 4);

-- 컵사이즈 카테고리  
INSERT INTO categories (id, group_id, name, sort_order) VALUES
(5, 2, 'SHORT', 1),
(6, 2, 'TALL', 2),
(7, 2, 'GRANDE', 3),
(8, 2, 'VENTI', 4);

-- 상품 데이터
INSERT INTO products (id, name, price, thumbnail, detail_image, status) VALUES
(1, '에스프레소', 2500, 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1511920170033-f8396924c348?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(2, '아메리카노', 3000, 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(3, '카페라떼', 4000, 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(4, '카푸치노', 4200, 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(5, '마키아토', 4500, 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(6, '바닐라라떼', 4800, 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(7, '카라멜마끼아토', 5000, 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(8, '아이스아메리카노', 3200, 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(9, '콜드브루', 3800, 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=600&h=400&fit=crop&crop=center', 'ON_SALE'),
(10, '디카페인아메리카노', 3500, 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop&crop=center', 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop&crop=center', 'ON_SALE');

-- 상품-카테고리 연결 (강도)
INSERT INTO product_categories (product_id, category_id) VALUES
(1, 4), -- 에스프레소 - 매우진함
(2, 2), -- 아메리카노 - 중간
(3, 1), -- 카페라떼 - 연함  
(4, 2), -- 카푸치노 - 중간
(5, 3), -- 마키아토 - 진함
(6, 1), -- 바닐라라떼 - 연함
(7, 2), -- 카라멜마끼아토 - 중간
(8, 2), -- 아이스아메리카노 - 중간
(9, 3), -- 콜드브루 - 진함
(10, 1); -- 디카페인 - 연함

-- 상품-카테고리 연결 (컵사이즈) - 모든 상품에 모든 사이즈 적용
INSERT INTO product_categories (product_id, category_id) VALUES
-- SHORT
(1, 5), (2, 5), (3, 5), (4, 5), (5, 5), (6, 5), (7, 5), (8, 5), (9, 5), (10, 5),
-- TALL  
(1, 6), (2, 6), (3, 6), (4, 6), (5, 6), (6, 6), (7, 6), (8, 6), (9, 6), (10, 6),
-- GRANDE
(1, 7), (2, 7), (3, 7), (4, 7), (5, 7), (6, 7), (7, 7), (8, 7), (9, 7), (10, 7),
-- VENTI
(1, 8), (2, 8), (3, 8), (4, 8), (5, 8), (6, 8), (7, 8), (8, 8), (9, 8), (10, 8);

-- 재고 정보
INSERT INTO inventory (product_id, quantity) VALUES
(1, 100), (2, 150), (3, 120), (4, 80), (5, 90),
(6, 110), (7, 95), (8, 200), (9, 85), (10, 70);

-- 시퀀스 재설정 (ID 중복 방지)
SELECT setval('category_groups_id_seq', 2);
SELECT setval('categories_id_seq', 8); 
SELECT setval('products_id_seq', 10); 