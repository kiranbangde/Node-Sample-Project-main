const pool = require("../db/pool");

const restList = async (req, res) => {
  const query = `SELECT id, title FROM rest_details`;
  const [result] = await pool.query(query);

  if (!result || result.length === 0) {
    return res
      .status(404)
      .json({ message: "No restaurants found", success: false });
  }

  return res.status(200).json({ data: result, success: true });
};

module.exports = { restList };
