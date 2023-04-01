const collectionWrapperEl = Array.from(
  document.querySelectorAll(".collection__thumbnail-wrapper")
);
const collectionShortTitleEl = document.querySelectorAll(
  ".collection__thumbnail-title"
);

//CLICK TO OPEN FUNCTION
collectionWrapperEl.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("collection__thumbnail-wrapper_active");
    hideShortTitle();

    //new array from remaining items
    const newArray1 = collectionWrapperEl.slice(0, index);
    const newArray2 = collectionWrapperEl.slice(index + 1);
    const remainingCollection = newArray1.concat(newArray2);

    //change remaining cards
    remainingCollection.forEach((remainingCard) => {
      remainingCard.classList.add("collection__thumbnail-wrapper_inactive");

      item.addEventListener("click", () => {
        item.classList.remove("collection__thumbnail-wrapper_active");
        remainingCard.classList.remove(
          "collection__thumbnail-wrapper_inactive"
        );
        showShortTitle();
      });
    });
  });
});

function hideShortTitle() {
  collectionShortTitleEl.forEach((item) => {
    item.style.opacity = "0";
    item.style.transition = "500ms";
  });
}

function showShortTitle() {
  collectionShortTitleEl.forEach((item) => {
    item.style.opacity = "1";
    item.style.transition = "500ms";
  });
}
