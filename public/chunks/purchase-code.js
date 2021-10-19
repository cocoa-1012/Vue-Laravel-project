(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/purchase-code"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PurchaseCode',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_6__["SettingsIcon"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_4__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_5__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_7__["required"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      purchaseCode: ''
    };
  },
  methods: {
    verifyPurchaseCode: function verifyPurchaseCode() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.verifyPurchaseCode.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get verify account

                axios__WEBPACK_IMPORTED_MODULE_9___default.a.post('/api/setup/purchase-code', {
                  purchaseCode: _this.purchaseCode
                }).then(function (response) {
                  // End loading
                  _this.isLoading = false;
                  localStorage.setItem('purchase_code', _this.purchaseCode); // Redirect to next step

                  _this.$router.push({
                    name: 'Database'
                  });
                })["catch"](function (error) {
                  // End loading
                  _this.isLoading = false;

                  if (error.response.status == 400) {
                    _this.$refs.verifyPurchaseCode.setErrors({
                      'Purchase Code': ['Purchase code is invalid.']
                    });
                  } else if (error.response.status == 404) {
                    _this.$refs.verifyPurchaseCode.setErrors({
                      'Purchase Code': ['You may have misconfigured the app, please read the readme file and try it again.']
                    });
                  } else {
                    _this.$refs.verifyPurchaseCode.setErrors({
                      'Purchase Code': ['Something is wrong. Please try again.']
                    });
                  }
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-878c3a98] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-878c3a98] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-878c3a98] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-878c3a98] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-878c3a98] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-878c3a98]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-878c3a98] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-878c3a98] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-878c3a98] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-878c3a98] {\n  width: 100%;\n}\ntextarea[data-v-878c3a98],\ninput[type=\"password\"][data-v-878c3a98],\ninput[type=\"text\"][data-v-878c3a98],\ninput[type=\"email\"][data-v-878c3a98] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-878c3a98],\ninput[type=\"password\"].is-error[data-v-878c3a98],\ninput[type=\"text\"].is-error[data-v-878c3a98],\ninput[type=\"email\"].is-error[data-v-878c3a98] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-878c3a98]::-moz-placeholder, input[type=\"password\"][data-v-878c3a98]::-moz-placeholder, input[type=\"text\"][data-v-878c3a98]::-moz-placeholder, input[type=\"email\"][data-v-878c3a98]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-878c3a98]:-ms-input-placeholder, input[type=\"password\"][data-v-878c3a98]:-ms-input-placeholder, input[type=\"text\"][data-v-878c3a98]:-ms-input-placeholder, input[type=\"email\"][data-v-878c3a98]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-878c3a98]::placeholder,\ninput[type=\"password\"][data-v-878c3a98]::placeholder,\ninput[type=\"text\"][data-v-878c3a98]::placeholder,\ninput[type=\"email\"][data-v-878c3a98]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-878c3a98]:focus,\ninput[type=\"password\"][data-v-878c3a98]:focus,\ninput[type=\"text\"][data-v-878c3a98]:focus,\ninput[type=\"email\"][data-v-878c3a98]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-878c3a98],\ninput[type=\"password\"][disabled][data-v-878c3a98],\ninput[type=\"text\"][disabled][data-v-878c3a98],\ninput[type=\"email\"][disabled][data-v-878c3a98] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-878c3a98] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-878c3a98], .additional-link a[data-v-878c3a98] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-878c3a98]:hover, .additional-link a[data-v-878c3a98]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-878c3a98] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-878c3a98], .form textarea[data-v-878c3a98] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-878c3a98] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-878c3a98] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-878c3a98] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-878c3a98] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-878c3a98] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-878c3a98] {\n    padding: 14px 32px;\n}\ntextarea[data-v-878c3a98],\n  input[type=\"password\"][data-v-878c3a98],\n  input[type=\"text\"][data-v-878c3a98],\n  input[type=\"email\"][data-v-878c3a98] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-878c3a98] {\n    color: #bec6cf;\n}\ntextarea[data-v-878c3a98],\n  input[type=\"password\"][data-v-878c3a98],\n  input[type=\"text\"][data-v-878c3a98],\n  input[type=\"email\"][data-v-878c3a98] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-878c3a98]::-moz-placeholder, input[type=\"password\"][data-v-878c3a98]::-moz-placeholder, input[type=\"text\"][data-v-878c3a98]::-moz-placeholder, input[type=\"email\"][data-v-878c3a98]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-878c3a98]:-ms-input-placeholder, input[type=\"password\"][data-v-878c3a98]:-ms-input-placeholder, input[type=\"text\"][data-v-878c3a98]:-ms-input-placeholder, input[type=\"email\"][data-v-878c3a98]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-878c3a98]::placeholder,\n  input[type=\"password\"][data-v-878c3a98]::placeholder,\n  input[type=\"text\"][data-v-878c3a98]::placeholder,\n  input[type=\"email\"][data-v-878c3a98]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-878c3a98],\n  input[type=\"password\"][disabled][data-v-878c3a98],\n  input[type=\"text\"][disabled][data-v-878c3a98],\n  input[type=\"email\"][disabled][data-v-878c3a98] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-878c3a98] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-878c3a98] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-878c3a98] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-878c3a98] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-878c3a98] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-878c3a98] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-878c3a98] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-878c3a98] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-878c3a98] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-878c3a98] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-878c3a98] {\n    width: 100%;\n}\n.auth-form h1[data-v-878c3a98] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-878c3a98] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-878c3a98] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-878c3a98] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-878c3a98] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-878c3a98] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-878c3a98], .auth-form h2[data-v-878c3a98], .auth-form .additional-link[data-v-878c3a98] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-878c3a98] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-878c3a98] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-878c3a98] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-878c3a98] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-878c3a98] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-878c3a98] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-878c3a98] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-878c3a98],\n.duplicator .duplicator-item textarea[data-v-878c3a98] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-878c3a98] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-878c3a98] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-878c3a98] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-878c3a98] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-878c3a98 5s linear infinite;\n          animation: spinner-data-v-878c3a98 5s linear infinite;\n}\n.title-icon circle[data-v-878c3a98], .title-icon path[data-v-878c3a98] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-878c3a98 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-878c3a98 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-878c3a98] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-878c3a98],\n  .duplicator .duplicator-item textarea[data-v-878c3a98] {\n    background: #131414;\n}\n}\n.additional-link .black-link[data-v-878c3a98] {\n  color: #1B2539;\n}\n.auth-form input[data-v-878c3a98] {\n  min-width: 380px;\n}\n@media (prefers-color-scheme: dark) {\n.additional-link .black-link[data-v-878c3a98] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "AuthContentWrapper",
    { ref: "auth" },
    [
      _c(
        "AuthContent",
        { attrs: { name: "licence-verify", visible: true } },
        [
          _c(
            "div",
            { staticClass: "content-headline" },
            [
              _c("settings-icon", {
                staticClass: "title-icon",
                attrs: { size: "40" }
              }),
              _vm._v(" "),
              _c("h1", [_vm._v("Setup Wizard")]),
              _vm._v(" "),
              _c("h2", [
                _vm._v(
                  "Please set your purchase code before continue to set up your application."
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "verifyPurchaseCode",
            staticClass: "form inline-form",
            attrs: { tag: "form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.verifyPurchaseCode.apply(null, arguments)
              }
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  return [
                    _c("ValidationProvider", {
                      staticClass: "input-wrapper",
                      attrs: {
                        tag: "div",
                        mode: "passive",
                        name: "Purchase Code",
                        rules: "required"
                      },
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "default",
                            fn: function(ref) {
                              var errors = ref.errors
                              return [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.purchaseCode,
                                      expression: "purchaseCode"
                                    }
                                  ],
                                  class: { "is-error": errors[0] },
                                  attrs: {
                                    placeholder: "Paste your purchase code",
                                    type: "text"
                                  },
                                  domProps: { value: _vm.purchaseCode },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.purchaseCode = $event.target.value
                                    }
                                  }
                                }),
                                _vm._v(" "),
                                errors[0]
                                  ? _c(
                                      "span",
                                      { staticClass: "error-message" },
                                      [_vm._v(_vm._s(errors[0]))]
                                    )
                                  : _vm._e()
                              ]
                            }
                          }
                        ],
                        null,
                        true
                      )
                    }),
                    _vm._v(" "),
                    _c("AuthButton", {
                      attrs: {
                        icon: "chevron-right",
                        text: "Verify",
                        loading: _vm.isLoading,
                        disabled: _vm.isLoading
                      }
                    })
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c("p", { staticClass: "additional-link" }, [
            _c(
              "a",
              {
                attrs: {
                  href:
                    "https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",
                  target: "_blank"
                }
              },
              [
                _vm._v(
                  "\n                Where I can find purchase code?\n            "
                )
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "black-link",
                attrs: {
                  href:
                    "https://codecanyon.net/item/vue-file-manager-with-laravel-backend/25815986",
                  target: "_blank"
                }
              },
              [
                _vm._v(
                  "\n                Don’t have purchase code?\n            "
                )
              ]
            )
          ])
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/SetupWizard/PurchaseCode.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/SetupWizard/PurchaseCode.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true& */ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true&");
/* harmony import */ var _PurchaseCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PurchaseCode.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PurchaseCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "878c3a98",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/PurchaseCode.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseCode.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=style&index=0&id=878c3a98&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_style_index_0_id_878c3a98_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/PurchaseCode.vue?vue&type=template&id=878c3a98&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PurchaseCode_vue_vue_type_template_id_878c3a98_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);