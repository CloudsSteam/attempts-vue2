import request from "./request";

export async function getSearch () {
  return await request.get("/api/search");

}