let isTransitioning = false;

function transitionEntry(entry) {
  if (isTransitioning) return;

  isTransitioning = true;

  const entryId = entry.dataset.entryId;

  entry.classList.add("is-leaving");

  setTimeout(() => {
    toggleExpanded(entryId);
    render();

    const refreshedEntry = document.querySelector(`[data-entry-id="${entryId}"]`);

    if (!refreshedEntry) {
      isTransitioning = false;
      return;
    }

    refreshedEntry.classList.add("is-entering");

    requestAnimationFrame(() => {
      refreshedEntry.classList.remove("is-entering");
      refreshedEntry.classList.add("is-present");

      setTimeout(() => {
        refreshedEntry.classList.remove("is-present");
        isTransitioning = false;
      }, 220);
    });
  }, 220);
}

document.addEventListener("click", (event) => {
  const entry = event.target.closest(".entry");

  if (!entry) return;

  transitionEntry(entry);
});
