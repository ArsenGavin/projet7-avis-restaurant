var starsMini = 1;
var starsMax = 5;


//écoute du boutton étoiles mini pour ajouté la valeur correspondante
$('#une-etoile-min').click(function() {
    $('.btn-stars1').html("★ mini");
    var starsMini =  document.getElementById("stars-mini");
    starsMini.setAttribute('value', 1);
});

$('#deux-etoile-min').click(function() {
    $('.btn-stars1').html("★★ mini");
    var starsMini =  document.getElementById("stars-mini");
    starsMini.setAttribute('value', 2);
});

$('#trois-etoile-min').click(function() {
    $('.btn-stars1').html("★★★ mini");
    var starsMini =  document.getElementById("stars-mini");
    starsMini.setAttribute('value', 3);
});

$('#quatre-etoile-min').click(function() {
    $('.btn-stars1').html("★★★★ mini");
    var starsMini =  document.getElementById("stars-mini");
    starsMini.setAttribute('value', 4);
});

$('#cinq-etoile-min').click(function() {
    $('.btn-stars1').html("★★★★★ mini");
    var starsMini =  document.getElementById("stars-mini");
    starsMini.setAttribute('value', 5);
});


//écoute du boutton étoiles max pour ajouté la valeur correspondante
$('#une-etoile-max').click(function() {
    $('.btn-stars2').html("★ max");
    var starsMax =  document.getElementById("stars-max");
    starsMax.setAttribute('value', 1);
});

$('#deux-etoile-max').click(function() {
    $('.btn-stars2').html("★★ max");
    var starsMax =  document.getElementById("stars-max");
    starsMax.setAttribute('value', 2);
});

$('#trois-etoile-max').click(function() {
    $('.btn-stars2').html("★★★ max");
    var starsMax =  document.getElementById("stars-max");
    starsMax.setAttribute('value', 3);
});

$('#quatre-etoile-max').click(function() {
    $('.btn-stars2').html("★★★★ max");
    var starsMax =  document.getElementById("stars-max");
    starsMax.setAttribute('value', 4);
});

$('#cinq-etoile-max').click(function() {
    $('.btn-stars2').html("★★★★★ max");
    var starsMax =  document.getElementById("stars-max");
    starsMax.setAttribute('value', 5);
});


// function du click sur le button filtre qui récupere les valeurs de stars-mini et stars-max pour affiché la selection dans l'html et sur la carte et caché les autres
$('#btn-filtre').on('click', function() {
    var starsMini =  document.getElementById("stars-mini");
	  var starsMax =  document.getElementById("stars-max");
    var starsMiniValeur = starsMini.getAttribute('value');
    var starsMaxValeur = starsMax.getAttribute('value');

    if (starsMiniValeur <= starsMaxValeur) {
        if (starsMiniValeur == 1 && starsMaxValeur == 5) {
            $(".place★").show();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").show();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(true);
            }
        }
        if (starsMiniValeur == 1 && starsMaxValeur == 4) {
            $(".place★").show();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 1 && starsMaxValeur == 3) {
            $(".place★").show();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 1 && starsMaxValeur == 2) {
            $(".place★").show();
            $(".place★★").show();
            $(".place★★★").hide();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 1 && starsMaxValeur == 1) {
            $(".place★").show();
            $(".place★★").hide();
            $(".place★★★").hide();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 2 && starsMaxValeur == 5) {
            $(".place★").hide();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").show();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(true);
            }
        }
        if (starsMiniValeur == 2 && starsMaxValeur == 4) {
            $(".place★").hide();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 2 && starsMaxValeur == 3) {
            $(".place★").hide();
            $(".place★★").show();
            $(".place★★★").show();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 2 && starsMaxValeur == 2) {
            $(".place★").hide();
            $(".place★★").show();
            $(".place★★★").hide();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 3 && starsMaxValeur == 5) {

            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").show();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(true);
            }
        }
        if (starsMiniValeur == 3 && starsMaxValeur == 4) {
            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").show();
            $(".place★★★★").show();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        }
        if (starsMiniValeur == 3 && starsMaxValeur == 3) {
            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").show();
            $(".place★★★★").hide();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 4 && starsMaxValeur == 5) {
            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").hide();
            $(".place★★★★").show();
            $(".place★★★★★").show();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(true);
            }
        }
        if (starsMiniValeur == 4 && starsMaxValeur == 4) {
            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").hide();
            $(".place★★★★").show();
            $(".place★★★★★").hide();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(true);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(false);
            }
        }
        if (starsMiniValeur == 5 && starsMaxValeur == 5) {
            $(".place★").hide();
            $(".place★★").hide();
            $(".place★★★").hide();
            $(".place★★★★").hide();
            $(".place★★★★★").show();

            for (let i = 0; i < tabStars1.length; i++){
                tabStars1[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars2.length; i++){
                tabStars2[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars3.length; i++){
                tabStars3[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars4.length; i++){
                tabStars4[i].marker.setVisible(false);
            }
            for (let i = 0; i < tabStars5.length; i++){
                tabStars5[i].marker.setVisible(true);
            }
        }

    if (starsMiniValeur > starsMaxValeur) {
      alert("Il vous faut selectionner un nombre d'étoiles valide.");
    }
});

//on écoute le bouton Actualiser
$('#btn-actu').on('click', function() {
	location.reload();
});
