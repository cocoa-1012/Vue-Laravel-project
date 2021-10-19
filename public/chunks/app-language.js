(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/app-language"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_FilesView_Icons_SortingAndPreviewIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/Icons/SortingAndPreviewIcon */ "./resources/js/components/FilesView/Icons/SortingAndPreviewIcon.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'MobileActionButton',
  props: ['icon'],
  components: {
    SortingAndPreviewIcon: _components_FilesView_Icons_SortingAndPreviewIcon__WEBPACK_IMPORTED_MODULE_1__["default"],
    CheckSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckSquareIcon"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CreditCardIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["FolderPlusIcon"],
    UserPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserPlusIcon"],
    XSquareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XSquareIcon"],
    CheckIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CheckIcon"],
    TrashIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["TrashIcon"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["PlusIcon"],
    ListIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ListIcon"],
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["GridIcon"]
  }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
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
//
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
  name: 'SearchInput',
  components: {
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["SearchIcon"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["XIcon"]
  },
  data: function data() {
    return {
      query: undefined
    };
  },
  methods: {
    clearInput: function clearInput() {
      this.query = undefined;
      this.$emit('reset-query');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
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
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'PageHeader',
  props: ['title', 'canBack'],
  components: {
    ChevronLeftIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["ChevronLeftIcon"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vee-validate/dist/vee-validate.full */ "./node_modules/vee-validate/dist/vee-validate.full.js");
/* harmony import */ var vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/FilesView/MobileActionButton */ "./resources/js/components/FilesView/MobileActionButton.vue");
/* harmony import */ var _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Others/Forms/SwitchInput */ "./resources/js/components/Others/Forms/SwitchInput.vue");
/* harmony import */ var _components_Others_Forms_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Others/Forms/SearchInput */ "./resources/js/components/Others/Forms/SearchInput.vue");
/* harmony import */ var _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Others/Forms/FormLabel */ "./resources/js/components/Others/Forms/FormLabel.vue");
/* harmony import */ var _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Mobile/MobileHeader */ "./resources/js/components/Mobile/MobileHeader.vue");
/* harmony import */ var _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/FilesView/ButtonBase */ "./resources/js/components/FilesView/ButtonBase.vue");
/* harmony import */ var _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Others/Forms/InfoBox */ "./resources/js/components/Others/Forms/InfoBox.vue");
/* harmony import */ var _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/Others/PageHeader */ "./resources/js/components/Others/PageHeader.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _bus__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/bus */ "./resources/js/bus.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Language',
  components: {
    ValidationProvider: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationProvider"],
    ValidationObserver: vee_validate_dist_vee_validate_full__WEBPACK_IMPORTED_MODULE_0__["ValidationObserver"],
    MobileActionButton: _components_FilesView_MobileActionButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    MobileHeader: _components_Mobile_MobileHeader__WEBPACK_IMPORTED_MODULE_5__["default"],
    SearchInput: _components_Others_Forms_SearchInput__WEBPACK_IMPORTED_MODULE_3__["default"],
    SwitchInput: _components_Others_Forms_SwitchInput__WEBPACK_IMPORTED_MODULE_2__["default"],
    ButtonBase: _components_FilesView_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"],
    PageHeader: _components_Others_PageHeader__WEBPACK_IMPORTED_MODULE_8__["default"],
    FormLabel: _components_Others_Forms_FormLabel__WEBPACK_IMPORTED_MODULE_4__["default"],
    PlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__["PlusIcon"],
    InfoBox: _components_Others_Forms_InfoBox__WEBPACK_IMPORTED_MODULE_7__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_9__["default"],
    XIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_10__["XIcon"]
  },
  data: function data() {
    return {
      searchedTranslationResults: undefined,
      referenceTranslations: undefined,
      defaultLanguageLocale: undefined,
      selectedLanguage: undefined,
      languages: undefined,
      query: ''
    };
  },
  watch: {
    query: Object(lodash__WEBPACK_IMPORTED_MODULE_11__["debounce"])(function (val) {
      this.searchedTranslationResults = Object(lodash__WEBPACK_IMPORTED_MODULE_11__["omitBy"])(this.selectedLanguage.data.attributes.translations, function (string) {
        return !string.toLowerCase().includes(val.toLowerCase());
      });
      var container = document.getElementById('single-page');
      container.scrollTop = 0;
    }, 300)
  },
  computed: {
    isSearching: function isSearching() {
      return this.searchedTranslationResults && this.query !== '';
    },
    translationList: function translationList() {
      return this.isSearching ? this.searchedTranslationResults : this.selectedLanguage.data.attributes.translations;
    }
  },
  methods: {
    setDefaultLanguage: function setDefaultLanguage() {
      this.$updateText('/settings', 'language', this.selectedLanguage.data.attributes.locale);
      this.defaultLanguageLocale = this.selectedLanguage.data.attributes.locale;
      setTimeout(function () {
        return location.reload();
      }, 500);
    },
    getLanguages: function getLanguages() {
      var _this = this;

      axios.get('/api/admin/languages').then(function (response) {
        _this.languages = response.data.data;
        _this.referenceTranslations = response.data.meta.reference_translations;
        _this.selectedLanguage = response.data.meta.current_language;
        _this.defaultLanguageLocale = response.data.meta.current_language.data.attributes.locale;
      })["catch"](function () {
        _this.$isSomethingWrong();
      });
    },
    getLanguage: function getLanguage(language) {
      var _this2 = this;

      this.selectedLanguage = undefined;
      axios.get("/api/admin/languages/".concat(language.data.id)).then(function (response) {
        _this2.selectedLanguage = response.data;
      })["catch"](function () {
        _this2.$isSomethingWrong();
      });
    },
    deleteLanguage: function deleteLanguage(language) {
      _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$emit('confirm:open', {
        title: "Delete \"".concat(language.data.attributes.name, "\" language?"),
        message: 'Your language will be permanently deleted.',
        buttonColor: 'danger-solid',
        action: {
          id: language.data.id,
          operation: 'delete-language'
        }
      });
    },
    createLanguage: function createLanguage() {
      _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$emit('popup:open', {
        name: 'create-language'
      });
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    this.getLanguages();
    _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$on('reload:languages', function () {
      return _this3.getLanguages();
    });
    _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$on('action:confirmed', function (data) {
      if (data.operation === 'delete-language') axios["delete"]("/api/admin/languages/".concat(data.id)).then(function () {
        return _this3.getLanguages();
      })["catch"](function () {
        return _this3.$isSomethingWrong();
      });
    });
  },
  destroyed: function destroyed() {
    _bus__WEBPACK_IMPORTED_MODULE_12__["events"].$off('action:confirmed');
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".mobile-action-button[data-v-95f75cf0] {\n  background: #f4f5f6;\n  margin-right: 15px;\n  border-radius: 8px;\n  padding: 7px 10px;\n  cursor: pointer;\n  border: none;\n  transition: 150ms all ease;\n  /*&:hover {\n        background: rgba($theme, 0.1);\n\n        .icon {\n            path, line, polyline, rect, circle {\n                stroke: $theme;\n            }\n        }\n\n        .label {\n            color: $theme;\n        }\n    }*/\n}\n.mobile-action-button .flex[data-v-95f75cf0] {\n  display: flex;\n  align-items: center;\n}\n.mobile-action-button .icon[data-v-95f75cf0] {\n  margin-right: 10px;\n  font-size: 0.875em;\n}\n.mobile-action-button .icon path[data-v-95f75cf0], .mobile-action-button .icon line[data-v-95f75cf0], .mobile-action-button .icon polyline[data-v-95f75cf0], .mobile-action-button .icon rect[data-v-95f75cf0], .mobile-action-button .icon circle[data-v-95f75cf0] {\n  transition: 150ms all ease;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n  transition: 150ms all ease;\n  font-size: 0.875em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.mobile-action-button[data-v-95f75cf0]:active {\n  transform: scale(0.95);\n}\n@media (prefers-color-scheme: dark) {\n.mobile-action-button[data-v-95f75cf0] {\n    background: #1e2024;\n}\n.mobile-action-button path[data-v-95f75cf0], .mobile-action-button line[data-v-95f75cf0], .mobile-action-button polyline[data-v-95f75cf0], .mobile-action-button rect[data-v-95f75cf0], .mobile-action-button circle[data-v-95f75cf0] {\n    stroke: #00BC7E;\n}\n.mobile-action-button .label[data-v-95f75cf0] {\n    color: #bec6cf;\n}\n}\n", ""]);

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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-3158c5a1] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-3158c5a1] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-3158c5a1] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3158c5a1] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-3158c5a1] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-3158c5a1] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-3158c5a1] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-3158c5a1] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-3158c5a1]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-3158c5a1] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-3158c5a1] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-3158c5a1] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3158c5a1] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-3158c5a1] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-3158c5a1] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-3158c5a1] {\n  margin-left: 20px;\n}\n.error-message[data-v-3158c5a1] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-3158c5a1] {\n  width: 100%;\n}\ntextarea[data-v-3158c5a1],\ninput[type=\"password\"][data-v-3158c5a1],\ninput[type=\"text\"][data-v-3158c5a1],\ninput[type=\"number\"][data-v-3158c5a1],\ninput[type=\"email\"][data-v-3158c5a1] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-3158c5a1],\ninput[type=\"password\"].is-error[data-v-3158c5a1],\ninput[type=\"text\"].is-error[data-v-3158c5a1],\ninput[type=\"number\"].is-error[data-v-3158c5a1],\ninput[type=\"email\"].is-error[data-v-3158c5a1] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-3158c5a1]::-moz-placeholder, input[type=\"password\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"text\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"number\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"email\"][data-v-3158c5a1]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3158c5a1]:-ms-input-placeholder, input[type=\"password\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"text\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"number\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"email\"][data-v-3158c5a1]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3158c5a1]::placeholder,\ninput[type=\"password\"][data-v-3158c5a1]::placeholder,\ninput[type=\"text\"][data-v-3158c5a1]::placeholder,\ninput[type=\"number\"][data-v-3158c5a1]::placeholder,\ninput[type=\"email\"][data-v-3158c5a1]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-3158c5a1]:focus,\ninput[type=\"password\"][data-v-3158c5a1]:focus,\ninput[type=\"text\"][data-v-3158c5a1]:focus,\ninput[type=\"number\"][data-v-3158c5a1]:focus,\ninput[type=\"email\"][data-v-3158c5a1]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-3158c5a1],\ninput[type=\"password\"][disabled][data-v-3158c5a1],\ninput[type=\"text\"][disabled][data-v-3158c5a1],\ninput[type=\"number\"][disabled][data-v-3158c5a1],\ninput[type=\"email\"][disabled][data-v-3158c5a1] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-3158c5a1] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-3158c5a1], .additional-link a[data-v-3158c5a1] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-3158c5a1]:hover, .additional-link a[data-v-3158c5a1]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-3158c5a1] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-3158c5a1] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-3158c5a1], .form textarea[data-v-3158c5a1] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-3158c5a1] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-3158c5a1] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-3158c5a1] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-3158c5a1] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-3158c5a1] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-3158c5a1] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-3158c5a1] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-3158c5a1] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-3158c5a1],\n  input[type=\"password\"][data-v-3158c5a1],\n  input[type=\"number\"][data-v-3158c5a1],\n  input[type=\"text\"][data-v-3158c5a1],\n  input[type=\"email\"][data-v-3158c5a1] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-3158c5a1] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-3158c5a1] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-3158c5a1] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-3158c5a1] {\n    color: #bec6cf;\n}\ntextarea[data-v-3158c5a1],\n  input[type=\"password\"][data-v-3158c5a1],\n  input[type=\"text\"][data-v-3158c5a1],\n  input[type=\"number\"][data-v-3158c5a1],\n  input[type=\"email\"][data-v-3158c5a1] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-3158c5a1]::-moz-placeholder, input[type=\"password\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"text\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"number\"][data-v-3158c5a1]::-moz-placeholder, input[type=\"email\"][data-v-3158c5a1]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3158c5a1]:-ms-input-placeholder, input[type=\"password\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"text\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"number\"][data-v-3158c5a1]:-ms-input-placeholder, input[type=\"email\"][data-v-3158c5a1]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-3158c5a1]::placeholder,\n  input[type=\"password\"][data-v-3158c5a1]::placeholder,\n  input[type=\"text\"][data-v-3158c5a1]::placeholder,\n  input[type=\"number\"][data-v-3158c5a1]::placeholder,\n  input[type=\"email\"][data-v-3158c5a1]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-3158c5a1],\n  input[type=\"password\"][disabled][data-v-3158c5a1],\n  input[type=\"text\"][disabled][data-v-3158c5a1],\n  input[type=\"number\"][disabled][data-v-3158c5a1],\n  input[type=\"email\"][disabled][data-v-3158c5a1] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.search-bar[data-v-3158c5a1] {\n  padding: 7px 0px;\n  position: relative;\n  width: 100%;\n  border-radius: 8px;\n}\n.search-bar input[data-v-3158c5a1] {\n  background: #f4f5f6;\n  border-radius: 8px;\n  outline: 0;\n  padding: 9px 20px 9px 43px;\n  font-weight: 700;\n  font-size: 1em;\n  width: 100%;\n  height: 50px;\n  min-width: 175px;\n  transition: 0.15s all ease;\n  border: 1px solid transparent;\n  -webkit-appearance: none;\n  box-shadow: none;\n}\n.search-bar input[data-v-3158c5a1]::-moz-placeholder {\n  color: #A4ADB6;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.search-bar input[data-v-3158c5a1]:-ms-input-placeholder {\n  color: #A4ADB6;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.search-bar input[data-v-3158c5a1]::placeholder {\n  color: #A4ADB6;\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.search-bar input[data-v-3158c5a1]:focus {\n  border-width: 1px;\n  border-style: solid;\n}\n.search-bar input:focus + .icon path[data-v-3158c5a1] {\n  color: inherit;\n}\n.search-bar .icon[data-v-3158c5a1] {\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: 11px 15px;\n  display: flex;\n  align-items: center;\n}\n.search-bar .icon circle[data-v-3158c5a1],\n.search-bar .icon line[data-v-3158c5a1] {\n  color: #A4ADB6;\n}\n.search-bar .icon .pointer[data-v-3158c5a1] {\n  cursor: pointer;\n}\n@media (prefers-color-scheme: dark) {\n.search-bar input[data-v-3158c5a1] {\n    background: #1e2024;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-header[data-v-3c80dd26] {\n  display: flex;\n  align-items: center;\n  background: white;\n  z-index: 9;\n  width: 100%;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n.page-header .title[data-v-3c80dd26] {\n  font-size: 1.125em;\n  font-weight: 700;\n  color: #1B2539;\n}\n.page-header .go-back[data-v-3c80dd26] {\n  margin-right: 10px;\n  cursor: pointer;\n}\n.page-header .go-back svg[data-v-3c80dd26] {\n  vertical-align: middle;\n  margin-top: -4px;\n}\n@media only screen and (max-width: 960px) {\n.page-header .title[data-v-3c80dd26] {\n    font-size: 1.125em;\n}\n}\n@media only screen and (max-width: 690px) {\n.page-header[data-v-3c80dd26] {\n    display: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.page-header[data-v-3c80dd26] {\n    background: #131414;\n}\n.page-header .title[data-v-3c80dd26] {\n    color: #bec6cf;\n}\n.page-header .icon path[data-v-3c80dd26] {\n    fill: #00BC7E;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form[data-v-14bdb1eb] {\n  max-width: 700px;\n}\n.form.inline-form[data-v-14bdb1eb] {\n  display: flex;\n  position: relative;\n  justify-content: center;\n  margin: 0 auto;\n}\n.form.inline-form .input-wrapper[data-v-14bdb1eb] {\n  position: relative;\n}\n.form.inline-form .input-wrapper .error-message[data-v-14bdb1eb] {\n  position: absolute;\n  left: 0;\n  bottom: -25px;\n}\n.form.block-form .wrapper-inline[data-v-14bdb1eb] {\n  display: flex;\n  margin: 0 -15px;\n}\n.form.block-form .wrapper-inline .block-wrapper[data-v-14bdb1eb] {\n  width: 100%;\n  padding: 0 15px;\n}\n.form.block-form .block-wrapper[data-v-14bdb1eb] {\n  margin-bottom: 32px;\n}\n.form.block-form .block-wrapper label[data-v-14bdb1eb] {\n  font-size: 0.875em;\n  color: rgba(27, 37, 57, 0.8);\n  font-weight: 700;\n  display: block;\n  margin-bottom: 7px;\n  text-align: left;\n}\n.form.block-form .block-wrapper[data-v-14bdb1eb]:last-child {\n  margin-bottom: 0;\n}\n.form.block-form .button[data-v-14bdb1eb] {\n  margin-top: 50px;\n}\n.form .inline-wrapper[data-v-14bdb1eb] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.form .inline-wrapper .switch-label .input-help[data-v-14bdb1eb] {\n  padding-top: 0;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-14bdb1eb] {\n  font-weight: 700;\n  color: #1B2539;\n  font-size: 1em;\n  margin-bottom: 5px;\n}\n.form .input-help[data-v-14bdb1eb] {\n  font-size: 0.75em;\n  color: rgba(27, 37, 57, 0.7);\n  line-height: 1.35;\n  padding-top: 10px;\n  display: block;\n}\n.single-line-form[data-v-14bdb1eb] {\n  display: flex;\n}\n.single-line-form .submit-button[data-v-14bdb1eb] {\n  margin-left: 20px;\n}\n.error-message[data-v-14bdb1eb] {\n  font-size: 0.875em;\n  color: #fd397a;\n  padding-top: 5px;\n  display: block;\n  text-align: left;\n}\ntextarea[data-v-14bdb1eb] {\n  width: 100%;\n}\ntextarea[data-v-14bdb1eb],\ninput[type=\"password\"][data-v-14bdb1eb],\ninput[type=\"text\"][data-v-14bdb1eb],\ninput[type=\"number\"][data-v-14bdb1eb],\ninput[type=\"email\"][data-v-14bdb1eb] {\n  border: 1px solid transparent;\n  transition: 150ms all ease;\n  font-size: 1em;\n  border-radius: 8px;\n  padding: 13px 20px;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  font-weight: 700;\n  outline: 0;\n  width: 100%;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.12);\n}\ntextarea.is-error[data-v-14bdb1eb],\ninput[type=\"password\"].is-error[data-v-14bdb1eb],\ninput[type=\"text\"].is-error[data-v-14bdb1eb],\ninput[type=\"number\"].is-error[data-v-14bdb1eb],\ninput[type=\"email\"].is-error[data-v-14bdb1eb] {\n  border-color: #fd397a;\n  box-shadow: 0 1px 5px rgba(253, 57, 122, 0.3);\n}\ntextarea[data-v-14bdb1eb]::-moz-placeholder, input[type=\"password\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"text\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"number\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"email\"][data-v-14bdb1eb]::-moz-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"password\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"text\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"number\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"email\"][data-v-14bdb1eb]:-ms-input-placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-14bdb1eb]::placeholder,\ninput[type=\"password\"][data-v-14bdb1eb]::placeholder,\ninput[type=\"text\"][data-v-14bdb1eb]::placeholder,\ninput[type=\"number\"][data-v-14bdb1eb]::placeholder,\ninput[type=\"email\"][data-v-14bdb1eb]::placeholder {\n  color: rgba(27, 37, 57, 0.5);\n  font-size: 0.9375em;\n}\ntextarea[data-v-14bdb1eb]:focus,\ninput[type=\"password\"][data-v-14bdb1eb]:focus,\ninput[type=\"text\"][data-v-14bdb1eb]:focus,\ninput[type=\"number\"][data-v-14bdb1eb]:focus,\ninput[type=\"email\"][data-v-14bdb1eb]:focus {\n  border-color: #00BC7E;\n  box-shadow: 0 1px 5px rgba(0, 188, 126, 0.3);\n}\ntextarea[disabled][data-v-14bdb1eb],\ninput[type=\"password\"][disabled][data-v-14bdb1eb],\ninput[type=\"text\"][disabled][data-v-14bdb1eb],\ninput[type=\"number\"][disabled][data-v-14bdb1eb],\ninput[type=\"email\"][disabled][data-v-14bdb1eb] {\n  background: white;\n  color: rgba(27, 37, 57, 0.8);\n  -webkit-text-fill-color: rgba(27, 37, 57, 0.8);\n  opacity: 1;\n  cursor: not-allowed;\n}\n.additional-link[data-v-14bdb1eb] {\n  font-size: 1em;\n  margin-top: 50px;\n  display: block;\n  color: #1B2539;\n}\n.additional-link b[data-v-14bdb1eb], .additional-link a[data-v-14bdb1eb] {\n  color: #00BC7E;\n  cursor: pointer;\n}\n.additional-link b[data-v-14bdb1eb]:hover, .additional-link a[data-v-14bdb1eb]:hover {\n  text-decoration: underline;\n}\n@media only screen and (max-width: 1024px) {\n.form[data-v-14bdb1eb] {\n    max-width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.form .button[data-v-14bdb1eb] {\n    margin-top: 20px;\n    width: 100%;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form input[data-v-14bdb1eb], .form textarea[data-v-14bdb1eb] {\n    width: 100%;\n    min-width: 100%;\n}\n.form.block-form .block-wrapper[data-v-14bdb1eb] {\n    display: block;\n}\n.form.block-form .block-wrapper label[data-v-14bdb1eb] {\n    width: 100%;\n    padding-right: 0;\n    display: block;\n    margin-bottom: 7px;\n    text-align: left !important;\n    font-size: 0.875em;\n    padding-top: 0;\n}\n.form.block-form .button[data-v-14bdb1eb] {\n    margin-top: 25px;\n    margin-left: 0;\n    margin-right: 0;\n}\n.form.inline-form[data-v-14bdb1eb] {\n    display: block;\n}\n.form.inline-form .input-wrapper .error-message[data-v-14bdb1eb] {\n    position: relative;\n    bottom: 0;\n}\n.form .button[data-v-14bdb1eb] {\n    padding: 14px 32px;\n}\n.single-line-form[data-v-14bdb1eb] {\n    display: block;\n}\n.single-line-form .submit-button[data-v-14bdb1eb] {\n    margin-left: 0;\n    margin-top: 20px;\n    width: 100%;\n}\ntextarea[data-v-14bdb1eb],\n  input[type=\"password\"][data-v-14bdb1eb],\n  input[type=\"number\"][data-v-14bdb1eb],\n  input[type=\"text\"][data-v-14bdb1eb],\n  input[type=\"email\"][data-v-14bdb1eb] {\n    padding: 14px 20px;\n}\n}\n@media only screen and (max-width: 690px) {\n.form.block-form .wrapper-inline[data-v-14bdb1eb] {\n    display: block;\n}\n}\n@media (prefers-color-scheme: dark) {\n.form .input-help[data-v-14bdb1eb] {\n    color: #7d858c;\n}\n.form.block-form .block-wrapper label[data-v-14bdb1eb] {\n    color: #bec6cf;\n}\n.form .inline-wrapper .switch-label .input-label[data-v-14bdb1eb] {\n    color: #bec6cf;\n}\ntextarea[data-v-14bdb1eb],\n  input[type=\"password\"][data-v-14bdb1eb],\n  input[type=\"text\"][data-v-14bdb1eb],\n  input[type=\"number\"][data-v-14bdb1eb],\n  input[type=\"email\"][data-v-14bdb1eb] {\n    border-color: #1e2024;\n    background: #1e2024;\n    color: #bec6cf;\n}\ntextarea[data-v-14bdb1eb]::-moz-placeholder, input[type=\"password\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"text\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"number\"][data-v-14bdb1eb]::-moz-placeholder, input[type=\"email\"][data-v-14bdb1eb]::-moz-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"password\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"text\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"number\"][data-v-14bdb1eb]:-ms-input-placeholder, input[type=\"email\"][data-v-14bdb1eb]:-ms-input-placeholder {\n    color: #7d858c;\n}\ntextarea[data-v-14bdb1eb]::placeholder,\n  input[type=\"password\"][data-v-14bdb1eb]::placeholder,\n  input[type=\"text\"][data-v-14bdb1eb]::placeholder,\n  input[type=\"number\"][data-v-14bdb1eb]::placeholder,\n  input[type=\"email\"][data-v-14bdb1eb]::placeholder {\n    color: #7d858c;\n}\ntextarea[disabled][data-v-14bdb1eb],\n  input[type=\"password\"][disabled][data-v-14bdb1eb],\n  input[type=\"text\"][disabled][data-v-14bdb1eb],\n  input[type=\"number\"][disabled][data-v-14bdb1eb],\n  input[type=\"email\"][disabled][data-v-14bdb1eb] {\n    background: #1e2024;\n    color: rgba(125, 133, 140, 0.8);\n    -webkit-text-fill-color: rgba(125, 133, 140, 0.8);\n}\n}\n.router-link-active.border-bottom-theme[data-v-14bdb1eb] {\n  border-bottom-color: #00BC7E !important;\n}\n.router-link-active .text-theme[data-v-14bdb1eb] {\n  color: #00BC7E !important;\n}\n.group:hover .group-hover-text-theme[data-v-14bdb1eb] {\n  color: #00BC7E !important;\n}\n.active .active-text-theme[data-v-14bdb1eb] {\n  color: #00BC7E;\n}\n.sticky[data-v-14bdb1eb] {\n  position: -webkit-sticky;\n  position: sticky;\n}\n.top-65[data-v-14bdb1eb] {\n  top: 65px;\n}\n.dynamic-content[data-v-14bdb1eb] {\n  position: relative;\n}\n.dynamic-content .spinner[data-v-14bdb1eb] {\n  margin-top: 0 !important;\n}\n.menu-list-wrapper.horizontal[data-v-14bdb1eb] {\n  display: none;\n}\n.search-bar-wrapper[data-v-14bdb1eb] {\n  background: white;\n  padding: 0 10px 0 10px;\n  margin: 0 -10px;\n  top: 58px;\n  z-index: 3;\n}\n.content-page[data-v-14bdb1eb] {\n  display: flex;\n  max-width: 1000px;\n  margin: 20px auto 0;\n}\n.content-page .content[data-v-14bdb1eb] {\n  width: 100%;\n  position: relative;\n}\n.disable-switch[data-v-14bdb1eb] {\n  cursor: not-allowed;\n}\n.disable-switch[data-v-14bdb1eb] .text-right {\n  pointer-events: none;\n}\n.info-box[data-v-14bdb1eb] {\n  margin-bottom: 32px;\n}\n.side-content[data-v-14bdb1eb] {\n  flex: 0 0 225px;\n}\n.side-content .button-add-language[data-v-14bdb1eb] {\n  margin-top: 30px;\n}\n.side-content .languages-wrapper .language-label-wrapper[data-v-14bdb1eb] {\n  margin-bottom: 5px;\n}\n.side-content .languages-wrapper .language-label-wrapper .language-label[data-v-14bdb1eb] {\n  color: #A4ADB6;\n  font-weight: 700;\n  font-size: 0.75em;\n  margin-top: 20px;\n}\n.side-content .languages-wrapper .all-language-wrapper .language[data-v-14bdb1eb] {\n  display: flex;\n  align-items: center;\n  padding: 12px 25px 12px 0px;\n  cursor: pointer;\n}\n.side-content .languages-wrapper .all-language-wrapper .language:hover .icon[data-v-14bdb1eb] {\n  display: block;\n}\n.side-content .languages-wrapper .all-language-wrapper .language .name[data-v-14bdb1eb] {\n  color: #1B2539;\n  font-weight: 700;\n  font-size: 0.8125em;\n  cursor: pointer;\n}\n.side-content .languages-wrapper .all-language-wrapper .language .icon[data-v-14bdb1eb] {\n  display: none;\n  margin-left: auto;\n  cursor: pointer;\n}\n@media only screen and (max-width: 1024px) {\n.wrapper[data-v-14bdb1eb] {\n    flex-direction: column;\n}\n.wrapper .side-content[data-v-14bdb1eb] {\n    margin-bottom: 70px;\n}\n.wrapper .languages-wrapper[data-v-14bdb1eb] {\n    margin-top: 0px;\n}\n}\n@media only screen and (max-width: 790px) {\n.menu-list-wrapper.horizontal[data-v-14bdb1eb] {\n    position: -webkit-sticky;\n    position: sticky;\n    top: 120px;\n    display: flex;\n    z-index: 7;\n}\n.menu-list-wrapper.horizontal .menu-list-item[data-v-14bdb1eb] {\n    margin-top: 0;\n}\n.menu-list-wrapper.horizontal .menu-list-item[data-v-14bdb1eb]:last-child {\n    padding-left: 0;\n}\n.content-page[data-v-14bdb1eb] {\n    display: block;\n}\n.content-page .side-content[data-v-14bdb1eb],\n  .content-page .search-bar-wrapper.desktop[data-v-14bdb1eb] {\n    display: none;\n}\n.content-page .search-bar-wrapper[data-v-14bdb1eb] {\n    top: 60px;\n    margin-bottom: 10px !important;\n}\n.content-page .info-box[data-v-14bdb1eb] {\n    margin-bottom: 30px;\n}\n}\n@media only screen and (max-width: 1024px) {\n.search-bar-wrapper[data-v-14bdb1eb] {\n    top: 58px;\n    z-index: 7;\n}\n}\n@media only screen and (max-width: 690px) {\n.menu-list-wrapper.horizontal[data-v-14bdb1eb] {\n    top: 95px;\n}\n.content-page .search-bar-wrapper[data-v-14bdb1eb] {\n    top: 35px;\n}\n}\n@media (prefers-color-scheme: dark) {\n.search-bar-wrapper[data-v-14bdb1eb] {\n    background: #131414;\n}\n.language .name[data-v-14bdb1eb] {\n    color: #bec6cf !important;\n}\n.language-label[data-v-14bdb1eb] {\n    color: #7d858c !important;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
  return _c("button", { staticClass: "mobile-action-button" }, [
    _c(
      "div",
      { staticClass: "flex" },
      [
        _vm.icon === "credit-card"
          ? _c("credit-card-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "folder-plus"
          ? _c("folder-plus-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th-list"
          ? _c("list-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "trash"
          ? _c("trash-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "th"
          ? _c("grid-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "user-plus"
          ? _c("user-plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "plus"
          ? _c("plus-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "check-square"
          ? _c("check-square-icon", {
              staticClass: "icon",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "x-square"
          ? _c("x-square-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "check"
          ? _c("check-icon", { staticClass: "icon", attrs: { size: "15" } })
          : _vm._e(),
        _vm._v(" "),
        _vm.icon === "preview-sorting"
          ? _c("sorting-and-preview-icon", {
              staticClass: "icon preview-sorting",
              attrs: { size: "15" }
            })
          : _vm._e(),
        _vm._v(" "),
        _c("span", { staticClass: "label" }, [_vm._t("default")], 2)
      ],
      1
    )
  ])
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "search-bar" }, [
    !_vm.query
      ? _c(
          "div",
          { staticClass: "icon" },
          [_c("search-icon", { attrs: { size: "19" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.query
      ? _c(
          "div",
          { staticClass: "icon", on: { click: _vm.clearInput } },
          [_c("x-icon", { staticClass: "pointer", attrs: { size: "19" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("input", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.query,
          expression: "query"
        }
      ],
      staticClass: "query focus-border-theme",
      attrs: {
        type: "text",
        name: "searchInput",
        placeholder: _vm.$t("search_translations")
      },
      domProps: { value: _vm.query },
      on: {
        input: [
          function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.query = $event.target.value
          },
          function($event) {
            return _vm.$emit("input", _vm.query)
          }
        ]
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& ***!
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
  return _c("div", { staticClass: "page-header" }, [
    _vm.canBack
      ? _c(
          "div",
          {
            staticClass: "go-back",
            on: {
              click: function($event) {
                return _vm.$router.back()
              }
            }
          },
          [_c("chevron-left-icon", { attrs: { size: "17" } })],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "content" }, [
      _c("h1", { staticClass: "title" }, [_vm._v(_vm._s(_vm.title))])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true& ***!
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
  return _c("div", { attrs: { id: "single-page" } }, [
    _c(
      "div",
      { attrs: { id: "page-content" } },
      [
        _c("MobileHeader", {
          attrs: { title: _vm.$t("routes_title.language") }
        }),
        _vm._v(" "),
        _c("PageHeader", { attrs: { title: _vm.$t("routes_title.language") } }),
        _vm._v(" "),
        _vm.languages
          ? _c("div", { staticClass: "content-page" }, [
              _c("div", { staticClass: "side-content" }, [
                _c(
                  "div",
                  { staticClass: "sticky top-65" },
                  [
                    _c(
                      "div",
                      {
                        staticClass:
                          "languages-wrapper page-tab from-fixed-width"
                      },
                      [
                        _c("div", { staticClass: "language-label-wrapper" }, [
                          _c("label", { staticClass: "language-label" }, [
                            _vm._v(_vm._s(_vm.$t("languages")))
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "all-language-wrapper" },
                          _vm._l(_vm.languages, function(language) {
                            return _c(
                              "div",
                              {
                                key: language.data.id,
                                staticClass: "language group",
                                on: {
                                  click: function($event) {
                                    return _vm.getLanguage(language)
                                  }
                                }
                              },
                              [
                                _c(
                                  "label",
                                  {
                                    staticClass: "name",
                                    class: {
                                      active:
                                        _vm.selectedLanguage &&
                                        _vm.selectedLanguage.data.attributes
                                          .locale ===
                                          language.data.attributes.locale
                                    }
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass:
                                          "active-text-theme group-hover-text-theme"
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(language.data.attributes.name)
                                        )
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                language.data.attributes.locale !== "en"
                                  ? _c("x-icon", {
                                      staticClass: "icon",
                                      attrs: { size: "17" },
                                      on: {
                                        click: function($event) {
                                          $event.stopPropagation()
                                          return _vm.deleteLanguage(language)
                                        }
                                      }
                                    })
                                  : _vm._e()
                              ],
                              1
                            )
                          }),
                          0
                        )
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "MobileActionButton",
                      {
                        staticClass: "button-add-language",
                        attrs: { icon: "plus" },
                        nativeOn: {
                          click: function($event) {
                            return _vm.createLanguage.apply(null, arguments)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.$t("add_language")) +
                            "\n                    "
                        )
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "form block-form content" }, [
                _c(
                  "div",
                  { staticClass: "block-wrapper sticky search-bar-wrapper" },
                  [
                    _c("SearchInput", {
                      on: {
                        "reset-query": function($event) {
                          _vm.query = ""
                        }
                      },
                      model: {
                        value: _vm.query,
                        callback: function($$v) {
                          _vm.query = $$v
                        },
                        expression: "query"
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "menu-list-wrapper horizontal" },
                  [
                    _vm._l(_vm.languages, function(language) {
                      return _c(
                        "div",
                        {
                          key: language.data.id,
                          staticClass:
                            "menu-list-item link border-bottom-theme",
                          class: {
                            "router-link-active":
                              _vm.selectedLanguage &&
                              _vm.selectedLanguage.data.attributes.locale ===
                                language.data.attributes.locale
                          },
                          on: {
                            click: function($event) {
                              return _vm.getLanguage(language)
                            }
                          }
                        },
                        [
                          _c("div", { staticClass: "label text-theme" }, [
                            _vm._v(
                              "\n                            " +
                                _vm._s(language.data.attributes.name) +
                                "\n                        "
                            )
                          ])
                        ]
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "menu-list-item link border-bottom-theme",
                        on: { click: _vm.createLanguage }
                      },
                      [
                        _c(
                          "div",
                          { staticClass: "icon text-theme" },
                          [_c("plus-icon", { attrs: { size: "17" } })],
                          1
                        )
                      ]
                    )
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "dynamic-content" },
                  [
                    !_vm.selectedLanguage
                      ? _c("Spinner", { staticClass: "spinner" })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.selectedLanguage
                      ? _c(
                          "div",
                          [
                            !_vm.isSearching
                              ? _c(
                                  "div",
                                  [
                                    _c(
                                      "FormLabel",
                                      { attrs: { icon: "settings" } },
                                      [
                                        _vm._v(
                                          "\n                                " +
                                            _vm._s(
                                              _vm.$t("language_settings")
                                            ) +
                                            "\n                            "
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
                                            _vm._s(_vm.$t("language_name")) +
                                              ":"
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("ValidationProvider", {
                                          staticClass: "input-wrapper",
                                          attrs: {
                                            tag: "div",
                                            mode: "passive",
                                            name: "App Description",
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
                                                            _vm.selectedLanguage
                                                              .data.attributes
                                                              .name,
                                                          expression:
                                                            "selectedLanguage.data.attributes.name"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "focus-border-theme",
                                                      class: {
                                                        "is-error": errors[0]
                                                      },
                                                      attrs: {
                                                        placeholder: _vm.$t(
                                                          "admin_settings.appearance.description_plac"
                                                        ),
                                                        type: "text"
                                                      },
                                                      domProps: {
                                                        value:
                                                          _vm.selectedLanguage
                                                            .data.attributes
                                                            .name
                                                      },
                                                      on: {
                                                        input: [
                                                          function($event) {
                                                            if (
                                                              $event.target
                                                                .composing
                                                            ) {
                                                              return
                                                            }
                                                            _vm.$set(
                                                              _vm
                                                                .selectedLanguage
                                                                .data
                                                                .attributes,
                                                              "name",
                                                              $event.target
                                                                .value
                                                            )
                                                          },
                                                          function($event) {
                                                            return _vm.$updateText(
                                                              "/admin/languages/" +
                                                                _vm
                                                                  .selectedLanguage
                                                                  .data.id,
                                                              "name",
                                                              _vm
                                                                .selectedLanguage
                                                                .data.attributes
                                                                .name
                                                            )
                                                          }
                                                        ]
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
                                            false,
                                            3770139897
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
                                        _c(
                                          "div",
                                          { staticClass: "input-wrapper" },
                                          [
                                            _c(
                                              "div",
                                              { staticClass: "inline-wrapper" },
                                              [
                                                _c(
                                                  "div",
                                                  {
                                                    staticClass: "switch-label"
                                                  },
                                                  [
                                                    _c(
                                                      "label",
                                                      {
                                                        staticClass:
                                                          "input-label"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                " +
                                                            _vm._s(
                                                              _vm.$t(
                                                                "set_as_default_language"
                                                              )
                                                            ) +
                                                            ":\n                                            "
                                                        )
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "small",
                                                      {
                                                        staticClass:
                                                          "input-help"
                                                      },
                                                      [
                                                        _vm._v(
                                                          "\n                                                If this language is set as default, app will appear in this language for all users.\n                                            "
                                                        )
                                                      ]
                                                    )
                                                  ]
                                                ),
                                                _vm._v(" "),
                                                _c("SwitchInput", {
                                                  staticClass: "switch",
                                                  class: {
                                                    "disable-switch":
                                                      _vm.selectedLanguage.data
                                                        .attributes.locale ===
                                                      this.defaultLanguageLocale
                                                  },
                                                  attrs: {
                                                    state:
                                                      _vm.selectedLanguage.data
                                                        .attributes.locale ===
                                                      this.defaultLanguageLocale
                                                  },
                                                  on: {
                                                    input:
                                                      _vm.setDefaultLanguage
                                                  }
                                                })
                                              ],
                                              1
                                            )
                                          ]
                                        )
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c("FormLabel", { staticClass: "mt-70" }, [
                                      _vm._v(
                                        "\n                                " +
                                          _vm._s(_vm.$t("edit_translations")) +
                                          "\n                            "
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c("InfoBox", { staticClass: "info-box" }, [
                                      _c("p", [
                                        _vm._v(
                                          "Please preserve in your translations special string variables defined in format as "
                                        ),
                                        _c("b", { staticClass: "text-theme" }, [
                                          _vm._v(":variable")
                                        ]),
                                        _vm._v(" or "),
                                        _c("b", { staticClass: "text-theme" }, [
                                          _vm._v("{variable}")
                                        ]),
                                        _vm._v(".")
                                      ])
                                    ])
                                  ],
                                  1
                                )
                              : _vm._e(),
                            _vm._v(" "),
                            _vm._l(_vm.translationList, function(
                              translation,
                              key
                            ) {
                              return _c(
                                "div",
                                { key: key, staticClass: "block-wrapper" },
                                [
                                  _c("label", [
                                    _vm._v(
                                      " " +
                                        _vm._s(_vm.referenceTranslations[key]) +
                                        ":"
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c("ValidationProvider", {
                                    staticClass: "input-wrapper",
                                    attrs: {
                                      tag: "div",
                                      name: "Language string",
                                      rules: "required"
                                    },
                                    scopedSlots: _vm._u(
                                      [
                                        {
                                          key: "default",
                                          fn: function(ref) {
                                            var errors = ref.errors
                                            return [
                                              _c("textarea", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.selectedLanguage.data
                                                        .attributes
                                                        .translations[key],
                                                    expression:
                                                      "selectedLanguage.data.attributes.translations[key]"
                                                  }
                                                ],
                                                staticClass:
                                                  "focus-border-theme",
                                                class: {
                                                  "is-error": errors[0]
                                                },
                                                attrs: {
                                                  rows:
                                                    _vm.selectedLanguage.data
                                                      .attributes.translations[
                                                      key
                                                    ].length >= 80
                                                      ? 3
                                                      : 1
                                                },
                                                domProps: {
                                                  value:
                                                    _vm.selectedLanguage.data
                                                      .attributes.translations[
                                                      key
                                                    ]
                                                },
                                                on: {
                                                  input: [
                                                    function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.selectedLanguage
                                                          .data.attributes
                                                          .translations,
                                                        key,
                                                        $event.target.value
                                                      )
                                                    },
                                                    function($event) {
                                                      return _vm.$updateText(
                                                        "/admin/languages/" +
                                                          _vm.selectedLanguage
                                                            .data.id +
                                                          "/strings",
                                                        key,
                                                        _vm.selectedLanguage
                                                          .data.attributes
                                                          .translations[key]
                                                      )
                                                    }
                                                  ]
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
                              )
                            })
                          ],
                          2
                        )
                      : _vm._e()
                  ],
                  1
                )
              ])
            ])
          : _vm._e(),
        _vm._v(" "),
        !_vm.languages ? _c("Spinner") : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue":
/*!******************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony import */ var _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=script&lang=js& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "95f75cf0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/FilesView/MobileActionButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&":
/*!****************************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=style&index=0&id=95f75cf0&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_style_index_0_id_95f75cf0_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/FilesView/MobileActionButton.vue?vue&type=template&id=95f75cf0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileActionButton_vue_vue_type_template_id_95f75cf0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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

/***/ "./resources/js/components/Others/Forms/SearchInput.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Others/Forms/SearchInput.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true& */ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true&");
/* harmony import */ var _SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& */ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3158c5a1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/Forms/SearchInput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchInput.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=style&index=0&id=3158c5a1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_style_index_0_id_3158c5a1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/Forms/SearchInput.vue?vue&type=template&id=3158c5a1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchInput_vue_vue_type_template_id_3158c5a1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue":
/*!*******************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& */ "./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&");
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c80dd26",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Others/PageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=style&index=0&id=3c80dd26&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_style_index_0_id_3c80dd26_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Others/PageHeader.vue?vue&type=template&id=3c80dd26&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_template_id_3c80dd26_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Language.vue?vue&type=template&id=14bdb1eb&scoped=true& */ "./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true&");
/* harmony import */ var _Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Language.vue?vue&type=script&lang=js& */ "./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& */ "./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "14bdb1eb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Admin/Languages/Language.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Language.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=style&index=0&id=14bdb1eb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_style_index_0_id_14bdb1eb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Language.vue?vue&type=template&id=14bdb1eb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Admin/Languages/Language.vue?vue&type=template&id=14bdb1eb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Language_vue_vue_type_template_id_14bdb1eb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);