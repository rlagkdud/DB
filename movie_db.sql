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

create table branch(
    branch_id int(10) ,
    branch_region varchar(20),
    branch_city varchar(20),

    primary key(branch_id)
);

ALTER TABLE branch MODIFY branch_id INT NOT NULL AUTO_INCREMENT;

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

ALTER TABLE movie MODIFY movie_id INT NOT NULL AUTO_INCREMENT;

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


ALTER TABLE ticketing_info MODIFY order_id INT NOT NULL AUTO_INCREMENT;

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


CREATE TABLE theater_seat (
    seat_id int(11) NOT NULL,
    movie_id varchar(20) NOT NULL,
    theater_id varchar(20) NOT NULL,
    theater_num int(2) NOT NULL,
    seat_num varchar(4) NOT NULL,
    is_reserv boolean DEFAULT FALSE,
    PRIMARY KEY (seat_id)
);

ALTER TABLE theater_seat MODIFY seat_id INT NOT NULL AUTO_INCREMENT;

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

create table settlement(

    branch_id int(10),
    movie_id  int(10),
    day_price int(30),
    foreign key(branch_id) references branch(branch_id) on update CASCADE

);

create table theater_info(
    theater_id int(10),
    theater_num varchar(20),
    branch_id int(10),

    primary key(theater_id),
    foreign key (branch_id) references branch(branch_id) on delete CASCADE on update CASCADE
);

ALTER TABLE theater_info MODIFY theater_id INT NOT NULL AUTO_INCREMENT;


create table theater_fac(
    theater_id int(10),
    seat varchar(100),
    screen varchar(100),
    fire_ext varchar(100),

    primary key(theater_id),
    foreign key(theater_id) references theater_info(theater_id) on delete CASCADE on update CASCADE

);


CREATE TABLE emp (
    emp_name varchar(20) NOT NULL,
    emp_job varchar(20) NOT NULL,
    attendence varchar(20) NOT NULL,
    emp_phone varchar(15)
);

ALTER TABLE n_ticketing_info MODIFY order_id INT NOT NULL AUTO_INCREMENT;

INSERT INTO customer VALUES 
('user1', 'DemoMan', '1234','01011110000', '19980103', 'Bronze'),
('user2', 'DemoMan1', '1234','01011110000', '19980103', 'Silver'),
('user3', 'DemoMan2', '1234','01011110000', '19980103', 'Gold'),
('admin', 'Admin', 'admin', '01099999999', '19200101', 'Gold');


INSERT INTO branch VALUES (1, '서울', '가산디지털');
INSERT INTO branch VALUES (2, '서울', '가양');
INSERT INTO branch VALUES (3, '서울','강동');
INSERT INTO branch VALUES (4, '경기/인천', '검단');
INSERT INTO branch VALUES (5, '경기/인천', '광교아울렛');
INSERT INTO branch VALUES (6, '경기/인천', '광주터미널');

INSERT INTO movie(movie_genre, title, limit_age, dimension, runtime,
theater_id, start_time, branch_id) VALUES
 ('애니메이션', '겨울왕국2(자막)', 0, '2D', 103, 1, '12:00', '가산디지털');

INSERT INTO theater_seat(movie_id, theater_id, theater_num, seat_num) VALUES
(1, 1, 1, 'A01'),  (1, 1, 1, 'A02'),  (1, 1, 1, 'A03'),  (1, 1, 1, 'A04'),
(1, 1, 1, 'B01'),  (1, 1, 1, 'B02'),  (1, 1, 1, 'B03'),  (1, 1, 1, 'B04');

insert into settlement
values
(1, 1, 0), 
(1, 2, 0), 
(1, 3, 0), 
(1, 4, 0),
(1, 5, 0),
(1, 6, 0),
(1, 7, 0),
(1, 8, 0),
(1, 9, 0),
(1, 10, 0),
(1, 11, 0),
(1, 12, 0),
(1, 13, 0),
(1, 14, 0),
(1, 15, 0),
(1, 16, 0),
(1, 17, 0),
(1, 18, 0),
(1, 19, 0),
(1, 20, 0),
(1, 21, 0),
(1, 22, 0),
(1, 23, 0),
(1, 24, 0),
(1, 25, 0),
(1, 26, 0),
(1, 27, 0),
(1, 28, 0)
;

insert into theater_info
values
(1, '제 1관', 1), (2, '제 2관', 1), (3, '제 1관', 2), (4, '제 2관', 2), (5, '제 1관', 3), (6, '제 2관', 3);

insert into theater_fac
values
(1, 'no prob', 'no_prob', '5 / missing : 0'),
(2, 'prob: d/14, f/10', 'no_prob', '5 / missing : 0'),
(3, 'no prob', 'no_prob', '5 / missing : 0'),
(4, 'prob : c/4 ', 'no_prob', '4 / missing : 0'),
(5, 'no prob', 'prob: left side crash', '3 / missing : 1'),
(6, 'no prob', 'no_prob', '6 / missing : 0');

