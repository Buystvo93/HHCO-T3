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

        Object.keys(data.rosters).forEach(teamName => {
          const teamSection = document.createElement("section");

          const heading = document.createElement("h2");
          heading.textContent = teamName;
          teamSection.appendChild(heading);

          const list = document.createElement("ul");

          data.rosters[teamName].forEach(player => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = `${player.name} – ${player.position}`;
            link.href = `/players/${player.name.replace(/\s+/g,'')}.html`; // player page URL
            link.className = 'player';
            li.appendChild(link);
            list.appendChild(li);
          });

          teamSection.appendChild(list);
          rosterContainer.appendChild(teamSection);
        });
      });

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
