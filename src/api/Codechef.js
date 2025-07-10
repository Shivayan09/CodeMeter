// api/Codechef.js

export async function fetchCodechefData(handle) {
  const response = await fetch(`https://codechef-api.vercel.app/handle/${handle}`);
  if (!response.ok) {
    throw new Error("User not found or API error");
  }
  const json = await response.json();
  if (json.status !== "success" && !json.result) {
    throw new Error("Invalid CodeChef handle");
  }
  return json.result; // contains fields like rating, global_rank, country_rank, stars, contestsAttended, problemsSolved
}
