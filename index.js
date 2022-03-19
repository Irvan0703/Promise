var url = 'https://newsapi.org/v2/top-headlines?' +
'country=id&' + 
'apiKey=86f0ca9287334d49a73fdd224f211898';;

input = () =>{
  var inputValue = document.getElementById("floatingInput").value;
  if (inputValue == ''){
    url = 'https://newsapi.org/v2/top-headlines?' +
          'country=id&' + 
          'apiKey=86f0ca9287334d49a73fdd224f211898';
  } else{
    url = 'https://newsapi.org/v2/top-headlines?' +
          'country=id&' + `q=${inputValue}&` +
          'apiKey=86f0ca9287334d49a73fdd224f211898';
  }
  
  var req = new Request(url);
  const data = fetch(req);

  data
  .then(response => response.json())
  .then(data => {
    document.getElementById("arti").innerHTML = getView(data)
  });

  return url;
}

  function getView(data){
    let send="";
    let open=`<div class="container">
    <div class="row">`;
    let close= `</div>
    </div>`;
    for (let i =0; i < data.articles.length; i++){
        send += `
      <div class="col-lg-4 col-md-6 col-sm-12">
      <div class="card" style="width: 18rem;">
      <img src="${data.articles[i].urlToImage}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">${data.articles[i].title}</h5>
      <p class="card-subtitle mb-2 text-muted">${data.articles[i].author} - ${tanggal(data.articles[i].publishedAt)}</p>
      <p class="card-text">${data.articles[i].description}</p>
      <a href="${data.articles[i].url}" class="btn btn-primary" target="_blank">Read More...</a>
      </div>
      </div>
      </div>`
    }
  return open+send+close;
  }

tanggal = (data)  => {
  var ts = new Date(data);
  let tet = ts.toLocaleDateString();
  let tot = ts.toLocaleTimeString('en-GB');
  console.log(tet+" "+tot);

  return tet+" "+tot;
}

  input();