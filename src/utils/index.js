export function getFilteredList(list, filter) {
  switch (filter) {
    case "active":
      return list.filter(item => !item.isDone);
    case "completed":
      return list.filter(item => item.isDone);
    default:
      return list;
  }
}
