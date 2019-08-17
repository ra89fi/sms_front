import Joi from "@hapi/joi";

export const studentRootSchema = {
  class: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  group: Joi.any().optional(),
  rollNo: Joi.number()
    .integer()
    .min(1)
    .required(),
  school: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  studentDetails: Joi.any().required(),
  parentDetails: Joi.any().required()
  // previousExamDetails: Joi.any().required()
};

export const studentDetailsSchema = {
  firstName: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  nationality: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  email: Joi.string().email({ minDomainSegments: 2 }),
  mobileNo: Joi.string()
    .regex(/^[0-9]+$/, "numbers")
    .min(11)
    .max(11)
    .required(),
  birthDate: Joi.date().required(),
  religion: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  bloodGroup: Joi.any().optional(),
  gender: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  maritalStatus: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presVillage: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presPO: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presUpazilla: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presDistrict: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permVillage: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permPO: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permUpazilla: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permDistrict: Joi.string()
    .alphanum()
    .min(1)
    .required()
};

export const parentDetailsSchema = {
  firstName: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  lastName: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  profession: Joi.any().optional(),
  mobileNo: Joi.any().optional()
};

export const previousExamSchema = {
  nameOfExam: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  group_subject: Joi.any().optional(),
  institution: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  board: Joi.any().optional(),
  passingYear: Joi.any().optional(),
  rollNo: Joi.number()
    .integer()
    .min(1)
    .required(),
  regNo: Joi.number()
    .integer()
    .min(1)
    .required(),
  gpa: Joi.any().optional(),
  outOf: Joi.any().optional()
};

export const validateStudent = data => {
  let errors = [];
  errors.push(Joi.validate(data, studentRootSchema).error);
  errors.push(Joi.validate(data.studentDetails, studentDetailsSchema).error);
  errors.push(Joi.validate(data.parentDetails.father, parentDetailsSchema).error);
  errors.push(Joi.validate(data.parentDetails.mother, parentDetailsSchema).error);
  console.log(errors);
  errors = errors.filter(error => error);
  return !errors.length;
};
