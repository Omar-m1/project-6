

(async function getApi (){
    var ahmed = await fetch ("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var element = await ahmed.json();
    var data = element.recipes;
    var myText="";
    for (var i=0; i<data.length ;i++){

        var cartoona =      `<div class="col-md-4 text-center mb-4  ">
                            <img src="${data[i].image_url}" style=" height:400px" class ="img-fluid">
                            <h4>${data[i].title}</h4>
                            <h6>${data[i].publisher}</h6>
                            <h6>${data[i].social_rank}$</h6>
                            </div>
                            `;

            myText= myText +cartoona;              
        } 
        
    document.querySelector(".test").innerHTML = myText;                    
})();