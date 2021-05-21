import ContactContent from "./data/contact.json"

function createContact() {
    const adress = document.createElement("p");
    adress.innerHTML = ContactContent.de.adress;

    const tel = document.createElement("p");
    tel.innerHTML = ContactContent.de.tel;

    const email = document.createElement("p");
    email.innerHTML = ContactContent.de.email;

    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contact-info");
    contactInfo.append(adress, tel, email);

    const hoursContent = ContactContent.de.hours;
    const hoursHeader = document.createElement("h3");
    hoursHeader.textContent = hoursContent.title;
    const hoursTable = document.createElement("table");
    hoursTable.innerHTML =`
    <tr>
        <td>${hoursContent.Monday.acronym}</td>
        <td>${hoursContent.Monday.hours[0]}</td>
    </tr>
    <tr>
        <td></t>
        <td>${hoursContent.Monday.hours[1]}</td>
    </tr>
    <tr>
        <td>${hoursContent.Tuesday.acronym}</td>
        <td>${hoursContent.Tuesday.hours[0]}</td>
    </tr>
    <tr>
        <td>${hoursContent.Wednesday.acronym}</td>
        <td>${hoursContent.Wednesday.hours[0]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${hoursContent.Wednesday.hours[1]}</td>
    </tr>
    <tr>
        <td>${hoursContent.Friday.acronym}</td>
        <td>${hoursContent.Friday.hours[0]}</td>
    </tr>
    <tr>
        <td>${hoursContent.Weekend.acronym}</td>
        <td>${hoursContent.Weekend.hours[0]}</td>
    </tr>
    <tr>
        <td></td>
        <td>${hoursContent.Weekend.hours[1]}</td>
    </tr>`;
    const hours = document.createElement("div");
    hours.classList.add("hours");
    hours.append(hoursHeader, hoursTable);

    const contact = document.createElement("div");
    contact.classList.add("contact");
    contact.append(contactInfo, hours);
    return contact;
};

export { createContact };