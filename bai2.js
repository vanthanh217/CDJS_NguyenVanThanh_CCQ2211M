const showTable = () => {
  const tbodyBox = document.getElementById("tableContent");
  tbodyBox.innerHTML = `
    <tr>
        <td>1</td>
        <td>2122110011</td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td>2</td>
        <td>2122110012</td>
        <td></td>
        <td></td>
    </tr>
    `;
};

showTable();
