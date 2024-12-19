import '../assets/styles/all.css'; // 注意 ../ 回到上層資料夾
import javascriptLogo from '../assets/images/javascript.svg';
import viteLogo from '../assets/images/vite.svg';
import { setupCounter } from '../assets/scripts/counter.js';
import "../assets/scripts/live2d.js";

fetch('/api/books')
  .then(response => response.json())
  .then(data => {
    renderBooks(data);
  })
  .catch(error => {
    console.error('API 請求失敗:', error);
  });

function renderBooks(books) {
  const booksContainer = document.querySelector('.book-gallery .row');
  booksContainer.innerHTML = ''; // 清空現有內容

  books.forEach(book => {
    booksContainer.innerHTML += `
      <div class="col-md-4">
        <div class="card h-100 p-2">
          <div class="d-flex">
            <img src="http://127.0.0.1:8000/${book.image}" class="card-img-top book-cover" alt="書籍封面" />
            <div class="d-flex flex-column card-body justify-content-between">
              <h5 class="card-title fw-bold mb-1">${book.title}</h5>
              <p class="mb-3">
                <a href="#" class="text-decoration-none text-primary">${book.author}</a>
              </p>
              <p class="card-text mb-2">${book.description}</p>
              <div>
                <span class="badge bg-primary book-status">${book.status}</span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around mt-2">
            <span class="btn btn-primary btn-sm rounded-pill">👁️ ${book.views}</span>
            <span class="btn btn-primary btn-sm rounded-pill">👍 ${book.likes}</span>
            <span class="btn btn-primary btn-sm rounded-pill">❤️ ${book.favorites}</span>
            <span class="btn btn-primary btn-sm rounded-pill">💬 ${book.comments}</span>
          </div>
        </div>
      </div>
    `;
  });
}
