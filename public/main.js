document.addEventListener("DOMContentLoaded", () => {
    const socket = io();
  
    const nameInput = document.getElementById("name");
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("sendBtn");
    const messagesList = document.getElementById("messages");
  
    sendButton.addEventListener("click", () => {
      const name = nameInput.value;
      const message = messageInput.value;
      if (name === "" || message === "") {
        return;
      }
      socket.emit("chatMessage", { name, message });
      messageInput.value = "";
    });
  
    socket.on("chatMessage", (data) => {
      const { name, message } = data;
      const messageElement = document.createElement("li");
      messageElement.innerHTML = `<strong>${name}:</strong> ${message}`;
      messagesList.appendChild(messageElement);
    });
  });
  