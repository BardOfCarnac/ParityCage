document.addEventListener("click", (event) => {
  const entry = event.target.closest(".entry");
  if (!entry) return;

  toggleExpanded(entry.dataset.entryId);
  entry.classList.toggle("expanded");
});
