document.documentElement.classList.add('js');
const menu = document.querySelector('.menu');
const navigation = document.querySelector('.navlinks');
menu?.addEventListener('click', () => {
 const open = menu.getAttribute('aria-expanded') !== 'true';
 menu.setAttribute('aria-expanded', String(open));
 navigation.classList.toggle('open', open);
});
navigation?.addEventListener('click', e => { if(e.target.closest('a')){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');}});
document.addEventListener('keydown', e => {if(e.key==='Escape' && menu?.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');navigation.classList.remove('open');menu.focus();}});

const filmPlayer = document.querySelector('#film-player');
const filmStart = document.querySelector('.film-start');
filmStart?.addEventListener('click', event => {
  // File previews lack the HTTP referrer required by YouTube embeds.
  if (location.protocol === 'file:') return;
  event.preventDefault();
  const frame = document.createElement('iframe');
  const url = new URL('https://www.youtube.com/embed/SJVlUEBVMM4');
  url.search = new URLSearchParams({autoplay:'1', playsinline:'1', rel:'0', hl:'en', origin:location.origin}).toString();
  frame.src = url.toString();
  frame.title = 'Care Diary of a Tough Son — documentary video';
  frame.allow = 'autoplay; encrypted-media; picture-in-picture; fullscreen';
  frame.allowFullscreen = true;
  frame.referrerPolicy = 'strict-origin-when-cross-origin';
  filmPlayer.replaceChildren(frame);
  frame.focus();
  document.querySelector('.film-status').textContent = 'If playback does not start, press Play in the player. If it remains unavailable, use Watch on YouTube below.';
});
