export function filterArrayByMap(array, filterMap) {
  return array.filter((item) => {
    // Check if the item matches any of the filter conditions
    if (
      filterMap[item.priority] ||
      (filterMap.complete && item.complete) ||
      (filterMap.incomplete && !item.complete)
    ) {
      return false; // Item matches at least one filter, exclude
    }
    return true; // Item does not match any filter, include it
  });
}
