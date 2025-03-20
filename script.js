const JWT_SECRET = "hvgbBhnsjaabkjaakjanaN";
const encrypt = (payload) => {
  // encrypt the payload and return token
  const encryptedtoken = jwt.sign(
    payload,
    JWT_SECRET,
    { expiresIn: "1h" },
    { algorithm: "HS256" }
  );
  return encryptedtoken;
};

const decrypt = (token) => {
  // return decoded payload
  const decodedtoken = jwt.verify(token, JWT_SECRET);
  // console.log(decodedtoken);
  return decodedtoken;
};

module.exports = {
  encrypt,
  decrypt,
};