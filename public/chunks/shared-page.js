(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/shared-page"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuthContent',
  props: ['loading', 'icon', 'text'],
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
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
  name: 'AuthContent',
  props: ['visible', 'name'],
  data: function data() {
    return {
      isVisible: false
    };
  },
  created: function created() {
    this.isVisible = this.visible;
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_FilesView_MobileSortingAndPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/FilesView/MobileSortingAndPreview */ "./resources/js/components/FilesView/MobileSortingAndPreview.vue");
/* harmony import */ var _components_FilesView_MobileMultiSelectMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/FilesView/MobileMultiSelectMenu */ "./resources/js/components/FilesView/MobileMultiSelectMenu.vue");
/* harmony import */ var _components_FilesView_DesktopSortingAndPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/FilesView/DesktopSortingAndPreview */ "./resources/js/components/FilesView/DesktopSortingAndPreview.vue");
/* harmony import */ var _components_FilesView_ProcessingPopup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/FilesView/ProcessingPopup */ "./resources/js/components/FilesView/ProcessingPopup.vue");
/* harmony import */ var _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Others/TreeMenuNavigator */ "./resources/js/components/Others/TreeMenuNavigator.vue");
/* harmony import */ var _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/FileFullPreview */ "./resources/js/components/FilesView/FileFullPreview.vue");
/* harmony import */ var _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/FilesView/DesktopToolbar */ "./resources/js/components/FilesView/DesktopToolbar.vue");
/* harmony import */ var _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/Sidebar/ContentSidebar */ "./resources/js/components/Sidebar/ContentSidebar.vue");
/* harmony import */ var _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/FilesView/FileItemGrid */ "./resources/js/components/FilesView/FileItemGrid.vue");
/* harmony import */ var _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/components/Sidebar/ContentGroup */ "./resources/js/components/Sidebar/ContentGroup.vue");
/* harmony import */ var _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/components/FilesView/FileBrowser */ "./resources/js/components/FilesView/FileBrowser.vue");
/* harmony import */ var _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/components/FilesView/ContextMenu */ "./resources/js/components/FilesView/ContextMenu.vue");
/* harmony import */ var _components_Others_CreateFolder__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/components/Others/CreateFolder */ "./resources/js/components/Others/CreateFolder.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/components/FilesView/MobileMenu */ "./resources/js/components/FilesView/MobileMenu.vue");
/* harmony import */ var _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/components/Auth/AuthContent */ "./resources/js/components/Auth/AuthContent.vue");
/* harmony import */ var _components_Others_RenameItem__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/components/Others/RenameItem */ "./resources/js/components/Others/RenameItem.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/components/Others/MoveItem */ "./resources/js/components/Others/MoveItem.vue");
/* harmony import */ var _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/components/Others/Vignette */ "./resources/js/components/Others/Vignette.vue");
/* harmony import */ var _components_FilesView_DragUI__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @/components/FilesView/DragUI */ "./resources/js/components/FilesView/DragUI.vue");
/* harmony import */ var _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @/components/FilesView/Alert */ "./resources/js/components/FilesView/Alert.vue");
/* harmony import */ var vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! vee-validate/dist/rules */ "./node_modules/vee-validate/dist/rules.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");


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





























