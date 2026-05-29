const API_URL = "https://script.google.com/macros/s/AKfycbwT5buZ3nwxyvUauITxP_uSNJfAX-sBaIgchN_66j_2ufqH2TlDCRr8V6-LNUBcvzdoaw/exec";

async function loadData(){
  const output = document.getElementById("output");
  output.innerHTML = "Loading...";

  try{
    const res = await fetch(API_URL);
    const data = await res.json();

    if(!Array.isArray(data)){
      output.innerHTML = "Format data tidak sesuai.";
      return;
    }

    let html = "<table><tr>";

    Object.keys(data[0]).forEach(key=>{
      html += `<th>${key}</th>`;
    });

    html += "</tr>";

    data.forEach(row=>{
      html += "<tr>";
      Object.values(row).forEach(val=>{
        html += `<td>${val}</td>`;
      });
      html += "</tr>";
    });

    html += "</table>";

    output.innerHTML = html;

  }catch(err){
    output.innerHTML = "Gagal ambil data. Pastikan Web App public.";
  }
}
