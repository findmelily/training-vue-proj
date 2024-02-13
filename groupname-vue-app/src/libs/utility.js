//Sort By sections
function sortBySection(items) {
  items.sort((a, b) => a.section - b.section);
}

//Paginate
function getLastPages(items, rows) {
  return Math.ceil(items.length / rows);
}

function getRowsInPages(items, rows, currentPage) {
  return items.slice((currentPage - 1) * rows, currentPage * rows);
}

function searchGroupWorks(items, keyword) {
  const lowerCaseKeyword = keyword.toLowerCase();
  console.log(lowerCaseKeyword);
  return items.filter(
    (item) =>
      item.section.toString().includes(lowerCaseKeyword) ||
      item.groupName.toLowerCase().includes(lowerCaseKeyword) ||
      item.repo.toLowerCase().includes(lowerCaseKeyword) ||
      item.members.some(
        (member) =>
          member.studentId.toString().includes(lowerCaseKeyword) ||
          member.studentName.toLowerCase().includes(lowerCaseKeyword)
      )
  );
}
export { sortBySection, getLastPages, getRowsInPages, searchGroupWorks };
