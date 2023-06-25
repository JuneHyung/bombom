-- CREATE SCHEMA bombom DEFAULT CHARACTER SET utf8mb4 DEFAULT COLLATE utf8mb4_general_ci;

CREATE TABLE bombom.users(
	userNo INT NOT NULL AUTO_INCREMENT,
    userId VARCHAR(20) NOT NULL,
    userPw VARCHAR(20) NOT NULL,
	userName VARCHAR(20) NOT NULL,
    userEmail VARCHAR(100),
    userAddress VARCHAR(200),
    userTel VARCHAR(20),
    isAdmin TINYINT,
    joinDate TIMESTAMP,
    PRIMARY KEY(userNo),
    UNIQUE INDEX userName_UNIQUE (userName ASC))
    COMMENT = '사용자 정보'

SELECT * FROM bombom.users;


CREATE TABLE bombom.menu(
	menuNo INT auto_increment,
    menuName VARCHAR(50),
    menuPrice VARCHAR(50),
    menuType VARCHAR(50),
    menuNew TINYINT,
    menuImg VARCHAR(500),
    primary key(menuNo)
)
comment='메뉴정보'

CREATE TABLE bombom.shop(
	shopNo INT auto_increment,
    locName VARCHAR(30),
    shopName VARCHAR(100),
    shopTel VARCHAR(20),
    shopAddress VARCHAR(200),
    primary key(shopNo)
)
comment='매장 정보'

CREATE TABLE bombom.notice(
	noticeNo INT auto_increment,
    noticeTitle VARCHAR(30),
    noticeContent VARCHAR(100),
    noticeView INT,
    noticeDate TIMESTAMP,
    primary key(noticeNo)
)
comment='매장 정보'