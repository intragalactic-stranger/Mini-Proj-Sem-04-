console.clear()

let tbody = document.querySelector("tbody")

const getWall = () => {
    axios.get("http://localhost:3000/wall/speedwall").then((result) => {
        let data = result.data
        let html = ''
        for (let i = 0; i < data.length; i++) {
            html += `
            <tr>
                <td>${data[i].name}</td>
                <td>${data[i].age}</td>
                <td>${data[i].car}</td>
                <td>${data[i].rto}</td>
                <td>${data[i].vehicleclass}</td>
                <td>${data[i].secstart}</td>
                <td>${data[i].secend}</td>
                <td>${data[i].time}</td>
            </tr>
            `
        }
        tbody.innerHTML += html
    }).then((error) => {
        if (error) throw error
    })
}
getWall()