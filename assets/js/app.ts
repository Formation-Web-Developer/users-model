const tabInfo: {table: number, count:number} = {table: 1, count: 10};
function multiply(a: number, b: number): number{
    return a * b;
}
function table(x: number, count: number): number[]{
    const tab: number[] = [];
    for(let i = 1; i <= count; i++) tab.push(multiply(x, i));
    return tab;
}
function drawLine(table: number[]): string{
    return table.reduce((acc, x, i) => acc+`<p>${i+1}</p><p>${x}</p>`, '');
}
function drawTable(): void{
    document.getElementById('headerTitle').innerText = `Table de ${tabInfo.table}`;
    document.getElementById('table').innerHTML = `<p class="title">Produit</p><p class="title">Somme</p>${drawLine(table(tabInfo.table, tabInfo.count))}`;
}
function update(next: boolean): void{
    tabInfo.table += next ? 1 : -1;
    drawTable();
}
function addLine(add: boolean): void{
    tabInfo.count = Math.max(tabInfo.count + (add ? 1 : -1), 0);
    drawTable();
}
drawTable();
