export function isArrayEqual(a: any, b: any) {
  // * Note: correct if all elements same order
  return a.join() === b.join();
}

export function isIdArrayEqual(array: any, array2: any) {
  // * Note: correct if all id same order
  const arrayIds = array?.map((item: any) => item?.id);
  const arrayIds2 = array2?.map((item: any) => item?.id);
  return arrayIds.join() === arrayIds2.join();
}
