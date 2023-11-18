// This JavaScript code should be placed just before the closing </body> tag or in an external .js file linked in the HTML file.

// Get all book elements
const books = document.querySelectorAll('.book');

// Function to filter books based on search input
function filterBooks() {
  const searchText = document.getElementById('searchInput').value.toLowerCase();

  books.forEach(book => {
    const title = book.querySelector('h2').innerText.toLowerCase();
    if (title.includes(searchText)) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
}

// Event listener for input in the search bar
document.getElementById('searchInput').addEventListener('input', filterBooks);
