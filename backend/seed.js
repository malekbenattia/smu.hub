const mongoose = require('mongoose');
require('dotenv').config();
const User = require('./models/User');
const Club = require('./models/Club');

const seed = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  await User.deleteMany({});
  await Club.deleteMany({});

  const users = [
    { name: 'Admin', email: 'admin@smu.tn', password: 'admin123', role: 'admin' },
    { name: 'Officer', email: 'officer@smu.tn', password: 'officer123', role: 'officer' },
    { name: 'Member', email: 'member@smu.tn', password: 'member123', role: 'member' }
  ];

  for (const user of users) {
    const u = new User(user);
    await u.save(); 
  }

  await Club.create([
    { name: 'IEEE SMU', description: 'IEEE Student Branch', category: 'Technical' },
    { name: 'Enactus', description: 'Entrepreneurship Club', category: 'Business' },
    { name: 'Securinets', description: 'Cybersecurity Club', category: 'Technical' }
  ]);

  console.log(' Seeded! Accounts: admin@smu.tn, officer@smu.tn, member@smu.tn (password: [role]123)');
  process.exit(0);
};

seed();

