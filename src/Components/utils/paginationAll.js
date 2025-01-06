
// Функция, которая разбивает массив карточек на подмассивы, где каждый подмассив содержит карточки для одной страницы,
// в зависимости от указанного количества карточек на странице (QuantityCardInOnePage).
export function calculationNumberInPage(KeysCardArray, QuantityCardInOnePage) {   // 1.    
  let pages = [];
  for (let i = 0; i < KeysCardArray.length; i += QuantityCardInOnePage) {
    pages.push(KeysCardArray.slice(i, i + QuantityCardInOnePage));
  }
  return pages;
}

// Функция рендерит карточки для текущей страницы, используя данные из соответствующего подмассива
// из массива `pageQuantityBtns`, который был подготовлен с помощью расчёта количества карточек на странице.
export function renderPageItems(currentPage, pageQuantityBtns, CardComponent) {
  return pageQuantityBtns[currentPage].map((item) => (
    <div key={item}>
      <CardComponent cardId={parseInt(item) + 1} />
    </div>
  ));
}

// Функция переключает страницу вперёд. Если текущая страница последняя, то она переключается на первую страницу.
export function nextButtonPagination(currentPage, lengthPagesNumber, setCurrentPage) {
  if (currentPage + 1 >= lengthPagesNumber) {
    setCurrentPage(0)
  } else {
    setCurrentPage(currentPage + 1)
  }
}

// Функция переключает страницу назад. Если текущая страница первая, то переключается на последнюю страницу.
export function BackButtonPagination(currentPage, lengthPagesNumber, setCurrentPage) {
  if (currentPage <= lengthPagesNumber & currentPage !== 0) {
    setCurrentPage(currentPage - 1)
  } else {
    setCurrentPage(lengthPagesNumber - 1)
  }
}

