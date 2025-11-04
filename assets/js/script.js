// Global JS for Mercuri site
// Handles smooth scroll, navbar toggle, active links, sticky navbar, and component loading

(function(){
  const $ = (sel, ctx=document) => ctx.querySelector(sel);
  const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

  // Smooth scroll for in-page anchors
  function initSmoothScroll(){
    document.addEventListener('click', function(e){
      const a = e.target.closest('a[href^="#"]');
      if(!a) return;
      const href = a.getAttribute('href');
      if(href === '#') return;
      const target = document.querySelector(href);
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
      }
    });
  }

  // Mobile menu toggle
  function initMobileMenu(){
    const toggle = $('#menu-toggle');
    const mobileMenu = $('#mobile-menu');
    const openIcon = $('#menu-open');
    const closeIcon = $('#menu-close');
    if(!toggle || !mobileMenu) return;

    toggle.addEventListener('click', function(){
      mobileMenu.classList.toggle('hidden');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    $$('.mobile-link').forEach(link=> link.addEventListener('click', ()=>{
      mobileMenu.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    }));
  }

  // Highlight active links
  function initActiveLinks(){
    const path = window.location.pathname.split("/").pop() || 'index.html';
    const links = $$('.nav-link').concat($$('.mobile-link'));
    links.forEach(link=>{
      const href = link.getAttribute('href');
      if(href === path) link.classList.add('active');
      else link.classList.remove('active');
    });
  }

  // Navbar sticky blur on scroll
  function initNavbarScroll(){
    const nav = $('#site-navbar');
    if(!nav) return;
    function onScroll(){
      if(window.scrollY > 12) nav.classList.add('scrolled');
      else nav.classList.remove('scrolled');
    }
    onScroll();
    window.addEventListener('scroll', onScroll, {passive:true});
  }

  // Load navbar/footer components
  async function loadComponent(id, file){
    const el = document.getElementById(id);
    if(el){
      const res = await fetch("components/" + file);
      el.innerHTML = await res.text();
      // Init JS after component is loaded
      if(id === 'navbar'){
        initMobileMenu();
        initActiveLinks();
        initNavbarScroll();
      }
    }
  }

  document.addEventListener('DOMContentLoaded', function(){
    initSmoothScroll();
    loadComponent("navbar", "navbar.html");
    loadComponent("footer", "footer.html");
  });

})();
