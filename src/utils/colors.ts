export const randomColorArr = [
  "#3763e3",
  "#50a358",
  "#6F42C1",
  "#d24ff3",
  "#c2bff3",
];

export const getRandomColor = (index: number) => {
  if (index < randomColorArr.length) {
    return randomColorArr[index];
  }
  return randomColorArr[0];
};
