"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class JobApplicationTag extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    JobApplicationTag.init(
        {
            JobApplicationId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "job_applications",
                    key: "id",
                },
                allowNull: false,
            },
            TagId: {
                type: DataTypes.INTEGER,
                references: {
                    model: "tags",
                    key: "id",
                },
                allowNull: false,
            },
        },
        {
            sequelize,
            modelName: "JobApplicationTag",
            tableName: "job_application_tags",
        }
    );
    return JobApplicationTag;
};
