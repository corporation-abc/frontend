export const ShowImg = async () => {
  const { data } = await instance.post("/");
  return data;
};
