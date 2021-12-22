export class CommentaireModel {
  constructor(
    public commentaire: string,
    public Id_User: string,
    public nomUser: string = "fantome",
    public prenomUser?: string,
    public promoUser?: string,
    public dateCommentaire: string = ""
  ) {}
}
