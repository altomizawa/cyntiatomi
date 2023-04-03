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
    // imagePosition[colIndex].style.objectPosition = "0px";
    imagePosition[colIndex].classList.toggle("collection__thumbnail_isactive");
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

//---------------------SCROLL TRIGGER COLLECTION SECTION---------------------
// gsap.to(".collection__main-title:nth-of-type(1)", {
//   scrollTrigger: ".collection__main-title",
//   scrub: true,
//   start: "top top",
//   x: "-119%",
//   repeat: -1,
//   duration: 10,
//   ease: "none",
// });
// gsap.to(".collection__main-title:nth-of-type(2)", {
//   scrollTrigger: ".collection__main-title",
//   scrub: true,
//   x: "119%",
//   repeat: -1,
//   duration: 10,
//   ease: "none",
// });
// gsap.to(".collection__main-title:nth-of-type(3)", {
//   scrollTrigger: ".collection__main-title",
//   scrub: true,
//   x: "-119%",
//   repeat: -1,
//   duration: 10,
//   ease: "none",
// })

//SELECT COLLECTION TITLE FOR ANIMATION

const collectionTitleAnimation = document.querySelectorAll(
  ".collection__main-title"
);
console.log(collectionTitleAnimation[0]);

collectionTitleAnimation[0].style.animation =
  "collectionTitleAnimation 20s linear infinite";
collectionTitleAnimation[1].style.animation =
  "collectionTitleAnimation 20s linear infinite";
collectionTitleAnimation[2].style.animation =
  "collectionTitleAnimation 20s linear infinite reverse";
collectionTitleAnimation[3].style.animation =
  "collectionTitleAnimation 20s linear infinite reverse";
collectionTitleAnimation[4].style.animation =
  "collectionTitleAnimation 20s linear infinite";
collectionTitleAnimation[5].style.animation =
  "collectionTitleAnimation 20s linear infinite";

//----------------ACTIVATE DARK MODE FOR NAVBAR IF COLLECTION SECTION HITS TOP OF WINDOW----------------
const windowTop = window.screenTop;
const navbar = document.querySelector(".navbar_darkmode");
const navbarMenuLink = document.querySelectorAll(".navbar__menu-link");
const navbarLogo = document.querySelector(".navbar__logo");
const navbarMenuButton = document.querySelector(".navbar__contact-button");

document.addEventListener("scroll", (e) => {
  const header = document.querySelector(".collection").getBoundingClientRect();
  console.log(header.top);
  if (windowTop > header.top) {
    navbar.style.transition = "500ms";
    navbar.style.opacity = "1";
    navbarLogo.classList.add("navbar__logo_darkmode");
    navbarMenuButton.classList.add("navbar__contact-button_darkmode");
    navbarMenuLink.forEach((link) => {
      link.classList.add("navbar__menu-link_darkmode");
    });
  } else {
    navbar.style.opacity = "0";
    navbarLogo.classList.remove("navbar__logo_darkmode");
    navbarMenuButton.classList.remove("navbar__contact-button_darkmode");
    navbarMenuLink.forEach((link) => {
      link.classList.remove("navbar__menu-link_darkmode");
    });
  }
});
