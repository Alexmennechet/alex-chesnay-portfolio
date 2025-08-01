document.addEventListener('DOMContentLoaded', function () {
  // Set page title
  document.title = 'Alex Chesnay \u2013 Portfolio';

  // Update meta description
  var metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', 'Portfolio officiel d\u2019Alex Chesnay \u2013 R\u00e9alisateur 3D, animation, VFX et exp\u00e9riences immersives \u00e0 Paris.');
  }

  // Update Open Graph site name
  var ogSite = document.querySelector('meta[property="og:site_name"]');
  if (ogSite) {
    ogSite.setAttribute('content', 'Alex Chesnay');
  }

  // Replace text occurrences for Neighbor and location
  (function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent
        .replace(/Neighbor/gi, 'Alex Chesnay')
        .replace(/Portland, OR/gi, 'Paris, France');
    } else {
      node.childNodes.forEach(replaceText);
    }
  })(document.body);

  // Update email links
  document.querySelectorAll('a[href^="mailto:"]').forEach(function(a) {
    a.setAttribute('href', 'mailto:alex-mennechet@outlook.fr');
    a.textContent = 'alex-mennechet@outlook.fr';
  });

  // Update phone links
  document.querySelectorAll('a[href^="tel:"]').forEach(function(a) {
    a.setAttribute('href', 'tel:0768563197');
    a.textContent = '07 68 56 31 97';
  });

  // Correct external neighbor links to local
  document.querySelectorAll('a[href*="neighboranimation.com"]').forEach(function(a) {
    var href = a.getAttribute('href');
    href = href.replace(/^https?:\/\/[^\/]+\//, '');
    if (href.startsWith('#')) {
      href = href.substring(1);
    }
    if (!href.startsWith('./') && !href.startsWith('../')) {
      href = './' + href;
    }
    a.setAttribute('href', href);
  });

  // Replace neighbor logos
  document.querySelectorAll('img').forEach(function(img) {
    var src = img.getAttribute('src') || '';
    if (/neighbor/i.test(src)) {
      img.setAttribute('src', './assets/logo/alex-chesnay-logo.svg');
      img.setAttribute('alt', 'Alex Chesnay');
    }
  });
});
