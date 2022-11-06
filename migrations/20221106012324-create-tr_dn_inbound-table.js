'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tr_dn_inbound', {
      id: {
        type: Sequelize.BIGINT,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      dni_number: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      site_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      site_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mitra: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      inbound_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      destination: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      arrive_date : {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      vehicle_no: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transport_mode: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      transport_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      po_number: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      category_po: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      config: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      pickinglist: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      do_erp: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      status_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      request_by: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      request_date: {
        type: Sequelize.DATEONLY,
        allowNull: true,
      },
      remark: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      customer_id: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      gr_number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      receiver_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      receiver_phone: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      CreatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      CreatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },
      UpdatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      UpdatedAt: {
        type: Sequelize.DATE,
        allowNull: true,
      },

    })
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.dropTable('tr_dn_inbound');
  }
};
