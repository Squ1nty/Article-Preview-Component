const socialLinksBtn = document.getElementById("socialLinksBtn");

const creatorPFP = document.getElementById("articleCreatorPFP");
const creatorDetails = document.getElementById("articleCreatorInfo");
const shareTitle = document.getElementById("shareTitle");
const socialLinkIcons = document.getElementById("socialLinkIcons");
const articleCreatorPreview = document.getElementById("previewFooter");

socialLinksBtn.addEventListener('click', (e) => {
  socialLinksBtn.classList.toggle("active");
  creatorPFP.classList.toggle("active");
  creatorDetails.classList.toggle("active");
  shareTitle.classList.toggle("active");
  socialLinkIcons.classList.toggle("active");
  articleCreatorPreview.classList.toggle("active");
});
