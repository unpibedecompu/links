function renderLinks() {
  const container = document.getElementById("links");

  LINKS.forEach((link) => {
    const a = document.createElement("a");
    a.className = "link-button";
    a.href = link.url;
    a.target = "_blank";
    a.rel = "noopener";
    // Umami picks up data-umami-event automatically once its script is loaded,
    // and logs it as a named event so each link's clicks are counted separately.
    a.setAttribute("data-umami-event", `click-${link.id}`);

    const icon = document.createElement("img");
    icon.className = "link-icon";
    icon.src = link.icon;
    icon.alt = "";
    if (link.iconFit === "cover") icon.classList.add("link-icon--cover");

    const text = document.createElement("span");
    text.className = "link-text";

    const label = document.createElement("span");
    label.className = "link-label";
    label.textContent = link.label;
    text.appendChild(label);

    if (link.description) {
      const description = document.createElement("span");
      description.className = "link-description";
      description.textContent = link.description;
      text.appendChild(description);
    }

    a.appendChild(icon);
    a.appendChild(text);
    container.appendChild(a);
  });
}

renderLinks();
