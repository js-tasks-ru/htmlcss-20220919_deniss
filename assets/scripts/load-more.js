const loadMoreButton = document.querySelector('.button_load-more');
const hiddenCards = document.querySelectorAll('.card_hidden');

loadMoreButton.addEventListener('pointerdown', function() {
  hiddenCards.forEach(hiddenCard => hiddenCard.classList.remove('card_hidden'));
  loadMoreButton.remove();
});