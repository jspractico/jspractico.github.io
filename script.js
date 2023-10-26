const images = [
  "ip--ep.png",        // 0
  "ip--mp.png",        // 1
  "ip--co.png",        // 2
  "ip--bu.png",    // 3
  "vs_ep_mp--mp_co-vs-ep.png",  // 4
  "vs_ep_mp--co-vs-mp.png",     // 5
  "vs_ep_mp--bu.png", // 6
  "vs_ep_mp--sb.png",  // 7
  "vs_ep_mp--bb.png",  // 8
  "vs_co--bu.png",   // 9
  "vs_co--sb.png",    // 10
  "vs_co--bb.png",    // 11
  "vs_bu--sb.png",   // 12
  "vs_bu--bb.png",   // 13
  "vs_sb--bb.png",    // 14
  "cold4b.png",         // 15
  "23--ROL_MP.png",     // 16
  "24--ROL_CO.png",     // 17
  "25--ROL_BTN.png",    // 18
  "26--ROL_SB.png",     // 19
  "27--ROL_BB.png",     // 20
  "28--ROL_BB_vs_SB.png",  // 21
  "oop--ep.png",
  "oop--mp.png",
  "oop--co.png",
  "oop--sb.png",
];

function showImage(index) {
  const img = document.getElementById("image");
  img.src = images[index];
}
