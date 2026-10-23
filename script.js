//your JS code here. If required.
// Get reference selectors
const openModalBtn = document.getElementById('openModal');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');

// Open the modal by changing display style to flex (or block)
openModalBtn.addEventListener('click', () => {
  modal.style.display = 'flex';
});

// Close the modal when clicking the close button
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Close the modal when clicking anywhere outside of the modal content box
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});