(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/subscription-service"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
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
  name: 'SubscriptionService',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_0__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__["ChevronRightIcon"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_4__["SettingsIcon"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_2__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_3__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_5__["required"]
  },
  data: function data() {
    return {
      isLoading: false
    };
  },
  created: function created() {
    this.$scrollTop();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-088605bc] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-088605bc] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-088605bc] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-088605bc] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-088605bc] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-088605bc]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-088605bc] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-088605bc] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-088605bc] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-088605bc] {\n  width: 100%;\n}\ntextarea[data-v-088605bc],\ninput[type=\"password\"][data-v-088605bc],\ninput[type=\"text\"][data-v-088605bc],\ninput[type=\"email\"][data-v-088605bc] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-088605bc],\ninput[type=\"password\"].is-error[data-v-088605bc],\ninput[type=\"text\"].is-error[data-v-088605bc],\ninput[type=\"email\"].is-error[data-v-088605bc] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-088605bc]::-moz-placeholder, input[type=\"password\"][data-v-088605bc]::-moz-placeholder, input[type=\"text\"][data-v-088605bc]::-moz-placeholder, input[type=\"email\"][data-v-088605bc]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-088605bc]:-ms-input-placeholder, input[type=\"password\"][data-v-088605bc]:-ms-input-placeholder, input[type=\"text\"][data-v-088605bc]:-ms-input-placeholder, input[type=\"email\"][data-v-088605bc]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-088605bc]::placeholder,\ninput[type=\"password\"][data-v-088605bc]::placeholder,\ninput[type=\"text\"][data-v-088605bc]::placeholder,\ninput[type=\"email\"][data-v-088605bc]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-088605bc]:focus,\ninput[type=\"password\"][data-v-088605bc]:focus,\ninput[type=\"text\"][data-v-088605bc]:focus,\ninput[type=\"email\"][data-v-088605bc]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-088605bc],\ninput[type=\"password\"][disabled][data-v-088605bc],\ninput[type=\"text\"][disabled][data-v-088605bc],\ninput[type=\"email\"][disabled][data-v-088605bc] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-088605bc] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-088605bc], .additional-link a[data-v-088605bc] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-088605bc]:hover, .additional-link a[data-v-088605bc]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-088605bc] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-088605bc], .form textarea[data-v-088605bc] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-088605bc] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-088605bc] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-088605bc] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-088605bc] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-088605bc] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-088605bc] {\n    padding: 14px 32px;\n}\ntextarea[data-v-088605bc],\n  input[type=\"password\"][data-v-088605bc],\n  input[type=\"text\"][data-v-088605bc],\n  input[type=\"email\"][data-v-088605bc] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-088605bc] {\n    color: #bec6cf;\n}\ntextarea[data-v-088605bc],\n  input[type=\"password\"][data-v-088605bc],\n  input[type=\"text\"][data-v-088605bc],\n  input[type=\"email\"][data-v-088605bc] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-088605bc]::-moz-placeholder, input[type=\"password\"][data-v-088605bc]::-moz-placeholder, input[type=\"text\"][data-v-088605bc]::-moz-placeholder, input[type=\"email\"][data-v-088605bc]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-088605bc]:-ms-input-placeholder, input[type=\"password\"][data-v-088605bc]:-ms-input-placeholder, input[type=\"text\"][data-v-088605bc]:-ms-input-placeholder, input[type=\"email\"][data-v-088605bc]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-088605bc]::placeholder,\n  input[type=\"password\"][data-v-088605bc]::placeholder,\n  input[type=\"text\"][data-v-088605bc]::placeholder,\n  input[type=\"email\"][data-v-088605bc]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-088605bc],\n  input[type=\"password\"][disabled][data-v-088605bc],\n  input[type=\"text\"][disabled][data-v-088605bc],\n  input[type=\"email\"][disabled][data-v-088605bc] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-088605bc] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-088605bc] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-088605bc] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-088605bc] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-088605bc] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-088605bc] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-088605bc] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-088605bc] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-088605bc] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-088605bc] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-088605bc] {\n    width: 100%;\n}\n.auth-form h1[data-v-088605bc] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-088605bc] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-088605bc] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-088605bc] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-088605bc] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-088605bc] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-088605bc], .auth-form h2[data-v-088605bc], .auth-form .additional-link[data-v-088605bc] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-088605bc] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-088605bc] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-088605bc] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-088605bc] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-088605bc] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-088605bc] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-088605bc] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-088605bc],\n.duplicator .duplicator-item textarea[data-v-088605bc] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-088605bc] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-088605bc] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-088605bc] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-088605bc] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-088605bc 5s linear infinite;\n          animation: spinner-data-v-088605bc 5s linear infinite;\n}\n.title-icon circle[data-v-088605bc], .title-icon path[data-v-088605bc] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-088605bc {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-088605bc {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-088605bc] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-088605bc],\n  .duplicator .duplicator-item textarea[data-v-088605bc] {\n    background: #131414;\n}\n}\n.services[data-v-088605bc] {\n  margin: 0 auto;\n}\n.service-card[data-v-088605bc] {\n  text-align: left;\n  box-shadow: 0 5px 30px 5px rgba(61, 78, 253, 0.25);\n  border-radius: 20px;\n  max-width: 415px;\n  display: inline-block;\n  padding: 30px;\n  background: #3a4bff;\n  background: linear-gradient(135deg, #3a4bff 0%, #6772e5 100%);\n  transition: 200ms all ease;\n}\n.service-card[data-v-088605bc]:hover {\n  cursor: pointer;\n  box-shadow: 0 8px 35px 5px rgba(61, 78, 253, 0.4);\n  transform: scale(1.02);\n}\n.service-card .service-logo[data-v-088605bc] {\n  margin-bottom: 30px;\n  display: block;\n}\n.service-card .service-content[data-v-088605bc] {\n  margin-bottom: 65px;\n}\n.service-card .service-content .service-title[data-v-088605bc] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: white;\n  margin-bottom: 5px;\n  display: block;\n}\n.service-card .service-content .service-description[data-v-088605bc] {\n  font-size: 1em;\n  font-weight: 600;\n  color: white;\n  opacity: 0.8;\n}\n.service-card .service-link[data-v-088605bc] {\n  display: flex;\n  align-items: center;\n}\n.service-card .service-link .icon[data-v-088605bc] {\n  margin-left: 5px;\n}\n.service-card .service-link .icon polyline[data-v-088605bc] {\n  stroke: white;\n}\n.service-card .service-link span[data-v-088605bc] {\n  font-size: 1em;\n  font-weight: 700;\n  color: white;\n}\n.skip-subscription-setup[data-v-088605bc] {\n  border: none !important;\n}\n.auth-form input[data-v-088605bc] {\n  min-width: 380px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { name: "subscription-service", visible: true } },
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
                  "You can charge users for storage space by monthly billing plans. Please, select your charging service or skip this step if you don't want charge users:"
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "services" },
            [
              _c(
                "router-link",
                {
                  staticClass: "service-card",
                  attrs: { to: { name: "StripeCredentials" }, tag: "div" }
                },
                [
                  _c("img", {
                    staticClass: "service-logo",
                    attrs: {
                      src: "/assets/icons/stripe-service.svg",
                      alt: "Stripe"
                    }
                  }),
                  _vm._v(" "),
                  _c("div", { staticClass: "service-content" }, [
                    _c("b", { staticClass: "service-title" }, [
                      _vm._v("Charging with Stripe")
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "service-description" }, [
                      _vm._v(
                        "You can create custom storage plans and charge your users with monthly subscription."
                      )
                    ])
                  ]),
                  _vm._v(" "),
                  _c(
                    "router-link",
                    {
                      staticClass: "service-link",
                      attrs: { to: { name: "StripeCredentials" } }
                    },
                    [
                      _c("span", [
                        _vm._v("Set Up Billing and Plans With Stripe")
                      ]),
                      _vm._v(" "),
                      _c("chevron-right-icon", {
                        staticClass: "icon",
                        attrs: { size: "22" }
                      })
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "p",
            { staticClass: "additional-link" },
            [
              _c(
                "router-link",
                { attrs: { to: { name: "EnvironmentSetup" } } },
                [
                  _c("AuthButton", {
                    staticClass: "skip-subscription-setup",
                    attrs: {
                      icon: "chevron-right",
                      text: "I will set up Stripe later"
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionService.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionService.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true& */ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true&");
/* harmony import */ var _SubscriptionService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubscriptionService.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubscriptionService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "088605bc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/SubscriptionService.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionService.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=style&index=0&id=088605bc&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_style_index_0_id_088605bc_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/SubscriptionService.vue?vue&type=template&id=088605bc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubscriptionService_vue_vue_type_template_id_088605bc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);