insert into movie(movie_genre, title, limit_age, dimension, runtime,
theater_id, start_time, branch_id) values 
('호러', '쏘우', 19, '2D', 103, 3, '12:00', '가산디지털'),
('호러', '주온', 19, '2D', 103, 3, '12:00', '가산디지털'),
('호러', '팔로우', 19, '2D', 103, 3, '12:00', '가산디지털'),
('코미디', '극한직업', 12, '2D', 103, 3, '12:00', '가산디지털'),
('코미디', '엑시트', 12, '2D', 103, 3, '12:00', '가산디지털'),
('코미디', '세얼간이', 12, '2D', 103, 3, '12:00', '가산디지털'),
('로맨스', '어바웃타임', 15, '2D', 103, 3, '12:00', '가산디지털'),
('로맨스', '지금만나러갑니다', 15, '2D', 103, 3, '12:00', '가산디지털'),
('로맨스', '나의소녀시대', 15, '2D', 103, 3, '12:00', '가산디지털'),
('액션', '존윅', 19, '2D', 103, 3, '12:00', '가산디지털'),
('액션', '매드맥스', 15, '2D', 103, 3, '12:00', '가산디지털'),
('액션', '미션임파서블6', 15, '2D', 103, 3, '12:00', '가산디지털'),
('스릴러', '기생수', 19, '2D', 103, 3, '12:00', '가산디지털'),
('스릴러', '악마를보았다', 19, '2D', 103, 3, '12:00', '가산디지털'),
('스릴러', '추격자', 19, '2D', 103, 3, '12:00', '가산디지털'),
('SF', '인터스텔라', 12, '2D', 103, 3, '12:00', '가산디지털'),
('SF', '스타워즈1', 12, '2D', 103, 3, '12:00', '가산디지털'),
('SF', '스타워즈2', 12, '2D', 103, 3, '12:00', '가산디지털'),
('어드벤쳐', '주만지', 12, '2D', 103, 3, '12:00', '가산디지털'),
('어드벤쳐', '메이즈런너', 15, '2D', 103, 3, '12:00', '가산디지털'),
('어드벤쳐', '라이프오브파이', 12, '2D', 103, 3, '12:00', '가산디지털'),
('드라마', '베테랑', 15, '2D', 103, 3, '12:00', '가산디지털'),
('드라마', '광해', 15, '2D', 103, 3, '12:00', '가산디지털'),
('드라마', '천문', 12, '2D', 103, 3, '12:00', '가산디지털'),
('애니메이션', '알라딘', 12, '2D', 103, 3, '12:00', '가산디지털'),
('애니메이션', '라이온킹', 12, '2D', 103, 3, '12:00', '가산디지털'),
('애니메이션', '토이스토리4', 12, '2D', 103, 3, '12:00', '가산디지털');

insert into ticketing_info
(movie_genre, user_id, count, total_discount, total_price, movie_id, branch_id) 
values 
( '애니메이션', 'user1', 2, 0, 10000, 28, 1 ),
( '애니메이션', 'user1', 2, 0, 20000, 26, 1 ),
( '애니메이션', 'user1', 2, 0, 20000, 27, 1 ),
( '호러', 'user1', 2, 0, 20000, 2, 1 ),
( '호러', 'user1', 2, 0, 20000, 2, 1 ),
( '스릴러', 'user1', 2, 0, 20000, 15, 1 ),
( '스릴러', 'user1', 2, 0, 20000, 15, 1 ),
( '스릴러', 'user1', 2, 0, 20000, 14, 1 ),
( 'SF', 'user1', 2, 0, 20000, 17, 1 ),
( 'SF', 'user2', 2, 0, 20000, 17, 1 ),
( 'SF', 'user2', 3, 0, 20000, 17, 1 ),
( 'SF', 'user2', 3, 0, 20000, 17, 1 ),
( '어드벤쳐', 'user2', 1, 0, 20000, 20, 1 ),
( '어드벤쳐', 'user2', 1, 0, 20000, 21, 1 ),
( '어드벤쳐', 'user2', 2, 0, 20000, 21, 1 ),
( '로맨스', 'user2', 1, 0, 20000, 9, 1 ),
( '액션', 'user3', 1, 0, 20000, 11, 1 ),
( '액션', 'user3', 1, 0, 20000, 13, 1 ),
( '로맨스', 'user3', 1, 0, 20000, 9, 1 ),
( '로맨스', 'user3', 1, 0, 20000, 10, 1 ),
( '로맨스', 'user3', 2, 0, 20000, 10, 1 ),
( '로맨스', 'user3', 3, 0, 20000, 8, 1 ),
( '로맨스', 'user3', 1, 0, 20000, 8, 1 ),
( '드라마', 'user3', 2, 0, 20000, 23, 1 ),
( '드라마', 'user3', 2, 0, 20000, 25, 1 ),
( '드라마', 'user3', 4, 0, 20000, 26, 1 )
;
