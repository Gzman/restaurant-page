
function createContact() {
    const adress = document.createElement("p");
    adress.innerHTML = "Muster Restaurant<br>Familie Muster<br>Musterstr. 47<br>4711 Musterstadt";
    const tel = document.createElement("p");
    tel.textContent = "Tel. +49 7744 4711";
    const email = document.createElement("p");
    email.textContent = "info@muster-restaurant.de";
    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = "Öffnungszeiten";
    const hoursTable = document.createElement("table");
    hoursTable.innerHTML =`
    <tr>
        <td>MO</td>
        <td>11:30&ensp;-&ensp;14:30</td>
    </tr>
    <tr>
        <td></t>
        <td>17:30&ensp;-&ensp;22:30</td>
    </tr>
    <tr>
        <td>DI</td>
        <td>Ruhetag</td>
    </tr>
    <tr>
        <td>MI</td>
        <td>11:30&ensp;-&ensp;14:30</td>
    </tr>
    <tr>
        <td></td>
        <td>18:30&ensp;-&ensp;22:30</td>
    </tr>
    <tr>
        <td>FR</td>
        <td>18:30&ensp;-&ensp;22.30</td>
    </tr>
    <tr>
        <td>SA + SO</td>
        <td>11:30&ensp;-&ensp;14:30</td>
    </tr>
    <tr>
        <td></td>
        <td>17:30&ensp;-&ensp;22:30</td>
    </tr>`;

    const hours = document.createElement("div");
    hours.id = "hours-container";
    hours.append(hoursHeader, hoursTable);
    const contact = document.createElement("div");
    contact.id = "contact";
    contact.append(adress, tel, email, hours);
    return contact;
};

export { createContact };