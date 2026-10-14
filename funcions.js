document.getElementById("nuevoUsuario").addEventListener("click",function(){


    fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {console.log(data)
    document.getElementById("usuario").innerHTML=data.results[0].email+ "<br>" + 
    
    data.results[0].phone+ "<br>" + 
    data.results[0].name.title+ " " +
    data.results[0].name.first+ " " +
    data.results[0].name.last+ "<br>" +

    '<img src="' + data.results[0].picture.large + '">';

  });

  
})

