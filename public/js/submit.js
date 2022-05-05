let form = document.querySelector("form")
let speedwall = document.querySelector(".wall-button")

const send = (e) => {
    e.preventDefault();
    console.clear()
    let name = document.querySelector(".driver-name").value
    let age = document.querySelector(".driver-age").value
    let car = document.querySelector(".car").value
    let rto = document.querySelector(".rto").value
    let vehicleclass = document.querySelector(".vehicle-class").value
    let secstart = document.querySelector(".section-start").value
    let secend = document.querySelector(".section-end").value
    let time = document.querySelector(".time").value
    const data = {
        name: name, age: age, car: car, rto: rto, vehicleclass: vehicleclass, secstart: secstart, secend: secend, time: time
    };
    axios.post("http://localhost:3000/submit/racer", data).then((result) => {
        alert(result.data);
    }).then(error => {
        if (error) throw error
    })
    form.reset()
    speedwall.style.display = "grid"
}

form.addEventListener("submit", send)