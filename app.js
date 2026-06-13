const API_URL = "https://script.google.com/macros/s/AKfycbwSE0gfPacxsyNKN-QA4cpV8C3SWyewpiNfMGyU7wMNzdIC1_tiRWvHBs_A9ZYMJk3xxw/exec";

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
