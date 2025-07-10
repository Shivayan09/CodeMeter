export async function fetchLeetcodeStats(username) {
  if (!username || !username.trim()) {
    throw new Error('Username is required');
  }

  const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username.trim()}`);
  const data = await response.json();

  if (!data.ranking) {
    throw new Error("Invalid or non-existent user");
  }

  return data;
}
