export default defineEventHandler(async (event) => {
  try {
    const data = await Server.find({});
    return data;
  } catch (err) {
    console.dir(err);
    return {
      code: "ERROR",
      message: "Something went wrong.",
    };
  }
});
