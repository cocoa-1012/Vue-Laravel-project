(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/environment-setup"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Auth/AuthContentWrapper */ "./resources/js/components/Auth/AuthContentWrapper.vue");
/* harmony import */ var _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SelectInput */ "./resources/js/components/Others/Forms/SelectInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'EnvironmentSetup',
  components: {
    AuthContentWrapper: _components_Auth_AuthContentWrapper__WEBPACK_IMPORTED_MODULE_2__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_8__["SettingsIcon"],
    SelectInput: _components_Others_Forms_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_6__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_7__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_9__["required"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_5__["default"]
  },
  watch: {
    'storage.driver': function storageDriver() {
      this.storage.region = '';
    },
    'storage.region': function storageRegion(val) {
      if (this.storage.driver === 'spaces') this.storage.endpoint = 'https://' + val + '.digitaloceanspaces.com';
      if (this.storage.driver === 'wasabi') this.storage.endpoint = 'https://s3.' + val + '.wasabisys.com';
      if (this.storage.driver === 'backblaze') this.storage.endpoint = 'https://s3.' + val + '.backblazeb2.com';
      if (this.storage.driver === 'oss') this.storage.endpoint = 'https://' + val + '.aliyuncs.com';
    }
  },
  computed: {
    regionList: function regionList() {
      switch (this.storage.driver) {
        case 's3':
          return this.s3Regions;
          break;

        case 'spaces':
          return this.digitalOceanRegions;
          break;

        case 'wasabi':
          return this.wasabiRegions;
          break;

        case 'backblaze':
          return this.backblazeRegions;
          break;

        case 'oss':
          return this.ossRegions;
          break;
      }
    }
  },
  data: function data() {
    return {
      isLoading: false,
      wasabiRegions: [{
        label: 'US East 1 (N. Virginia)',
        value: 'us-east-1'
      }, {
        label: 'US East 2 (N. Virginia)',
        value: 'us-east-2'
      }, {
        label: 'US West 1 (Oregon)',
        value: 'us-west-1'
      }, {
        label: 'EU Central 1 (Amsterdam)',
        value: 'eu-central-1'
      }],
      backblazeRegions: [{
        label: 'us-west-001',
        value: 'us-west-001'
      }, {
        label: 'us-west-002',
        value: 'us-west-002'
      }, {
        label: 'eu-central-003',
        value: 'eu-central-003'
      }],
      digitalOceanRegions: [{
        label: 'New York',
        value: 'nyc3'
      }, {
        label: 'San Francisco',
        value: 'sfo2'
      }, {
        label: 'Amsterdam',
        value: 'ams3'
      }, {
        label: 'Singapore',
        value: 'sgp1'
      }, {
        label: 'Frankfurt',
        value: 'fra1'
      }],
      ossRegions: [{
        label: 'China (Hangzhou)',
        value: 'oss-cn-hangzhou'
      }, {
        label: 'China (Shanghai)',
        value: 'oss-cn-shanghai'
      }, {
        label: 'China (Qingdao)',
        value: 'oss-cn-qingdao'
      }, {
        label: 'China (Beijing)',
        value: 'oss-cn-beijing'
      }, {
        label: 'China (Zhangjiakou)',
        value: 'oss-cn-zhangjiakou'
      }, {
        label: 'China (Hohhot)',
        value: 'oss-cn-huhehaote'
      }, {
        label: 'China (Ulanqab)',
        value: 'oss-cn-wulanchabu'
      }, {
        label: 'China (Shenzhen)',
        value: 'oss-cn-shenzhen'
      }, {
        label: 'China (Heyuan)',
        value: 'oss-cn-heyuan'
      }, {
        label: 'China (Guangzhou)',
        value: 'oss-cn-guangzhou'
      }, {
        label: 'China (Chengdu)',
        value: 'oss-cn-chengdu'
      }, {
        label: 'China (Hong Kong)',
        value: 'oss-cn-hongkong'
      }],
      s3Regions: [{
        label: 'us-east-1',
        value: 'us-east-1'
      }, {
        label: 'us-east-2',
        value: 'us-east-2'
      }, {
        label: 'us-west-1',
        value: 'us-west-1'
      }, {
        label: 'us-west-2',
        value: 'us-west-2'
      }, {
        label: 'af-south-1',
        value: 'af-south-1'
      }, {
        label: 'ap-east-1',
        value: 'ap-east-1'
      }, {
        label: 'ap-south-1',
        value: 'ap-south-1'
      }, {
        label: 'ap-northeast-2',
        value: 'ap-northeast-2'
      }, {
        label: 'ap-southeast-1',
        value: 'ap-southeast-1'
      }, {
        label: 'ap-southeast-2',
        value: 'ap-southeast-2'
      }, {
        label: 'ap-northeast-1',
        value: 'ap-northeast-1'
      }, {
        label: 'ca-central-1',
        value: 'ca-central-1'
      }, {
        label: 'eu-central-1',
        value: 'eu-central-1'
      }, {
        label: 'eu-west-1',
        value: 'eu-west-1'
      }, {
        label: 'eu-west-2',
        value: 'eu-west-2'
      }, {
        label: 'eu-south-1',
        value: 'eu-south-1'
      }, {
        label: 'eu-west-3',
        value: 'eu-west-3'
      }, {
        label: 'eu-north-1',
        value: 'eu-north-1'
      }, {
        label: 'me-south-1',
        value: 'me-south-1'
      }, {
        label: 'sa-east-1',
        value: 'sa-east-1'
      }],
      storageServiceList: [{
        label: 'Local Driver',
        value: 'local'
      }, {
        label: 'Amazon Web Services S3',
        value: 's3'
      }, {
        label: 'Digital Ocean Spaces',
        value: 'spaces'
      }, {
        label: 'Object Cloud Storage by Wasabi',
        value: 'wasabi'
      }, {
        label: 'Backblaze B2 Cloud Storage',
        value: 'backblaze'
      }, {
        label: 'Alibaba Cloud OSS',
        value: 'oss'
      }],
      encryptionList: [{
        label: 'TLS',
        value: 'tls'
      }, {
        label: 'SSL',
        value: 'ssl'
      }],
      mailDriverList: [{
        label: 'smtp',
        value: 'smtp'
      }, {
        label: 'sendmail',
        value: 'sendmail'
      }, {
        label: 'mailgun',
        value: 'mailgun'
      }, {
        label: 'ses',
        value: 'ses'
      }, {
        label: 'postmark',
        value: 'postmark'
      }, {
        label: 'log',
        value: 'log'
      }, {
        label: 'array',
        value: 'array'
      }],
      storage: {
        driver: 'local',
        key: '',
        secret: '',
        endpoint: '',
        region: '',
        bucket: ''
      },
      mail: {
        driver: 'smtp',
        host: '',
        port: '',
        username: '',
        password: '',
        encryption: ''
      }
    };
  },
  methods: {
    EnvironmentSetupSubmit: function EnvironmentSetupSubmit() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.environmentSetup.validate();

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

                axios__WEBPACK_IMPORTED_MODULE_11___default.a.post('/api/setup/environment-setup', {
                  storage: _this.storage,
                  mail: _this.mail
                }).then(function (response) {
                  // End loading
                  _this.isLoading = false; // Redirect to next step

                  _this.$router.push({
                    name: 'AppSetup'
                  });
                })["catch"](function (error) {
                  // End loading
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
    this.$scrollTop();
  }
});

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-6b852960] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-6b852960] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-6b852960] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-6b852960] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-6b852960] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-6b852960] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-6b852960] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-6b852960] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-6b852960]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-6b852960] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-6b852960] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-6b852960] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-6b852960] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-6b852960] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-6b852960] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-6b852960] {\n  margin-left: 20px;\n}\n.error-message[data-v-6b852960] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-6b852960] {\n  width: 100%;\n}\ntextarea[data-v-6b852960],\ninput[type=\"password\"][data-v-6b852960],\ninput[type=\"text\"][data-v-6b852960],\ninput[type=\"number\"][data-v-6b852960],\ninput[type=\"email\"][data-v-6b852960] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-6b852960],\ninput[type=\"password\"].is-error[data-v-6b852960],\ninput[type=\"text\"].is-error[data-v-6b852960],\ninput[type=\"number\"].is-error[data-v-6b852960],\ninput[type=\"email\"].is-error[data-v-6b852960] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-6b852960]::-moz-placeholder, input[type=\"password\"][data-v-6b852960]::-moz-placeholder, input[type=\"text\"][data-v-6b852960]::-moz-placeholder, input[type=\"number\"][data-v-6b852960]::-moz-placeholder, input[type=\"email\"][data-v-6b852960]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6b852960]:-ms-input-placeholder, input[type=\"password\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"text\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"number\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"email\"][data-v-6b852960]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6b852960]::placeholder,\ninput[type=\"password\"][data-v-6b852960]::placeholder,\ninput[type=\"text\"][data-v-6b852960]::placeholder,\ninput[type=\"number\"][data-v-6b852960]::placeholder,\ninput[type=\"email\"][data-v-6b852960]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-6b852960]:focus,\ninput[type=\"password\"][data-v-6b852960]:focus,\ninput[type=\"text\"][data-v-6b852960]:focus,\ninput[type=\"number\"][data-v-6b852960]:focus,\ninput[type=\"email\"][data-v-6b852960]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-6b852960],\ninput[type=\"password\"][disabled][data-v-6b852960],\ninput[type=\"text\"][disabled][data-v-6b852960],\ninput[type=\"number\"][disabled][data-v-6b852960],\ninput[type=\"email\"][disabled][data-v-6b852960] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-6b852960] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-6b852960], .additional-link a[data-v-6b852960] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-6b852960]:hover, .additional-link a[data-v-6b852960]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-6b852960] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-6b852960] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-6b852960], .form textarea[data-v-6b852960] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-6b852960] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-6b852960] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-6b852960] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-6b852960] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-6b852960] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-6b852960] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-6b852960] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-6b852960] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-6b852960],\n  input[type=\"password\"][data-v-6b852960],\n  input[type=\"number\"][data-v-6b852960],\n  input[type=\"text\"][data-v-6b852960],\n  input[type=\"email\"][data-v-6b852960] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-6b852960] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-6b852960] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-6b852960] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-6b852960] {\n    color: #bec6cf;\n}\ntextarea[data-v-6b852960],\n  input[type=\"password\"][data-v-6b852960],\n  input[type=\"text\"][data-v-6b852960],\n  input[type=\"number\"][data-v-6b852960],\n  input[type=\"email\"][data-v-6b852960] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-6b852960]::-moz-placeholder, input[type=\"password\"][data-v-6b852960]::-moz-placeholder, input[type=\"text\"][data-v-6b852960]::-moz-placeholder, input[type=\"number\"][data-v-6b852960]::-moz-placeholder, input[type=\"email\"][data-v-6b852960]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6b852960]:-ms-input-placeholder, input[type=\"password\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"text\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"number\"][data-v-6b852960]:-ms-input-placeholder, input[type=\"email\"][data-v-6b852960]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-6b852960]::placeholder,\n  input[type=\"password\"][data-v-6b852960]::placeholder,\n  input[type=\"text\"][data-v-6b852960]::placeholder,\n  input[type=\"number\"][data-v-6b852960]::placeholder,\n  input[type=\"email\"][data-v-6b852960]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-6b852960],\n  input[type=\"password\"][disabled][data-v-6b852960],\n  input[type=\"text\"][disabled][data-v-6b852960],\n  input[type=\"number\"][disabled][data-v-6b852960],\n  input[type=\"email\"][disabled][data-v-6b852960] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.auth-logo-text[data-v-6b852960] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-6b852960] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-6b852960] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-6b852960] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-6b852960] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-6b852960] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-6b852960] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-6b852960] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-6b852960] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-6b852960] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-6b852960] {\n    width: 100%;\n}\n.auth-form h1[data-v-6b852960] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-6b852960] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-6b852960] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-6b852960] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-6b852960] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-6b852960] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-6b852960], .auth-form h2[data-v-6b852960], .auth-form .additional-link[data-v-6b852960] {\n    color: #bec6cf;\n}\n}\n.content-headline[data-v-6b852960] {\n  max-width: 630px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.auth-form input[data-v-6b852960] {\n  min-width: initial;\n}\n.duplicator .duplicator-add-button[data-v-6b852960] {\n  width: 100%;\n}\n.duplicator .duplicator-item[data-v-6b852960] {\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n  border-radius: 8px;\n  background: white;\n  padding: 25px;\n  margin: 0 -25px 32px;\n  position: relative;\n}\n.duplicator .duplicator-item .duplicator-title[data-v-6b852960] {\n  font-size: 1.125em;\n  margin-bottom: 20px;\n  display: block;\n  font-weight: 700;\n}\n.duplicator .duplicator-item .delete-item[data-v-6b852960] {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n}\n.duplicator .duplicator-item .delete-item:hover line[data-v-6b852960] {\n  stroke: #00BC7E;\n}\n.duplicator .duplicator-item input[data-v-6b852960],\n.duplicator .duplicator-item textarea[data-v-6b852960] {\n  box-shadow: none;\n  background: #FAFAFA;\n}\n.form[data-v-6b852960] {\n  max-width: 580px;\n  text-align: left;\n}\n.submit-wrapper[data-v-6b852960] {\n  text-align: right;\n}\n.submit-wrapper .button[data-v-6b852960] {\n  margin: 58px 0 50px 0;\n  width: 100%;\n}\n.title-icon[data-v-6b852960] {\n  margin-bottom: 10px;\n  -webkit-animation: spinner-data-v-6b852960 5s linear infinite;\n          animation: spinner-data-v-6b852960 5s linear infinite;\n}\n.title-icon circle[data-v-6b852960], .title-icon path[data-v-6b852960] {\n  stroke: #00BC7E;\n}\n@-webkit-keyframes spinner-data-v-6b852960 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spinner-data-v-6b852960 {\n0% {\n    transform: rotate(0deg);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@media (prefers-color-scheme: dark) {\n.duplicator .duplicator-item[data-v-6b852960] {\n    background: #1e2024;\n}\n.duplicator .duplicator-item input[data-v-6b852960],\n  .duplicator .duplicator-item textarea[data-v-6b852960] {\n    background: #131414;\n}\n}\n", ""]);

