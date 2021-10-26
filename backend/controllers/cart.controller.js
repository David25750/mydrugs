exports.getCart = async (req, res) => {
  try {
    if (!req.session || !req.session.cart || !req.session.cart.drugs) res.json([]);
    else if (!req.session.cart.drugs.length) res.json([]);
    else res.json(req.session.cart.drugs);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.saveCart = async (req, res) => {
  try {
    const { drugs } = req.body;
    req.session.cart = {
      drugs: drugs,
    };
    req.session.save();
    res.json(drugs);
  } catch (err) {
    res.status(500).json(err);
  }
};
