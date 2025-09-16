async function loadData() {
  const response = await fetch("data.json");
  const data = await response.json();

  // Standings page
  const standingsTable = document.getElementById("standings-table");
  if (standingsTable) {
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
   const rosterContainer = document.getElementById("roster-container");
  if (rosterContainer && data.rosters) {
    Object.keys(data.rosters).forEach(teamName => {
      const teamData = data.rosters[teamName];
      
      const teamSection = document.createElement("section");

      // Team header
      const heading = document.createElement("h2");
      heading.textContent = teamName;
      heading.style.backgroundColor = teamData.color || "#002654"; // fallback if missing
      teamSection.appendChild(heading);

      // Players list
      const list = document.createElement("ul");
      teamData.players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player.name} – ${player.position}`;
        list.appendChild(li);
      });
      teamSection.appendChild(list);

      rosterContainer.appendChild(teamSection);
    });
  }

  // Player stats page
  const statsTable = document.getElementById("stats-table");
  if (statsTable) {
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
