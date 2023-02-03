const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  find(name, password) {
    return this.connection.query(
      `select * from  ${this.table} where name = ? and password = ?`,
      [name, password]
    );
  }

  insert(user) {
    return this.connection.query(
      `insert into ${this.table} (name , password) values (? , ?)`,
      [user.name, user.password]
    );
  }

  update(user) {
    return this.connection.query(
      `update ${this.table} set name = ? ,password = ?  where id = ?`,
      [user.name, user.password, user.id]
    );
  }
}

module.exports = UserManager;
