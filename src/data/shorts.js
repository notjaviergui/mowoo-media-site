// Vertical short-form shown in the "content sea" (home + Our Work).
// Media is encoded by scripts/encode-shorts.sh into public/work/shorts:
//   <id>-loop.mp4  silent 8s loop for inline autoplay
//   <id>.mp4       full clip with sound for the lightbox
//   <id>.jpg       poster frame
// Add an `instagram` URL to any short to show a "View on Instagram" link in the lightbox.

export const shortClients = {
  bluenorth: {
    name: "Blue North Medical Group",
    short: "Blue North",
    instagram: null,
  },
  cheryl: {
    name: "Cherylxxw",
    short: "Cherylxxw",
    instagram: null,
  },
};

const short = (id, client, title, instagram = null) => ({
  id,
  client,
  title,
  instagram,
  loop: `/work/shorts/${id}-loop.mp4`,
  src: `/work/shorts/${id}.mp4`,
  poster: `/work/shorts/${id}.jpg`,
});

export const shorts = [
  short("bluenorth-01", "bluenorth", "Scale up three pounds"),
  short("cheryl-reel-01", "cheryl", "Promised we won’t die"),
  short("bluenorth-02", "bluenorth", "What else isn’t approved"),
  short("bluenorth-03", "bluenorth", "True or false: two seconds on the clock"),
  short("cheryl-reel-02", "cheryl", "Guess where I’m from"),
  short("bluenorth-04", "bluenorth", "Protein guess"),
  short("cheryl-reel-03", "cheryl", "Worst players ever"),
  short("bluenorth-05", "bluenorth", "Patient story"),
  short("cheryl-reel-04", "cheryl", "Monster panic"),
  short("bluenorth-06", "bluenorth", "Flash math: the parking lot guy’s price"),
  short("cheryl-reel-05", "cheryl", "What is a tick?"),
  short("bluenorth-07", "bluenorth", "Coming off the shot"),
  short("cheryl-reel-06", "cheryl", "We lost it all"),
  short("bluenorth-08", "bluenorth", "How long until"),
];

export const contentCount = "500+";
