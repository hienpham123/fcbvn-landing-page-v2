# FCBVN – Fire Protection & Safety Landing Page

Website nhiều trang cho FCBVN (Expert Fire Protection & Safety Services), gồm đầy đủ các section từ thiết kế mẫu.

## Cấu trúc project

| File | Nội dung |
|------|----------|
| **index.html** | Trang chủ: Hero, Core Service Areas (6 dịch vụ), CTA + form liên hệ, Footer |
| **about.html** | Giới thiệu: Legacy hero, Mission & Core Values, Timeline, Leadership Team, Certified for Excellence |
| **projects.html** | Dự án: Featured Projects, bộ lọc, lưới 6 dự án, CTA "Have a complex project in mind?" |
| **news.html** | Tin tức: Fire Protection News & Safety Insights, bộ lọc, masonry grid bài viết, pagination |
| **contact.html** | Liên hệ: Form gửi tin nhắn, bản đồ, Regional Offices (Hanoi, HCMC, 24/7 Support), mạng xã hội |

## Công nghệ

- **HTML5** với cấu trúc semantic
- **Tailwind CSS** (CDN) – theme màu primary `#f20d0d`, font Public Sans
- **Google Material Symbols** cho icon
- **Header & Footer chung**: file `js/components.js` chứa một header và một footer dùng cho tất cả trang. Mỗi trang gọi `FCBVN.renderHeader('home'|'services'|'projects'|'about'|'news'|'contact')` và `FCBVN.renderFooter()` để hiển thị; chỉnh sửa menu hoặc footer tại một nơi là đủ.
- Không cần build, chạy trực tiếp file HTML

## Cách chạy

1. Mở trực tiếp trong trình duyệt:
   - Double-click `index.html`, hoặc
   - Kéo thả `index.html` vào cửa sổ trình duyệt

2. Hoặc dùng local server (tránh lỗi CORS nếu cần):
   ```bash
   npx serve .
   ```
   Rồi mở địa chỉ hiển thị (thường là `http://localhost:3000`).

## Điều hướng

- **Header**: Home, Services (anchor về section trên trang chủ), Projects, About Us, News, Contact. Nút "Get a Quote" dẫn tới trang Contact.
- **Footer**: Liên kết tới các trang và section tương ứng; có thể tùy chỉnh thêm link Privacy/Terms.

## Ghi chú

- Form liên hệ và search hiện chỉ là giao diện (HTML), chưa có xử lý backend.
- Hình ảnh dùng URL từ Google (placeholder); có thể thay bằng ảnh thật và tối ưu đường dẫn sau.
# fcbvn-landing-page-v2
