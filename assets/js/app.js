var tabInfo = { table: 1, count: 10 };
function multiply(a, b) {
    return a * b;
}
function table(x, count) {
    var tab = [];
    for (var i = 1; i <= count; i++)
        tab.push(multiply(x, i));
    return tab;
}
function drawLine(table) {
    return table.reduce(function (acc, x, i) { return acc + ("<p>" + (i + 1) + "</p><p>" + x + "</p>"); }, '');
}
function drawTable() {
    document.getElementById('headerTitle').innerText = "Table de " + tabInfo.table;
    document.getElementById('table').innerHTML = "<p class=\"title\">Produit</p><p class=\"title\">Somme</p>" + drawLine(table(tabInfo.table, tabInfo.count));
}
function update(next) {
    tabInfo.table += next ? 1 : -1;
    drawTable();
}
function addLine(add) {
    tabInfo.count = Math.max(tabInfo.count + (add ? 1 : -1), 0);
    drawTable();
}
drawTable();
