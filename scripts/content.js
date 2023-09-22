const body = document.querySelector("body");

// Video ID, Length in seconds
const videoLinks = [
  // Subway surfers
  ["L_fcrOyoWZ8", 3600],
  ["_bwtEtYQwgc", 39600],

  // Family guy
  ["pt_k_HNz1DE", 10500],
  ["y2FTMeea4sY", 7200],
  ["-ncnX0zlrQM", 18000]
]

// `document.querySelector` may return null if the selector doesn't match anything.
if (body) {
  // Support for API reference docs
  const textElements = body.querySelectorAll("p");

  let timeOffset = 1;
  for (const textElement of textElements) {
    let badge = document.createElement("iframe");
    //badge.textContent = "VIDEO GOES HERE";

    const randomVideo = (Math.random() * (videoLinks.length-1)).toFixed(0)

    badge.src = "https://www.youtube.com/embed/" + videoLinks[randomVideo][0] + "?autoplay=1&mute=1&loop=1&start=" + (Math.random() * videoLinks[randomVideo][1]).toFixed().toString()
    setTimeout(() => {textElement.insertAdjacentElement("beforeBegin", badge)}, 1500 * timeOffset);
    timeOffset += 1;
  }
}