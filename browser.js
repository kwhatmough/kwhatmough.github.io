function getTestRecord(expression) {
  var result = new Function("return " + expression + ";")();
  return {
    type: typeof result,
    value: typeof result === "function" ? "\u0192" : JSON.stringify(result),
    is: result ? "truthy" : "falsy"
  };
}

function getTableMarkup(source) {
  var cols = [];
  for (var key in source) {
    for (var c in source[key]) {
      if (cols.indexOf(c) === -1) cols.push(c);
    }
  }

  var html =
    "<table border='1'><thead><tr><th>(index)</th>" +
    cols
      .map(function(c) {
        return "<th>" + c + "</th>";
      })
      .join("") +
    "</tr></thead><tbody>";
  for (var key in source) {
    html +=
      "<tr><td>" +
      key +
      "</td>" +
      cols
        .map(function(c) {
          return "<td>" + (source[key][c] || "") + "</td>";
        })
        .join("") +
      "</tr>";
  }
  html += "</tbody></table>";

  return html;
}

function runTest(resultsId, logId) {
  var expressions = [
    "navigator.mediaDevices",
    "window.AudioContext",
    "window.webkitAudioContext",
    "window.MediaStream"
  ];

  var testResults = {};
  expressions.forEach(function(expression) {
    testResults[expression] = getTestRecord(expression);
  });

  console.table(testResults);

  document
    .getElementById(resultsId)
    .insertAdjacentHTML("beforeend", getTableMarkup(testResults));
}
