const crudService = require("./helpers/crudService");
const Customer = require("../models").Customer;


async function getCustomersById(id) {
    const customerData = await crudService.getById(Customer, id);

    return customerData;
}


async function createCustomers(data) {
    const customerData = await crudService.Create(data, Customer);

    return customerData;
}

module.exports = {
    createCustomers,
    getCustomersById,
};
