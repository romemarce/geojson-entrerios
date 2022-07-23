const getDepartament = require("../services/departament")
require("dotenv").config();

const action = async (req, res) => {
  try {

    let id = req.query.id;

    const result = await getDepartament(id);
    
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
    
  } catch (error) {
    console.log(error)
  }
}

module.exports = action