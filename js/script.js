// DOM이 완전히 로드된 후 실행
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu_toggle");
  const mainGnb = document.getElementById("main_gnb");

  // 햄버거 버튼 클릭 이벤트
  if (menuToggle && mainGnb) {
    menuToggle.addEventListener("click", function () {
      // 메뉴 열기/닫기 (active 클래스 토글)
      mainGnb.classList.toggle("active");
      // 햄버거 버튼 X 애니메이션 (open 클래스 토글)
      menuToggle.classList.toggle("open");
    });

    // 메뉴 외부 클릭 시 닫기
    document.addEventListener("click", function (event) {
      if (
        !menuToggle.contains(event.target) &&
        !mainGnb.contains(event.target)
      ) {
        mainGnb.classList.remove("active");
        menuToggle.classList.remove("open");
      }
    });

    // 메뉴 링크 클릭 시 메뉴 닫기 (페이지 이동 전)
    const menuLinks = mainGnb.querySelectorAll("a");
    menuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mainGnb.classList.remove("active");
        menuToggle.classList.remove("open");
      });
    });
  }
});
