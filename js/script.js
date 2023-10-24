// get the link with the class of active from those links
const navItems = document.querySelectorAll('.nav-item');
const activeRectangle = document.getElementById('active-rectangle');
const actual_page = document.querySelector('.active.nav-item');
let activeLink = actual_page;

// add event listener to each link
navItems.forEach(link => {
    link.addEventListener('mouseover', function () {
        // remove active class from the active link
        activeLink.classList.remove('active');
        // add active class to the link that was hovered over
        link.classList.add('active');
        // set the active link to the link that was hovered over
        activeLink = link;
        moveRectangle(link);
    });
});

document.getElementById('nav').addEventListener('mouseout', function (e) {
    // remove active class from the active link
    activeLink.classList.remove('active');
    // add active class to the link that was hovered over
    actual_page.classList.add('active');
    // set the active link to the link that was hovered over
    activeLink = actual_page;
    moveRectangle(actual_page);
}
);

function moveRectangle(link) {
    const linkRect = link.getBoundingClientRect();
    const navRect = link.parentElement.getBoundingClientRect();

    const width = linkRect.width;
    const left = linkRect.left - navRect.left;

    activeRectangle.style.width = `${width}px`;
    // activeRectangle.style.transition = 'transform 0.5s';
    activeRectangle.style.transform = `translateX(${left}px)`;
}

// Initially position the rectangle
moveRectangle(actual_page);

const outputs = document.getElementById("outputs");

function userForm() {
    // Validate form
    const form = document.getElementById("main-form");
    if (!form.checkValidity()) {
        console.log("Invalid form");
        form.reportValidity();
        return;
    }

    // Get form data
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    email = email.toLowerCase();
    const address = document.getElementById("address").value;
    const city = document.getElementById("city").value;
    const province = document.getElementById("province").value;
    let membership = document.querySelector('input[name="membership"]:checked').value;

    // create a new div element
    output = document.createElement("div");
    output.classList.add("output");
    output.innerHTML = `
        <span class='output-title'>Full Name:</span> ${firstName} ${lastName}<br>
        <span class='output-title'>Email:</span> ${email}
        <div class="address-container">
                <div class="address-title"><span class='output-title'>Address:</span>&nbsp</div>
                <div class="address-lines">
                    <div class="address-line">${address}</div>
                    <div class="address-line">${city}, ${province}</div>
                </div>
        </div>
        <span class='output-title'>Membership:</span> ${membership}
    `;
    // add separator if there are more than one output
    if (outputs.children.length >= 1) {
        separator = document.createElement("div");
        separator.classList.add("separator");
        outputs.prepend(separator);
    }
    // append the newly created element to the outputs div
    outputs.prepend(output);
}

document.getElementById("send-button").addEventListener("click", (e) => { e.preventDefault(); userForm(); });