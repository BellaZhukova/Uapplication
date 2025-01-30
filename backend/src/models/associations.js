
import Account from './accountModel.js';
import Site from './siteModel.js';

// Define associations here after both models are loaded
Account.hasMany(Site, {foreignKey: "account_id"});
Site.belongsTo(Account, {foreignKey: "account_id"});