const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  findAll() {
    return this.connection.query(
      `select project.* ,JSON_ARRAYAGG(JSON_OBJECT('nom',commentaire.nom, 'message', commentaire.message , 'date' , commentaire.date_ajout)) as commentaire from project left join  commentaire on project.
      id = commentaire.project_id group by project.id ; `
    );
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (titre , date_ajout , image , description , lien , list_techno) values (? , now() , ? , ? , ? , ?)`,
      [
        project.titre,
        project.image,
        project.description,
        project.lien,
        project.listTechno,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set titre = ?  , description = ? , lien = ? , list_techno = ? where id = ?`,
      [
        project.titre,
        project.description,
        project.lien,
        project.listTechno,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
