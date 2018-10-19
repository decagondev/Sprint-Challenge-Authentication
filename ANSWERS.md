<!-- Answers to the Short Answer Essay Questions go here -->

1. What is the purpose of using _sessions_?

   the purpose of a session is to store data that you want access to across requests. users that visit your website get a unique session that can be used to store and access user data as they browse the application. The are great to store a key that the application can use to authorise and keep a user authenticated accross the lifetime of the session.

2. What does bcrypt do to help us store passwords in a secure manner.

   bcrypt helps store passwords in a secure manneer by hashing the data and then storing a hash digest to compare it to. the hashed data is using a one way hash so the only way to get the password is to guess it and hash the password with the same algorithm.

3. What does bcrypt do to slow down attackers?

   bcryps is written to be a slow algorithm to slow down attackers. To elaborate on this answer. bcrypt relies heavily on accesses to a table and this is consistently altered throughout the algoritms execution to make it very fast on a pc but a lot slower on a GPU and this is aimed to make password crackers trying to speed up password cracking via brute force via use of gpu miners / hash crackers since the speed of those in a normal hash set can be about 10 to 20 times faster than cpu. but with bcrypt this slows down and reduces this factor a great deal thus slowing down the speed at which the passord brute forcers can actually encode the hash thus slowing down the ability to crack the password. the platform and landscape of cracking rigs has changed however so this speed blocker can be overcome with enough investment in to FPGA rigs. the ability to do multiple pass hashing also gives a slow down to halp larger cypher strength along the way. this is not to say that bcrypt is the most secure solution but it is a nice blowfish implementation

4. What are the three parts of the JSON Web Token?

The three parts of the JSON Web Token are:

- The header - This contains the token type and the algoritm
- The payload - This contains things like the id and the user name
- The signature - This contains an encrypred copy of (The Header and The payload) + a secret which is a string tagged in to the signature
