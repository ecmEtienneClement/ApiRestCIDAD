"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentaireModel = void 0;
class CommentaireModel {
    constructor(commentaire, Id_User, nomUser = "fantome", prenomUser, promoUser, dateCommentaire = Date.now()) {
        this.commentaire = commentaire;
        this.Id_User = Id_User;
        this.nomUser = nomUser;
        this.prenomUser = prenomUser;
        this.promoUser = promoUser;
        this.dateCommentaire = dateCommentaire;
    }
}
exports.CommentaireModel = CommentaireModel;
