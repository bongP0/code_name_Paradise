// 버튼 요소를 가져오기
const loginButton = document.getElementById("loginButton");

// 버튼 클릭 이벤트를 처리
loginButton.addEventListener("click", function () {
    const errorNoneElement = document.querySelector(".error_none");
    errorNoneElement.style.display = "block"; // 화면에 표시
});
