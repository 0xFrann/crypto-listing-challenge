export const TableWrapperStyles = `h-full w-full overflow-y-auto relative`;
export const TableStyles = `h-full w-full relative bg-purple-100`;
export const TableHeaderStyles = `border-b-2 border-purple-300`;
export const TableHeaderCellStyles = (active: boolean): string => {
  const ActiveStyles = "text-purple-900 hover:text-purple-700";
  return `sticky top-0 bg-purple-400 hover:text-purple-600 text-purple-700 text-left px-2 py-4 first:pl-4 last:pr-4 cursor-pointer select-none ${
    active ? ActiveStyles : ""
  }`;
};
export const TableBodyStyles = `divide-y divide-gray-200`;
export const TableRowStyles = ``;
export const TableCellStyles = `p-2 first:pl-4 last:pr-4 text-gray-700`;
export const TableLoadingStyles = (loading: boolean): string => {
  return `absolute top-14 left-0 h-full w-full bg-purple-500 text-white tracking-widest	 flex flex-col justify-center items-center transition-opacity transition-duration-700 ${
    loading ? "opacity-1" : "opacity-0"
  }`;
};
