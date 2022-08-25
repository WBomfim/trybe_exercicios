const { Patients, Plans } = require('../models');

const getPatientsAndPlans = async () => {
  const data = await Patients.findAll({
    include: [{ model: Plans, /* attributes: { exclude: ['plan_id']} */ }],
    /* attributes: { exclude: ['patient_id', 'plan_id'] } */
  });

  if (!data) return { code: 404, error: 'No patients found' };
  return { code: 200, data };
};

module.exports = {
  getPatientsAndPlans
};
