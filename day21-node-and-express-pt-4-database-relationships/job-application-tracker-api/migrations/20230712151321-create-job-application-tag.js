"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("job_application_tags", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            job_application_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "job_applications",
                    key: "id",
                },
            },
            tag_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                onUpdate: "CASCADE",
                references: {
                    model: "tags",
                    key: "id",
                },
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("job_application_tags");
    },
};
