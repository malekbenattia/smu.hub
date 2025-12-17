const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');

const testLogin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const user = await User.findOne({ email: 'admin@smu.tn' });
    if (!user) return console.log('User not found');

    const isMatch = await user.matchPassword('admin123');
    console.log('Password match:', isMatch);
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

testLogin();