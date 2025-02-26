const button = document.querySelector("button");

button.addEventListener("click", () => {
  Notification.requestPermission().then((perm) => {
    if (perm === "granted") {
      const notify = new Notification("First Notification", {
        body: "Test Notification",
        icon: "logo-multidiag.png",
        tag: "Test",
      });
    } else {
      console.log("permission refusée");
    }
  });
});
