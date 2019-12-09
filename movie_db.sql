CREATE DATABASE movie;
USE movie;

CREATE TABLE customer (
    user_id varchar(20) NOT NULL,
    user_name varchar(20) NOT NULL,
    user_pw varchar(20) NOT NULL,
    user_ph varchar(15) NOT NULL,
    birth_d date NOT NULL,
    vip varchar(12) NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE n_customer (
    phone_num varchar(15) NOT NULL,
    user_name varchar(20) NOT NULL,
    birth_d date NOT NULL,
    PRIMARY KEY (phone_num)
);

CREATE TABLE branch (
    branch_id int(3) NOT NULL,
    branch_region varchar(20) NOT NULL,
    branch_city varchar(20) NOT NULL,
    PRIMARY KEY (branch_id)
);

CREATE TABLE sattlement (
    branch_id varchar(20) NOT NULL,
    s_date date NOT NULL,
    total_price int(11) NOT NULL
);

CREATE TABLE movie (
    movie_id varchar(20) NOT NULL,
    movie_genre varchar(20) NOT NULL,
    title varchar(30) NOT NULL,
    limit_age int(2) DEFAULT 0 NOT NULL,
    dimension varchar(4) DEFAULT '2D',
    runtime int(3) NOT NULL,
    theater_id int(2) NOT NULL,
    start_time varchar(10) NOT NULL,
    branch_id varchar(20) NOT NULL,
    PRIMARY KEY (movie_id)
);

CREATE TABLE ticketing_info (
    order_id varchar(20) NOT NULL,
    movie_genre varchar(20) NOT NULL,
    user_id varchar(20) NOT NULL,
    count int(3) DEFAULT 1 NOT NULL,
    total_discount int(8) DEFAULT 0 NOT NULL,
    total_price int(8) NOT NULL,
    movie_id varchar(20) NOT NULL,
    branch_id varchar(20) NOT NULL,
    PRIMARY KEY (order_id)
);

CREATE TABLE n_ticketing_info (
    order_id varchar(20) NOT NULL,
    count int(3) DEFAULT 1 NOT NULL,
    total_price int(8) NOT NULL,
    movie_id varchar(20) NOT NULL,
    branch_id varchar(20) NOT NULL,
    phone_num varchar(15) NOT NULL,
    PRIMARY KEY (order_id)
);

CREATE TABLE favorite_genre (
    user_id varchar(20) NOT NULL,
    order_id varchar(20) NOT NULL,
    thriller int(5) DEFAULT 0  NOT NULL,
    sf int(5) DEFAULT 0  NOT NULL,
    romance int(5) DEFAULT 0  NOT NULL,
    noir int(5) DEFAULT 0  NOT NULL,
    animation int(5) DEFAULT 0  NOT NULL,
    drama int(5) DEFAULT 0  NOT NULL,
    adventure int(5) DEFAULT 0  NOT NULL,
    action_m int(5) DEFAULT 0  NOT NULL,
    comedy int(5) DEFAULT 0  NOT NULL,
    adult int(5) DEFAULT 0  NOT NULL,
    PRIMARY KEY (user_id)
);

CREATE TABLE theater (
    theater_id int(11) NOT NULL,
    theater_num int(2) NOT NULL,
    branch_id varchar(20) NOT NULL,
    PRIMARY KEY (theater_id)
);

CREATE TABLE theater_seat (
    seat_id int(11) NOT NULL,
    movie_id varchar(20) NOT NULL,
    theater_id varchar(20) NOT NULL,
    theater_num int(2) NOT NULL,
    seat_num varchar(4) NOT NULL,
    is_reserv boolean DEFAULT FALSE,
    PRIMARY KEY (seat_id)
);

CREATE TABLE facility (
    theater_id varchar(20) NOT NULL,
    seat varchar(50) NOT NULL,
    screen varchar(50) NOT NULL,
    fire_ext varchar(50) NOT NULL
);

CREATE TABLE comment (
    comment_no int(11) NOT NULL,
    user_id varchar(20) NOT NULL,
    movie_id varchar(20) NOT NULL,
    contents varchar(200) NOT NULL,
    star_rate int(2) NOT NULL,
    PRIMARY KEY (comment_no)
);

CREATE TABLE administer (
    admin_id varchar(20) NOT NULL,
    admin_name varchar(20) NOT NULL,
    admin_pw varchar(20) NOT NULL,
    dept varchar(20) NOT NULL,
    PRIMARY KEY (admin_id)
);

CREATE TABLE emp (
    emp_name varchar(20) NOT NULL,
    emp_job varchar(20) NOT NULL,
    attendence varchar(20) NOT NULL,
    emp_phone varchar(15)
);

ALTER TABLE branch MODIFY branch_id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE movie MODIFY movie_id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE theater MODIFY theater_id INT NOT NULL AUTO_INCREMENT;
ALTER TABLE theater_seat MODIFY seat_id INT NOT NULL AUTO_INCREMENT;

INSERT INTO branch(branch_region, branch_city) VALUES ('서울', '가산디지털');
INSERT INTO branch(branch_region, branch_city) VALUES ('서울', '가양');
INSERT INTO branch(branch_region, branch_city) VALUES ('서울','강동');
INSERT INTO branch(branch_region, branch_city) VALUES ('경기/인천', '검단');
INSERT INTO branch(branch_region, branch_city) VALUES ('경기/인천', '광교아울렛');
INSERT INTO branch(branch_region, branch_city) VALUES ('경기/인천', '광주터미널');

INSERT INTO movie(movie_genre, title, limit_age, dimension, runtime,
theater_id, start_time, branch_id) VALUES
 ('애니메이션', '겨울왕국2(자막)', 0, '2D', 103, 1, '12:00', '가산디지털'),
 ('애니메이션', '겨울왕국2(자막)', 0, '2D', 103, 1, '14:00', '가산디지털'),
 ('애니메이션', '겨울왕국2(자막)', 0, '2D', 103, 3, '12:00', '가양'),
 ('애니메이션', '겨울왕국2(자막)', 0, '2D', 103, 3, '14:00', '가양');

INSERT INTO theater(theater_num, branch_id) VALUES
(1, '가산디지털'), (2, '가산디지털'), (1, '가양'), (2, '가양');

INSERT INTO theater_seat(movie_id, theater_id, theater_num, seat_num) VALUES
(1, 1, 1, 'A1'),  (1, 1, 1, 'A2'),  (1, 1, 1, 'A3'),  (1, 1, 1, 'A4'),
(1, 1, 1, 'B1'),  (1, 1, 1, 'B2'),  (1, 1, 1, 'B3'),  (1, 1, 1, 'B4');
