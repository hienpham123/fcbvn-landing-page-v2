/**
 * FCBVN – Shared Header & Footer
 * Gọi FCBVN.renderHeader('home'|'services'|'projects'|'about'|'news'|'contact') và FCBVN.renderFooter()
 * sau khi DOM đã load (hoặc đặt script ở cuối body).
 */
var FCBVN = (function () {
  var activeNav = 'font-semibold text-sm hover:text-primary text-primary transition-colors';
  var inactiveNav = 'font-semibold text-sm hover:text-primary transition-colors';
  var mobileActiveNav = 'block rounded-lg px-3 py-2 text-sm font-bold text-primary bg-primary/10';
  var mobileInactiveNav = 'block rounded-lg px-3 py-2 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary transition-colors';

  function navClass(page, current) {
    return page === current ? activeNav : inactiveNav;
  }

  function navClassMobile(page, current) {
    return page === current ? mobileActiveNav : mobileInactiveNav;
  }

  function getHeader(currentPage) {
    return (
      '<div id="fcbvn-sticky-header" style="position:fixed;top:0;left:0;right:0;z-index:9999;">' +
      '<div class="bg-navy text-white text-xs py-2 px-4 hidden md:block">' +
        '<div class="mx-auto max-w-7xl flex justify-between items-center">' +
          '<div class="flex gap-6">' +
            '<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">location_on</span> Số 9, ngõ 127 Võ Chí Công, Hà Nội</span>' +
            '<span class="flex items-center gap-1"><span class="material-symbols-outlined text-[16px]">schedule</span> T2 - T7: 8:00 - 17:00</span>' +
          '</div>' +
          '<div class="flex gap-4">' +
            '<a class="hover:text-primary transition-colors" href="#" aria-label="Facebook">Facebook</a>' +
            '<a class="hover:text-primary transition-colors" href="#" aria-label="YouTube">YouTube</a>' +
            '<a class="hover:text-primary transition-colors" href="#" aria-label="LinkedIn">LinkedIn</a>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<header class="bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-sm border-b border-slate-200 dark:border-slate-800">' +
        '<div class="mx-auto max-w-7xl px-4 py-4 flex justify-between items-center relative">' +
          '<a class="flex items-center gap-3" href="index.html" aria-label="Trang chủ FCBVN">' +
            '<img alt="FCBVN Logo" class="h-12 w-auto rounded mix-blend-multiply dark:mix-blend-normal" src="images/logo.svg" />' +
            '<div>' +
              '<div class="font-bold text-xl tracking-tight text-navy dark:text-white leading-none">FCBVN <span class="text-primary">FIRE</span></div>' +
              '<div class="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-500 dark:text-slate-400">Protection &amp; Safety</div>' +
            '</div>' +
          '</a>' +
          '<nav class="hidden lg:flex items-center gap-8">' +
            '<a class="' + navClass('home', currentPage) + '" href="index.html">TRANG CHỦ</a>' +
            '<a class="' + navClass('about', currentPage) + '" href="about.html">GIỚI THIỆU</a>' +
            '<a class="' + navClass('services', currentPage) + '" href="index.html#services">DỊCH VỤ</a>' +
            '<a class="' + navClass('projects', currentPage) + '" href="projects.html">DỰ ÁN</a>' +
            '<a class="' + navClass('news', currentPage) + '" href="news.html">TIN TỨC</a>' +
            '<a class="' + navClass('contact', currentPage) + '" href="contact.html">LIÊN HỆ</a>' +
            '<button class="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors" type="button" aria-label="Tìm kiếm">' +
              '<span class="material-symbols-outlined">search</span>' +
            '</button>' +
          '</nav>' +
          '<div class="flex items-center gap-4">' +
            '<button id="fcbvn-mobile-menu-button" class="lg:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors" type="button" aria-label="Menu" aria-controls="fcbvn-mobile-menu" aria-expanded="false">' +
              '<span class="material-symbols-outlined">menu</span>' +
            '</button>' +
            '<a class="hidden md:flex bg-primary text-white px-6 py-2.5 rounded-full font-bold text-sm items-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-500/20" href="tel:0912084114" aria-label="Gọi 0912 084 114">' +
              '<span class="material-symbols-outlined text-[18px]">phone_in_talk</span>' +
              '0912 084 114' +
            '</a>' +
          '</div>' +
          '<div id="fcbvn-mobile-menu-overlay" class="hidden lg:hidden fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[2px]" aria-hidden="true"></div>' +
          '<div id="fcbvn-mobile-menu" class="hidden lg:hidden absolute left-0 right-0 top-full z-50 border-b border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-background-dark/95 backdrop-blur-md shadow-xl">' +
            '<div class="mx-auto max-w-7xl px-4 py-4 flex flex-col gap-2 max-h-[calc(100vh-6rem)] overflow-auto">' +
              '<a class="' + navClassMobile('home', currentPage) + '" href="index.html">TRANG CHỦ</a>' +
              '<a class="' + navClassMobile('about', currentPage) + '" href="about.html">GIỚI THIỆU</a>' +
              '<a class="' + navClassMobile('services', currentPage) + '" href="index.html#services">DỊCH VỤ</a>' +
              '<a class="' + navClassMobile('projects', currentPage) + '" href="projects.html">DỰ ÁN</a>' +
              '<a class="' + navClassMobile('news', currentPage) + '" href="news.html">TIN TỨC</a>' +
              '<a class="' + navClassMobile('contact', currentPage) + '" href="contact.html">LIÊN HỆ</a>' +
              '<div class="pt-3 mt-2 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-3">' +
                '<a class="md:hidden bg-primary text-white px-6 py-3 rounded-full font-bold text-sm inline-flex items-center justify-center gap-2 hover:bg-red-700 transition-all shadow-lg shadow-red-500/20" href="tel:0912084114" aria-label="Gọi 0912 084 114">' +
                  '<span class="material-symbols-outlined text-[18px]">phone_in_talk</span>' +
                  '0912 084 114' +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>' +
      '</div>' +
      '<div id="fcbvn-header-spacer" aria-hidden="true"></div>'
    );
  }

  function getFooter() {
    return (
      '<footer class="bg-navy text-white pt-20 pb-10">' +
        '<div class="mx-auto max-w-7xl px-4">' +
          '<div class="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">' +
            '<div class="lg:col-span-4">' +
              '<a class="flex items-center gap-3 mb-8" href="index.html" aria-label="Trang chủ FCBVN">' +
                '<img alt="FCBVN" class="h-14 w-auto brightness-200" src="images/logo.svg" />' +
                '<div>' +
                  '<div class="font-bold text-2xl tracking-tight">FCBVN <span class="text-primary">FIRE</span></div>' +
                  '<div class="text-[10px] uppercase tracking-[0.2em] font-medium text-slate-400">Since 2015</div>' +
                '</div>' +
              '</a>' +
              '<p class="text-slate-400 text-sm leading-relaxed mb-8">Đơn vị hàng đầu cung cấp giải pháp tổng thể về phòng cháy chữa cháy, cam kết mang lại sự an toàn tuyệt đối cho khách hàng thông qua những sản phẩm và dịch vụ chất lượng cao nhất.</p>' +
              '<div class="flex gap-4">' +
                '<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all" href="#" aria-label="Facebook">FB</a>' +
                '<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all" href="#" aria-label="YouTube">YT</a>' +
                '<a class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary transition-all" href="#" aria-label="LinkedIn">LI</a>' +
              '</div>' +
            '</div>' +
            '<div class="lg:col-span-2">' +
              '<h5 class="text-lg font-bold mb-8 relative after:content-[\'\'] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">Liên Kết</h5>' +
              '<ul class="space-y-4 text-slate-400 text-sm">' +
                '<li><a class="hover:text-white transition-colors" href="about.html">Về chúng tôi</a></li>' +
                '<li><a class="hover:text-white transition-colors" href="index.html#services">Dịch vụ PCCC</a></li>' +
                '<li><a class="hover:text-white transition-colors" href="projects.html">Dự án tiêu biểu</a></li>' +
                '<li><a class="hover:text-white transition-colors" href="news.html">Tin tức &amp; Sự kiện</a></li>' +
                '<li><a class="hover:text-white transition-colors" href="contact.html">Liên hệ</a></li>' +
              '</ul>' +
            '</div>' +
            '<div class="lg:col-span-3">' +
              '<h5 class="text-lg font-bold mb-8 relative after:content-[\'\'] after:absolute after:-bottom-2 after:left-0 after:w-8 after:h-1 after:bg-primary">Liên Hệ</h5>' +
              '<div class="space-y-4">' +
                '<div class="flex gap-3"><span class="material-symbols-outlined text-primary">location_on</span><p class="text-slate-400 text-sm">Số 9, ngõ 127 Võ Chí Công, P. Xuân Đỉnh, Q. Bắc Từ Liêm, Hà Nội</p></div>' +
                '<div class="flex gap-3"><span class="material-symbols-outlined text-primary">call</span><p class="text-slate-400 text-sm">0912 084 114</p></div>' +
                '<div class="flex gap-3"><span class="material-symbols-outlined text-primary">mail</span><p class="text-slate-400 text-sm">contact@fcbvn.vn</p></div>' +
              '</div>' +
            '</div>' +
            '<div class="lg:col-span-3">' +
              '<div class="rounded-2xl overflow-hidden h-48 border border-white/10 grayscale hover:grayscale-0 transition-all duration-500">' +
                '<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.473663215203!2d105.80036667554868!3d21.053735880602685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab22964b494d%3A0xc36829705a666e5!2zOSBOZ8G7IDEyNyBWw7UgQ2jDrSBDw7RuZywgWHXDom4gxJDhu4luaCwgVMOieSBI4buTLCBIw6AgTuG7mWksIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1715600000000!5m2!1svi!2s" style="border:0;" width="100%"></iframe>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">' +
            '<p>© 2024 FCBVN FIRE. All Rights Reserved. Designed by VIÊN NAM.</p>' +
            '<div class="flex gap-6">' +
              '<a class="hover:text-white" href="#">Privacy Policy</a>' +
              '<a class="hover:text-white" href="#">Terms of Service</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</footer>' +
      '<a class="fixed bottom-8 right-8 z-[60] bg-primary text-white px-4 py-3 rounded-full shadow-2xl hover:scale-110 transition-transform animate-bounce" href="tel:0912084114" aria-label="Gọi 0912 084 114">' +
        '<span class="material-symbols-outlined text-3xl">call</span>' +
      '</a>'
    );
  }

  function renderHeader(currentPage) {
    var el = document.getElementById('site-header');
    if (!el) return;

    el.innerHTML = getHeader(currentPage || 'home');

    var headerWrap = document.getElementById('fcbvn-sticky-header');
    var spacer = document.getElementById('fcbvn-header-spacer');
    function syncSpacer() {
      if (!headerWrap || !spacer) return;
      spacer.style.height = headerWrap.offsetHeight + 'px';
    }
    syncSpacer();
    window.addEventListener('resize', syncSpacer);
    window.addEventListener('load', syncSpacer);
    setTimeout(syncSpacer, 0);

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
      if (!target) return;
      var link = target.closest ? target.closest('a') : null;
      if (link) setOpen(false);
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
