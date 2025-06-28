const form = document.querySelector("form");
    form.addEventListener('submit', (e) => {
        e.preventDefault()
        const first_name = document.querySelector("#first-name").value;
        const last_name = document.querySelector("#last-name").value;
        const age = document.querySelector("#age").value;
        const email = document.querySelector("#email").value;
        const phone_no = document.querySelector("#phone-no").value;
        const data = {
            "first_name": first_name,
            "last_name": last_name,
            "age": age,
            "email": email,
            "phone_number": phone_no
        }

        console.log(data);
        
    })