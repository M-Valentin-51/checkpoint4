CREATE TABLE item (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO item (title) VALUES ('Stuff'), ('Doodads');


CREATE TABLE project (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  titre varchar(255) NOT NULL,
  date_ajout DATE NOT NULL,
  image varchar(255) ,
  description text ,
  lien varchar(255) NOT NULL,
  list_techno varchar(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO project (titre , date_ajout , image , description , lien , list_techno ) VALUES 
("Morpion socket io" ,now() ,"morpion.png","Creation d'un morpion multi joueur avec socket io ","https://github.com/M-Valentin-51/socket.io-morpion","html css react express socket-io");

CREATE TABLE commentaire (
  id int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  nom varchar(255) NOT NULL,
  date_ajout date NOT NULL,
  message text,
  project_id int(11) UNSIGNED NOT NULL,
  CONSTRAINT fk_commentaire FOREIGN KEY (project_id) references project(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO commentaire (nom , date_ajout , message , project_id ) VALUES ("valentin" , now() , "Bien jouée" , 1) , ("valentin" , now() , "Bon travail" , 1)