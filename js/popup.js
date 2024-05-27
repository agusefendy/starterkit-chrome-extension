const started = () => {
  chrome.tabs.create({
    url: "index.html",
  });
};
document.getElementById("start").addEventListener("click", started);
