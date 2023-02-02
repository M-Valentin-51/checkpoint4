const AbstractManager = require("./AbstractManager");

class commentaireManager extends AbstractManager {
  constructor() {
    super({ table: "commentaire" });
  }

  insert(commentaire) {
    return this.connection.query(
      `insert into ${this.table} (nom , date_ajout ,message, project_id) values (? , now(), ? , ?)`,
      [commentaire.nom, commentaire.message, commentaire.projectId]
    );
  }

  update(commentaire) {
    return this.connection.query(
      `update ${this.table} set title = ? where id = ?`,
      [commentaire.title, commentaire.id]
    );
  }
}

module.exports = commentaireManager;
