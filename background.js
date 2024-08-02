let lastPath = "";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.url) {
    const url = new URL(changeInfo.url);
    const currentPath = url.pathname;

    const validHosts = ["youtube.com"];

    const wwwHosts = validHosts.map((host) => `www.${host}`);

    function isHostValid(host) {
      return validHosts.includes(host) || wwwHosts.includes(host)
    }

    // if we are on a new page and the host is valid
    if (currentPath !== lastPath && isHostValid(url.host)) {
      lastPath = currentPath;

        // new episode will have the word ep / episode in the path
        if (currentPath.includes('ep')) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js']
            });
        }   
    }
  }
});