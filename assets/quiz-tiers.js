/* Quiz score titles. Shared by assets/quiz.js (results screen) and dev/build-share.mjs,
 * which draws a link-preview card for every possible score (quiz/<score>/).
 * [lowest score out of 10, title, one-liner] */
window.WTF = window.WTF || {};
WTF.quizTiers = [
  [10, "Symbol whisperer", "Ten out of ten. You could write the manuals."],
  [8, "Fluent in symbol", "Most people would have panicked at least twice more."],
  [6, "Getting the hang of it", "Respectable. Most of your appliances are on your side."],
  [4, "Professional panicker", "Half right, which still beats pressing every button."],
  [2, "Reads the manual (eventually)", "Plenty to learn. The ones that got you are below."],
  [0, "Just presses all the buttons", "Bold strategy. Start with the ones below."]
];
