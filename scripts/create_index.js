// Find 'Active' user who have gender = 'Female'
db.getSiblingDB("demo");
db.users.createIndex({"is_active": 1, "gender": 1});