const collectionWrapperEl = Array.from(
  document.querySelectorAll(".collection__thumbnail-wrapper")
);
const collectionShortTitleEl = document.querySelectorAll(
  ".collection__thumbnail-title"
);

const collectionActiveEl = document.querySelectorAll(".collection_active");
const imagePosition = document.querySelectorAll(".collection__thumbnail");

//-----------------CLICK TO OPEN FUNCTION-----------------------
collectionWrapperEl.forEach((column, colIndex) => {
  column.addEventListener("click", () => {
    column.classList.toggle("collection__thumbnail-wrapper_active");
    console.log(imagePosition[colIndex]);
    imagePosition[colIndex].style.objectPosition = "0px";
    // imagePosition[colIndex].classList.toggle("collection__thumbnail_isactive");
    hideShortTitle();
    setTimeout(showDescription, 500);

    //SHOW DESCRIPTION FUNCTION
    function showDescription() {
      collectionActiveEl[colIndex].classList.toggle(
        "collection_active_is-open"
      );
    }

    //------------CLOSE COLLECTION FUNCTION------------
    function closeWrapper() {
      column.classList.toggle("collection__thumbnail-wrapper_active");
      hideDescription();
    }

    //HIDE DESCRIPTION FUNCTION
    function hideDescription() {
      collectionActiveEl[colIndex].classList.toggle(
        "collection_active_is-open"
      );
    }

    //-------------NEW ARRAY FROM REMAINING ITEMS----------------
    const newArray1 = collectionWrapperEl.slice(0, colIndex);
    const newArray2 = collectionWrapperEl.slice(colIndex + 1);
    const remainingCollection = newArray1.concat(newArray2);

    //change remaining cards
    remainingCollection.forEach((remainingCard) => {
      remainingCard.classList.toggle("collection__thumbnail-wrapper_inactive");
    });
  });
});

function hideShortTitle() {
  collectionShortTitleEl.forEach((item) => {
    item.classList.toggle("collection__hide-description");
  });
}

//CLOSE WRAPPER
// const collectionCloseButtton = document.querySelectorAll(
//   ".collection__close-button"
// );

// console.log(collectionCloseButtton);
// collectionCloseButtton.forEach((button, btnInd) => {
//   button.addEventListener("click", () => {
//     console.log(collectionWrapperEl[btnInd]);
//     collectionWrapperEl[btnInd].style.width = "calc(100%/7)";
//     collectionActiveEl[btnInd].classList.remove("collection_active_is-open");
//   });
// });
//CLOSE WRAPPER END
