// Scroll to 'Tentang Kita' section
document.getElementById("scrollDownBtn").addEventListener("click", function() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
});

// Display love message
document.getElementById("submitBtn").addEventListener("click", function() {
  let message = document.getElementById("loveMessage").value;
  if (message.trim() !== "") {
      document.getElementById("messageDisplay").style.display = "block";
      document.getElementById("messageDisplay").innerText = `Pesan Cinta: ${message}`;
      document.getElementById("loveMessage").value = ""; // Clear input
  } else {
      alert("Tolong tuliskan pesan cinta terlebih dahulu!");
  }
});
