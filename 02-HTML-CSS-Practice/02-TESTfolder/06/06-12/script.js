new LuminousGallery(
  document.querySelectorAll(".lightbox"),
  {},
  {
    caption: function (trigger) {
      return trigger.querySelector("img").getAttribute("alt");
    },
  },
);
