type Category = {
  category: string;
};

export function sortByCategory(a: Category, b: Category) {
  return a.category.localeCompare(b.category);
}
