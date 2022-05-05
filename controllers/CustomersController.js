const customerService = require("../services/customerService");


async function createCustomers(req, res) {
  try {
    const { firstName, lastName, email } = req.body;
    let customerData = await customerService.createCustomers(req.body);
    
    return res.json(customerData);
  } catch (error) {
    console.error(error);
    res.send({ message: "Erro ao criar os customers" });
  }
}

module.exports = {
  createCustomers,
};
