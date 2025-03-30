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
      credentials: "include",
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
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    console.log("Raw Response:", response); // Kiểm tra phản hồi HTTP

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Parsed Data:", data); // Kiểm tra dữ liệu JSON

    if (data.userInfo) {
      localStorage.setItem("user", JSON.stringify({
        id: data.userInfo.id,
        name: data.userInfo.name,
        email: data.userInfo.email
      }));
      alert("Đăng nhập thành công!");
      window.location.href = "/"; // Điều hướng sau khi đăng nhập thành công
    } else {
      alert(data.message || "Đăng nhập thất bại!");
    }
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Lỗi kết nối đến server!");
  }
});

