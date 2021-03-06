// WORK ON THE DATE STUFF

//Makes articles model available to other files. Also creates articles table.
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      // ADDED TEMPORARY DEFAULT VALUE
      date_revised:{
        type: DataTypes.DATE,
        defaultValue: 1
      },
      content: DataTypes.TEXT,
      tags: DataTypes.STRING,
    },
    {
      // Disable the modification of tablenames; By default, sequelize will automatically
      // Transform all passed model names (first parameter of define) into plural. If not set:
      freezeTableName: true,
    }
  );
  // articles.associate = (models) => {
  //   articles.hasMany(models.comments)
  // }
  return articles;
};

