/*Développez un mini-moteur de blog permettant de créer et de modifier des articles. La liste des billets et de leurs liens doit être stockées dans un fichier JSON.
Implémentez les pages d'inscription et de connexion développées lundi. N'importe qui peut lire les billets mais seul un utilisateur connecté peut créer un nouveau billet. Quelles fonctionnalités devriez-vous inclure?*/



function displayEdition() {

    if($('#edition').css('display')==="none"){
        $('#edition').css('display','block');
    }else{
        $('#edition').css('display','none');
    }
};

function postit() {
    
    $.getJSON("articles.json",function(data){
        console.log(data);
        //Changement des donnees du json
        data.title[data.title.length] = $('#title').val();
        data.article[data.article.length] = $('#writeArticle').val();
        
        // Ajout au DOM
        $('#blog').after('<article>' + '<h3>' + data.title[data.title.length - 1] + '</h3>' + '<p>' + data.article[data.article.length - 1] + '</p>' + '</article>')

    })
}

