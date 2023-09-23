// 버튼 요소를 가져오기
const loginButton = document.getElementById("loginButton");

// 버튼 클릭 이벤트를 처리
loginButton.addEventListener("click", function () {
    const errorNoneElement = document.querySelector(".error_none");
    errorNoneElement.style.display = "block"; // 화면에 표시

    // 1분(60,000 밀리초) 후에 사이트를 종료
    setTimeout(function () {
        window.close(); // 현재 창을 닫습니다.
    }, 60000); // 60,000 밀리초는 1분을 나타냅니다.
});