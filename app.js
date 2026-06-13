const API_URL = "https://script.google.com/macros/s/AKfycbwat74glthlsPb5ll_yqcv0h1MIHSujj3q-L3Vb8HFJQBMHTF_5m1TFKNFeub4YDJYf8Q/exec";

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
