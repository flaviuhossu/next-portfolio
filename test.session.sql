--comment in SQL
-- @block
CREATE TABLE Users(id INT PRIMARY KEY AUTO_INCREMENT,email VARCHAR(255) NOT NULL UNIQUE, bio TEXT ,country VARCHAR(2))

-- @BLOCK
INSERT INTO Users(email,bio,country) VALUES ("hello@world.com",
"i love strangers!",
'US'
)
-- @BLOCK
SELECT email, id FROM users