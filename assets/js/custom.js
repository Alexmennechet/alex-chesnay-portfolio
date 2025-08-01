document.addEventListener('DOMContentLoaded', function () {
  // Update page title
  document.title = 'Alex Chesnay – Portfolio';

  // Update meta description
  var metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', 'Portfolio officiel d’Alex Chesnay – Réalisateur 3D, animation, VFX et expériences immersives à Paris.');
  }

  // Update Open Graph tags
  var ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', 'Alex Chesnay – Portfolio');
  var ogDescription = document.querySelector('meta[property="og:description"]');
  if (ogDescription) ogDescription.setAttribute('content', 'Portfolio officiel d’Alex Chesnay – Réalisateur 3D, animation, VFX et expériences immersives à Paris.');
  var ogSiteName = document.querySelector('meta[property="og:site_name"]');
  if (ogSiteName) ogSiteName.setAttribute('content', 'Alex Chesnay');

  // Replace textual mentions of Neighbor with Alex Chesnay throughout the document
  function replaceText(node) {
    if (node.nodeType === Node.TEXT_NODE) {
      node.textContent = node.textContent.replace(/NEIGHBOR/gi, 'Alex Chesnay');
    } else {
      node.childNodes.forEach(replaceText);
    }
  }
  replaceText(document.body);

  // Update contact information (email, phone, city)
  // Replace any email addresses containing "neighbor" with Alex's email
  Array.from(document.querySelectorAll('a[href^="mailto:"]')).forEach(function (link) {
    link.setAttribute('href', 'mailto:alex-mennechet@outlook.fr');
    link.textContent = 'alex-mennechet@outlook.fr';
  });
  // Replace any phone numbers found in anchors or text with Alex's number
  Array.from(document.querySelectorAll('a[href^="tel:"]')).forEach(function (link) {
    link.setAttribute('href', 'tel:07 68 56 31 97');
    link.textContent = '07 68 56 31 97';
  });

  // Replace any visible city with Paris, France
  document.body.innerHTML = document.body.innerHTML.replace(/Portland,?\s*OR/gi, 'Paris, France');

  // Fix links pointing to neighboranimation.com
  Array.from(document.querySelectorAll('a[href]')).forEach(function (anchor) {
    var href = anchor.getAttribute('href');
    if (!href) return;
    var lower = href.toLowerCase();
    if (lower.includes('neighboranimation.com')) {
      // Extract the last part of the URL after the final slash and before any hash or query
      var slug = href.split('/').pop().split('#')[0].split('?')[0];
      if (slug) {
        anchor.setAttribute('href', './' + slug);
      }
    }
  });

  // Replace logos referencing Neighbor
  Array.from(document.querySelectorAll('img')).forEach(function (img) {
    if (/neighbor/i.test(img.getAttribute('alt') || '') || /neighbor/i.test(img.getAttribute('src') || '')) {
      img.setAttribute('src', './assets/logo/alex-chesnay-logo.svg');
      img.setAttribute('alt', 'Alex Chesnay logo');
    }
  });
});