const socialLinksBtn = document.getElementById("socialLinksBtn");

const creatorPFP = document.getElementById("articleCreatorPFP");
const creatorDetails = document.getElementById("articleCreatorInfo");
const shareTitle = document.getElementById("shareTitle");
const socialLinkIcons = document.getElementById("socialLinkIcons");
const articleCreatorPreview = document.getElementById("previewFooter");
const socialLinksBtnContainer = document.getElementById("socialLinksBtnContainer");
const sharePopUp = document.getElementById("sharePopUp");
const gridWrapper2 = document.getElementById("gridWrapper2");
const socialLinkIcons2 = document.getElementById("socialLinkIcons2");

socialLinksBtn.addEventListener('click', (e) => {
  socialLinksBtn.classList.toggle("active");
  creatorPFP.classList.toggle("active");
  creatorDetails.classList.toggle("active");
  shareTitle.classList.toggle("active");
  socialLinkIcons.classList.toggle("active");
  articleCreatorPreview.classList.toggle("active");
  socialLinksBtnContainer.classList.toggle("active");
  sharePopUp.classList.toggle("active");
  gridWrapper2.classList.toggle("active");
  socialLinkIcons2.classList.toggle("active");
});
