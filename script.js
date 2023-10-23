const images = [
  "ip--ep.png",        // 0
  "ip--mp.png",        // 1
  "ip--co.png",        // 2
  "ip--bu.png",    // 3
  "5_MP-CO_vs_EP.png",  // 4
  "6_CO_vs_MP.png",     // 5
  "7_BTN_vs_EP-MP.png", // 6
  "8_SB_vs_EP-MP.png",  // 7
  "9_BB_vs_EP-MP.png",  // 8
  "10_BTN_vs_CO.png",   // 9
  "11_SB_vs_CO.png",    // 10
  "12_BB_vs_CO.png",    // 11
  "13_SB_vs_BTN.png",   // 12
  "14_BB_vs_BTN.png",   // 13
  "15_BB_vs_SB.png",    // 14
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
