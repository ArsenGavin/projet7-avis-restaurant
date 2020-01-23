


    innerHtml() {

        this.places = document.querySelector('.place').cloneNode(true);
        var self = this;
        var a = 0;
        self.places.classList.remove('.place');
        self.placeNode.removeAttribute('block');
        /**
         * Ajoute le nom de l' place à l' élément sélectionné
         * @type {string}
         */
        self.placeNode.querySelector('.placeNameClass').textContent = `${self.name}`;
        /**
         * Ajoute l' adresse de l' place
         * @type {string}
         */
        self.placeNode.querySelector('.placeVicinityClass').textContent = `${self.vicinity}`;
        /**
         * Charge la note moyenne de l' place et la masque
         * @type {number}
         */
        x = Math.round(self.rating);
        self.placeNode.querySelector('.placeRatingClass').textContent = `${x}`;
        self.placeNode.querySelector('.placeRatingClass').style.display = "none";
        var starElm = self.placeNode.querySelector('.placeRatingImg');
        /**
         * Affiche avant l' adresse le png correspondant à la note moyenne de l' place
         * @param  {number} (x) Note moyenne
         */
        if (x === 1) {starElm = "";}
        else if (x === 2) {starElm = "";}
        else if (x === 3) {starElm = "";}
        else if (x === 4) {starElm = "";}
        else if (x === 5) {starElm = "";}
        else {starElm = "";}
        var starElm = self.placeNode.insertBefore(starElm, self.placeNode.querySelector('.placeVicinityClass'));
        /**
         * Charge avant la note moyenne une photo de l' place et la masque
         * @type {img}
         */
        var imageElm = document.createElement('img');
        imageElm.src = self.photos;
        imageElm.style.display = "none";
        var imageElm = self.placeNode.insertBefore(imageElm, self.placeNode.querySelector('.placeRatingClass'));
        /**
         * Charge avant l' adresse de l' place un bouton permettant de fermer les commentaires et
         * le masque
         * @type {img}
         */
        var closeElm = document.createElement('img');
        closeElm.className = "close";
        closeElm.src = "../img/close.png";
        closeElm.style.display = "none";
        var closeElm = self.placeNode.insertBefore(closeElm, self.placeNode.querySelector('.placeVicinityClass'));
        /**
         * Charge les commentaires provenant de l' API et les masques
         */
        self.placeNode.style.height = "90px";
        self.placeNode.style.overflow = "hidden";
        /**
         * Charge un bouton pour ajouter des commentaires et le masque
         */
        self.placeNode.querySelector('#buttonModalAddCommentId').style.display = "none";

        /**
         * Eventlistener sur le nom de l' place permet l' affichage des éléments masqués.
         * @param  {function} (evt) Click sur le nom de l' place
         */
        self.placeNode.querySelector('.placeNameClass').addEventListener('click', function(evt){
            evt.target.style.color = "#FC6354";
            self.placeNode.style.backgroundColor = "#EFEEE4";
            self.placeNode.style.height = "500px";
            self.placeNode.style.overflow = "auto";
            /**
             * Affiche la photo de l' place
             */
            imageElm.style.display = "block";
            /**
             * Affiche le bouton close
             */
            closeElm.style.display = "block";
            /**
             * Affiche les commentaires de l' API
             */
            if(a == 0) {
                self.getDetails();
                a = 1;
            } if (a== 1 ) {
                console.log('pas de nouvel request');
            };
            /**
             * Affiche les commentaires ajoutés par l' utilisateur.
             */
            var commentNode = document.body.querySelector('.commentClass');
            commentNode.style.display= "block";
            /**
             * Affiche le bouton qui permet l' ajout de commentaire par l' utilisateur via l' ouverture
             * d'une modal.
             */
            var modalElm = self.placeNode.querySelector('#buttonModalAddCommentId');
            modalElm.style.display = "block";
            document.body.querySelector('#buttonModalValidCommentId').addEventListener('click', validation)
            var modalElm = self.placeNode.insertBefore(modalElm, self.placeNode.querySelector('.placeCommentClassNode'));
            /**
             * Fonction validation enregistre et insère la valeures des informations renseigner dans la
             * modal dans les commentaires
             * @param  {function} (evt) Click sur le bouton validation de la modal
             */
            function validation (evt) {
                var $modal = $('#myModal');
                var modal = document.body.querySelector('#myModal');
                var pseudo = modal.querySelector('#pseudoId').value;
                var commentaire = modal.querySelector('#commentaireId').value;
                var note = modal.querySelector('#ratingId').value;
                /**
                 * Création d' un nouveau commentaire
                 * @param {string} (pseudo) Le pseudo de l' utilisateur.
                 * @param {number} (note)   La note de l' utilisateur
                 * @type {Comment}
                 */
                var comment = new Comment(pseudo, note, commentaire, self.placeNode);
                comment.initHtml();
                if (comment == true) {
                    self.placeNode.querySelector('#buttonModalAddCommentId').style.display = "none";
                }
                self.placeNode.querySelector('#buttonModalAddCommentId').style.display = "none";
                $modal.modal('toggle');
                /**
                 * Réinitialise la modal et on stop l' eventListener sur le bouton validation
                 */
                $(".modal-body input").val("");
                document.body.querySelector('#buttonModalValidCommentId').removeEventListener('click', validation);
            }
            /**
             * Fonction qui masque les éléments qui étaient par défaut non visible.
             * @param  {fuction} (evt) Click sur le bouton close.
             */
            closeElm.addEventListener('click', function(evt){
                setTimeout(function() {
                    self.placeNode.querySelector('.placeNameClass').style.color = "#2D5BE3";
                    self.placeNode.style.backgroundColor = '#FFFFFF';
                    self.placeNode.querySelector('#buttonModalAddCommentId').style.display = "none";
                },2000);
                self.placeNode.style.height = "90px";
                self.placeNode.style.overflow = "hidden";
                closeElm.style.display = "none";
                var commentNode = document.body.querySelector('.commentClass');
                commentNode.style.display = "none";
            })
        })
        App.listplace.appendChild(self.placeNode);
    }
