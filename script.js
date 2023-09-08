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
  Cookie: "real_cookie", // replace with real cookie
});

const formData = new FormData();
formData.append("post", "post");
formData.append("c", "8f41df336a7bc6af3851ab8ecd6f158b");

const allStates = document.getElementsByTagName("tr");
const states = Array.from(allStates)
  .map((element) => element.getAttribute("user"))
  .filter((user) => user);

function forEachWithDelay(array, delay) {
  array.forEach((item, index) => {
    setTimeout(() => {
      fetch(`https://rivalregions.com/map/set_import/${item}`, {
        method: "POST",
        headers: myHeaders,
        body: formData,
      });
    }, index * delay); // Multiply by the index to introduce a delay
  });
}

forEachWithDelay(states, 2000);
