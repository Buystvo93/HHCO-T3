const fs = require('fs');
const path = require('path');

// Load your JSON
const data = JSON.parse(fs.readFileSync('data.json'));

// Directory to store player pages
const playersDir = path.join(__dirname, 'players');
if (!fs.existsSync(playersDir)){
    fs.mkdirSync(playersDir);
}

// Combine rosters and stats
data.playerStats.forEach(playerStat => {
  const playerName = playerStat.name;
  const team = playerStat.team;
  const playerFileName = playerName.replace(/\s+/g,'') + '.html';

  // Create HTML content
  const htmlContent = `
  <!DOCTYPE html>
  <html>
  <head>
    <meta charset="UTF-8">
    <title>${playerName}</title>
    <style>
      body { font-family: Arial, sans-serif; padding: 20px; }
      h1 { margin-bottom: 10px; }
      table { border-collapse: collapse; width: 300px; }
      td, th { border: 1px solid #ccc; padding: 5px; }
    </style>
  </head>
  <body>
    <h1>${playerName}</h1>
    <p><strong>Team:</strong> ${team}</p>
    <table>
      <tr><th>GP</th><td>${playerStat.gp}</td></tr>
      <tr><th>G</th><td>${playerStat.g}</td></tr>
      <tr><th>A</th><td>${playerStat.a}</td></tr>
      <tr><th>PTS</th><td>${playerStat.pts}</td></tr>
      <tr><th>Hits</th><td>${playerStat.hits}</td></tr>
      <tr><th>SOG</th><td>${playerStat.sog}</td></tr>
      <tr><th>PEN</th><td>${playerStat.pen}</td></tr>
      <tr><th>PD</th><td>${playerStat.pd}</td></tr>
    </table>
    <p><a href="../roster.html">Back to roster</a></p>
  </body>
  </html>
  `;

  // Save file
  fs.writeFileSync(path.join(playersDir, playerFileName), htmlContent);
});

console.log("Player pages generated!");
