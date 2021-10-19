(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/create-new-password"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'CreateNewPassword',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_1__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_2__["ValidationObserver"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_4__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__["required"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_6__["mapGetters"])(['config'])),
  data: function data() {
    return {
      isLoading: false,
      recoverPassword: {
        token: undefined,
        email: '',
        newPassword: '',
        newPasswordConfirm: ''
      }
    };
  },
  methods: {
    goToAuthPage: function goToAuthPage(slug) {
      this.$refs.auth.$children.forEach(function (page) {
        // Hide current step
        page.isVisible = false;

        if (page.$props.name === slug) {
          // Go to next step
          page.isVisible = true;
        }
      });
    },
    createNewPassword: function createNewPassword() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.create_new_password.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Start loading
                _this.isLoading = true; // Send request to get user reset link

                axios__WEBPACK_IMPORTED_MODULE_7___default.a.post(_this.$store.getters.api + '/password/reset', {
                  email: _this.recoverPassword.email,
                  token: _this.recoverPassword.token,
                  password: _this.recoverPassword.newPassword,
                  password_confirmation: _this.recoverPassword.newPasswordConfirm
                }).then(function () {
                  // End loading
                  _this.isLoading = false;

                  _this.goToAuthPage('password-reset-successfully');
                })["catch"](function (error) {
                  if (error.response.status == 422) {
                    if (error.response.data.error) {
                      _this.$refs.create_new_password.setErrors({
                        'E-Mail': error.response.data.error
                      });
                    }

                    if (error.response.data.errors['password']) {
                      _this.$refs.create_new_password.setErrors({
                        'New Password': error.response.data.errors['password']
                      });
                    }
                  } // End loading


                  _this.isLoading = false;
                });

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  created: function created() {
    // Get token
    this.recoverPassword.token = this.$route.query.token;
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-287890d7] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-287890d7] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-287890d7] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-287890d7] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-287890d7] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-287890d7]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-287890d7] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-287890d7] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-287890d7] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-287890d7] {\n  width: 100%;\n}\ntextarea[data-v-287890d7],\ninput[type=\"password\"][data-v-287890d7],\ninput[type=\"text\"][data-v-287890d7],\ninput[type=\"email\"][data-v-287890d7] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-287890d7],\ninput[type=\"password\"].is-error[data-v-287890d7],\ninput[type=\"text\"].is-error[data-v-287890d7],\ninput[type=\"email\"].is-error[data-v-287890d7] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-287890d7]::-moz-placeholder, input[type=\"password\"][data-v-287890d7]::-moz-placeholder, input[type=\"text\"][data-v-287890d7]::-moz-placeholder, input[type=\"email\"][data-v-287890d7]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-287890d7]:-ms-input-placeholder, input[type=\"password\"][data-v-287890d7]:-ms-input-placeholder, input[type=\"text\"][data-v-287890d7]:-ms-input-placeholder, input[type=\"email\"][data-v-287890d7]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-287890d7]::placeholder,\ninput[type=\"password\"][data-v-287890d7]::placeholder,\ninput[type=\"text\"][data-v-287890d7]::placeholder,\ninput[type=\"email\"][data-v-287890d7]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-287890d7]:focus,\ninput[type=\"password\"][data-v-287890d7]:focus,\ninput[type=\"text\"][data-v-287890d7]:focus,\ninput[type=\"email\"][data-v-287890d7]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-287890d7],\ninput[type=\"password\"][disabled][data-v-287890d7],\ninput[type=\"text\"][disabled][data-v-287890d7],\ninput[type=\"email\"][disabled][data-v-287890d7] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-287890d7] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-287890d7], .additional-link a[data-v-287890d7] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-287890d7]:hover, .additional-link a[data-v-287890d7]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-287890d7] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-287890d7], .form textarea[data-v-287890d7] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-287890d7] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-287890d7] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-287890d7] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-287890d7] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-287890d7] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-287890d7] {\n    padding: 14px 32px;\n}\ntextarea[data-v-287890d7],\n  input[type=\"password\"][data-v-287890d7],\n  input[type=\"text\"][data-v-287890d7],\n  input[type=\"email\"][data-v-287890d7] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-287890d7] {\n    color: #bec6cf;\n}\ntextarea[data-v-287890d7],\n  input[type=\"password\"][data-v-287890d7],\n  input[type=\"text\"][data-v-287890d7],\n  input[type=\"email\"][data-v-287890d7] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-287890d7]::-moz-placeholder, input[type=\"password\"][data-v-287890d7]::-moz-placeholder, input[type=\"text\"][data-v-287890d7]::-moz-placeholder, input[type=\"email\"][data-v-287890d7]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-287890d7]:-ms-input-placeholder, input[type=\"password\"][data-v-287890d7]:-ms-input-placeholder, input[type=\"text\"][data-v-287890d7]:-ms-input-placeholder, input[type=\"email\"][data-v-287890d7]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-287890d7]::placeholder,\n  input[type=\"password\"][data-v-287890d7]::placeholder,\n  input[type=\"text\"][data-v-287890d7]::placeholder,\n  input[type=\"email\"][data-v-287890d7]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-287890d7],\n  input[type=\"password\"][disabled][data-v-287890d7],\n  input[type=\"text\"][disabled][data-v-287890d7],\n  input[type=\"email\"][disabled][data-v-287890d7] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-287890d7] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-287890d7] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-287890d7] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-287890d7] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-287890d7] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-287890d7] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-287890d7] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-287890d7] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-287890d7] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-287890d7] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-287890d7] {\n    width: 100%;\n}\n.auth-form h1[data-v-287890d7] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-287890d7] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-287890d7] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-287890d7] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-287890d7] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-287890d7] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-287890d7], .auth-form h2[data-v-287890d7], .auth-form .additional-link[data-v-287890d7] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
        { attrs: { name: "create-new-password", visible: true } },
        [
          _vm.config.app_logo
            ? _c("img", {
                staticClass: "logo",
                attrs: {
                  src: _vm.$getImage(_vm.config.app_logo),
                  alt: _vm.config.app_name
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.config.app_logo
            ? _c("b", { staticClass: "auth-logo-text" }, [
                _vm._v(_vm._s(_vm.config.app_name))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("h1", [_vm._v(_vm._s(_vm.$t("page_create_password.title")))]),
          _vm._v(" "),
          _c("h2", [_vm._v(_vm._s(_vm.$t("page_create_password.subtitle")))]),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "create_new_password",
            staticClass: "form block-form create-new-password",
            attrs: { tag: "form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.createNewPassword.apply(null, arguments)
              }
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  return [
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(_vm.$t("page_create_password.label_email"))
                          )
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "E-Mail",
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
                                          value: _vm.recoverPassword.email,
                                          expression: "recoverPassword.email"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: _vm.$t(
                                          "page_login.placeholder_email"
                                        ),
                                        type: "email"
                                      },
                                      domProps: {
                                        value: _vm.recoverPassword.email
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.recoverPassword,
                                            "email",
                                            $event.target.value
                                          )
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
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.$t("page_create_password.label_new_pass")
                            ) + ":"
                          )
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "New Password",
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
                                          value:
                                            _vm.recoverPassword.newPassword,
                                          expression:
                                            "recoverPassword.newPassword"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: _vm.$t(
                                          "page_create_password.label_new_pass"
                                        ),
                                        type: "password"
                                      },
                                      domProps: {
                                        value: _vm.recoverPassword.newPassword
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.recoverPassword,
                                            "newPassword",
                                            $event.target.value
                                          )
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
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [
                          _vm._v(
                            _vm._s(
                              _vm.$t("page_create_password.label_confirm_pass")
                            ) + ":"
                          )
                        ]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Confirm Password",
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
                                          value:
                                            _vm.recoverPassword
                                              .newPasswordConfirm,
                                          expression:
                                            "recoverPassword.newPasswordConfirm"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: _vm.$t(
                                          "page_create_password.label_confirm_pass"
                                        ),
                                        type: "password"
                                      },
                                      domProps: {
                                        value:
                                          _vm.recoverPassword.newPasswordConfirm
                                      },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.recoverPassword,
                                            "newPasswordConfirm",
                                            $event.target.value
                                          )
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
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      [
                        _c("AuthButton", {
                          attrs: {
                            icon: "chevron-right",
                            text: _vm.$t("page_create_password.button_update"),
                            loading: _vm.isLoading,
                            disabled: _vm.isLoading
                          }
                        })
                      ],
                      1
                    )
                  ]
                }
              }
            ])
          }),
          _vm._v(" "),
          _c(
            "span",
            { staticClass: "additional-link" },
            [
              _vm._v(
                _vm._s(
                  _vm.$t("page_forgotten_password.password_remember_text")
                ) + "\n            "
              ),
              _c("router-link", { attrs: { to: { name: "SignIn" } } }, [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm.$t("page_forgotten_password.password_remember_button")
                    ) +
                    "\n            "
                )
              ])
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "AuthContent",
        { attrs: { name: "password-reset-successfully", visible: false } },
        [
          _vm.config.app_logo
            ? _c("img", {
                staticClass: "logo",
                attrs: {
                  src: _vm.$getImage(_vm.config.app_logo),
                  alt: _vm.config.app_name
                }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.config.app_logo
            ? _c("b", { staticClass: "auth-logo-text" }, [
                _vm._v(_vm._s(_vm.config.app_name))
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("h1", [
            _vm._v(_vm._s(_vm.$t("page_forgotten_password.pass_reseted_title")))
          ]),
          _vm._v(" "),
          _c("h2", [
            _vm._v(
              _vm._s(_vm.$t("page_forgotten_password.pass_reseted_subtitle"))
            )
          ]),
          _vm._v(" "),
          _c(
            "router-link",
            { attrs: { to: { name: "SignIn" } } },
            [
              _c("AuthButton", {
                attrs: {
                  icon: "chevron-right",
                  text: _vm.$t("page_forgotten_password.pass_reseted_signin")
                }
              })
            ],
            1
          )
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

/***/ "./resources/js/views/Auth/CreateNewPassword.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Auth/CreateNewPassword.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true& */ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true&");
/* harmony import */ var _CreateNewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateNewPassword.vue?vue&type=script&lang=js& */ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& */ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _CreateNewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "287890d7",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Auth/CreateNewPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=style&index=0&id=287890d7&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_style_index_0_id_287890d7_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Auth/CreateNewPassword.vue?vue&type=template&id=287890d7&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CreateNewPassword_vue_vue_type_template_id_287890d7_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);