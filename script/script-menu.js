$(document).ready(function(){

    SetTitulomenu();

    var $doc = $('html, body');

    $('a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1000);
        return false;
    });
 });

 function SetTitulomenu()
{
  
    $.getJSON("resource/resource.json", function(data)
    {
        document.getElementById("json-inicio").innerHTML = data.menu[0].inicio;
        document.getElementById("json-sobre").innerHTML = data.menu[1].sobre;
        document.getElementById("json-experiencia").innerHTML = data.menu[2].experiencia;
        document.getElementById("json-educacao").innerHTML = data.menu[3].educacao;
        document.getElementById("json-servico").innerHTML = data.menu[4].servico;
        document.getElementById("json-portofolio").innerHTML = data.menu[5].portofolio;
        document.getElementById("json-blog").innerHTML = data.menu[6].blog;
        document.getElementById("json-contato").innerHTML = data.menu[7].contato;
    });
}
 
 