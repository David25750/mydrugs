const Drugs = require('../models/drugs.model');

exports.getAll = async (req, res) => {
  try {
    const result = await Drugs.find();
    if(!result) res.status(404).json({ drug: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};

exports.getById = async (req, res) => {
  try {
    const result = await Drugs
      .find({ _id: req.params.id});
    if(!result) res.status(404).json({ drug: 'Not found' });
    else res.json(result);
  }
  catch(err) {
    res.status(500).json(err);
  }
};
