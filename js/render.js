const feed = document.querySelector("#feed");

function render() {
  feed.innerHTML = REDWIRE_ENTRIES
    .map(entryTemplate)
    .join("");
}

function entryTemplate(entry) {
  const expanded = isExpanded(entry.id);

  return `
    <article class="entry ${expanded ? "expanded" : ""}" data-entry-id="${entry.id}">
      <div class="projection-plate">
        <div class="priority priority-${entry.priority}"></div>

        <div class="meta">${entry.meta}</div>
        <h2 class="headline">${entry.headline}</h2>
        <div class="tags">${entry.tags}</div>
        <div class="body">${entry.body}</div>
      </div>
    </article>
  `;
}
