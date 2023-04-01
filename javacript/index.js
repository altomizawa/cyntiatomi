const collectionWrapperEl = Array.from(
  document.querySelectorAll(".collection__thumbnail-wrapper")
);
const collectionShortTitleEl = document.querySelectorAll(
  ".collection__thumbnail-title"
);

const collectionActiveEl = document.querySelectorAll(".collection_active");
const collectionCloseButtton = document.querySelectorAll(
  ".collection__close-button"
);
//CLICK TO OPEN FUNCTION
collectionWrapperEl.forEach((item, index) => {
  item.addEventListener("click", () => {
    item.classList.add("collection__thumbnail-wrapper_active");
    hideShortTitle();
    setTimeout(openCollection, 500);

    //OPEN COLLECTION DESCRIPTION FUNCTION
    function openCollection() {
      collectionActiveEl[index].classList.add("collection_active_is-open");
    }

    //CLOSE COLLECTION DESCRIPTION FUNCTION
    function closeCollection() {
      collectionActiveEl[index].classList.remove("collection_active_is-open");
    }

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
