console.log("login 已成功匯入！");

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.querySelector("#loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = document.querySelector("#login-username").value.trim();
      const password = document.querySelector("#login-password").value.trim();

      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          alert("登入成功！");
          localStorage.setItem("user", JSON.stringify(result.user));
          location.href = "/";
        } else {
          alert(result.message || "登入失敗！");
        }
      } catch (error) {
        console.error("登入過程發生錯誤：", error);
        alert("系統錯誤，請稍後再試！");
      }
    });
  }
});
