export default async function automateFollowing() {
  console.log("Starting automated following process.");

  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const MAX_FOLLOWS = 5;
  let followCount = 0;

  const handleFollow = async (button) => {
    if (followCount >= MAX_FOLLOWS) return;

  
    const usernameElement = document.querySelector('div[data-testid="UserProfileHeader_Items"] > span'); 
    const username = usernameElement ? usernameElement.innerText : "Unknown User";

    button.click();
    followCount++;
    console.log(`Followed user: ${username} (${followCount})`);

    const randomDelay = 1000 + Math.random() * 2000;
    await delay(randomDelay);
  };

  const checkFollowButtonInPopup = async () => {
    const followButton = document.querySelector("div[role='button'][aria-label*='Follow']"); 
    if (followButton) {
      console.log("Follow button detected in popup, attempting to follow.");
      await handleFollow(followButton);
    }
  };

 
  const handleMouseOver = (event) => {
    const profileImage = event.target.closest('img[src*="profile_images"]'); 
    if (profileImage) {
      setTimeout(checkFollowButtonInPopup, 300); 
    }
  };

  
  const profileImages = document.querySelectorAll("div.css-175oi2r.r-1pi2tsx.r-13qz1uu a > img"); 
  profileImages.forEach((image) => {
    image.addEventListener('mouseover', handleMouseOver);
  });

  console.log("Automated follow process setup complete.");
}
