(async function loadSEO() {
  try {
    const response = await fetch('assets/seo.html');
    if (!response.ok) return;
    const html = await response.text();
    document.head.insertAdjacentHTML('beforeend', html);
  } catch (e) {
    console.error('SEO metadata failed to load', e);
  }
})();
