// ==UserScript==
// @name Rival Regions Full Autarky Script
// @description Automatically imports data for Rival Regions states
// @include https://rivalregions.com/#listed/states
// @connect self
// ==/UserScript==

(function () {
  const startButton = document.createElement("button");
  startButton.textContent = "start embargo";
  startButton.id = "startButton";
  startButton.style.position = "fixed";
  startButton.style.bottom = "10px";
  startButton.style.left = "10px";
  startButton.style.zIndex = "9999";

  document.body.appendChild(startButton);

  const myHeaders = new Headers({
    Host: "rivalregions.com",
    Origin: "https://rivalregions.com",
    Referer: "https://rivalregions.com/",
    "Sec-Ch-Ua":
      '"Google Chrome";v="118", "Chromium";v="118", "Not=A?Brand";v="24"',
    "Sec-Ch-Ua-Mobile": "?0",
    "Sec-Ch-Ua-Platform": '"Windows"',
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
    TE: "trailers",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36",
    "X-Requested-With": "XMLHttpRequest",
    Accept: "text/html, */*; q=0.01",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.5",
    Connection: "keep-alive",
    Cookie: document.cookie,
  });

  const formData = new FormData();

  const handleClick = () => {
    alert("Embargo started! dont close RR page");
    formData.append("post", "post");
    formData.append("c", "8f41df336a7bc6af3851ab8ecd6f158b");

    const allStates = document.getElementsByTagName("tr");
    const states = Array.from(allStates)
      .map((element) => element.getAttribute("user"))
      .filter((user) => user);
    const delayBetweenRequests = 4000;

    states.forEach((state, index) => {
      setTimeout(() => {
        fetch(`https://rivalregions.com/map/set_import/${state}`, {
          method: "POST",
          headers: myHeaders,
          body: formData,
        });
        if (states.length - 1 === index)
          alert("Embargo stopped! You can close RR page now");
      }, index * delayBetweenRequests);
    });
  };

  startButton.addEventListener("click", handleClick);
})();
