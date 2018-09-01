export function slugifyDate(date) {
  var ourDate = new Date(date);
  var slug = ourDate.getFullYear() + '-' + (ourDate.getMonth() + 1) + '-' + ourDate.getDate();
  return slug;
}