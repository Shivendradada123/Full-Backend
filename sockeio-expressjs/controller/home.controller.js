/**
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 */
const helloWorld = async (req, res) => {
  res.status(200).json({
    success: true,
    message: "Hello world!",
  });
};

module.exports = helloWorld;
