/**
 * FCBVN – Shared Header & Footer
 * Gọi FCBVN.renderHeader('home'|'services'|'projects'|'about'|'news'|'contact') và FCBVN.renderFooter()
 * sau khi DOM đã load (hoặc đặt script ở cuối body).
 */
var FCBVN = (function () {
  var activeNav = 'text-primary text-sm font-semibold underline decoration-2 underline-offset-4';
  var inactiveNav = 'text-slate-700 dark:text-slate-300 text-sm font-semibold hover:text-primary transition-colors';

  function navClass(page, current) {
    return page === current ? activeNav : inactiveNav;
  }

  function getHeader(currentPage) {
    return (
      '<header class="fixed top-0 left-0 right-0 z-50 w-full bg-white/95 dark:bg-background-dark/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm">' +
        '<div class="container mx-auto px-4 lg:px-40 py-4 flex items-center justify-between">' +
          '<div class="flex items-center gap-8">' +
            '<a href="index.html" class="flex items-center gap-2 text-primary">' +
              '<span class="material-symbols-outlined text-3xl font-bold">fire_truck</span>' +
              '<h2 class="text-slate-900 dark:text-slate-100 text-xl font-black leading-tight tracking-tighter">FCBVN</h2>' +
            '</a>' +
            '<nav class="hidden md:flex items-center gap-8">' +
              '<a class="' + navClass('home', currentPage) + '" href="index.html">Trang chủ</a>' +
              '<a class="' + navClass('services', currentPage) + '" href="index.html#services">Dịch vụ</a>' +
              '<a class="' + navClass('projects', currentPage) + '" href="projects.html">Dự án</a>' +
              '<a class="' + navClass('about', currentPage) + '" href="about.html">Về chúng tôi</a>' +
              '<a class="' + navClass('news', currentPage) + '" href="news.html">Tin tức</a>' +
              '<a class="' + navClass('contact', currentPage) + '" href="contact.html">Liên hệ</a>' +
            '</nav>' +
          '</div>' +
          '<div class="flex items-center gap-4">' +
            '<div class="hidden lg:flex relative">' +
              '<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>' +
              '<input class="pl-10 pr-4 py-2 bg-slate-100 dark:bg-slate-800 border-none rounded-lg text-sm focus:ring-2 focus:ring-primary w-64 text-slate-900 dark:text-slate-100 placeholder:text-slate-400" placeholder="Tìm kiếm..." type="text"/>' +
            '</div>' +
            '<a href="contact.html" class="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-primary/20">Nhận báo giá</a>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="h-16 flex-none" aria-hidden="true"></div>'
    );
  }

  function getFooter() {
    return (
      '<footer class="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">' +
        '<div class="container mx-auto px-4 lg:px-40">' +
          '<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">' +
            '<div>' +
              '<a href="index.html" class="flex items-center gap-2 text-primary mb-6">' +
                '<span class="material-symbols-outlined text-3xl font-bold">fire_truck</span>' +
                '<h2 class="text-slate-900 dark:text-slate-100 text-xl font-black leading-tight tracking-tighter">FCBVN</h2>' +
              '</a>' +
              '<p class="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">Dẫn đầu ngành với giải pháp phòng cháy chữa cháy hiện đại từ năm 1998. Cam kết xuất sắc và an toàn tính mạng.</p>' +
              '<div class="flex gap-4">' +
                '<a class="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#" aria-label="Share"><span class="material-symbols-outlined text-lg">share</span></a>' +
                '<a class="w-10 h-10 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full flex items-center justify-center text-slate-600 dark:text-slate-400 hover:bg-primary hover:text-white transition-all" href="#" aria-label="Link"><span class="material-symbols-outlined text-lg">public</span></a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h4 class="font-bold text-slate-900 dark:text-white mb-6">Liên kết nhanh</h4>' +
              '<ul class="space-y-4 text-slate-600 dark:text-slate-400">' +
                '<li><a class="hover:text-primary transition-colors" href="index.html">Trang chủ</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="index.html#services">Tất cả dịch vụ</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="projects.html">Dự án của chúng tôi</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="about.html">Tuyển dụng</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4 class="font-bold text-slate-900 dark:text-white mb-6">Hỗ trợ</h4>' +
              '<ul class="space-y-4 text-slate-600 dark:text-slate-400">' +
                '<li><a class="hover:text-primary transition-colors" href="contact.html">Yêu cầu hỗ trợ</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="#">Chính sách bảo mật</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="#">Điều khoản dịch vụ</a></li>' +
                '<li><a class="hover:text-primary transition-colors" href="#">Câu hỏi thường gặp</a></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h4 class="font-bold text-slate-900 dark:text-white mb-6">Trụ sở chính</h4>' +
              '<p class="text-slate-600 dark:text-slate-400 leading-relaxed">123 Đường An toàn, Quận 1<br/>Thành phố Hồ Chí Minh, Việt Nam</p>' +
              '<a class="inline-flex items-center gap-2 text-slate-900 dark:text-slate-200 hover:text-primary mt-2" href="#"><span class="material-symbols-outlined text-sm">location_on</span> Xem trên Google Maps</a>' +
            '</div>' +
          '</div>' +
          '<div class="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-500">' +
            '<p>© 2024 FCBVN Dịch vụ Phòng cháy chữa cháy. Bảo lưu mọi quyền.</p>' +
            '<div class="flex gap-8">' +
              '<a class="hover:text-primary transition-colors" href="#">Chứng nhận ISO 9001</a>' +
              '<a class="hover:text-primary transition-colors" href="#">Thành viên NFPA</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  function renderHeader(currentPage) {
    var el = document.getElementById('site-header');
    if (el) el.innerHTML = getHeader(currentPage || 'home');
  }

  function renderFooter() {
    var el = document.getElementById('site-footer');
    if (el) el.innerHTML = getFooter();
  }

  return {
    renderHeader: renderHeader,
    renderFooter: renderFooter
  };
})();
