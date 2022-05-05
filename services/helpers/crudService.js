async function getAll(model, where={}) {
  const response = await model.findAll({ where });

  return response;
}

async function getAllGroup(model, where={}, group="", having={}, attributes=[]) {
  const response = await model.findAll({ where, group, having, attributes });

  return response;
}

async function getOne(model, where={}) {
  const response = await model.findOne({ where });

  return response;
}

async function getInner(model, where={}, include) {
  const response = await model.findOne({ where, include });

  return response;
}

async function getById(model, id) {
  const response = await model.findOne({ where: { id } });

  return response;
}

async function Create(data, model) {
  var response;
  if (typeof data === Array) {
    response = await model.bulkCreate(data);
  } else {
    response = await model.create(data);
  }

  return response
}

async function Update(queryData, data, model) {
  const object = await getOne(model, queryData);
  await object.update(data);

  return object
}

module.exports = { 
  getAll, 
  Create, 
  getById, 
  Update, 
  getOne, 
  getAllGroup, 
  getInner,
};
