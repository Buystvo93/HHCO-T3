document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profile-form");
  const resultBox = document.getElementById("profile-result");
  const avatarImg = document.getElementById("avatar");
  const usernameEl = document.getElementById("username");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const userId = document.getElementById("userid").value.trim();

    if (!userId) return;

    try {
      // Fetch username
      const userRes = await fetch(`https://users.roblox.com/v1/users/${userId}`);
      const userData = await userRes.json();

      // Fetch avatar
      const avatarRes = await fetch(
        `https://thumbnails.roblox.com/v1/users/avatar-headshot?userIds=${userId}&size=150x150&format=Png`
      );
      const avatarData = await avatarRes.json();

      const avatarUrl = avatarData.data[0].imageUrl;

      // Update UI
      avatarImg.src = avatarUrl;
      usernameEl.textContent = userData.name;
      resultBox.classList.remove("hidden");

    } catch (err) {
      alert("Error loading player profile.");
      console.error(err);
    }
  });
});
