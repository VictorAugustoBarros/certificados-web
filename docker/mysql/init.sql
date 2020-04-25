DROP DATABASE IF EXISTS certificados_dev;
CREATE DATABASE certificados_dev;

USE certificados_dev;

-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela e Dados referente aos USU�RIOS da faculdade
DROP TABLE IF EXISTS certificados_dev.USUARIOS_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.USUARIOS_UNI(
  id_usuario int AUTO_INCREMENT PRIMARY KEY,
  login VARCHAR(200) NOT NULL,
  password VARCHAR(200) NOT NULL,
  st_admin VARCHAR(1) DEFAULT 'N' COMMENT 'A -> Admin / N -> Normal'
);

INSERT INTO USUARIOS_UNI (login, password, st_admin) VALUES ('victor', 'vb@pg', 'A');

-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela e Dados referente aos CURSOS da faculdade
DROP TABLE IF EXISTS certificados_dev.CURSOS_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.CURSOS_UNI(
  id_curso int AUTO_INCREMENT PRIMARY KEY,
  nm_curso VARCHAR(2000) NOT NULL,
  ds_turno CHAR(1) NOT NULL COMMENT 'M - Manh� / T - Tarde / N - Noite',
  hr_inicio TIME NOT NULL,
  hr_fim TIME NOT NULL
);

INSERT INTO CURSOS_UNI (nm_curso, ds_turno, hr_inicio, hr_fim) VALUES ('Ciência da Computação', 'M', '07:00:00', '12:00:00');
INSERT INTO CURSOS_UNI (nm_curso, ds_turno, hr_inicio, hr_fim) VALUES ('Ciência da Computação', 'T', '13:00:00', '17:00:00');
INSERT INTO CURSOS_UNI (nm_curso, ds_turno, hr_inicio, hr_fim) VALUES ('Ciência da Computação', 'N', '18:00:00', '22:00:00');

-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela referente aos CURSOS ESPECIAIS da faculdade
DROP TABLE IF EXISTS certificados_dev.CURSOS_ESPECIAIS_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.CURSOS_ESPECIAIS_UNI(
  id_curso_especial int AUTO_INCREMENT PRIMARY KEY,
  ds_tema VARCHAR(2000) NOT NULL,
  nm_palestrante VARCHAR(200),
  dt_inicio DATETIME NOT NULL,
  dt_fim DATETIME NOT NULL,
  qnt_horas_complementares DECIMAL(4, 1) NOT NULL
);

INSERT INTO CURSOS_ESPECIAIS_UNI (ds_tema, nm_palestrante, dt_inicio, dt_fim, qnt_horas_complementares)
VALUES ('PHP Avançado', 'José da Silva', '2020-04-14 17:00:00', '2020-04-14 18:00:00', 20.0);
INSERT INTO CURSOS_ESPECIAIS_UNI (ds_tema, nm_palestrante, dt_inicio, dt_fim, qnt_horas_complementares)
VALUES ('JAVA Avançado', 'Marcos da Silva', '2020-04-14 17:00:00', '2020-04-14 18:00:00', 50.0);


-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela referente aos ALUNOS da faculdade
DROP TABLE IF EXISTS certificados_dev.ALUNO_CARTEIRA_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.ALUNO_CARTEIRA_UNI(
  id_carteira_aluno int PRIMARY KEY,
  nm_aluno VARCHAR(500) NOT NULL,
  ds_cpf VARCHAR(11),
  dt_cadastro DATETIME NOT NULL DEFAULT NOW(),
  ds_email VARCHAR(100)
);

INSERT INTO ALUNO_CARTEIRA_UNI (id_carteira_aluno, nm_aluno, ds_cpf, ds_email) VALUES ('52265471', 'Victor Augusto Barros', '09303746902', 'victor.augustobarros@gmail.com');
INSERT INTO ALUNO_CARTEIRA_UNI (id_carteira_aluno, nm_aluno, ds_cpf, ds_email) VALUES ('81361234', 'Charles Mendes', '16312842182', 'charles.mendes@gmail.com');

-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela referente aos TURMAS da faculdade
DROP TABLE IF EXISTS certificados_dev.TURMAS_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.TURMAS_UNI(
  id_turma int AUTO_INCREMENT PRIMARY KEY,
  nm_materia VARCHAR(500),
  id_curso INT NOT NULL,
  FOREIGN KEY (id_curso)
    REFERENCES CURSOS_UNI(id_curso)
);

INSERT INTO TURMAS_UNI (nm_materia, id_curso) VALUES ('Grafos Básico', 3);
INSERT INTO TURMAS_UNI (nm_materia, id_curso) VALUES ('Grafos Avançado', 3);
INSERT INTO TURMAS_UNI (nm_materia, id_curso) VALUES ('Grafos Avançado', 1);


-- ---------------------------------------------------------------------------------------------------------------------
-- Tabela referente aos TURMAS/ALUNO da faculdade
DROP TABLE IF EXISTS certificados_dev.TURMAS_ALUNO_UNI;
CREATE TABLE IF NOT EXISTS certificados_dev.TURMAS_ALUNO_UNI(
  id_turma_aluno int AUTO_INCREMENT PRIMARY KEY,
  id_carteira_aluno INT NOT NULL,
  id_turma INT NOT NULL,
  FOREIGN KEY (id_carteira_aluno)
    REFERENCES ALUNO_CARTEIRA_UNI(id_carteira_aluno),
  FOREIGN KEY (id_turma)
    REFERENCES TURMAS_UNI(id_turma)
);

INSERT INTO TURMAS_ALUNO_UNI (id_carteira_aluno, id_turma) VALUES (52265471, 2);
INSERT INTO TURMAS_ALUNO_UNI (id_carteira_aluno, id_turma) VALUES (52265471, 3);
INSERT INTO TURMAS_ALUNO_UNI (id_carteira_aluno, id_turma) VALUES (81361234, 1);