"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function serverErrors(res) {
    return function (target, key, desc) {
        var method = desc.value;
        desc.value = function () {
            try {
                method();
            }
            catch (err) {
                console.error(err.message);
                res.status(500).json({ errors: [{ msg: "Internal Server Error" }] });
            }
        };
    };
}
exports.serverErrors = serverErrors;
