function invertValues(obj: any) {
  const result: any = {};

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = -obj[key];
    }
  }

  return result;
}
export default invertValues;
