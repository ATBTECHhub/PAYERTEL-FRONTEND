import client from "./client";

export async function addEmailToWaitList(email) {
  const formData = new FormData();

  formData.append("email", email);

  const { data: res } = await (
    await client({
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  ).post("/news", formData);

  const { data, status, message, error, stack } = res;

  if (status === "fail") {
    console.log(message, error, stack);
    throw new Error(message);
  }

  return data;
}
