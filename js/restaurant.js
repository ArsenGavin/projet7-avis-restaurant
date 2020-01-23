class Restaurant {
    constructor(map, id, location, name, address, rating, photos, comments){
        this.map = map;
        this.id = id;
        this.location = location;
        this.name = name;
        this.address = address;
        this.rating = rating;
        if(photos != undefined) {
            this.photos = photos[0].getUrl({'maxWidth': 200, 'maxHeight': 200});
        }
        else {
            this.photos = "http://racine.cccommunication.biz/v1/img/photo/photos_defaut/pas0BRnew.png";
        }
        this.comments = comments;

    }

    createMarker() {
        this.marker = new google.maps.Marker({
            position: this.location,
            map: map,
            icon: 'https://cdn3.iconfinder.com/data/icons/mapicons/icons/restaurant.png',
        });
    }


    addHtml() {
        var map = this.map;
        var id = this.id;
        var location = this.location;
        var name = this.name;
        var address = this.address;
        var rating = this.rating;
        var photos = this.photos;
        var comments = this.comments;
        var commentsLenght = comments.length;


        var places = "#places";

        const $info = $(places);

        if (rating < 2) {
            var rating = ("★   "+rating);
            var rating2 = ("★");
        }
        else if (rating >= 2 && rating < 3) {
            var rating = ("★★   "+rating);
            var rating2 = ("★★");
        }
        else if (rating >= 3 && rating < 4) {
            var rating = ("★★★   "+rating);
            var rating2 = ("★★★");
        }
        else if (rating >= 4 && rating < 5) {
            var rating = ("★★★★   "+rating);
            var rating2 = ("★★★★");
        }
        else if (rating >= 5) {
            var rating = ("★★★★★   "+rating);
            var rating2 = ("★★★★★");
        }


        $info.append('</br><div class="place'+id+' place'+rating2+'"><h2 class="placeNameClass">'+name+'</h2><p class="placeAdressClass">'+address+'</p><img src="'+photos+'" alt="photo du restaurant"><p class="placeRatingClass">'+rating+'</p><img src="" alt="" class="place-imgClass"><button type="button" class="btn btn-outline-info btn-sm btn-commentaire-'+id+'">Commentaires</button><div class="coms-'+id+'" style="display:none;"></div>');

        for (let i = 0; i < commentsLenght; i++){
            if (comments[i]['rating'] == 1) {
                var nbStars = "★";
            }
            if (comments[i]['rating'] == 2) {
                var nbStars = "★★";
            }
            if (comments[i]['rating'] == 3) {
                var nbStars = "★★★";
            }
            if (comments[i]['rating'] == 4) {
                var nbStars = "★★★★";
            }
            if (comments[i]['rating'] == 5) {
                var nbStars = "★★★★★";
            }

            var comment = comments[i]['text'];
            var placeCom = ".coms-"+id;
            if (i <= 4) {
                var $infoCom = $(placeCom);
                $infoCom.append('<div class="placeCommentClassNode commentaire-'+id+'"><p class="placeCommentRatingClass">'+nbStars+'</p><p class="placeCommentClass">'+comment+'</p><br></div>');
            }
        }

        var modalCom = `<div class="container place`+rating2+`">
                            <!-- Trigger the modal with a button -->
                            <button type="button" class="btn btn-info btn-sm btn-modal place`+rating2+`" data-toggle="modal" data-target="#myModal`+id+`">Ajouter un commentaire</button>
                            <!-- Modal -->
                            <div class="modal fade" id="myModal`+id+`" role="dialog">
                                <div class="modal-dialog"><!-- Modal content-->
                                    <div class="modal-content">
                                        <div class="modal-header" style="text-align:center;">
                                            <h4 class="modal-title">Merci de votre retour !</h4>
                                        </div>
                                        <div class="modal-body">
                                            <p>Votre note :</p>
                                            <div>
                                                <input type="radio" id="stars1`+id+`" name="stars" value="★">
                                                <label class="p-style">★</label> </br>
                                                <input type="radio" id="stars2`+id+`" name="stars" value="★★">
                                                <label class="p-style" value=★★" ">★★ </label> </br>
                                                <input type="radio" id="stars3`+id+`" name="stars" value="★★★">
                                                <label class="p-style">★★★ </label> </br>
                                                <input type="radio" id="stars4`+id+`" name="stars" value="★★★★">
                                                <label class="p-style">★★★★ </label> </br>
                                                <input type="radio" id="stars'`+id+`" name="stars" value="★★★★★">
                                                <label class="p-style">★★★★★</label>
                                            </div>
                                            <p class="p-margin-top">Votre commentaire :</p>
                                            <input type="text" placeholder="Entrez votre commentaire ici" class="new-com" name="new-com" id="new-com-`+id+`" size="50" maxlength="150" />
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-default btn-envoyer-com-`+id+`" data-dismiss="modal">Envoyer</button>
                                            <button type="button" class="btn btn-default" data-dismiss="modal">Fermer</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                       </div>`;

        $info.append(modalCom);
        $(".btn-commentaire-"+id).on("click",function(){
            $(placeCom).slideToggle();
        });

    }



    addComment() {
        var id = this.id;
        var placeCom = ".coms-"+id;
        var $infoCom = $(placeCom);

        $(".btn-envoyer-com-"+id).on("click",function(){
            var comId = "new-com-"+id;
            var radios = document.getElementsByName('stars');
            var nbStar;
            for(var i = 0; i < radios.length; i++){
                if(radios[i].checked){
                    nbStar = radios[i].value;
                }
            }
            var newCom = document.getElementById(comId).value;
            if (nbStar != null && newCom != null) {
                $infoCom.append('<div class="placeCommentClassNode commentaire-'+id+'";"><p class="placeCommentRatingClass">'+nbStar+'</p><p class="placeCommentClass">'+newCom+'</p><br></div>');
            }
        });
    }
}
