async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();

  // Standings page
  const standingsTable = document.getElementById("standings-table");
  if (standingsTable) {
    // 🔹 Sort by points (highest first)
    data.standings.sort((a, b) => b.points - a.points);

    data.standings.forEach(team => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${team.team}</td>
        <td>${team.gp}</td>
        <td>${team.wins}</td>
        <td>${team.losses}</td>
        <td>${team.otl}</td>
        <td>${team.points}</td>
        <td>${team.gf}</td>
        <td>${team.ga}</td>
      `;
      standingsTable.appendChild(row);
    });
  }

  // Rosters page

  // Player stats page
  const statsTable = document.getElementById("stats-table");
  if (statsTable) {
    // 🔹 Sort by points (highest first)
    data.playerStats.sort((a, b) => b.pts - a.pts);

    data.playerStats.forEach(player => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${player.name}</td>
        <td>${player.team}</td>
        <td>${player.gp}</td>
        <td>${player.g}</td>
        <td>${player.a}</td>
        <td>${player.pts}</td>
        <td>${player.hits}</td>
        <td>${player.sog}</td>
        <td>${player.pen}</td>
        <td>${player.pd}</td>
      `;
      statsTable.appendChild(row);
    });
  }
}

document.addEventListener("DOMContentLoaded", loadData);
