const container = document.getElementById("container");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");

registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});
document.querySelector(".sign-up form").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const name = event.target.querySelector("input[type='text']").value;
  const email = event.target.querySelector("input[type='email']").value;
  const password = event.target.querySelector("input[type='password']").value;

  try {
    const response = await fetch("https://glassmanagement.vercel.app/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();

    if (response.status === 201) {
      alert("Đăng ký thành công! Hãy đăng nhập.");
      container.classList.remove("active"); 
    } else {
      alert(data.message || "Đăng ký thất bại!");
    }
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Lỗi kết nối đến server!");
  }
});

document.querySelector(".sign-in form").addEventListener("submit", async (event) => {
  event.preventDefault();
  
  const email = event.target.querySelector("input[type='email']").value;
  const password = event.target.querySelector("input[type='password']").value;

  try {
    const response = await fetch("https://glassmanagement.vercel.app/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.status === 200) {
      alert("Đăng nhập thành công!");
      localStorage.setItem("accessToken", data.accessToken); 
      window.location.href = "/";
    } else {
      alert(data.message || "Đăng nhập thất bại!");
    }
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Lỗi kết nối đến server!");
  }
});