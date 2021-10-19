(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/upgrade-billing"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ColorLabel',
  props: ['color']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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
  name: 'FormLabel',
  components: {
    Edit2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["Edit2Icon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/PlanPricingTables */ "./resources/js/components/Others/PlanPricingTables.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Others_ColorLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/ColorLabel */ "./resources/js/components/Others/ColorLabel.vue");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_15__);


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















var stripe = undefined,
    card = undefined;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UpgradePlan',
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    PlanPricingTables: _components_Others_PlanPricingTables__WEBPACK_IMPORTED_MODULE_2__["default"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_11__["CreditCardIcon"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_9__["default"],
    ColorLabel: _components_Others_ColorLabel__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_12__["required"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_10__["default"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_13__["mapGetters"])(['requestedPlan', 'config', 'countries'])), {}, {
    billing: function billing() {
      return this.$store.getters.user.relationships.settings.data.attributes;
    },
    taxRates: function taxRates() {
      var _this = this;

      return this.requestedPlan.data.attributes.tax_rates.find(function (taxRate) {
        return taxRate.jurisdiction === _this.billing.billing_country;
      });
    }
  }),
  data: function data() {
    return {
      complete: false,
      stripeOptions: {
        hidePostalCode: false
      },
      isLoading: true,
      isSubmitted: false,
      PaymentMethods: undefined,
      defaultPaymentMethod: undefined,
      errorMessage: undefined,
      isError: false,
      payByNewCard: false,
      clientSecret: undefined
    };
  },
  methods: {
    initStripe: function initStripe() {
      stripe = Stripe(this.config.stripe_public_key);
      var elements = stripe.elements();
      card = elements.create('card');
      card.mount(this.$refs.stripeCard);
    },
    payByNewCardForm: function payByNewCardForm() {
      this.payByNewCard = true;
      this.isError = false;
    },
    successOrder: function successOrder() {
      // Update user data
      this.$store.dispatch('getAppData'); // Show toaster

      _bus__WEBPACK_IMPORTED_MODULE_14__["events"].$emit('toaster', {
        type: 'success',
        message: this.$t('toaster.account_upgraded')
      }); // Go to User page

      this.$router.push({
        name: 'Subscription'
      });
    },
    errorOrder: function errorOrder(error) {
      // Redirect user to confirmation payment page
      if (error.response.status === 402) {
        window.location.href = error.response.data.message;
      } // Show user error message


      if (error.response.status === 400) {
        this.isError = true;
        this.errorMessage = error.response.data.message;
      } // Show server error


      if (error.response.status === 500) {
        this.isError = true;
        this.errorMessage = error.response.data.message;
        _bus__WEBPACK_IMPORTED_MODULE_14__["events"].$emit('alert:open', {
          title: this.$t('popup_error.title'),
          message: this.$t('popup_error.message')
        });
      }
    },
    submitOrder: function submitOrder() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid, _yield$stripe$confirm, setupIntent, error;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this2.$refs.order.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                // Remove error
                _this2.isError = false; // Start loading

                _this2.isSubmitted = true; // If user don't have credit card, register new

                if (!(!_this2.defaultPaymentMethod || _this2.payByNewCard)) {
                  _context.next = 14;
                  break;
                }

                _context.next = 10;
                return stripe.confirmCardSetup(_this2.clientSecret, {
                  payment_method: {
                    card: card
                  }
                });

              case 10:
                _yield$stripe$confirm = _context.sent;
                setupIntent = _yield$stripe$confirm.setupIntent;
                error = _yield$stripe$confirm.error;

                if (error) {
                  // Set error on
                  _this2.isError = true; // End button spinner

                  _this2.isSubmitted = false; // Show error message

                  _this2.errorMessage = error.message;
                } else {
                  axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('/api/subscription/upgrade', {
                    billing: _this2.billing,
                    plan: _this2.requestedPlan,
                    payment: {
                      type: 'stripe',
                      meta: {
                        pm: setupIntent.payment_method
                      }
                    }
                  }).then(function () {
                    return _this2.successOrder();
                  })["catch"](function (error) {
                    return _this2.errorOrder(error);
                  })["finally"](function () {
                    _this2.isSubmitted = false;
                  });
                }

              case 14:
                // if user has credit card
                if (_this2.defaultPaymentMethod && !_this2.payByNewCard) {
                  axios__WEBPACK_IMPORTED_MODULE_15___default.a.post('/api/subscription/upgrade', {
                    billing: _this2.billing,
                    plan: _this2.requestedPlan,
                    payment: {
                      type: 'stripe'
                    }
                  }).then(function () {
                    return _this2.successOrder();
                  })["catch"](function (error) {
                    return _this2.errorOrder(error);
                  })["finally"](function () {
                    _this2.isSubmitted = false;
                  });
                }

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  },
  mounted: function mounted() {
    if (!this.requestedPlan) {
      this.$router.push({
        name: 'UpgradePlan'
      });
    } else {
      this.initStripe();
    }
  },
  created: function created() {
    var _this3 = this;

    // Get setup intent for stripe
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/api/stripe/setup-intent').then(function (response) {
      _this3.clientSecret = response.data.client_secret;
    })["catch"](function () {
      return _this3.$isSomethingWrong();
    });
    axios__WEBPACK_IMPORTED_MODULE_15___default.a.get('/api/user/payments').then(function (response) {
      _this3.defaultPaymentMethod = response.data["default"];
      _this3.PaymentMethods = response.data.others;
    })["catch"](function () {
      return _this3.$isSomethingWrong();
    })["finally"](function () {
      _this3.isLoading = false;
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".color-label[data-v-c96acb7c] {\n  text-transform: capitalize;\n  font-size: 0.75em;\n  display: inline-block;\n  border-radius: 6px;\n  font-weight: 700;\n  padding: 4px 6px;\n}\n.color-label.purple[data-v-c96acb7c] {\n  color: #9D66FE;\n  background: rgba(157, 102, 254, 0.1);\n}\n.color-label.yellow[data-v-c96acb7c] {\n  color: #FFBD2D;\n  background: rgba(255, 189, 45, 0.1);\n}\n.color-label.green[data-v-c96acb7c] {\n  color: #00BC7E;\n  background: rgba(0, 188, 126, 0.1);\n}\n.color-label.red[data-v-c96acb7c] {\n  color: #fd397a;\n  background: rgba(253, 57, 122, 0.1);\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-label[data-v-1f1075ef] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n}\n.form-label .icon[data-v-1f1075ef] {\n  margin-right: 10px;\n}\n.form-label .icon path[data-v-1f1075ef] {\n  stroke: #00BC7E;\n}\n.form-label .label[data-v-1f1075ef] {\n  font-size: 1.125em;\n  font-weight: 700;\n}\n@media (prefers-color-scheme: dark) {\n.form-label .label[data-v-1f1075ef] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-ea7a37de] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-ea7a37de] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-ea7a37de] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-ea7a37de] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-ea7a37de] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-ea7a37de] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-ea7a37de] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-ea7a37de] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-ea7a37de]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-ea7a37de] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-ea7a37de] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-ea7a37de] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-ea7a37de] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-ea7a37de] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-ea7a37de] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-ea7a37de] {\n  margin-left: 20px;\n}\n.error-message[data-v-ea7a37de] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-ea7a37de] {\n  width: 100%;\n}\ntextarea[data-v-ea7a37de],\ninput[type=\"password\"][data-v-ea7a37de],\ninput[type=\"text\"][data-v-ea7a37de],\ninput[type=\"number\"][data-v-ea7a37de],\ninput[type=\"email\"][data-v-ea7a37de] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-ea7a37de],\ninput[type=\"password\"].is-error[data-v-ea7a37de],\ninput[type=\"text\"].is-error[data-v-ea7a37de],\ninput[type=\"number\"].is-error[data-v-ea7a37de],\ninput[type=\"email\"].is-error[data-v-ea7a37de] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-ea7a37de]::-moz-placeholder, input[type=\"password\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"text\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"number\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"email\"][data-v-ea7a37de]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-ea7a37de]:-ms-input-placeholder, input[type=\"password\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"text\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"number\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"email\"][data-v-ea7a37de]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-ea7a37de]::placeholder,\ninput[type=\"password\"][data-v-ea7a37de]::placeholder,\ninput[type=\"text\"][data-v-ea7a37de]::placeholder,\ninput[type=\"number\"][data-v-ea7a37de]::placeholder,\ninput[type=\"email\"][data-v-ea7a37de]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-ea7a37de]:focus,\ninput[type=\"password\"][data-v-ea7a37de]:focus,\ninput[type=\"text\"][data-v-ea7a37de]:focus,\ninput[type=\"number\"][data-v-ea7a37de]:focus,\ninput[type=\"email\"][data-v-ea7a37de]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-ea7a37de],\ninput[type=\"password\"][disabled][data-v-ea7a37de],\ninput[type=\"text\"][disabled][data-v-ea7a37de],\ninput[type=\"number\"][disabled][data-v-ea7a37de],\ninput[type=\"email\"][disabled][data-v-ea7a37de] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-ea7a37de] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-ea7a37de], .additional-link a[data-v-ea7a37de] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-ea7a37de]:hover, .additional-link a[data-v-ea7a37de]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-ea7a37de] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-ea7a37de] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-ea7a37de], .form textarea[data-v-ea7a37de] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-ea7a37de] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-ea7a37de] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-ea7a37de] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-ea7a37de] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-ea7a37de] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-ea7a37de] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-ea7a37de] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-ea7a37de] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-ea7a37de],\n  input[type=\"password\"][data-v-ea7a37de],\n  input[type=\"number\"][data-v-ea7a37de],\n  input[type=\"text\"][data-v-ea7a37de],\n  input[type=\"email\"][data-v-ea7a37de] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-ea7a37de] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-ea7a37de] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-ea7a37de] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-ea7a37de] {\n    color: #bec6cf;\n}\ntextarea[data-v-ea7a37de],\n  input[type=\"password\"][data-v-ea7a37de],\n  input[type=\"text\"][data-v-ea7a37de],\n  input[type=\"number\"][data-v-ea7a37de],\n  input[type=\"email\"][data-v-ea7a37de] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-ea7a37de]::-moz-placeholder, input[type=\"password\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"text\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"number\"][data-v-ea7a37de]::-moz-placeholder, input[type=\"email\"][data-v-ea7a37de]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ea7a37de]:-ms-input-placeholder, input[type=\"password\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"text\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"number\"][data-v-ea7a37de]:-ms-input-placeholder, input[type=\"email\"][data-v-ea7a37de]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-ea7a37de]::placeholder,\n  input[type=\"password\"][data-v-ea7a37de]::placeholder,\n  input[type=\"text\"][data-v-ea7a37de]::placeholder,\n  input[type=\"number\"][data-v-ea7a37de]::placeholder,\n  input[type=\"email\"][data-v-ea7a37de]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-ea7a37de],\n  input[type=\"password\"][disabled][data-v-ea7a37de],\n  input[type=\"text\"][disabled][data-v-ea7a37de],\n  input[type=\"number\"][disabled][data-v-ea7a37de],\n  input[type=\"email\"][disabled][data-v-ea7a37de] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.change-payment[data-v-ea7a37de] {\n  padding-top: 10px;\n}\n.change-payment span[data-v-ea7a37de] {\n  font-weight: 600;\n}\n.change-payment a[data-v-ea7a37de] {\n  cursor: pointer;\n  font-weight: 700;\n}\n.change-payment a[data-v-ea7a37de]:hover {\n  text-decoration: underline;\n}\n.change-payment span[data-v-ea7a37de], .change-payment a[data-v-ea7a37de] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.875em;\n}\n.card-error-message[data-v-ea7a37de] {\n  padding-top: 10px;\n}\n.card-error-message span[data-v-ea7a37de], .card-error-message a[data-v-ea7a37de] {\n  font-size: 0.875em;\n  font-weight: 600;\n  color: #fd397a;\n}\n.card-error-message .link[data-v-ea7a37de], .card-error-message a[data-v-ea7a37de] {\n  text-decoration: underline;\n  cursor: pointer;\n}\n.card-error-message .link[data-v-ea7a37de]:hover, .card-error-message a[data-v-ea7a37de]:hover {\n  text-decoration: none;\n}\n.registered-cards[data-v-ea7a37de] {\n  margin-bottom: 50px;\n}\n.register-card[data-v-ea7a37de] {\n  margin-bottom: 55px;\n}\n.credit-card[data-v-ea7a37de] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 15px;\n  background: #f4f5f6;\n  border-radius: 8px;\n  margin-top: 20px;\n}\n.credit-card.is-error[data-v-ea7a37de] {\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n  border: 2px solid #fd397a;\n  border-radius: 4px;\n}\n.credit-card span[data-v-ea7a37de] {\n  font-weight: 700;\n}\n.credit-card .card-number[data-v-ea7a37de] {\n  display: flex;\n}\n.credit-card .credit-card-numbers[data-v-ea7a37de] {\n  vertical-align: middle;\n  margin-right: 10px;\n}\n.credit-card .credit-card-icon[data-v-ea7a37de] {\n  vertical-align: middle;\n  max-height: 20px;\n  margin-right: 8px;\n}\n.stripe-card[data-v-ea7a37de] {\n  box-sizing: border-box;\n  padding: 13px 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  background-color: white;\n  box-shadow: 0 1px 3px 0 #e6ebf1;\n  transition: box-shadow 150ms ease;\n}\n.stripe-card.is-error[data-v-ea7a37de] {\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n  border: 2px solid #fd397a;\n  border-radius: 4px;\n}\n.stripe-card.StripeElement--focus[data-v-ea7a37de] {\n  box-shadow: 0 1px 3px 0 #cfd7df;\n}\n.stripe-card.StripeElement--invalid[data-v-ea7a37de] {\n  border-color: #fa755a;\n}\n.stripe-card.StripeElement--webkit-autofill[data-v-ea7a37de] {\n  background-color: #fefde5 !important;\n}\n.stripe-card iframe .InputContainer .InputElement[data-v-ea7a37de] {\n  color: white;\n}\n.summary-list[data-v-ea7a37de] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.06);\n  border-radius: 8px;\n  position: -webkit-sticky;\n  position: sticky;\n  padding: 25px;\n  top: 30px;\n}\n.summary-list.is-error[data-v-ea7a37de] {\n  border: 2px solid #fd397a;\n  box-shadow: 0 7px 20px 5px rgba(253, 57, 122, 0.06);\n}\n.summary-list .error-message[data-v-ea7a37de] {\n  font-weight: 600;\n}\n.summary-list .next-submit[data-v-ea7a37de] {\n  width: 100%;\n  margin-top: 20px;\n}\n.summary-list .disclaimer[data-v-ea7a37de] {\n  font-size: 0.75em;\n  line-height: 1.6;\n  display: block;\n  margin-top: 12px;\n}\n.summary-list .row[data-v-ea7a37de] {\n  display: flex;\n  justify-content: space-between;\n  padding: 15px 0;\n}\n.summary-list .row[data-v-ea7a37de]:first-child {\n  padding-top: 0;\n}\n.summary-list .row[data-v-ea7a37de]:last-of-type {\n  border-top: 1px solid #F8F8F8;\n  padding-bottom: 0;\n}\n.summary-list .row:last-of-type b[data-v-ea7a37de] {\n  font-weight: 800;\n}\n.summary-list .cell b[data-v-ea7a37de] {\n  display: block;\n  font-size: 1.125em;\n}\n.summary-list .cell small[data-v-ea7a37de] {\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 0.75em;\n}\n.order[data-v-ea7a37de] {\n  display: flex;\n  margin-bottom: 30px;\n}\n.order .steps[data-v-ea7a37de] {\n  flex: 0 0 65%;\n  padding-right: 30px;\n}\n.order .steps .form[data-v-ea7a37de] {\n  max-width: 100%;\n}\n.order .summary[data-v-ea7a37de] {\n  flex: 0 0 34%;\n}\n.plan-title[data-v-ea7a37de] {\n  text-align: center;\n  max-width: 600px;\n  margin: 0 auto 80px;\n}\n.plan-title path[data-v-ea7a37de], .plan-title line[data-v-ea7a37de], .plan-title polyline[data-v-ea7a37de], .plan-title rect[data-v-ea7a37de], .plan-title circle[data-v-ea7a37de] {\n  color: #00BC7E;\n}\n.plan-title h1[data-v-ea7a37de] {\n  font-size: 2.375em;\n  font-weight: 800;\n  margin-bottom: 5px;\n}\n.plan-title h2[data-v-ea7a37de] {\n  font-size: 1.25em;\n  font-weight: 500;\n}\n@media (prefers-color-scheme: dark) {\n.plan-title h1[data-v-ea7a37de] {\n    color: #bec6cf;\n}\n.plan-title h2[data-v-ea7a37de] {\n    color: #7d858c;\n}\n.credit-card[data-v-ea7a37de] {\n    background: #1e2024;\n}\n.credit-card span[data-v-ea7a37de], .credit-card .credit-card-numbers[data-v-ea7a37de] {\n    color: #bec6cf;\n}\n.change-payment span[data-v-ea7a37de] {\n    color: #7d858c;\n}\n.change-payment a[data-v-ea7a37de] {\n    color: #00BC7E;\n}\n.summary-list[data-v-ea7a37de] {\n    background: #1e2024;\n}\n.summary-list .disclaimer[data-v-ea7a37de] {\n    color: #7d858c;\n}\n.summary-list .row[data-v-ea7a37de]:last-of-type {\n    border-top: 1px solid rgba(255, 255, 255, 0.02);\n}\n.summary-list .row:last-of-type b[data-v-ea7a37de] {\n    color: #bec6cf;\n}\n.summary-list .cell b[data-v-ea7a37de] {\n    color: #bec6cf;\n}\n.summary-list .cell small[data-v-ea7a37de] {\n    color: #7d858c;\n}\n.stripe-card[data-v-ea7a37de] {\n    border: 1px solid transparent;\n    box-shadow: none;\n}\n.stripe-card.StripeElement--webkit-autofill[data-v-ea7a37de] {\n    background-color: #1e2024 !important;\n}\n.stripe-card.StripeElement--focus[data-v-ea7a37de] {\n    box-shadow: none;\n    border-color: #00BC7E;\n    box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\n}\n@media only screen and (max-width: 960px) {\n.order[data-v-ea7a37de] {\n    display: block;\n}\n.order .steps[data-v-ea7a37de] {\n    margin-bottom: 70px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& ***!
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
    "b",
    { staticClass: "color-label", class: _vm.color },
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "form-label" },
    [
      _c("edit-2-icon", { staticClass: "icon", attrs: { size: "22" } }),
      _vm._v(" "),
      _c("b", { staticClass: "label" }, [_vm._t("default")], 2)
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true& ***!
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
  return _c("div", { attrs: { id: "single-page" } }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.isLoading,
            expression: "! isLoading"
          }
        ],
        staticClass: "large-width center-page",
        attrs: { id: "page-content" }
      },
      [
        _c("MobileHeader", {
          attrs: { title: _vm.$t(_vm.$router.currentRoute.meta.title) }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "content-page" }, [
          _c(
            "div",
            { staticClass: "plan-title" },
            [
              _c("credit-card-icon", {
                staticClass: "title-icon",
                attrs: { size: "42" }
              }),
              _vm._v(" "),
              _c("h1", [_vm._v(_vm._s(_vm.$t("page_upgrade_account.title")))]),
              _vm._v(" "),
              _c("h2", [
                _vm._v(_vm._s(_vm.$t("page_upgrade_account.desription")))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("div", { staticClass: "order" }, [
            _c("div", { staticClass: "steps" }, [
              _c(
                "div",
                { staticClass: "payment-card" },
                [
                  _c("FormLabel", [
                    _vm._v(_vm._s(_vm.$t("page_upgrade_account.section_card")))
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value: !_vm.defaultPaymentMethod || _vm.payByNewCard,
                          expression: "! defaultPaymentMethod || payByNewCard"
                        }
                      ],
                      staticClass: "register-card"
                    },
                    [
                      _vm.config.isDemo
                        ? _c("InfoBox", [
                            _c("p", [
                              _vm._v("For test your payment please use "),
                              _c("b", [_vm._v("4242 4242 4242 4242")]),
                              _vm._v(" or "),
                              _c("b", [_vm._v("5555 5555 5555 4444")]),
                              _vm._v(" as a card number, "),
                              _c("b", [_vm._v("11/22")]),
                              _vm._v(
                                "\n                                    as the expiration date and "
                              ),
                              _c("b", [_vm._v("123")]),
                              _vm._v(" as CVC number and ZIP "),
                              _c("b", [_vm._v("12345")]),
                              _vm._v(".")
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      _c("div", {
                        ref: "stripeCard",
                        staticClass: "stripe-card",
                        class: { "is-error": _vm.isError }
                      }),
                      _vm._v(" "),
                      _vm.isError
                        ? _c("div", { staticClass: "card-error-message" }, [
                            _c("span", [_vm._v(_vm._s(_vm.errorMessage))])
                          ])
                        : _vm._e()
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.defaultPaymentMethod && !_vm.payByNewCard
                    ? _c("div", { staticClass: "registered-cards" }, [
                        _c(
                          "div",
                          {
                            staticClass: "credit-card",
                            class: { "is-error": _vm.isError }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "card-number" },
                              [
                                _c("img", {
                                  staticClass: "credit-card-icon",
                                  attrs: {
                                    src: _vm.$getCreditCardBrand(
                                      _vm.defaultPaymentMethod.data.attributes
                                        .brand
                                    ),
                                    alt:
                                      _vm.defaultPaymentMethod.data.attributes
                                        .brand
                                  }
                                }),
                                _vm._v(" "),
                                _c(
                                  "div",
                                  { staticClass: "credit-card-numbers" },
                                  [
                                    _vm._v(
                                      "\n                                        •••• " +
                                        _vm._s(
                                          _vm.defaultPaymentMethod.data
                                            .attributes.last4
                                        ) +
                                        "\n                                    "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c(
                                  "ColorLabel",
                                  { attrs: { color: "purple" } },
                                  [_vm._v(_vm._s(_vm.$t("global.default")))]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "expiration-date" }, [
                              _c("span", [
                                _vm._v(
                                  _vm._s(
                                    _vm.defaultPaymentMethod.data.attributes
                                      .exp_month
                                  ) +
                                    " / " +
                                    _vm._s(
                                      _vm.defaultPaymentMethod.data.attributes
                                        .exp_year
                                    )
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        !_vm.isError
                          ? _c(
                              "div",
                              { staticClass: "change-payment" },
                              [
                                _c("span", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.$t(
                                          "page_upgrade_account.change_payment.you_can"
                                        )
                                      ) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _vm.PaymentMethods.data.length > 0
                                  ? _c(
                                      "router-link",
                                      {
                                        attrs: {
                                          to: { name: "PaymentMethods" }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                    " +
                                            _vm._s(
                                              _vm.$t(
                                                "page_upgrade_account.change_payment.change_payment"
                                              )
                                            ) +
                                            "\n                                "
                                        )
                                      ]
                                    )
                                  : _vm._e(),
                                _vm._v(" "),
                                _vm.PaymentMethods.data.length > 0
                                  ? _c("span", [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(_vm.$t("global.or")) +
                                          "\n                                "
                                      )
                                    ])
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { on: { click: _vm.payByNewCardForm } },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "page_upgrade_account.change_payment.pay_by_new_card"
                                          )
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.isError
                          ? _c(
                              "div",
                              { staticClass: "card-error-message" },
                              [
                                _c("span", [_vm._v(_vm._s(_vm.errorMessage))]),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  {
                                    staticClass: "link",
                                    on: { click: _vm.payByNewCardForm }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "page_upgrade_account.errors.pay_by_another_card"
                                          )
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("span", [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.$t("global.or")) +
                                      "\n                                "
                                  )
                                ]),
                                _vm._v(" "),
                                _c(
                                  "router-link",
                                  {
                                    staticClass: "link",
                                    attrs: { to: { name: "PaymentMethods" } }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                    " +
                                        _vm._s(
                                          _vm.$t(
                                            "page_upgrade_account.change_payment.change_payment"
                                          )
                                        ) +
                                        "\n                                "
                                    )
                                  ]
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ])
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.billing
                ? _c(
                    "div",
                    { staticClass: "billing" },
                    [
                      _c("FormLabel", [
                        _vm._v(
                          _vm._s(_vm.$t("page_upgrade_account.section_billing"))
                        )
                      ]),
                      _vm._v(" "),
                      _c("ValidationObserver", {
                        ref: "order",
                        staticClass: "form block-form",
                        attrs: { tag: "form" },
                        scopedSlots: _vm._u(
                          [
                            {
                              key: "default",
                              fn: function(ref) {
                                var invalid = ref.invalid
                                return [
                                  _c(
                                    "div",
                                    { staticClass: "form block-form" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("user_settings.name")
                                              ) + ":"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              rules: "required",
                                              name: "billing_name"
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
                                                              _vm.billing
                                                                .billing_name,
                                                            expression:
                                                              "billing.billing_name"
                                                          }
                                                        ],
                                                        class: {
                                                          "is-error": errors[0]
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "user_settings.name_plac"
                                                          ),
                                                          type: "text"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.billing
                                                              .billing_name
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.billing,
                                                              "billing_name",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
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
                                                _vm.$t("user_settings.address")
                                              ) + ":"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              rules: "required",
                                              name: "billing_address"
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
                                                              _vm.billing
                                                                .billing_address,
                                                            expression:
                                                              "billing.billing_address"
                                                          }
                                                        ],
                                                        class: {
                                                          "is-error": errors[0]
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "user_settings.address_plac"
                                                          ),
                                                          type: "text"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.billing
                                                              .billing_address
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.billing,
                                                              "billing_address",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
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
                                        { staticClass: "wrapper-inline" },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "block-wrapper" },
                                            [
                                              _c("label", [
                                                _vm._v(
                                                  _vm._s(
                                                    _vm.$t("user_settings.city")
                                                  ) + ":"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                staticClass: "input-wrapper",
                                                attrs: {
                                                  tag: "div",
                                                  mode: "passive",
                                                  rules: "required",
                                                  name: "billing_city"
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.billing
                                                                    .billing_city,
                                                                expression:
                                                                  "billing.billing_city"
                                                              }
                                                            ],
                                                            class: {
                                                              "is-error":
                                                                errors[0]
                                                            },
                                                            attrs: {
                                                              placeholder: _vm.$t(
                                                                "user_settings.city_plac"
                                                              ),
                                                              type: "text"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.billing
                                                                  .billing_city
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.billing,
                                                                  "billing_city",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          errors[0]
                                                            ? _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "error-message"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
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
                                                    _vm.$t(
                                                      "user_settings.postal_code"
                                                    )
                                                  ) + ":"
                                                )
                                              ]),
                                              _vm._v(" "),
                                              _c("ValidationProvider", {
                                                staticClass: "input-wrapper",
                                                attrs: {
                                                  tag: "div",
                                                  mode: "passive",
                                                  rules: "required",
                                                  name: "billing_postal_code"
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
                                                                rawName:
                                                                  "v-model",
                                                                value:
                                                                  _vm.billing
                                                                    .billing_postal_code,
                                                                expression:
                                                                  "billing.billing_postal_code"
                                                              }
                                                            ],
                                                            class: {
                                                              "is-error":
                                                                errors[0]
                                                            },
                                                            attrs: {
                                                              placeholder: _vm.$t(
                                                                "user_settings.postal_code_plac"
                                                              ),
                                                              type: "text"
                                                            },
                                                            domProps: {
                                                              value:
                                                                _vm.billing
                                                                  .billing_postal_code
                                                            },
                                                            on: {
                                                              input: function(
                                                                $event
                                                              ) {
                                                                if (
                                                                  $event.target
                                                                    .composing
                                                                ) {
                                                                  return
                                                                }
                                                                _vm.$set(
                                                                  _vm.billing,
                                                                  "billing_postal_code",
                                                                  $event.target
                                                                    .value
                                                                )
                                                              }
                                                            }
                                                          }),
                                                          _vm._v(" "),
                                                          errors[0]
                                                            ? _c(
                                                                "span",
                                                                {
                                                                  staticClass:
                                                                    "error-message"
                                                                },
                                                                [
                                                                  _vm._v(
                                                                    _vm._s(
                                                                      errors[0]
                                                                    )
                                                                  )
                                                                ]
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
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "block-wrapper" },
                                        [
                                          _c("label", [
                                            _vm._v(
                                              _vm._s(
                                                _vm.$t("user_settings.country")
                                              ) + ":"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              rules: "required",
                                              name: "billing_country"
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "default",
                                                  fn: function(ref) {
                                                    var errors = ref.errors
                                                    return [
                                                      _c("SelectInput", {
                                                        attrs: {
                                                          default:
                                                            _vm.billing
                                                              .billing_country,
                                                          options:
                                                            _vm.countries,
                                                          placeholder: _vm.$t(
                                                            "user_settings.country_plac"
                                                          ),
                                                          isError: errors[0]
                                                        },
                                                        model: {
                                                          value:
                                                            _vm.billing
                                                              .billing_country,
                                                          callback: function(
                                                            $$v
                                                          ) {
                                                            _vm.$set(
                                                              _vm.billing,
                                                              "billing_country",
                                                              $$v
                                                            )
                                                          },
                                                          expression:
                                                            "billing.billing_country"
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
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
                                                _vm.$t("user_settings.state")
                                              ) + ":"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              rules: "required",
                                              name: "billing_state"
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
                                                              _vm.billing
                                                                .billing_state,
                                                            expression:
                                                              "billing.billing_state"
                                                          }
                                                        ],
                                                        class: {
                                                          "is-error": errors[0]
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "user_settings.state_plac"
                                                          ),
                                                          type: "text"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.billing
                                                              .billing_state
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.billing,
                                                              "billing_state",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      _c(
                                                        "small",
                                                        {
                                                          staticClass:
                                                            "input-help"
                                                        },
                                                        [
                                                          _vm._v(
                                                            "\n                                            State, county, province, or region.\n                                        "
                                                          )
                                                        ]
                                                      ),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
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
                                                _vm.$t(
                                                  "user_settings.phone_number"
                                                )
                                              ) + ":"
                                            )
                                          ]),
                                          _vm._v(" "),
                                          _c("ValidationProvider", {
                                            staticClass: "input-wrapper",
                                            attrs: {
                                              tag: "div",
                                              mode: "passive",
                                              rules: "required",
                                              name: "billing_phone_number"
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
                                                              _vm.billing
                                                                .billing_phone_number,
                                                            expression:
                                                              "billing.billing_phone_number"
                                                          }
                                                        ],
                                                        class: {
                                                          "is-error": errors[0]
                                                        },
                                                        attrs: {
                                                          placeholder: _vm.$t(
                                                            "user_settings.phone_number_plac"
                                                          ),
                                                          type: "text"
                                                        },
                                                        domProps: {
                                                          value:
                                                            _vm.billing
                                                              .billing_phone_number
                                                        },
                                                        on: {
                                                          input: function(
                                                            $event
                                                          ) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm.billing,
                                                              "billing_phone_number",
                                                              $event.target
                                                                .value
                                                            )
                                                          }
                                                        }
                                                      }),
                                                      _vm._v(" "),
                                                      errors[0]
                                                        ? _c(
                                                            "span",
                                                            {
                                                              staticClass:
                                                                "error-message"
                                                            },
                                                            [
                                                              _vm._v(
                                                                _vm._s(
                                                                  errors[0]
                                                                )
                                                              )
                                                            ]
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
                                      )
                                    ]
                                  )
                                ]
                              }
                            }
                          ],
                          null,
                          false,
                          2994122159
                        )
                      })
                    ],
                    1
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "summary" },
              [
                _c("FormLabel", [
                  _vm._v(_vm._s(_vm.$t("page_upgrade_account.section_summary")))
                ]),
                _vm._v(" "),
                _vm.requestedPlan
                  ? _c(
                      "div",
                      {
                        staticClass: "summary-list",
                        class: { "is-error": _vm.isError }
                      },
                      [
                        _c("div", { staticClass: "row" }, [
                          _c("div", { staticClass: "cell" }, [
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.requestedPlan.data.attributes.name)
                              )
                            ]),
                            _vm._v(" "),
                            _c("small", [
                              _vm._v(
                                _vm._s(
                                  _vm.$t("page_upgrade_account.summary.period")
                                )
                              )
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "cell" }, [
                            _c("b", [
                              _vm._v(
                                _vm._s(_vm.requestedPlan.data.attributes.price)
                              )
                            ])
                          ])
                        ]),
                        _vm._v(" "),
                        _vm.taxRates
                          ? _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t("page_upgrade_account.summary.vat")
                                    ) +
                                      " - (" +
                                      _vm._s(_vm.taxRates.jurisdiction) +
                                      " " +
                                      _vm._s(_vm.taxRates.percentage) +
                                      "%)"
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(
                                    _vm._s(_vm.taxRates.plan_price_formatted)
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        !_vm.taxRates
                          ? _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(_vm._s(_vm.$t("global.total")))
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.requestedPlan.data.attributes.price
                                    )
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.taxRates
                          ? _c("div", { staticClass: "row" }, [
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.$t(
                                        "page_upgrade_account.summary.total_with_vat"
                                      )
                                    )
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "cell" }, [
                                _c("b", [
                                  _vm._v(
                                    _vm._s(_vm.taxRates.plan_price_formatted)
                                  )
                                ])
                              ])
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "ButtonBase",
                          {
                            staticClass: "next-submit",
                            attrs: {
                              disabled: _vm.isSubmitted,
                              loading: _vm.isSubmitted,
                              type: "submit",
                              "button-style": "theme-solid"
                            },
                            nativeOn: {
                              click: function($event) {
                                return _vm.submitOrder.apply(null, arguments)
                              }
                            }
                          },
                          [
                            _vm._v(
                              "\n                            " +
                                _vm._s(
                                  _vm.$t(
                                    "page_upgrade_account.summary.submit_button"
                                  )
                                ) +
                                "\n                        "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _vm.isError
                          ? _c("p", { staticClass: "error-message" }, [
                              _vm._v(_vm._s(_vm.errorMessage))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("small", { staticClass: "disclaimer" }, [
                          _vm._v(
                            "\n                            " +
                              _vm._s(
                                _vm.$t(
                                  "page_upgrade_account.summary.submit_disclaimer",
                                  { app: _vm.config.app_name }
                                )
                              ) +
                              "\n                        "
                          )
                        ])
                      ],
                      1
                    )
                  : _vm._e()
              ],
              1
            )
          ])
        ])
      ],
      1
    ),
    _vm._v(" "),
    _vm.isLoading
      ? _c("div", { attrs: { id: "loader" } }, [_c("Spinner")], 1)
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&");
/* harmony import */ var _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c96acb7c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/ColorLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=style&index=0&id=c96acb7c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_style_index_0_id_c96acb7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/ColorLabel.vue?vue&type=template&id=c96acb7c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorLabel_vue_vue_type_template_id_c96acb7c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue":
/*!************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony import */ var _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1f1075ef",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Forms/FormLabel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=style&index=0&id=1f1075ef&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_style_index_0_id_1f1075ef_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/FormLabel.vue?vue&type=template&id=1f1075ef&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FormLabel_vue_vue_type_template_id_1f1075ef_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeBilling.vue":
/*!*******************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeBilling.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true& */ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true&");
/* harmony import */ var _UpgradeBilling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UpgradeBilling.vue?vue&type=script&lang=js& */ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& */ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UpgradeBilling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ea7a37de",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Upgrade/UpgradeBilling.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeBilling.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=style&index=0&id=ea7a37de&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_style_index_0_id_ea7a37de_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Upgrade/UpgradeBilling.vue?vue&type=template&id=ea7a37de&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UpgradeBilling_vue_vue_type_template_id_ea7a37de_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);