// exports


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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
        { attrs: { name: "database-credentials", visible: true } },
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
              _c("h2", [_vm._v("Set up your storage driver and email client.")])
            ],
            1
          ),
          _vm._v(" "),
          _c("ValidationObserver", {
            ref: "environmentSetup",
            staticClass: "form block-form",
            attrs: { tag: "form" },
            on: {
              submit: function($event) {
                $event.preventDefault()
                return _vm.EnvironmentSetupSubmit.apply(null, arguments)
              }
            },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var invalid = ref.invalid
                  return [
                    _c("InfoBox", [
                      _c("p", [
                        _vm._v(
                          "If you don’t know which storage driver set, keep selected "
                        ),
                        _c("b", [_vm._v("'Local Driver'")]),
                        _vm._v(
                          ". For more info, where\n                    you can host your files "
                        ),
                        _c(
                          "a",
                          {
                            attrs: {
                              href:
                                "https://vuefilemanager.com/docs/guide/storage.html#introduction",
                              target: "_blank"
                            }
                          },
                          [_vm._v("visit our guide")]
                        ),
                        _vm._v(".")
                      ])
                    ]),
                    _vm._v(" "),
                    _c("FormLabel", [_vm._v("Storage Setup")]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Storage Service:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Storage Service",
                            rules: "required"
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
                                        options: _vm.storageServiceList,
                                        default: "local",
                                        placeholder:
                                          "Select your storage service",
                                        isError: errors[0]
                                      },
                                      model: {
                                        value: _vm.storage.driver,
                                        callback: function($$v) {
                                          _vm.$set(_vm.storage, "driver", $$v)
                                        },
                                        expression: "storage.driver"
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
                    _vm.storage.driver !== "local"
                      ? _c(
                          "div",
                          { staticClass: "storage-additionals" },
                          [
                            _c(
                              "div",
                              { staticClass: "block-wrapper" },
                              [
                                _c("label", [_vm._v("Key:")]),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  staticClass: "input-wrapper",
                                  attrs: {
                                    tag: "div",
                                    mode: "passive",
                                    name: "Key",
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
                                                  value: _vm.storage.key,
                                                  expression: "storage.key"
                                                }
                                              ],
                                              class: { "is-error": errors[0] },
                                              attrs: {
                                                placeholder: "Paste your key",
                                                type: "text"
                                              },
                                              domProps: {
                                                value: _vm.storage.key
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.storage,
                                                    "key",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            errors[0]
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "error-message"
                                                  },
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
                                _c("label", [_vm._v("Secret:")]),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  staticClass: "input-wrapper",
                                  attrs: {
                                    tag: "div",
                                    mode: "passive",
                                    name: "Secret",
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
                                                  value: _vm.storage.secret,
                                                  expression: "storage.secret"
                                                }
                                              ],
                                              class: { "is-error": errors[0] },
                                              attrs: {
                                                placeholder:
                                                  "Paste your secret",
                                                type: "text"
                                              },
                                              domProps: {
                                                value: _vm.storage.secret
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.storage,
                                                    "secret",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            errors[0]
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "error-message"
                                                  },
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
                                _c("label", [_vm._v("Region:")]),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  staticClass: "input-wrapper",
                                  attrs: {
                                    tag: "div",
                                    mode: "passive",
                                    name: "Region",
                                    rules: "required"
                                  },
                                  scopedSlots: _vm._u(
                                    [
                                      {
                                        key: "default",
                                        fn: function(ref) {
                                          var errors = ref.errors
                                          return [
                                            _c("SelectInput", {
                                              key: _vm.storage.driver,
                                              attrs: {
                                                options: _vm.regionList,
                                                placeholder:
                                                  "Select your region",
                                                isError: errors[0]
                                              },
                                              model: {
                                                value: _vm.storage.region,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.storage,
                                                    "region",
                                                    $$v
                                                  )
                                                },
                                                expression: "storage.region"
                                              }
                                            }),
                                            _vm._v(" "),
                                            errors[0]
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "error-message"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "input-help" },
                                              [
                                                _vm._v(
                                                  "\n                            Select your region where is your bucket/space created.\n                        "
                                                )
                                              ]
                                            )
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
                            _vm.storage.driver !== "s3"
                              ? _c(
                                  "div",
                                  { staticClass: "block-wrapper" },
                                  [
                                    _c("label", [_vm._v("Endpoint URL:")]),
                                    _vm._v(" "),
                                    _c("ValidationProvider", {
                                      staticClass: "input-wrapper",
                                      attrs: {
                                        tag: "div",
                                        mode: "passive",
                                        name: "Endpoint",
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
                                                        _vm.storage.endpoint,
                                                      expression:
                                                        "storage.endpoint"
                                                    }
                                                  ],
                                                  class: {
                                                    "is-error": errors[0]
                                                  },
                                                  attrs: {
                                                    placeholder:
                                                      "Type your endpoint",
                                                    type: "text",
                                                    readonly: ""
                                                  },
                                                  domProps: {
                                                    value: _vm.storage.endpoint
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.storage,
                                                        "endpoint",
                                                        $event.target.value
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
                                                          _vm._s(errors[0])
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
                              : _vm._e(),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "block-wrapper" },
                              [
                                _c("label", [_vm._v("Bucket:")]),
                                _vm._v(" "),
                                _c("ValidationProvider", {
                                  staticClass: "input-wrapper",
                                  attrs: {
                                    tag: "div",
                                    mode: "passive",
                                    name: "Bucket",
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
                                                  value: _vm.storage.bucket,
                                                  expression: "storage.bucket"
                                                }
                                              ],
                                              class: { "is-error": errors[0] },
                                              attrs: {
                                                placeholder:
                                                  "Type your bucket name",
                                                type: "text"
                                              },
                                              domProps: {
                                                value: _vm.storage.bucket
                                              },
                                              on: {
                                                input: function($event) {
                                                  if ($event.target.composing) {
                                                    return
                                                  }
                                                  _vm.$set(
                                                    _vm.storage,
                                                    "bucket",
                                                    $event.target.value
                                                  )
                                                }
                                              }
                                            }),
                                            _vm._v(" "),
                                            errors[0]
                                              ? _c(
                                                  "span",
                                                  {
                                                    staticClass: "error-message"
                                                  },
                                                  [_vm._v(_vm._s(errors[0]))]
                                                )
                                              : _vm._e(),
                                            _vm._v(" "),
                                            _c(
                                              "small",
                                              { staticClass: "input-help" },
                                              [
                                                _vm._v(
                                                  "\n                            Provide your created unique bucket name\n                        "
                                                )
                                              ]
                                            )
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
                            _c("InfoBox", [
                              _c("p", [
                                _vm._v(
                                  "Later, you can edit these data in your "
                                ),
                                _c("b", [_vm._v(".env")]),
                                _vm._v(
                                  " file which is located in app root folder."
                                )
                              ])
                            ])
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c("FormLabel", { staticClass: "mt-70" }, [
                      _vm._v("Email Setup")
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "block-wrapper" },
                      [
                        _c("label", [_vm._v("Mail Driver:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Driver",
                            rules: "required"
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
                                        options: _vm.mailDriverList,
                                        default: "smtp",
                                        placeholder: "Select your mail driver",
                                        isError: errors[0]
                                      },
                                      model: {
                                        value: _vm.mail.driver,
                                        callback: function($$v) {
                                          _vm.$set(_vm.mail, "driver", $$v)
                                        },
                                        expression: "mail.driver"
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
                        _c("label", [_vm._v("Mail Host:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Host",
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
                                          value: _vm.mail.host,
                                          expression: "mail.host"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your mail host",
                                        type: "text"
                                      },
                                      domProps: { value: _vm.mail.host },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.mail,
                                            "host",
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
                        _c("label", [_vm._v("Mail Port:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Port",
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
                                          value: _vm.mail.port,
                                          expression: "mail.port"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your mail port",
                                        type: "text"
                                      },
                                      domProps: { value: _vm.mail.port },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.mail,
                                            "port",
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
                        _c("label", [_vm._v("Mail Username:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Username",
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
                                          value: _vm.mail.username,
                                          expression: "mail.username"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your mail username",
                                        type: "text"
                                      },
                                      domProps: { value: _vm.mail.username },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.mail,
                                            "username",
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
                        _c("label", [_vm._v("Mail Password:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Password",
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
                                          value: _vm.mail.password,
                                          expression: "mail.password"
                                        }
                                      ],
                                      class: { "is-error": errors[0] },
                                      attrs: {
                                        placeholder: "Type your mail password",
                                        type: "text"
                                      },
                                      domProps: { value: _vm.mail.password },
                                      on: {
                                        input: function($event) {
                                          if ($event.target.composing) {
                                            return
                                          }
                                          _vm.$set(
                                            _vm.mail,
                                            "password",
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
                        _c("label", [_vm._v("Mail Encryption:")]),
                        _vm._v(" "),
                        _c("ValidationProvider", {
                          staticClass: "input-wrapper",
                          attrs: {
                            tag: "div",
                            mode: "passive",
                            name: "Mail Encryption",
                            rules: "required"
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
                                        options: _vm.encryptionList,
                                        placeholder:
                                          "Select your mail encryption",
                                        isError: errors[0]
                                      },
                                      model: {
                                        value: _vm.mail.encryption,
                                        callback: function($$v) {
                                          _vm.$set(_vm.mail, "encryption", $$v)
                                        },
                                        expression: "mail.encryption"
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
                      { staticClass: "submit-wrapper" },
                      [
                        _c("AuthButton", {
                          attrs: {
                            icon: "chevron-right",
                            text: "Save and Set General Settings",
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
          })
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

/***/ "./resources/js/views/SetupWizard/EnvironmentSetup.vue":
/*!*************************************************************!*\
  !*** ./resources/js/views/SetupWizard/EnvironmentSetup.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true& */ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true&");
/* harmony import */ var _EnvironmentSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EnvironmentSetup.vue?vue&type=script&lang=js& */ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& */ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _EnvironmentSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6b852960",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/SetupWizard/EnvironmentSetup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentSetup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=style&index=0&id=6b852960&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_style_index_0_id_6b852960_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/SetupWizard/EnvironmentSetup.vue?vue&type=template&id=6b852960&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EnvironmentSetup_vue_vue_type_template_id_6b852960_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);