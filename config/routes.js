const axios = require("axios");
const bcrypt = require("bcrypt");
const { authenticate, tokenGeneration } = require("./middlewares");

module.exports = server => {
  server.post("/api/register", register);
  server.post("/api/login", login);
  server.get("/api/jokes", authenticate, getJokes);
};

// decided to do async await for this as I enjoy the elegance of the structure it brings
async function register(req, res) {
  try {
    // take in the credentials from the request body
    const credentials = req.body;

    // hash the password using bcrypt
    const hash = bcrypt.hashSync(credentials.password, 16);

    // set the password to the created hash
    credentials.password = hash;

    // insert the user credentials in to the users database and store the return value in newUserId
    const newUserId = await db("users").insert(credentials);
    try {
      // grab the user where the user id is that of the new user
      const user = await db("users")
        .where({ id: newUserId[0] })
        .first();

      // use the tokenGeneration method to generate a token for the authorization header
      const token = tokenGeneration(user);
      req.headers.authorization = token;
      // return the token if successful
      return res.status(201).send(token);
    } catch (error) {
      // if the user did not get created correctly send a message saying that the user does not exist
      return res.status(404).json({ message: "the user does not exist" });
    }
  } catch (error) {
    // if any other server error then send a message saying the user could not be registered
    return res
      .status(500)
      .json({ message: "the user could not be registered" });
  }
}

function login(req, res) {
  // implement user login
}

function getJokes(req, res) {
  axios
    .get(
      "https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_ten"
    )
    .then(response => {
      res.status(200).json(response.data);
    })
    .catch(err => {
      res.status(500).json({ message: "Error Fetching Jokes", error: err });
    });
}
