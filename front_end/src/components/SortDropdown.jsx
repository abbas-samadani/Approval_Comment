export const SortDropdown = ({ sortBy, onSortByChange }) => {
  return (
    <select
      className="border p-2"
      value={sortBy}
      onChange={(e) => onSortByChange(e.target.value)}
    >
      <option value="dateDesc">Newest First</option>
      <option value="dateAsc">Oldest First</option>
      <option value="nameAsc">Name (A-Z)</option>
      <option value="nameDesc">Name (Z-A)</option>
    </select>
  );
};
