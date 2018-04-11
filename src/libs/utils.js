export function arrayByFilter(filter, list) {
  if (filter === "active") {
    return list.filter(item => !item.isDone);
  }
  if (filter === "completed") {
    return list.filter(item => item.isDone);
  }
  return list;
}
