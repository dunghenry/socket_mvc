import fetch from 'node-fetch';
async function fetchData() {
  const { login, id } = await (
    await fetch("https://api.github.com/users/dunghenry")
  ).json();
  console.log(login, id);
}
fetchData();
