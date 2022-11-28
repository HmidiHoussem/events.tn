DROP DATABASE IF EXISTS jaw;

CREATE DATABASE jaw;

USE jaw;

CREATE TABLE events (
  id int NOT NULL AUTO_INCREMENT,
  title varchar (50) NOT NULL ,
  time varchar(50),
  description varchar(255) NOT NULL,
  image varchar(200),
  availablePlaces INT  ,
  PRIMARY KEY (ID)
);

--   inserting Data 

INSERT  INTO events (title,description,image,availablePlaces,time) VALUES ("Adele Concert","Adele concert in BIG stadiim of rades for the first time in Tunisia ...","https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_700/MTkwNTgxMzk1NTc4MTAyOTA5/adele-audience-one-night-only.webp",40000,"32/12/2022")

INSERT  INTO events (title,description,image,availablePlaces ,time) VALUES ("FAN-ZONE","watch TUNISIA vs FRANCE in world Cup 2022 fan-zone at YUKA GAMMARTH by ooredoo","https://www.tekiano.com/wp-content/uploads/2022/11/fanzone-2.jpg",300,"30/11/2022")

INSERT  INTO events (title,description,image,availablePlaces,time) VALUES("Be Clean","Voluntary work cleaning beachs of Sousse to best planet blabla bla ","https://www.parksconservancy.org/sites/default/files/styles/hero/public/hero/20130713-A_OCBE_130713_MDu_77_hero.jpg?itok=8bmDDcA4&timestamp=1542497091",20 ,"04/01/2023")

-- INSERT  INTO events (title,description,image,availablePlaces,date) VALUES ()
-- INSERT  INTO events (title,description,image,availablePlaces,date) VALUES ()
-- INSERT  INTO events (title,description,image,availablePlaces,date) VALUES ()
-- INSERT  INTO events (title,description,image,availablePlaces,date) VALUES ()
-- INSERT  INTO events (title,description,image,availablePlaces,date) VALUES ()

/*  Execute this file from the command line by typing:
 *    mysql -u root -p < server/database-mysql/schema.sql
 *  to create the database and the tables.*/

