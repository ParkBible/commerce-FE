# 백엔드 추가를 위한 DB 연동
백엔드팀의 스프링 API가 아직 안나와서 자체 백엔드를 구축했습니다. (**프론트엔드 + 백엔드 통합**)

## 🚀 환경 변수 설정
`.env` 파일을 생성하고 다음 내용을 추가:
```env
# 데이터베이스 연결 설정
DATABASE_URL="postgresql://username:password@localhost:5432/commerce"

# 개발용 설정
NODE_ENV="development"

# Next.js 설정
NEXT_PUBLIC_API_URL="http://localhost:3000/api"
```

## 💻 개발 서버 실행
```bash
npm run dev
```

서버가 실행되면 다음이 가능합니다:
- 🌐 **프론트엔드**: http://localhost:3000
- 🔗 **API**: http://localhost:3000/api/*

## 📝 API 엔드포인트

### 상품
- `GET /api/products` - 상품 목록/검색
- `GET /api/categories` - 카테고리 목록

### 장바구니 (추후 구현)
- `GET /api/cart` - 장바구니 조회  
- `POST /api/cart/items` - 상품 추가

### 주문 (추후 구현)
- `POST /api/orders` - 주문 생성
- `GET /api/orders` - 주문 목록

## 🔧 개발 정보

**현재 구현 상태:**
- ✅ 데이터베이스 연결
- ✅ 상품 검색 API  
- ✅ 카테고리 API
- ⏳ 장바구니 API (예정)
- ⏳ 주문 API (예정)

**기술 스택:**
- **Frontend**: Next.js 15, React 19, TypeScript
- **Backend**: Next.js API Routes, PostgreSQL
- **Database**: PostgreSQL with pg driver
- **Styling**: Tailwind CSS

## 🎯 백엔드 대체 이유
이번달 발표인데 백엔드팀의 스프링 API가 아직 안나와서 자체 백엔드를 구축했습니다.