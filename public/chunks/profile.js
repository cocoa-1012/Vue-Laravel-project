(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/profile"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Settings.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/Layout/PageTabGroup */ "./resources/js/components/Others/Layout/PageTabGroup.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/Layout/PageTab */ "./resources/js/components/Others/Layout/PageTab.vue");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_Others_ThemeLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/ThemeLabel */ "./resources/js/components/Others/ThemeLabel.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
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
  name: 'Settings',
  props: ['user'],
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    PageTabGroup: _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_7__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_5__["default"],
    ThemeLabel: _components_Others_ThemeLabel__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_3__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__["required"],
    PageTab: _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_10__["mapGetters"])(['config', 'countries', 'timezones'])),
  data: function data() {
    return {
      userInfo: undefined,
      billingInfo: undefined,
      userTimezone: undefined,
      isLoading: false
    };
  },
  methods: {
    changeUserName: function changeUserName() {
      this.$store.commit('UPDATE_NAME', this.userInfo.name);
      this.$updateText('/user/profile', 'name', this.userInfo.name);
    }
  },
  created: function created() {
    this.userTimezone = this.user.relationships.timezone.data.attributes.timezone;
    this.userInfo = {
      name: this.user.data.attributes.name,
      email: this.user.data.attributes.email
    };
    this.billingInfo = {
      billing_name: this.user.relationships.settings.data.attributes.billing_name,
      billing_address: this.user.relationships.settings.data.attributes.billing_address,
      billing_state: this.user.relationships.settings.data.attributes.billing_state,
      billing_city: this.user.relationships.settings.data.attributes.billing_city,
      billing_postal_code: this.user.relationships.settings.data.attributes.billing_postal_code,
      billing_country: this.user.relationships.settings.data.attributes.billing_country,
      billing_phone_number: this.user.relationships.settings.data.attributes.billing_phone_number
    };
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-d900e810] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-d900e810] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-d900e810] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-d900e810] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-d900e810] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-d900e810] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-d900e810] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-d900e810] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-d900e810]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-d900e810] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-d900e810] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-d900e810] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-d900e810] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-d900e810] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-d900e810] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-d900e810] {\n  margin-left: 20px;\n}\n.error-message[data-v-d900e810] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-d900e810] {\n  width: 100%;\n}\ntextarea[data-v-d900e810],\ninput[type=\"password\"][data-v-d900e810],\ninput[type=\"text\"][data-v-d900e810],\ninput[type=\"number\"][data-v-d900e810],\ninput[type=\"email\"][data-v-d900e810] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-d900e810],\ninput[type=\"password\"].is-error[data-v-d900e810],\ninput[type=\"text\"].is-error[data-v-d900e810],\ninput[type=\"number\"].is-error[data-v-d900e810],\ninput[type=\"email\"].is-error[data-v-d900e810] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-d900e810]::-moz-placeholder, input[type=\"password\"][data-v-d900e810]::-moz-placeholder, input[type=\"text\"][data-v-d900e810]::-moz-placeholder, input[type=\"number\"][data-v-d900e810]::-moz-placeholder, input[type=\"email\"][data-v-d900e810]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-d900e810]:-ms-input-placeholder, input[type=\"password\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"text\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"number\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"email\"][data-v-d900e810]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-d900e810]::placeholder,\ninput[type=\"password\"][data-v-d900e810]::placeholder,\ninput[type=\"text\"][data-v-d900e810]::placeholder,\ninput[type=\"number\"][data-v-d900e810]::placeholder,\ninput[type=\"email\"][data-v-d900e810]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-d900e810]:focus,\ninput[type=\"password\"][data-v-d900e810]:focus,\ninput[type=\"text\"][data-v-d900e810]:focus,\ninput[type=\"number\"][data-v-d900e810]:focus,\ninput[type=\"email\"][data-v-d900e810]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-d900e810],\ninput[type=\"password\"][disabled][data-v-d900e810],\ninput[type=\"text\"][disabled][data-v-d900e810],\ninput[type=\"number\"][disabled][data-v-d900e810],\ninput[type=\"email\"][disabled][data-v-d900e810] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-d900e810] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-d900e810], .additional-link a[data-v-d900e810] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-d900e810]:hover, .additional-link a[data-v-d900e810]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-d900e810] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-d900e810] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-d900e810], .form textarea[data-v-d900e810] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-d900e810] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-d900e810] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-d900e810] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-d900e810] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-d900e810] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-d900e810] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-d900e810] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-d900e810] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-d900e810],\n  input[type=\"password\"][data-v-d900e810],\n  input[type=\"number\"][data-v-d900e810],\n  input[type=\"text\"][data-v-d900e810],\n  input[type=\"email\"][data-v-d900e810] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-d900e810] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-d900e810] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-d900e810] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-d900e810] {\n    color: #bec6cf;\n}\ntextarea[data-v-d900e810],\n  input[type=\"password\"][data-v-d900e810],\n  input[type=\"text\"][data-v-d900e810],\n  input[type=\"number\"][data-v-d900e810],\n  input[type=\"email\"][data-v-d900e810] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-d900e810]::-moz-placeholder, input[type=\"password\"][data-v-d900e810]::-moz-placeholder, input[type=\"text\"][data-v-d900e810]::-moz-placeholder, input[type=\"number\"][data-v-d900e810]::-moz-placeholder, input[type=\"email\"][data-v-d900e810]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-d900e810]:-ms-input-placeholder, input[type=\"password\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"text\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"number\"][data-v-d900e810]:-ms-input-placeholder, input[type=\"email\"][data-v-d900e810]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-d900e810]::placeholder,\n  input[type=\"password\"][data-v-d900e810]::placeholder,\n  input[type=\"text\"][data-v-d900e810]::placeholder,\n  input[type=\"number\"][data-v-d900e810]::placeholder,\n  input[type=\"email\"][data-v-d900e810]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-d900e810],\n  input[type=\"password\"][disabled][data-v-d900e810],\n  input[type=\"text\"][disabled][data-v-d900e810],\n  input[type=\"number\"][disabled][data-v-d900e810],\n  input[type=\"email\"][disabled][data-v-d900e810] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-d900e810] {\n  max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
    "PageTab",
    [
      _vm.userInfo
        ? _c("PageTabGroup", [
            _c(
              "div",
              { staticClass: "form block-form" },
              [
                _c("FormLabel", [
                  _vm._v(_vm._s(_vm.$t("user_settings.title_account")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_email")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      attrs: {
                        placeholder: _vm.$t(
                          "page_registration.placeholder_email"
                        ),
                        type: "email",
                        disabled: ""
                      },
                      domProps: { value: _vm.userInfo.email }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("page_registration.label_name")))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.userInfo.name,
                          expression: "userInfo.name"
                        }
                      ],
                      attrs: {
                        placeholder: _vm.$t(
                          "page_registration.placeholder_name"
                        ),
                        type: "text"
                      },
                      domProps: { value: _vm.userInfo.name },
                      on: {
                        keyup: _vm.changeUserName,
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(_vm.userInfo, "name", $event.target.value)
                        }
                      }
                    })
                  ])
                ])
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.userInfo
        ? _c("PageTabGroup", [
            _c(
              "div",
              { staticClass: "form block-form" },
              [
                _c("FormLabel", [
                  _vm._v(_vm._s(_vm.$t("user_settings.timezone")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [_vm._v("GMT:")]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-wrapper" },
                    [
                      _c("SelectInput", {
                        attrs: {
                          default: _vm.userTimezone,
                          options: _vm.timezones,
                          placeholder: _vm.$t("user_settings.timezone_plac")
                        },
                        on: {
                          input: function($event) {
                            return _vm.$updateText(
                              "/user/relationships/settings",
                              "timezone",
                              _vm.userTimezone
                            )
                          }
                        },
                        model: {
                          value: _vm.userTimezone,
                          callback: function($$v) {
                            _vm.userTimezone = $$v
                          },
                          expression: "userTimezone"
                        }
                      })
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.config.isSaaS && _vm.billingInfo
        ? _c("PageTabGroup", [
            _c(
              "div",
              { staticClass: "form block-form" },
              [
                _c("FormLabel", [
                  _vm._v(_vm._s(_vm.$t("user_settings.title_billing")))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("user_settings.name")) + ":")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.billing_name,
                          expression: "billingInfo.billing_name"
                        }
                      ],
                      attrs: {
                        placeholder: _vm.$t("user_settings.name_plac"),
                        type: "text"
                      },
                      domProps: { value: _vm.billingInfo.billing_name },
                      on: {
                        keyup: function($event) {
                          return _vm.$updateText(
                            "/user/relationships/settings",
                            "billing_name",
                            _vm.billingInfo.billing_name
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.billingInfo,
                            "billing_name",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("user_settings.address")) + ":")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.billing_address,
                          expression: "billingInfo.billing_address"
                        }
                      ],
                      attrs: {
                        placeholder: _vm.$t("user_settings.address_plac"),
                        type: "text"
                      },
                      domProps: { value: _vm.billingInfo.billing_address },
                      on: {
                        keyup: function($event) {
                          return _vm.$updateText(
                            "/user/relationships/settings",
                            "billing_address",
                            _vm.billingInfo.billing_address
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.billingInfo,
                            "billing_address",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "wrapper-inline" }, [
                  _c("div", { staticClass: "block-wrapper" }, [
                    _c("label", [
                      _vm._v(_vm._s(_vm.$t("user_settings.city")) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-wrapper" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.billingInfo.billing_city,
                            expression: "billingInfo.billing_city"
                          }
                        ],
                        attrs: {
                          placeholder: _vm.$t("user_settings.city_plac"),
                          type: "text"
                        },
                        domProps: { value: _vm.billingInfo.billing_city },
                        on: {
                          keyup: function($event) {
                            return _vm.$updateText(
                              "/user/relationships/settings",
                              "billing_city",
                              _vm.billingInfo.billing_city
                            )
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.billingInfo,
                              "billing_city",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "block-wrapper" }, [
                    _c("label", [
                      _vm._v(_vm._s(_vm.$t("user_settings.postal_code")) + ":")
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "input-wrapper" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.billingInfo.billing_postal_code,
                            expression: "billingInfo.billing_postal_code"
                          }
                        ],
                        attrs: {
                          placeholder: _vm.$t("user_settings.postal_code_plac"),
                          type: "text"
                        },
                        domProps: {
                          value: _vm.billingInfo.billing_postal_code
                        },
                        on: {
                          keyup: function($event) {
                            return _vm.$updateText(
                              "/user/relationships/settings",
                              "billing_postal_code",
                              _vm.billingInfo.billing_postal_code
                            )
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.billingInfo,
                              "billing_postal_code",
                              $event.target.value
                            )
                          }
                        }
                      })
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("user_settings.country")) + ":")
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "input-wrapper" },
                    [
                      _c("SelectInput", {
                        attrs: {
                          default: _vm.billingInfo.billing_country,
                          options: _vm.countries,
                          placeholder: _vm.$t("user_settings.country_plac")
                        },
                        on: {
                          input: function($event) {
                            return _vm.$updateText(
                              "/user/relationships/settings",
                              "billing_country",
                              _vm.billingInfo.billing_country
                            )
                          }
                        },
                        model: {
                          value: _vm.billingInfo.billing_country,
                          callback: function($$v) {
                            _vm.$set(_vm.billingInfo, "billing_country", $$v)
                          },
                          expression: "billingInfo.billing_country"
                        }
                      })
                    ],
                    1
                  )
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("user_settings.state")) + ":")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.billing_state,
                          expression: "billingInfo.billing_state"
                        }
                      ],
                      attrs: {
                        placeholder: _vm.$t("user_settings.state_plac"),
                        type: "text"
                      },
                      domProps: { value: _vm.billingInfo.billing_state },
                      on: {
                        keyup: function($event) {
                          return _vm.$updateText(
                            "/user/relationships/settings",
                            "billing_state",
                            _vm.billingInfo.billing_state
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.billingInfo,
                            "billing_state",
                            $event.target.value
                          )
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c("small", { staticClass: "input-help" }, [
                      _vm._v(
                        "\n                        State, county, province, or region.\n                    "
                      )
                    ])
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "block-wrapper" }, [
                  _c("label", [
                    _vm._v(_vm._s(_vm.$t("user_settings.phone_number")) + ":")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-wrapper" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.billingInfo.billing_phone_number,
                          expression: "billingInfo.billing_phone_number"
                        }
                      ],
                      attrs: {
                        placeholder: _vm.$t("user_settings.phone_number_plac"),
                        type: "text"
                      },
                      domProps: { value: _vm.billingInfo.billing_phone_number },
                      on: {
                        keyup: function($event) {
                          return _vm.$updateText(
                            "/user/relationships/settings",
                            "billing_phone_number",
                            _vm.billingInfo.billing_phone_number
                          )
                        },
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.$set(
                            _vm.billingInfo,
                            "billing_phone_number",
                            $event.target.value
                          )
                        }
                      }
                    })
                  ])
                ])
              ],
              1
            )
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/User/Settings.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/User/Settings.vue ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Settings.vue?vue&type=template&id=d900e810&scoped=true& */ "./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true&");
/* harmony import */ var _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Settings.vue?vue&type=script&lang=js& */ "./resources/js/views/User/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& */ "./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d900e810",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/User/Settings.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/User/Settings.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/views/User/Settings.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=style&index=0&id=d900e810&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_style_index_0_id_d900e810_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Settings.vue?vue&type=template&id=d900e810&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/User/Settings.vue?vue&type=template&id=d900e810&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Settings_vue_vue_type_template_id_d900e810_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);