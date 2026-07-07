const REDWIRE_STATE = {
  expandedEntryIds: new Set()
};

function isExpanded(entryId) {
  return REDWIRE_STATE.expandedEntryIds.has(entryId);
}

function toggleExpanded(entryId) {
  if (isExpanded(entryId)) {
    REDWIRE_STATE.expandedEntryIds.delete(entryId);
  } else {
    REDWIRE_STATE.expandedEntryIds.add(entryId);
  }
}
