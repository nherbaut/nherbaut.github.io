(async function () {
  "use strict";

  var box = document.querySelector("[data-rss-box]");
  if (!box) return;

  var status = box.querySelector("[role='status']");
  var list = box.querySelector(".rss-box__items");
  var controller = new AbortController();
  var timeout = setTimeout(function () { controller.abort(); }, 10000);
  status.textContent = "Loading recent articles…";

  try {
    var response = await fetch(box.querySelector("[data-rss-source]").href, {
      credentials: "omit",
      signal: controller.signal
    });
    if (!response.ok) throw new Error("Feed unavailable");

    var feed = new DOMParser().parseFromString(await response.text(), "application/xml");
    if (feed.querySelector("parsererror")) throw new Error("Invalid feed");

    var items = feed.querySelectorAll("channel > item");
    for (var i = 0; i < items.length && list.children.length < 5; i++) {
      var title = items[i].querySelector("title");
      var link = items[i].querySelector("link");
      if (!title || !title.textContent.trim() || !link) continue;

      var url;
      try { url = new URL(link.textContent.trim()); } catch (_) { continue; }
      if (url.protocol !== "https:" && url.protocol !== "http:") continue;

      var item = document.createElement("li");
      var anchor = document.createElement("a");
      anchor.href = url.href;
      anchor.textContent = title.textContent.trim();
      item.appendChild(anchor);
      list.appendChild(item);
    }

    if (list.children.length) {
      list.hidden = false;
      status.hidden = true;
    } else {
      status.textContent = "No recent articles yet.";
    }
  } catch (_) {
    status.textContent = "Articles are unavailable. Try the RSS link above.";
  } finally {
    clearTimeout(timeout);
  }
})();
