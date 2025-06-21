let currentPage =  1;

function makeList(arr) {
  const objectChange = arr
    .map((object) => {
      const newObject = `
      <li>
        <img src="${object.largeImageURL}" alt="">
      </li>
      `;
      return newObject;
    })
    .join("");
  return objectChange;
}

fetch(`https://pixabay.com/api/?key=50978158-2e1c075068d4fb19bda657fd9&q=yellow+flowers&image_type=photo&pretty=true&page=${currentPage}&per_page=10`)
  .then((res) => res.json())
  .then((data) => {
    document.querySelector("ul").insertAdjacentHTML("beforeend", makeList(data.hits));
  });
console.log(currentPage);


document.querySelector(".load").addEventListener("click", () => {
  currentPage += 1;
  fetch(`https://pixabay.com/api/?key=50978158-2e1c075068d4fb19bda657fd9&q=yellow+flowers&image_type=photo&pretty=true&page=${currentPage}&per_page=10`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("ul").insertAdjacentHTML("beforeend", makeList(data.hits));
    });
  console.log(currentPage);
});


document.querySelector(".delate").addEventListener("click", () => {
  currentPage = 0;
  localStorage.setItem("page", currentPage);
  document.querySelector("ul").innerHTML = ""; 
  fetch(`https://pixabay.com/api/?key=50978158-2e1c075068d4fb19bda657fd9&q=yellow+flowers&image_type=photo&pretty=true&page=${currentPage}&per_page=10`)
    .then((res) => res.json())
    .then((data) => {
      document.querySelector("ul").insertAdjacentHTML("beforeend", makeList(data.hits));
    });
  console.log(currentPage);
});