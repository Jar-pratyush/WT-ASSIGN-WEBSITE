//HOME PAGE RSVP

let form1 = document.getElementById('form1');

// We check if form1 exists (so this code doesn't crash on contact.html)
if (form1) {
    form1.addEventListener('submit', function(event) {
        event.preventDefault(); 

        let rest = document.getElementById('restSelect').value;
        let uName = document.getElementById('uName').value;
        let fName = document.getElementById('fName').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let pin = document.getElementById('pin').value;

        // Regex
        let userReg = /^[a-zA-Z0-9_]{3,20}$/;
        let nameReg = /^[a-zA-Z\s]{3,50}$/;
        let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        let phoneReg = /^\d{10}$/;
        let pinReg = /^\d{6}$/;
        let addrReg = /^[a-zA-Z0-9\s,.-]{5,100}$/;

        if(rest === "") { alert("Please select a restaurant"); return; }
        if(!userReg.test(uName)) { alert("Invalid Username"); return; }
        if(!nameReg.test(fName)) { alert("Invalid Full Name"); return; }
        if(!emailReg.test(email)) { alert("Invalid Email"); return; }
        if(!phoneReg.test(phone)) { alert("Phone must be 10 digits"); return; }
        if(!addrReg.test(address)) { alert("Invalid Address"); return; }
        if(!pinReg.test(pin)) { alert("Pin code must be 6 digits"); return; }

        alert("Congrats you are RSVPed");
        form1.reset();
    });
}


//HOME PAGE FORM

let form2 = document.getElementById('form2');
let list = document.getElementById('list-area');

if (form2) {
    form2.addEventListener('submit', function(event) {
        event.preventDefault();

        let name = document.getElementById('newRestName').value.trim();
        let phone = document.getElementById('newPhone').value.trim();
        let cuisine = document.getElementById('newCuisine').value.trim();
        let loc = document.getElementById('newLoc').value.trim();

        let nameReg = /^[a-zA-Z0-9\s]{3,40}$/;
        let phoneReg = /^\d{10}$/;
        let cuisineReg = /^[a-zA-Z\s]{3,20}$/;
        let locReg = /^[a-zA-Z0-9\s,.-]{3,50}$/;

        if(!nameReg.test(name)) { alert("Invalid Name"); return; }
        if(!phoneReg.test(phone)) { alert("Invalid Phone"); return; }
        if(!cuisineReg.test(cuisine)) { alert("Invalid Cuisine"); return; }
        if(!locReg.test(loc)) { alert("Invalid Location"); return; }

        let item = document.createElement('div');
        item.className = "item";
        item.innerHTML = `
            <div>
                <strong>${name}</strong><br>
                <small>${cuisine} | ${loc}</small>
            </div>
        `;

        let btn = document.createElement('button');
        btn.className = "del-btn";
        btn.innerText = "Delete";
        btn.onclick = function() { item.remove(); };

        item.appendChild(btn);
        list.appendChild(item);
        form2.reset();
    });
}

//CONTACT US FORM:
let contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get Values
        let cName = document.getElementById('cName').value;
        let cEmail = document.getElementById('cEmail').value;
        let cPhone = document.getElementById('cPhone').value;
        let cAddress = document.getElementById('cAddress').value;
        let cPin = document.getElementById('cPin').value;
        let cIssue = document.getElementById('cIssue').value.trim();

        // Regex
        let nameReg = /^[a-zA-Z\s]{3,50}$/;
        let emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let phoneReg = /^\d{10}$/;
        let addrReg = /^[a-zA-Z0-9\s,.-]{5,100}$/;
        let pinReg = /^\d{6}$/;

        // Validation
        if(!nameReg.test(cName)) { alert("Invalid Name (Letters only)"); return; }
        if(!emailReg.test(cEmail)) { alert("Invalid Email"); return; }
        if(!phoneReg.test(cPhone)) { alert("Invalid Phone (10 digits)"); return; }
        if(!addrReg.test(cAddress)) { alert("Address too short or invalid chars"); return; }
        if(!pinReg.test(cPin)) { alert("Invalid Pin (6 digits)"); return; }
        
        if(cIssue.length < 10) { 
            alert("Please describe your issue in more detail (min 10 chars)."); 
            return; 
        }

        // Success Message
        alert("Thank you for submitting your Query we'll reach out to you");
        contactForm.reset();
    });
}