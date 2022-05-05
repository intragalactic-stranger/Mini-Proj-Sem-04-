let input = document.querySelector("input");

const search = () => {
  let query = input.value.toLowerCase();
  let table = document.querySelector("table");
  let tr = table.getElementsByTagName("tr");
  for (var i = 0; i < tr.length; i++) {
    let td = tr[i].getElementsByTagName("td")[0];
    let td1 = tr[i].getElementsByTagName("td")[1];
    let td2 = tr[i].getElementsByTagName("td")[2];
    let td3 = tr[i].getElementsByTagName("td")[3];
    let td4 = tr[i].getElementsByTagName("td")[4];
    let td5 = tr[i].getElementsByTagName("td")[5];
    let td6 = tr[i].getElementsByTagName("td")[6];
    let td7 = tr[i].getElementsByTagName("td")[7];
    
    if (td || td1 || td2 || td3 || td4 || td5 || td6 || td7) {
      let text = td.textContent || td.innerHTML;
      let text1 = td1.textContent || td1.innerHTML;
      let text2 = td2.textContent || td2.innerHTML;
      let text3 = td3.textContent || td3.innerHTML;
      let text4 = td4.textContent || td4.innerHTML;
      let text5 = td5.textContent || td5.innerHTML;
      let text6 = td6.textContent || td6.innerHTML;
      let text7 = td7.textContent || td7.innerHTML;
      if (text.toLowerCase().indexOf(query) > -1 || text1.toLowerCase().indexOf(query) > -1 || text2.toLowerCase().indexOf(query) > -1|| text3.toLowerCase().indexOf(query) > -1 ||text4.toLowerCase().indexOf(query) > -1 || text5.toLowerCase().indexOf(query) > -1 || text6.toLowerCase().indexOf(query) > -1 || text7.toLowerCase().indexOf(query) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
};

input.addEventListener("keydown", search);
