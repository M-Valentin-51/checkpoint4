const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  insert(project) {
    return this.connection.query(
      `insert into ${this.table} (titre , date_ajout , image , description , lien , list_techno) values (? , now() , ? , ? , ? , ?)`,
      [
        project.titre,
        project.image,
        project.description,
        project.lien,
        project.techno,
      ]
    );
  }

  update(project) {
    return this.connection.query(
      `update ${this.table} set titre = ? , image = ? , description = ? , lien = ? , list_techno = ? where id = ?`,
      [
        project.title,
        project.image,
        project.description,
        project.lien,
        project.techno,
        project.id,
      ]
    );
  }
}

module.exports = ProjectManager;
