export const fetchMeta = async <T>(url: string): Promise<T> => {
  const rawData = await fetch(url);
  const jsonData = await rawData.json();

  if (!jsonData) return jsonData;

  return jsonData.meta;
};
