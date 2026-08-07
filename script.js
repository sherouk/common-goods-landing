document.getElementById('year').textContent = new Date().getFullYear();

var form = document.getElementById('newsletter-form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  var email = document.getElementById('newsletter-email').value.trim();
  if (!email) return;
  form.hidden = true;
  document.getElementById('newsletter-success').hidden = false;
});
