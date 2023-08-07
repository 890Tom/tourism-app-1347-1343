"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const uservalidator = {
    signup: [
        (0, express_validator_1.body)("nom").notEmpty().withMessage("Le champ nom ne peut pas être vide"),
        (0, express_validator_1.body)("prenom").notEmpty().withMessage("Le champ nom ne peut pas être vide"),
        (0, express_validator_1.body)("email")
            .isEmail()
            .withMessage("Veuillez fournir une adresse email valide"),
        (0, express_validator_1.body)("password").notEmpty().withMessage("Le champ mot de passe  ne peut pas être vide"),
    ],
    login: [
        (0, express_validator_1.body)("email").notEmpty().withMessage("Le champ email ne peut pas être vide"),
        (0, express_validator_1.body)("paswword").notEmpty().withMessage("Le champ mot de passe  ne peut pas être vide"),
    ]
};
exports.default = uservalidator;
//# sourceMappingURL=user.validators.js.map