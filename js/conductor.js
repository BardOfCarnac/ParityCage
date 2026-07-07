let REDWIRE_IS_TRANSITIONING = false;

function transitionEntry(entry) {
  if (REDWIRE_IS_TRANSITIONING) return;

  REDWIRE_IS_TRANSITIONING = true;

  const entryId = entry.dataset.entryId;
  const plate = entry.querySelector(".projection-plate");

  if (!plate) {
    REDWIRE_IS_TRANSITIONING = false;
    return;
  }

  plate.classList.add("is-leaving");

  setTimeout(() => {
    toggleExpanded(entryId);
    render();

    const refreshedEntry = document.querySelector(`[data-entry-id="${entryId}"]`);
    const refreshedPlate = refreshedEntry?.querySelector(".projection-plate");

    if (!refreshedPlate) {
      REDWIRE_IS_TRANSITIONING = false;
      return;
    }

    refreshedPlate.classList.add("is-entering");

    requestAnimationFrame(() => {
      refreshedPlate.classList.remove("is-entering");
      refreshedPlate.classList.add("is-present");

      setTimeout(() => {
        refreshedPlate.classList.remove("is-present");
        REDWIRE_IS_TRANSITIONING = false;
      }, REDWIRE_CONFIG.presenceDuration);
    });
  }, REDWIRE_CONFIG.presenceDuration);
}
