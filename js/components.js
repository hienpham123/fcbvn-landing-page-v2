/**
 * FCBVN – Shared Header & Footer
 * Gọi FCBVN.renderHeader('home'|'services'|'projects'|'about'|'news'|'contact') và FCBVN.renderFooter()
 * sau khi DOM đã load (hoặc đặt script ở cuối body).
 */
var FCBVN = (function () {
  var activeNav = 'text-sm font-semibold text-primary';
  var inactiveNav = 'text-sm font-medium transition-colors hover:text-primary';
  var mobileActiveNav = 'block rounded-lg px-3 py-2 text-sm font-semibold text-primary bg-primary/10';
  var mobileInactiveNav = 'block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-primary/5 dark:hover:bg-slate-800/60 hover:text-primary transition-colors';

  function navClass(page, current) {
    return page === current ? activeNav : inactiveNav;
  }

  function navClassMobile(page, current) {
    return page === current ? mobileActiveNav : mobileInactiveNav;
  }

  function getHeader(currentPage) {
    return (
      '<header class="fixed top-0 z-50 w-full border-b border-primary/10 bg-background-light/95 backdrop-blur-md dark:bg-background-dark/95">' +
        '<div class="mx-auto relative z-[60] flex max-w-7xl items-center justify-between px-6 py-4">' +
          '<div class="flex items-center gap-10">' +
            '<a class="flex items-center gap-3" href="index.html">' +
              '<div class="flex h-10 w-10 items-center justify-center rounded-lg overflow-hidden  ring-slate-200 dark:ring-slate-700">' +
                '<img src="images/logo.svg" alt="FCBVN" class="h-10 w-10 object-contain" />' +
              '</div>' +
              '<h1 class="text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">FCBVN</h1>' +
            '</a>' +
            '<nav class="hidden items-center gap-6 lg:flex">' +
              '<a class="' + navClass('home', currentPage) + '" href="index.html">Trang Chủ</a>' +
              '<a class="' + navClass('about', currentPage) + '" href="about.html">Giới Thiệu</a>' +
              '<a class="' + navClass('services', currentPage) + '" href="index.html#services">Dịch Vụ</a>' +
              '<a class="' + navClass('projects', currentPage) + '" href="projects.html">Dự Án</a>' +
              '<a class="' + navClass('news', currentPage) + '" href="news.html">Tin Tức</a>' +
              '<a class="' + navClass('contact', currentPage) + '" href="contact.html">Liên Hệ</a>' +
            '</nav>' +
          '</div>' +
          '<div class="flex items-center gap-4">' +
            '<div class="relative hidden sm:block">' +
              '<span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>' +
              '<input class="h-10 w-48 rounded-lg border-none bg-primary/5 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 dark:text-white xl:w-64" placeholder="Tìm kiếm giải pháp..." type="text"/>' +
            '</div>' +
            '<a href="contact.html#form" class="hidden rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-all hover:bg-primary/90 md:block">Liên hệ tư vấn</a>' +
            '<button id="fcbvn-mobile-menu-button" class="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 dark:text-white lg:hidden" type="button" aria-label="Menu" aria-controls="fcbvn-mobile-menu" aria-expanded="false">' +
              '<span class="material-symbols-outlined">menu</span>' +
            '</button>' +
          '</div>' +
        '</div>' +
        '<div id="fcbvn-mobile-menu-overlay" class="hidden lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px]" aria-hidden="true"></div>' +
        '<div id="fcbvn-mobile-menu" class="hidden lg:hidden fixed left-0 right-0 top-20 z-50 border-b border-primary/10 bg-background-light/95 dark:bg-background-dark/95 shadow-xl max-h-[calc(100vh-5rem)] overflow-auto">' +
          '<div class="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-2">' +
            '<a class="' + navClassMobile('home', currentPage) + '" href="index.html">Trang Chủ</a>' +
            '<a class="' + navClassMobile('about', currentPage) + '" href="about.html">Giới Thiệu</a>' +
            '<a class="' + navClassMobile('services', currentPage) + '" href="index.html#services">Dịch Vụ</a>' +
            '<a class="' + navClassMobile('projects', currentPage) + '" href="projects.html">Dự Án</a>' +
            '<a class="' + navClassMobile('news', currentPage) + '" href="news.html">Tin Tức</a>' +
            '<a class="' + navClassMobile('contact', currentPage) + '" href="contact.html">Liên Hệ</a>' +
            '<div class="pt-3 mt-2 border-t border-primary/10 flex flex-col gap-3">' +
              '<a href="contact.html#form" class="rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white text-center hover:bg-primary/90 transition-all">Liên hệ tư vấn</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '<div class="h-20 flex-none" aria-hidden="true"></div>'
    );
  }

  function getFooter() {
    return (
      '<footer class="bg-slate-900 px-6 py-16 text-slate-300">' +
        '<div class="mx-auto max-w-7xl">' +
          '<div class="grid gap-12 lg:grid-cols-4">' +
            '<div class="col-span-full lg:col-span-1">' +
              '<div class="mb-6 flex items-center gap-3">' +
                '<a class="flex items-center gap-3" href="index.html" aria-label="Trang chủ FCBVN">' +
                  '<div class="flex h-10 w-10 items-center justify-center rounded-lg  overflow-hidden ring-white/10">' +
                    '<img src="images/logo.svg" alt="FCBVN" class="h-10 w-10 object-contain" />' +
                  '</div>' +
                  '<h2 class="text-2xl font-black text-white">FCBVN</h2>' +
                '</a>' +
              '</div>' +
              '<p class="mb-8 text-sm leading-relaxed">FCBVN tự hào là đơn vị tiên phong trong lĩnh vực phòng cháy chữa cháy tại Việt Nam, mang lại sự an tâm tuyệt đối cho khách hàng qua từng dự án.</p>' +
              '<div class="flex gap-4">' +
                '<a class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors" href="#" aria-label="Facebook">' +
                  '<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path></svg>' +
                '</a>' +
                '<a class="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-primary transition-colors" href="#" aria-label="YouTube">' +
                  '<svg class="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 4-8 4z"></path></svg>' +
                '</a>' +
              '</div>' +
            '</div>' +
            '<div>' +
              '<h3 class="mb-6 text-lg font-bold text-white">Văn phòng Hà Nội</h3>' +
              '<ul class="flex flex-col gap-4 text-sm">' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">location_on</span><span>Số 123 Phố Duy Tân, Cầu Giấy, Hà Nội</span></li>' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">call</span><span>(024) 3456 7890</span></li>' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">mail</span><span>hanoi@fcbvn.com</span></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h3 class="mb-6 text-lg font-bold text-white">Văn phòng TP.HCM</h3>' +
              '<ul class="flex flex-col gap-4 text-sm">' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">location_on</span><span>Tòa nhà AB, Quận 1, TP. Hồ Chí Minh</span></li>' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">call</span><span>(028) 9876 5432</span></li>' +
                '<li class="flex gap-3"><span class="material-symbols-outlined text-primary text-lg">mail</span><span>hcmc@fcbvn.com</span></li>' +
              '</ul>' +
            '</div>' +
            '<div>' +
              '<h3 class="mb-6 text-lg font-bold text-white">Liên kết nhanh</h3>' +
              '<ul class="flex flex-col gap-3 text-sm">' +
                '<li><a class="hover:text-white" href="index.html#services">Quy trình dịch vụ</a></li>' +
                '<li><a class="hover:text-white" href="contact.html#form">Báo giá thiết bị</a></li>' +
                '<li><a class="hover:text-white" href="about.html">Tuyển dụng</a></li>' +
                '<li><a class="hover:text-white" href="#">Chính sách bảo hành</a></li>' +
                '<li><a class="hover:text-white" href="contact.html">Tư vấn kỹ thuật</a></li>' +
              '</ul>' +
            '</div>' +
          '</div>' +
          '<div class="mt-16 border-t border-white/10 pt-8 text-center text-xs">' +
            '<p>© 2024 FCBVN - Công ty CP Phòng Cháy Chữa Cháy Việt Nam. Bảo lưu mọi quyền.</p>' +
          '</div>' +
        '</div>' +
      '</footer>'
    );
  }

  function renderHeader(currentPage) {
    var el = document.getElementById('site-header');
    if (!el) return;

    el.innerHTML = getHeader(currentPage || 'home');

    var button = document.getElementById('fcbvn-mobile-menu-button');
    var menu = document.getElementById('fcbvn-mobile-menu');
    var overlay = document.getElementById('fcbvn-mobile-menu-overlay');

    if (!button || !menu || !overlay) return;

    function setOpen(isOpen) {
      if (isOpen) {
        menu.classList.remove('hidden');
        overlay.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
        document.documentElement.style.overflow = 'hidden';
      } else {
        menu.classList.add('hidden');
        overlay.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        document.documentElement.style.overflow = '';
      }
    }

    function toggle() {
      var isOpen = button.getAttribute('aria-expanded') === 'true';
      setOpen(!isOpen);
    }

    button.addEventListener('click', toggle);
    overlay.addEventListener('click', function () { setOpen(false); });
    menu.addEventListener('click', function (e) {
      var target = e.target;
      if (target && target.tagName === 'A') setOpen(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
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