/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SharedPage',
  components: {
    MobileSortingAndPreview: _components_FilesView_MobileSortingAndPreview__WEBPACK_IMPORTED_MODULE_2__["default"],
    MobileMultiSelectMenu: _components_FilesView_MobileMultiSelectMenu__WEBPACK_IMPORTED_MODULE_3__["default"],
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationProvider"],
    DesktopSortingAndPreview: _components_FilesView_DesktopSortingAndPreview__WEBPACK_IMPORTED_MODULE_4__["default"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_1__["ValidationObserver"],
    TreeMenuNavigator: _components_Others_TreeMenuNavigator__WEBPACK_IMPORTED_MODULE_6__["default"],
    FileFullPreview: _components_FilesView_FileFullPreview__WEBPACK_IMPORTED_MODULE_7__["default"],
    ProcessingPopup: _components_FilesView_ProcessingPopup__WEBPACK_IMPORTED_MODULE_5__["default"],
    DesktopToolbar: _components_FilesView_DesktopToolbar__WEBPACK_IMPORTED_MODULE_8__["default"],
    ContentSidebar: _components_Sidebar_ContentSidebar__WEBPACK_IMPORTED_MODULE_9__["default"],
    CreateFolder: _components_Others_CreateFolder__WEBPACK_IMPORTED_MODULE_14__["default"],
    FileItemGrid: _components_FilesView_FileItemGrid__WEBPACK_IMPORTED_MODULE_10__["default"],
    ContentGroup: _components_Sidebar_ContentGroup__WEBPACK_IMPORTED_MODULE_11__["default"],
    AuthContent: _components_Auth_AuthContent__WEBPACK_IMPORTED_MODULE_17__["default"],
    FileBrowser: _components_FilesView_FileBrowser__WEBPACK_IMPORTED_MODULE_12__["default"],
    ContextMenu: _components_FilesView_ContextMenu__WEBPACK_IMPORTED_MODULE_13__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_19__["default"],
    MobileMenu: _components_FilesView_MobileMenu__WEBPACK_IMPORTED_MODULE_16__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_15__["default"],
    RenameItem: _components_Others_RenameItem__WEBPACK_IMPORTED_MODULE_18__["default"],
    HomeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_29__["HomeIcon"],
    MoveItem: _components_Others_MoveItem__WEBPACK_IMPORTED_MODULE_21__["default"],
    required: vee_validate_dist_rules__WEBPACK_IMPORTED_MODULE_25__["required"],
    Vignette: _components_Others_Vignette__WEBPACK_IMPORTED_MODULE_22__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_20__["default"],
    DragUI: _components_FilesView_DragUI__WEBPACK_IMPORTED_MODULE_23__["default"],
    Alert: _components_FilesView_Alert__WEBPACK_IMPORTED_MODULE_24__["default"]
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_26__["mapGetters"])(['config', 'sharedDetail', 'sharedFile', 'navigation'])), {}, {
    navigationTree: function navigationTree() {
      return this.navigation ? this.navigation[0].folders : undefined;
    },
    isPageFiles: function isPageFiles() {
      return this.currentPage === 'page-files';
    },
    isPagePasswordVerification: function isPagePasswordVerification() {
      return this.currentPage === 'page-password';
    }
  }),
  data: function data() {
    return {
      checkedAccount: undefined,
      password: '',
      isLoading: false,
      isPageLoading: true,
      currentPage: undefined,
      homeDirectory: undefined
    };
  },
  methods: {
    goHome: function goHome() {
      this.$store.dispatch('browseShared', [{
        folder: this.homeDirectory,
        back: false,
        init: true
      }]);
    },
    authenticateProtected: function authenticateProtected() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var isValid;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$refs.authenticateProtected.validate();

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

                axios__WEBPACK_IMPORTED_MODULE_28___default.a.post('/api/shared/authenticate/' + _this.$route.params.token, {
                  password: _this.password
                }).then(function () {
                  // End loading
                  _this.isLoading = false; // Redirect to file browser page

                  _this.currentPage = 'page-files'; // Get protected files

                  _this.getFiles();
                })["catch"](function (error) {
                  if (error.response.status == 401) {
                    _this.$refs.authenticateProtected.setErrors({
                      'Password': [error.response.data.message]
                    });
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
    },
    getFiles: function getFiles() {
      // Show folder
      if (this.sharedDetail.type === 'folder') {
        this.homeDirectory = {
          unique_id: this.sharedDetail.item_id,
          name: this.$t('locations.home'),
          location: 'public'
        }; // Get folder tree

        this.$store.dispatch('getFolderTree'); // Load folder

        this.goHome();
      } // Get file


      if (this.sharedDetail.type === 'file') {
        this.$store.dispatch('getSingleFile');
      }
    },
    download: function download() {
      this.$downloadFile(this.sharedFile.file_url, this.sharedFile.name + '.' + this.sharedFile.mimetype);
    },
    contextMenu: function contextMenu(event, item) {
      _bus__WEBPACK_IMPORTED_MODULE_27__["events"].$emit('contextMenu:show', event, item);
    }
  },
  created: function created() {
    var _this2 = this;

    axios__WEBPACK_IMPORTED_MODULE_28___default.a.get('/api/shared/' + this.$route.params.token).then(function (response) {
      // Commit shared item options
      _this2.$store.commit('SET_SHARED_DETAIL', response.data.data.attributes);

      _this2.$store.commit('SET_PERMISSION', response.data.data.attributes.permission); // Hide page spinner


      _this2.isPageLoading = false; // Show password page

      if (response.data.data.attributes["protected"]) {
        _this2.currentPage = 'page-password';
      } else {
        _this2.currentPage = 'page-files';

        _this2.getFiles();
      }
    })["catch"](function (error) {
      if (error.response.status == 404) {
        _this2.$router.push({
          name: 'NotFoundShared'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button[data-v-03fd7dc6] {\n  cursor: pointer;\n  border-radius: 8px;\n  text-decoration: none;\n  padding: 12px 32px;\n  display: inline-block;\n  margin-left: 15px;\n  margin-right: 15px;\n  white-space: nowrap;\n  transition: 150ms all ease;\n  background: transparent;\n}\n.button .text-label[data-v-03fd7dc6] {\n  transition: 150ms all ease;\n  font-size: 1.0625em;\n  font-weight: 800;\n  line-height: 0;\n}\n.button .icon[data-v-03fd7dc6] {\n  margin-left: 12px;\n  font-size: 1em;\n}\n.button.solid[data-v-03fd7dc6] {\n  background: #00BC7E;\n  border: 2px solid #00BC7E;\n}\n.button.solid .text-label[data-v-03fd7dc6] {\n  color: white;\n}\n.button.outline[data-v-03fd7dc6] {\n  border: 2px solid #1B2539;\n}\n.button.outline .text-label[data-v-03fd7dc6] {\n  color: #1B2539;\n}\n.button.outline .icon path[data-v-03fd7dc6] {\n  fill: #00BC7E;\n}\n.button.outline[data-v-03fd7dc6]:hover {\n  border-color: #00BC7E;\n}\n.button.outline:hover .text-label[data-v-03fd7dc6] {\n  color: #00BC7E;\n}\n@media (prefers-color-scheme: dark) {\n.button.outline[data-v-03fd7dc6] {\n    background: #131414;\n    border-color: #bec6cf;\n}\n.button.outline .text-label[data-v-03fd7dc6] {\n    color: #bec6cf;\n}\n}\n.sync-alt[data-v-03fd7dc6] {\n  -webkit-animation: spin-data-v-03fd7dc6 1s linear infinite;\n          animation: spin-data-v-03fd7dc6 1s linear infinite;\n}\n@-webkit-keyframes spin-data-v-03fd7dc6 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n@keyframes spin-data-v-03fd7dc6 {\n0% {\n    transform: rotate(0);\n}\n100% {\n    transform: rotate(360deg);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form.inline-form[data-v-747b9ae2] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-747b9ae2] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-747b9ae2] {\n  position: absolute;\n  left: 0;\n}\n.form.block-form.create-new-password .block-wrapper label[data-v-747b9ae2] {\n  width: 280px;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2] {\n  display: flex;\n  align-items: center;\n  margin-top: 25px;\n  justify-content: center;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2]:first-child {\n  margin-top: 0;\n}\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n  white-space: nowrap;\n  font-size: 1.125em;\n  font-weight: 700;\n  padding-right: 20px;\n  width: 200px;\n  text-align: right !important;\n  color: #1B2539;\n  text-align: right;\n}\n.form.block-form .button[data-v-747b9ae2] {\n  margin-top: 50px;\n}\n.input-wrapper .error-message[data-v-747b9ae2] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-747b9ae2] {\n  width: 100%;\n}\ntextarea[data-v-747b9ae2],\ninput[type=\"password\"][data-v-747b9ae2],\ninput[type=\"text\"][data-v-747b9ae2],\ninput[type=\"email\"][data-v-747b9ae2] {\n  background: #f4f5f6;\n  border: 1px solid transparent;\n  transition: 0.15s all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n}\ntextarea.is-error[data-v-747b9ae2],\ninput[type=\"password\"].is-error[data-v-747b9ae2],\ninput[type=\"text\"].is-error[data-v-747b9ae2],\ninput[type=\"email\"].is-error[data-v-747b9ae2] {\n  border-color: #fd397a;\n  box-shadow: 0 0 7px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-747b9ae2]::-moz-placeholder, input[type=\"password\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"text\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"email\"][data-v-747b9ae2]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]:-ms-input-placeholder, input[type=\"password\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"text\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"email\"][data-v-747b9ae2]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]::placeholder,\ninput[type=\"password\"][data-v-747b9ae2]::placeholder,\ninput[type=\"text\"][data-v-747b9ae2]::placeholder,\ninput[type=\"email\"][data-v-747b9ae2]::placeholder {\n  color: #A4ADB6;\n  font-size: 1em;\n}\ntextarea[data-v-747b9ae2]:focus,\ninput[type=\"password\"][data-v-747b9ae2]:focus,\ninput[type=\"text\"][data-v-747b9ae2]:focus,\ninput[type=\"email\"][data-v-747b9ae2]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 0 7px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-747b9ae2],\ninput[type=\"password\"][disabled][data-v-747b9ae2],\ninput[type=\"text\"][disabled][data-v-747b9ae2],\ninput[type=\"email\"][disabled][data-v-747b9ae2] {\n  color: #A4ADB6;\n  cursor: not-allowed;\n}\n.additional-link[data-v-747b9ae2] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-747b9ae2], .additional-link a[data-v-747b9ae2] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-747b9ae2]:hover, .additional-link a[data-v-747b9ae2]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-747b9ae2] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-747b9ae2], .form textarea[data-v-747b9ae2] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-747b9ae2] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-747b9ae2] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-747b9ae2] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-747b9ae2] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-747b9ae2] {\n    padding: 14px 32px;\n}\ntextarea[data-v-747b9ae2],\n  input[type=\"password\"][data-v-747b9ae2],\n  input[type=\"text\"][data-v-747b9ae2],\n  input[type=\"email\"][data-v-747b9ae2] {\n    padding: 14px 20px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form.block-form .block-wrapper label[data-v-747b9ae2] {\n    color: #bec6cf;\n}\ntextarea[data-v-747b9ae2],\n  input[type=\"password\"][data-v-747b9ae2],\n  input[type=\"text\"][data-v-747b9ae2],\n  input[type=\"email\"][data-v-747b9ae2] {\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-747b9ae2]::-moz-placeholder, input[type=\"password\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"text\"][data-v-747b9ae2]::-moz-placeholder, input[type=\"email\"][data-v-747b9ae2]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-747b9ae2]:-ms-input-placeholder, input[type=\"password\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"text\"][data-v-747b9ae2]:-ms-input-placeholder, input[type=\"email\"][data-v-747b9ae2]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-747b9ae2]::placeholder,\n  input[type=\"password\"][data-v-747b9ae2]::placeholder,\n  input[type=\"text\"][data-v-747b9ae2]::placeholder,\n  input[type=\"email\"][data-v-747b9ae2]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-747b9ae2],\n  input[type=\"password\"][disabled][data-v-747b9ae2],\n  input[type=\"text\"][disabled][data-v-747b9ae2],\n  input[type=\"email\"][disabled][data-v-747b9ae2] {\n    color: #7d858c;\n}\n}\n.auth-logo-text[data-v-747b9ae2] {\n  font-size: 1.375em;\n  font-weight: 800;\n  margin-bottom: 40px;\n  display: block;\n}\n.auth-form[data-v-747b9ae2] {\n  text-align: center;\n  max-width: 600px;\n  padding: 25px 20px;\n  display: table-cell;\n  vertical-align: middle;\n}\n.auth-form input[data-v-747b9ae2] {\n  min-width: 310px;\n}\n.auth-form .additional-link a[data-v-747b9ae2] {\n  font-weight: 700;\n  text-decoration: none;\n}\n.auth-form .user-avatar[data-v-747b9ae2] {\n  width: 100px;\n  height: 100px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  margin-bottom: 20px;\n  border-radius: 8px;\n  box-shadow: 0 10px 30px rgba(25, 54, 60, 0.2);\n}\n.auth-form .logo[data-v-747b9ae2] {\n  width: 120px;\n  margin-bottom: 20px;\n}\n.auth-form h1[data-v-747b9ae2] {\n  font-size: 2.125em;\n  font-weight: 800;\n  line-height: 1.2;\n  margin-bottom: 2px;\n  color: #1B2539;\n}\n.auth-form h2[data-v-747b9ae2] {\n  font-size: 1.4375em;\n  font-weight: 500;\n  margin-bottom: 50px;\n  color: #1B2539;\n}\n.auth-form .block-form[data-v-747b9ae2] {\n  margin-left: auto;\n  margin-right: auto;\n}\n@media only screen and (min-width: 690px) and (max-width: 960px) {\n.auth-form[data-v-747b9ae2] {\n    padding-left: 20%;\n    padding-right: 20%;\n}\n}\n@media only screen and (max-width: 690px) {\n.auth-form[data-v-747b9ae2] {\n    width: 100%;\n}\n.auth-form h1[data-v-747b9ae2] {\n    font-size: 1.875em;\n}\n.auth-form h2[data-v-747b9ae2] {\n    font-size: 1.3125em;\n}\n}\n@media only screen and (max-width: 490px) {\n.auth-form h1[data-v-747b9ae2] {\n    font-size: 1.375em;\n}\n.auth-form h2[data-v-747b9ae2] {\n    font-size: 1.125em;\n}\n.auth-form input[data-v-747b9ae2] {\n    min-width: initial;\n}\n.auth-form .additional-link[data-v-747b9ae2] {\n    font-size: 0.9375em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.auth-form h1[data-v-747b9ae2], .auth-form h2[data-v-747b9ae2], .auth-form .additional-link[data-v-747b9ae2] {\n    color: #bec6cf;\n}\n}\n#files-view[data-v-747b9ae2] {\n  font-family: 'Nunito', sans-serif;\n  font-size: 16px;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  min-width: 320px;\n  overflow-x: hidden;\n  padding-left: 15px;\n  padding-right: 15px;\n  overflow-y: hidden;\n}\n#shared[data-v-747b9ae2] {\n  height: 100%;\n}\n#password-view[data-v-747b9ae2] {\n  display: grid;\n  height: inherit;\n}\n#password-view .center[data-v-747b9ae2] {\n  margin: auto;\n}\n#single-file[data-v-747b9ae2] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  top: 0;\n  display: grid;\n  height: 100%;\n}\n#single-file .single-file-wrapper[data-v-747b9ae2] {\n  margin: auto;\n  text-align: center;\n}\n#single-file .single-file-wrapper .download-button[data-v-747b9ae2] {\n  margin-top: 15px;\n  margin-left: auto;\n  margin-right: auto;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item {\n  width: 290px;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item:hover, #single-file[data-v-747b9ae2] .file-wrapper .file-item.is-clicked {\n  background: transparent;\n}\n#single-file[data-v-747b9ae2] .file-wrapper .file-item .item-shared {\n  display: none;\n}\n.empty-note.navigator[data-v-747b9ae2] {\n  padding: 5px 25px 10px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "button outline" }, [
    _c("span", { staticClass: "text-label" }, [_vm._v(_vm._s(_vm.text))]),
    _vm._v(" "),
    _vm.loading
      ? _c(
          "span",
          { staticClass: "icon" },
          [
            _c("FontAwesomeIcon", {
              staticClass: "sync-alt",
              attrs: { icon: "sync-alt" }
            })
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    !_vm.loading && _vm.icon
      ? _c(
          "span",
          { staticClass: "icon" },
          [_c("FontAwesomeIcon", { attrs: { icon: _vm.icon } })],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _vm.isVisible
    ? _c("div", { staticClass: "auth-form" }, [_vm._t("default")], 2)
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
    { attrs: { id: "shared" } },
    [
      _c("FileFullPreview"),
      _vm._v(" "),
      _vm.isPageLoading ? _c("Spinner") : _vm._e(),
      _vm._v(" "),
      _c("MoveItem"),
      _vm._v(" "),
      _c("ProcessingPopup"),
      _vm._v(" "),
      _c("MobileMultiSelectMenu"),
      _vm._v(" "),
      _c("RenameItem"),
      _vm._v(" "),
      _c("CreateFolder"),
      _vm._v(" "),
      _c("DragUI"),
      _vm._v(" "),
      _c("MobileMenu"),
      _vm._v(" "),
      _c("MobileSortingAndPreview"),
      _vm._v(" "),
      _c("Alert"),
      _vm._v(" "),
      _c("Vignette"),
      _vm._v(" "),
      _vm.isPagePasswordVerification
        ? _c(
            "div",
            { attrs: { id: "password-view" } },
            [
              _c(
                "AuthContent",
                {
                  staticClass: "center",
                  attrs: { name: "password", visible: true }
                },
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
                  _c("h1", [_vm._v(_vm._s(_vm.$t("page_shared.title")))]),
                  _vm._v(" "),
                  _c("h2", [_vm._v(_vm._s(_vm.$t("page_shared.subtitle")))]),
                  _vm._v(" "),
                  _c("ValidationObserver", {
                    ref: "authenticateProtected",
                    staticClass: "form inline-form",
                    attrs: { tag: "form" },
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.authenticateProtected.apply(null, arguments)
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
                                staticClass: "input-wrapper",
                                attrs: {
                                  tag: "div",
                                  mode: "passive",
                                  name: "Password",
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
                                                value: _vm.password,
                                                expression: "password"
                                              }
                                            ],
                                            class: { "is-error": errors[0] },
                                            attrs: {
                                              placeholder: _vm.$t(
                                                "page_shared.placeholder_pass"
                                              ),
                                              type: "password"
                                            },
                                            domProps: { value: _vm.password },
                                            on: {
                                              input: function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.password =
                                                  $event.target.value
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
                              }),
                              _vm._v(" "),
                              _c("AuthButton", {
                                attrs: {
                                  icon: "chevron-right",
                                  text: _vm.$t("page_shared.submit"),
                                  loading: _vm.isLoading,
                                  disabled: _vm.isLoading
                                }
                              })
                            ]
                          }
                        }
                      ],
                      null,
                      false,
                      1097245153
                    )
                  })
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.sharedDetail && _vm.sharedDetail.type === "file" && _vm.isPageFiles
        ? _c("div", { attrs: { id: "single-file" } }, [
            _c(
              "div",
              { staticClass: "single-file-wrapper" },
              [
                _vm.sharedFile
                  ? _c("FileItemGrid", {
                      attrs: { item: _vm.sharedFile, "context-menu": false }
                    })
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "ButtonBase",
                  {
                    staticClass: "download-button",
                    attrs: { "button-style": "theme" },
                    nativeOn: {
                      click: function($event) {
                        return _vm.download.apply(null, arguments)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.$t("page_shared.download_file")) +
                        "\n            "
                    )
                  ]
                )
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.sharedDetail && _vm.sharedDetail.type === "folder" && _vm.isPageFiles
        ? _c(
            "div",
            {
              attrs: { id: "viewport" },
              on: {
                "!contextmenu": function($event) {
                  $event.preventDefault()
                  return _vm.contextMenu($event, undefined)
                }
              }
            },
            [
              _vm.navigationTree
                ? _c(
                    "ContentSidebar",
                    [
                      _c(
                        "ContentGroup",
                        { attrs: { title: _vm.$t("sidebar.locations_title") } },
                        [
                          _c(
                            "div",
                            { staticClass: "menu-list-wrapper vertical" },
                            [
                              _c(
                                "a",
                                {
                                  staticClass: "menu-list-item link",
                                  on: { click: _vm.goHome }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "icon" },
                                    [
                                      _c("home-icon", { attrs: { size: "17" } })
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "label" }, [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(_vm.$t("sidebar.home")) +
                                        "\n                            "
                                    )
                                  ])
                                ]
                              )
                            ]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "ContentGroup",
                        {
                          staticClass: "navigator",
                          attrs: { title: _vm.$t("sidebar.navigator_title") }
                        },
                        [
                          _vm.navigationTree.length == 0
                            ? _c(
                                "span",
                                { staticClass: "empty-note navigator" },
                                [
                                  _vm._v(
                                    "\n                        " +
                                      _vm._s(_vm.$t("sidebar.folders_empty")) +
                                      "\n                    "
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.navigationTree, function(items) {
                            return _c("TreeMenuNavigator", {
                              key: items.unique_id,
                              staticClass: "folder-tree",
                              attrs: { depth: 0, nodes: items }
                            })
                          })
                        ],
                        2
                      )
                    ],
                    1
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "div",
                { attrs: { id: "files-view" } },
                [
                  _c("ContextMenu"),
                  _vm._v(" "),
                  _c("DesktopToolbar"),
                  _vm._v(" "),
                  _c("FileBrowser"),
                  _vm._v(" "),
                  _c("DesktopSortingAndPreview")
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/Auth/AuthButton.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/Auth/AuthButton.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true& */ "./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true&");
/* harmony import */ var _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& */ "./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "03fd7dc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/AuthButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=style&index=0&id=03fd7dc6&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_style_index_0_id_03fd7dc6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthButton.vue?vue&type=template&id=03fd7dc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthButton_vue_vue_type_template_id_03fd7dc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Auth/AuthContent.vue":
/*!******************************************************!*\
  !*** ./resources/js/components/Auth/AuthContent.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContent.vue?vue&type=template&id=6001d5d6& */ "./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6&");
/* harmony import */ var _AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthContent.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/AuthContent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthContent.vue?vue&type=template&id=6001d5d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Auth/AuthContent.vue?vue&type=template&id=6001d5d6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthContent_vue_vue_type_template_id_6001d5d6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&");
/* harmony import */ var _SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=script&lang=js& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "747b9ae2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Shared/SharedPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=style&index=0&id=747b9ae2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_style_index_0_id_747b9ae2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Shared/SharedPage.vue?vue&type=template&id=747b9ae2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SharedPage_vue_vue_type_template_id_747b9ae2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);