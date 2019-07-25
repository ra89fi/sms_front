import Joi from "@hapi/joi";

export const studentRootSchema = {
  degree: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  subject: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  session: Joi.string()
    .min(1)
    .required(),
  rollNo: Joi.number()
    .integer()
    .min(1)
    .required(),
  regNo: Joi.number()
    .integer()
    .min(1)
    .required()
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
  presAddVillage: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presAddPO: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presAddUpazilla: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  presAddDistrict: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permAddVillage: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permAddPO: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permAddUpazilla: Joi.string()
    .alphanum()
    .min(1)
    .required(),
  permAddDistrict: Joi.string()
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
