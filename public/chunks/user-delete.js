(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/user-delete"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Layout/PageTabGroup */ "./resources/js/components/Others/Layout/PageTabGroup.vue");
/* harmony import */ var _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Layout/PageTab */ "./resources/js/components/Others/Layout/PageTab.vue");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Forms_SetupBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/Forms/SetupBox */ "./resources/js/components/Others/Forms/SetupBox.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);


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










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'UserDelete',
  props: ['user'],
  components: {
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_1__["default"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_2__["default"],
    PageTabGroup: _components_Others_Layout_PageTabGroup__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageTab: _components_Others_Layout_PageTab__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_5__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_5__["ValidationObserver"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"],
    SetupBox: _components_Others_Forms_SetupBox__WEBPACK_IMPORTED_MODULE_7__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_8__["required"]
  },
  data: function data() {
    return {
      isSendingRequest: false,
      isLoading: false,
      userName: ''
    };
  },
  methods: {
    deleteUser: function deleteUser() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.deleteUser.validate();

              case 2:
                isValid = _context.sent;

                if (isValid) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return");

              case 5:
                _this.isSendingRequest = true;
                axios__WEBPACK_IMPORTED_MODULE_10___default.a.post(_this.$store.getters.api + '/users/' + _this.$route.params.id + '/delete', {
                  data: {
                    name: _this.userName
                  },
                  _method: 'delete'
                }).then(function (response) {
                  if (response.status === 202) {
                    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('alert:open', {
                      emoji: '??????',
                      title: _this.$t('popup_deleted_user_aborted.title'),
                      message: _this.$t('popup_deleted_user_aborted.message')
                    });
                  }

                  if (response.status === 204) {
                    _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('success:open', {
                      emoji: '????',
                      title: _this.$t('popup_deleted_user.title'),
                      message: _this.$t('popup_deleted_user.message')
                    });

                    _this.$router.push({
                      name: 'Users'
                    });
                  }
                })["catch"](function () {
                  _bus__WEBPACK_IMPORTED_MODULE_9__["events"].$emit('alert:open', {
                    title: _this.$t('popup_error.title'),
                    message: _this.$t('popup_error.message')
                  });
                })["finally"](function () {
                  _this.isSendingRequest = false;
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-2f278a86] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-2f278a86] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-2f278a86] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2f278a86] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-2f278a86] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-2f278a86] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-2f278a86] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-2f278a86] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-2f278a86]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-2f278a86] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-2f278a86] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-2f278a86] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2f278a86] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-2f278a86] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-2f278a86] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-2f278a86] {\n  margin-left: 20px;\n}\n.error-message[data-v-2f278a86] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-2f278a86] {\n  width: 100%;\n}\ntextarea[data-v-2f278a86],\ninput[type=\"password\"][data-v-2f278a86],\ninput[type=\"text\"][data-v-2f278a86],\ninput[type=\"number\"][data-v-2f278a86],\ninput[type=\"email\"][data-v-2f278a86] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-2f278a86],\ninput[type=\"password\"].is-error[data-v-2f278a86],\ninput[type=\"text\"].is-error[data-v-2f278a86],\ninput[type=\"number\"].is-error[data-v-2f278a86],\ninput[type=\"email\"].is-error[data-v-2f278a86] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-2f278a86]::-moz-placeholder, input[type=\"password\"][data-v-2f278a86]::-moz-placeholder, input[type=\"text\"][data-v-2f278a86]::-moz-placeholder, input[type=\"number\"][data-v-2f278a86]::-moz-placeholder, input[type=\"email\"][data-v-2f278a86]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2f278a86]:-ms-input-placeholder, input[type=\"password\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"text\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"number\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"email\"][data-v-2f278a86]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2f278a86]::placeholder,\ninput[type=\"password\"][data-v-2f278a86]::placeholder,\ninput[type=\"text\"][data-v-2f278a86]::placeholder,\ninput[type=\"number\"][data-v-2f278a86]::placeholder,\ninput[type=\"email\"][data-v-2f278a86]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-2f278a86]:focus,\ninput[type=\"password\"][data-v-2f278a86]:focus,\ninput[type=\"text\"][data-v-2f278a86]:focus,\ninput[type=\"number\"][data-v-2f278a86]:focus,\ninput[type=\"email\"][data-v-2f278a86]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-2f278a86],\ninput[type=\"password\"][disabled][data-v-2f278a86],\ninput[type=\"text\"][disabled][data-v-2f278a86],\ninput[type=\"number\"][disabled][data-v-2f278a86],\ninput[type=\"email\"][disabled][data-v-2f278a86] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-2f278a86] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-2f278a86], .additional-link a[data-v-2f278a86] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-2f278a86]:hover, .additional-link a[data-v-2f278a86]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-2f278a86] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-2f278a86] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-2f278a86], .form textarea[data-v-2f278a86] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-2f278a86] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-2f278a86] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-2f278a86] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-2f278a86] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-2f278a86] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-2f278a86] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-2f278a86] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-2f278a86] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-2f278a86],\n  input[type=\"password\"][data-v-2f278a86],\n  input[type=\"number\"][data-v-2f278a86],\n  input[type=\"text\"][data-v-2f278a86],\n  input[type=\"email\"][data-v-2f278a86] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-2f278a86] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-2f278a86] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-2f278a86] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-2f278a86] {\n    color: #bec6cf;\n}\ntextarea[data-v-2f278a86],\n  input[type=\"password\"][data-v-2f278a86],\n  input[type=\"text\"][data-v-2f278a86],\n  input[type=\"number\"][data-v-2f278a86],\n  input[type=\"email\"][data-v-2f278a86] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-2f278a86]::-moz-placeholder, input[type=\"password\"][data-v-2f278a86]::-moz-placeholder, input[type=\"text\"][data-v-2f278a86]::-moz-placeholder, input[type=\"number\"][data-v-2f278a86]::-moz-placeholder, input[type=\"email\"][data-v-2f278a86]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2f278a86]:-ms-input-placeholder, input[type=\"password\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"text\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"number\"][data-v-2f278a86]:-ms-input-placeholder, input[type=\"email\"][data-v-2f278a86]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-2f278a86]::placeholder,\n  input[type=\"password\"][data-v-2f278a86]::placeholder,\n  input[type=\"text\"][data-v-2f278a86]::placeholder,\n  input[type=\"number\"][data-v-2f278a86]::placeholder,\n  input[type=\"email\"][data-v-2f278a86]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-2f278a86],\n  input[type=\"password\"][disabled][data-v-2f278a86],\n  input[type=\"text\"][disabled][data-v-2f278a86],\n  input[type=\"number\"][disabled][data-v-2f278a86],\n  input[type=\"email\"][disabled][data-v-2f278a86] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.block-form[data-v-2f278a86] {\n  max-width: 100%;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true& ***!
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
  return _vm.user
    ? _c(
        "PageTab",
        { staticClass: "form-fixed-width" },
        [
          _c(
            "PageTabGroup",
            [
              _c("FormLabel", [
                _vm._v(_vm._s(_vm.$t("user_box_delete.title")))
              ]),
              _vm._v(" "),
              _c("InfoBox", [
                _c("p", [_vm._v(_vm._s(_vm.$t("user_box_delete.description")))])
              ]),
              _vm._v(" "),
              _c("ValidationObserver", {
                ref: "deleteUser",
                staticClass: "form block-form",
                attrs: { tag: "form" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.deleteUser.apply(null, arguments)
                  }
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "default",
                      fn: function(ref) {
                        var invalid = ref.invalid
                        return [
                          _c("ValidationProvider", {
                            staticClass: "block-wrapper",
                            attrs: {
                              tag: "div",
                              mode: "passive",
                              name: "User name",
                              rules:
                                "required|is:" + _vm.user.data.attributes.name
                            },
                            scopedSlots: _vm._u(
                              [
                                {
                                  key: "default",
                                  fn: function(ref) {
                                    var errors = ref.errors
                                    return [
                                      _c("label", [
                                        _vm._v(
                                          _vm._s(
                                            _vm.$t(
                                              "admin_page_user.label_delete_user",
                                              {
                                                user:
                                                  _vm.user.data.attributes.name
                                              }
                                            )
                                          ) + ":"
                                        )
                                      ]),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        { staticClass: "single-line-form" },
                                        [
                                          _c("input", {
                                            directives: [
                                              {
                                                name: "model",
                                                rawName: "v-model",
                                                value: _vm.userName,
                                                expression: "userName"
                                              }
                                            ],
                                            class: { "is-error": errors[0] },
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "admin_page_user.placeholder_delete_user"
                                              ),
                                              type: "text"
                                            },
                                            domProps: { value: _vm.userName },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.userName =
                                                  $event.target.value
                                              }
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c(
                                            "ButtonBase",
                                            {
                                              staticClass: "submit-button",
                                              attrs: {
                                                loading: _vm.isSendingRequest,
                                                disabled: _vm.isSendingRequest,
                                                type: "submit",
                                                "button-style": "danger"
                                              }
                                            },
                                            [
                                              _vm._v(
                                                "\n                        " +
                                                  _vm._s(
                                                    _vm.$t(
                                                      "admin_page_user.delete_user"
                                                    )
                                                  ) +
                                                  "\n                    "
                                              )
                                            ]
                                          )
                                        ],
                                        1
                                      ),
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
                        ]
                      }
                    }
                  ],
                  null,
                  false,
                  2626493364
                )
              })
            ],
            1
          )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/Admin/Users/UserTabs/UserDelete.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserDelete.vue?vue&type=template&id=2f278a86&scoped=true& */ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true&");
/* harmony import */ var _UserDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserDelete.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& */ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _UserDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f278a86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Users/UserTabs/UserDelete.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDelete.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=style&index=0&id=2f278a86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_style_index_0_id_2f278a86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true&":
/*!***********************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true& ***!
  \***********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./UserDelete.vue?vue&type=template&id=2f278a86&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Users/UserTabs/UserDelete.vue?vue&type=template&id=2f278a86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserDelete_vue_vue_type_template_id_2f278a86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);