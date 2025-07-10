export async function fetchCodeforcesData(handle) {
  const response = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
  const data = await response.json();
  return data.result[0];
}
