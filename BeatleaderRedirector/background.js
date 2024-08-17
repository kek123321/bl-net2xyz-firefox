browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    return {
       redirectUrl: "https://beatleader.xyz/" + details.url.slice(23)
    };
  },
  {
    urls: ["https://beatleader.net/*"]
  },
  ["blocking"]
);