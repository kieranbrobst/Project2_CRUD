//allows use of comments in other files.
module.exports = (sequelize, DataTypes) => {
    const comments = sequelize.define('comments', 
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        date_posted: DataTypes.DATE,
        user_id: DataTypes.INTEGER,
        user_name: DataTypes.STRING,
        comment: DataTypes.STRING
    },
    {
        // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
        freezeTableName: true
    }
);
    return comments;
};