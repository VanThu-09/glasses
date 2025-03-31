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

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    alert("Đăng ký thành công! Hãy đăng nhập.");
    container.classList.remove("active");
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Lỗi kết nối đến server hoặc thông tin không hợp lệ!");
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

    console.log("Raw Response:", response);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Kiểm tra nếu phản hồi là JSON
    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      throw new Error("Phản hồi không phải JSON");
    }

    const data = await response.json();
    console.log("Parsed Data:", data);

    if (data.userInfo) {
      localStorage.setItem("accessToken", data.accessToken); // Lưu accessToken
      localStorage.setItem("user", JSON.stringify({
        id: data.userInfo.id,
        name: data.userInfo.name,
        phone: data.userInfo.phone,
        address: data.userInfo.address,
        email: data.userInfo.email
      }));

      alert("Đăng nhập thành công!");
      window.location.href = "/"; // Điều hướng sau khi đăng nhập thành công
    } else {
      alert(data.message || "Đăng nhập thất bại!");
    }
  } catch (error) {
    console.error("Lỗi:", error);
    alert("Lỗi kết nối đến server hoặc thông tin không hợp lệ!");
  }
});
