// fetch('/api/register', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     username: 'testuser2',
//     password: '123456',
//   }),
// })
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => console.error(err));




document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.querySelector("#registerForm");

  if (registerForm) {
    registerForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.querySelector("#register-username").value.trim();
      const password = document.querySelector("#register-password").value.trim();

      try {
        const response = await fetch("/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert("註冊成功！");
          // 自動切換回登入介面
          const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
          if (registerModal) {registerModal.hide();}

          const loginModal = new bootstrap.Modal(document.querySelector("#loginModal"));
          loginModal.show();
        } else {
          alert(result.message || "註冊失敗！");
        }
      } catch (error) {
        console.error("註冊過程發生錯誤：", error);
        alert("系統錯誤，請稍後再試！");
      }
    });
  }
});

  
