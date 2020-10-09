gsap.fromTo("#body", { opacity: 0 }, { duration: 3, opacity: 1 });

$(".box").hover(
  (e) => {
    TweenMax.to($(e.target), { duration: 0.5, opacity: 0.3 });
  },
  (e) => {
    TweenMax.to(e.target, { duration: 0.5, opacity: 1 });
  }
);

$(".box").on("click", (e) => {
  TweenMax.to("#body", { duration: 1.5, opacity: 0 });
});
