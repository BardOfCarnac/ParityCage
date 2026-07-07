let isTransitioning = false;

function transitionEntry(entry) {
  if (isTransitioning) return;

  isTransitioning = true;

  const entryId = entry.dataset.entryId;
  const plate = entry.querySelector(".projection-plate");

  if (!plate) {
    isTransitioning = false;
    return;
  }

  plate.classList.add("is-leaving");

  setTimeout(() => {
    toggleExpanded(entryId);
    render();

    const refreshedEntry = document.querySelector(`[data-entry-id="${entryId}"]`);
    const refreshedPlate = refreshedEntry?.querySelector(".projection-plate");

    if (!refreshedPlate) {
      isTransitioning = false;
      return;
    }

    refreshedPlate.classList.add("is-entering");

    requestAnimationFrame(() => {
      refreshedPlate.classList.remove("is-entering");
      refreshedPlate.classList.add("is-present");

      setTimeout(() => {
        refreshedPlate.classList.remove("is-present");
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
