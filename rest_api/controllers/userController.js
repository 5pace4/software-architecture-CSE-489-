const User = require('../models/userModel');

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createUser = async (req, res) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
  });

  try {
    const newUser = await user.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });
    if (!user) {
      return res.status(404).json({ message: 'User Not Found!' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await User.findOne({ name: req.params.name });

    if (!user) {
      return res.status(404).json({ message: 'User Not Found!' });
    } else {
      // user.name = req.body.name;
      user.email = req.body.email;

      const updateUser = await user.save();
      return res.json(updateUser);
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // const user = await User.findOne({ name: req.params.name });
    //altername to the belwo delete line
    const user = await User.findOneAndDelete({ name: req.params.name });

    if (!user) {
      return res.status(404).json({ message: 'User Not Found!' });
    } else {
      // await user.deleteOne({ name: req.params.name }); // see alternative above
      return res.json({ message: 'User Deleted!' });
    }
  } catch (error) {
    return res.status(404).json({ message: error.message });
  }
};
