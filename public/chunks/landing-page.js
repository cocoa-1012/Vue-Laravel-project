(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chunks/landing-page"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'PricingTables',
  components: {
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["HardDriveIcon"]
  },
  data: function data() {
    return {
      plans: undefined
    };
  },
  created: function created() {
    var _this = this;

    axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('/api/public/pricing').then(function (response) {
      _this.plans = response.data;

      _this.$emit('load', response.data);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Index/Components/PageTitle */ "./resources/js/components/Index/Components/PageTitle.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexGetStarted',
  components: {
    InfoIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["InfoIcon"],
    UploadCloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["UploadCloudIcon"],
    ShareIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ShareIcon"],
    ChevronRightIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ChevronRightIcon"],
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["FolderPlusIcon"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["HardDriveIcon"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["SettingsIcon"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Trash2Icon"],
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["SearchIcon"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["CloudIcon"],
    PageTitle: _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_0__["default"],
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ImageIcon"],
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["GridIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["LinkIcon"],
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["StarIcon"],
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["EyeIcon"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexHeroScreenshot',
  components: {
    FolderPlusIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["FolderPlusIcon"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["HardDriveIcon"],
    SettingsIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["SettingsIcon"],
    Trash2Icon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["Trash2Icon"],
    SearchIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["SearchIcon"],
    ImageIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["ImageIcon"],
    GridIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["GridIcon"],
    LinkIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["LinkIcon"],
    StarIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["StarIcon"],
    EyeIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_1__["EyeIcon"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])(['config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Index/Components/PageTitle */ "./resources/js/components/Index/Components/PageTitle.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexMainFeatures',
  components: {
    PageTitle: _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    HardDriveIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["HardDriveIcon"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["CloudIcon"],
    UserIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_0__["UserIcon"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])(['index']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-feather-icons/icons/HardDriveIcon */ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js");
/* harmony import */ var _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Index/Components/PageTitle */ "./resources/js/components/Index/Components/PageTitle.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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





/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexPageHeader',
  components: {
    PageTitle: _components_Index_Components_PageTitle__WEBPACK_IMPORTED_MODULE_1__["default"],
    CreditCardIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_3__["CreditCardIcon"],
    HardDriveIcon: vue_feather_icons_icons_HardDriveIcon__WEBPACK_IMPORTED_MODULE_0__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_4__["mapGetters"])(['index', 'config']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Index_Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Index/Components/PricingTables */ "./resources/js/components/Index/Components/PricingTables.vue");
/* harmony import */ var _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Auth/AuthButton */ "./resources/js/components/Auth/AuthButton.vue");
/* harmony import */ var vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-feather-icons */ "./node_modules/vue-feather-icons/dist/vue-feather-icons.es.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'IndexPricingTables',
  components: {
    PricingTables: _components_Index_Components_PricingTables__WEBPACK_IMPORTED_MODULE_0__["default"],
    AuthButton: _components_Auth_AuthButton__WEBPACK_IMPORTED_MODULE_1__["default"],
    CloudIcon: vue_feather_icons__WEBPACK_IMPORTED_MODULE_2__["CloudIcon"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_3__["mapGetters"])(['index', 'config'])),
  data: function data() {
    return {
      isEmpty: false
    };
  },
  methods: {
    pricingLoaded: function pricingLoaded(pricing) {
      if (pricing.length === 0) this.isEmpty = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Index_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/Index/IndexHeroScreenshot */ "./resources/js/components/Index/IndexHeroScreenshot.vue");
/* harmony import */ var _components_Index_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Index/IndexPricingTables */ "./resources/js/components/Index/IndexPricingTables.vue");
/* harmony import */ var _components_Index_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/Index/IndexMainFeatures */ "./resources/js/components/Index/IndexMainFeatures.vue");
/* harmony import */ var _components_Index_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/Index/IndexNavigation */ "./resources/js/components/Index/IndexNavigation.vue");
/* harmony import */ var _components_Index_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Index/IndexPageHeader */ "./resources/js/components/Index/IndexPageHeader.vue");
/* harmony import */ var _components_Index_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/Index/IndexGetStarted */ "./resources/js/components/Index/IndexGetStarted.vue");
/* harmony import */ var _components_Index_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Index/IndexPageFooter */ "./resources/js/components/Index/IndexPageFooter.vue");
/* harmony import */ var _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/FilesView/Spinner */ "./resources/js/components/FilesView/Spinner.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
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










/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'SaaSLandingPage',
  components: {
    HeroScreenshot: _components_Index_IndexHeroScreenshot__WEBPACK_IMPORTED_MODULE_0__["default"],
    PricingTables: _components_Index_IndexPricingTables__WEBPACK_IMPORTED_MODULE_1__["default"],
    MainFeatures: _components_Index_IndexMainFeatures__WEBPACK_IMPORTED_MODULE_2__["default"],
    GetStarted: _components_Index_IndexGetStarted__WEBPACK_IMPORTED_MODULE_5__["default"],
    Navigation: _components_Index_IndexNavigation__WEBPACK_IMPORTED_MODULE_3__["default"],
    PageHeader: _components_Index_IndexPageHeader__WEBPACK_IMPORTED_MODULE_4__["default"],
    PageFooter: _components_Index_IndexPageFooter__WEBPACK_IMPORTED_MODULE_6__["default"],
    Spinner: _components_FilesView_Spinner__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_8__["mapGetters"])(['config'])),
  data: function data() {
    return {
      isLoading: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.config.allowHomepage) this.$router.push({
      name: 'SignIn'
    }); // Get page content

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.get('/api/content', {
      params: {
        column: 'allow_homepage|footer_content|get_started_description|get_started_title|pricing_description|pricing_title|feature_description_3|feature_title_3|feature_description_2|feature_title_2|feature_description_1|feature_title_1|features_description|features_title|header_description|header_title|section_get_started|section_pricing_content|section_feature_boxes|section_features'
      }
    }).then(function (response) {
      _this.$store.commit('SET_INDEX_CONTENT', response.data);
    })["finally"](function () {
      _this.isLoading = false;
    });
  },
  created: function created() {
    this.$scrollTop();
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

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".plans-wrapper[data-v-217bfada] {\n  box-shadow: 0 7px 20px 5px rgba(26, 36, 55, 0.05);\n  border-radius: 8px;\n  background: white;\n}\n.plan[data-v-217bfada] {\n  text-align: center;\n  flex: 0 0 33%;\n  padding: 55px 25px 75px;\n}\n.plan[data-v-217bfada]:last-child {\n  border-right: none;\n}\n.plan .plan-header .icon path[data-v-217bfada], .plan .plan-header .icon line[data-v-217bfada], .plan .plan-header .icon polyline[data-v-217bfada], .plan .plan-header .icon rect[data-v-217bfada], .plan .plan-header .icon circle[data-v-217bfada] {\n  color: #00BC7E;\n}\n.plan .plan-header .title[data-v-217bfada] {\n  font-size: 1.375em;\n  font-weight: 800;\n  padding-top: 10px;\n}\n.plan .plan-header .description[data-v-217bfada] {\n  font-size: 0.875em;\n  font-weight: 600;\n}\n.plan .plan-features[data-v-217bfada] {\n  margin: 55px 0;\n}\n.plan .plan-features .storage-size[data-v-217bfada] {\n  font-size: 3em;\n  font-weight: 900;\n  line-height: 1.1;\n}\n.plan .plan-features .storage-description[data-v-217bfada] {\n  display: block;\n  font-size: 0.9375em;\n  font-weight: 800;\n}\n.plan .plan-footer .sign-in-button[data-v-217bfada] {\n  width: 100%;\n  text-align: center;\n}\n.plan .plan-footer .price[data-v-217bfada] {\n  color: #00BC7E;\n  font-size: 1.125em;\n  display: block;\n  padding-top: 5px;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-217bfada] {\n  font-size: 0.6875em;\n  color: #1B2539;\n  display: block;\n  font-weight: 300;\n  opacity: 0.45;\n  margin-top: 5px;\n}\n.plans-wrapper[data-v-217bfada] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n}\n@media only screen and (max-width: 960px) {\n.plans-wrapper[data-v-217bfada] {\n    display: block;\n    margin: 0;\n}\n.plans-wrapper .plan[data-v-217bfada] {\n    padding: 30px 25px;\n    border-bottom: 1px solid #F7F7F7;\n    border-right: none;\n}\n}\n@media (prefers-color-scheme: dark) {\n.plans-wrapper[data-v-217bfada] {\n    background: #1e2024;\n}\n.plan[data-v-217bfada] {\n    border-color: rgba(255, 255, 255, 0.02) !important;\n}\n.plan .plan-wrapper[data-v-217bfada] {\n    background: #1e2024;\n}\n.plan .plan-header .title[data-v-217bfada] {\n    color: #bec6cf;\n}\n.plan .plan-header .description[data-v-217bfada] {\n    color: #7d858c;\n}\n.plan .plan-features .storage-size[data-v-217bfada] {\n    color: #bec6cf;\n}\n.plan .plan-features .storage-description[data-v-217bfada] {\n    color: #bec6cf;\n}\n.plan .plan-footer .sign-in-button[data-v-217bfada] {\n    background: rgba(0, 188, 126, 0.1);\n}\n.plan .plan-footer .sign-in-button[data-v-217bfada] .content {\n    color: #00BC7E;\n}\n.plan .plan-footer .price .vat-disclaimer[data-v-217bfada] {\n    color: #bec6cf;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-b73c2bf6] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-b73c2bf6] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-b73c2bf6] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-b73c2bf6] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-b73c2bf6] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-b73c2bf6] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-b73c2bf6] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-b73c2bf6] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-b73c2bf6] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-b73c2bf6] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-b73c2bf6] {\n  position: absolute;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(20) {\n  bottom: -37%;\n  left: 37%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(20) circle[data-v-b73c2bf6], .icons .icon:nth-child(20) line[data-v-b73c2bf6] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(19) {\n  bottom: -21%;\n  left: 23.5%;\n  transform: rotate(-20deg);\n}\n.icons .icon:nth-child(19) path[data-v-b73c2bf6], .icons .icon:nth-child(19) line[data-v-b73c2bf6] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(18) {\n  bottom: -4%;\n  left: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(18) path[data-v-b73c2bf6] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(17) {\n  bottom: -5%;\n  left: 8.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(16) {\n  top: 86%;\n  left: 17%;\n  transform: rotate(18deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(15) {\n  top: 64%;\n  left: 17%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(15) polyline[data-v-b73c2bf6], .icons .icon:nth-child(15) line[data-v-b73c2bf6], .icons .icon:nth-child(15) path[data-v-b73c2bf6] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(14) {\n  top: 44%;\n  left: 28%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(14) polygon[data-v-b73c2bf6] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(13) {\n  top: 33%;\n  left: 16%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(12) {\n  top: 23%;\n  left: 32%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(12) line[data-v-b73c2bf6], .icons .icon:nth-child(12) path[data-v-b73c2bf6] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(1) {\n  top: 35%;\n  right: 49%;\n  transform: rotate(-11deg);\n}\n.icons .icon:nth-child(1) line[data-v-b73c2bf6], .icons .icon:nth-child(1) path[data-v-b73c2bf6] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(2) {\n  top: 12%;\n  right: 45%;\n  transform: rotate(0);\n}\n.icons .icon:nth-child(2) circle[data-v-b73c2bf6], .icons .icon:nth-child(2) path[data-v-b73c2bf6] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(3) {\n  top: 30%;\n  right: 30%;\n  transform: rotate(20deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(4) {\n  top: 14%;\n  right: 14.5%;\n  transform: rotate(-1deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(5) {\n  top: 62%;\n  right: 15.5%;\n  transform: rotate(21deg);\n}\n.icons .icon:nth-child(5) polyline[data-v-b73c2bf6], .icons .icon:nth-child(5) path[data-v-b73c2bf6], .icons .icon:nth-child(5) line[data-v-b73c2bf6] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(6) {\n  top: 66%;\n  right: 26.5%;\n  transform: rotate(0deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(7) {\n  bottom: 3%;\n  right: 21.5%;\n  transform: rotate(16deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(8) {\n  bottom: -13%;\n  right: 16.5%;\n  transform: rotate(0deg);\n}\n.icons .icon:nth-child(8) polygon[data-v-b73c2bf6] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(9) {\n  bottom: -32%;\n  right: 27%;\n  transform: rotate(-20deg);\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(10) {\n  bottom: -5%;\n  right: 34%;\n  transform: rotate(16deg);\n}\n.icons .icon:nth-child(10) rect[data-v-b73c2bf6] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-b73c2bf6]:nth-child(11) {\n  bottom: -28%;\n  right: 44%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(11) polyline[data-v-b73c2bf6], .icons .icon:nth-child(11) line[data-v-b73c2bf6], .icons .icon:nth-child(11) path[data-v-b73c2bf6] {\n  stroke: #FE6057;\n}\n.cloud-bg[data-v-b73c2bf6] {\n  z-index: 0;\n  position: absolute;\n  top: 70px;\n  right: 60px;\n  transform: scale(-1, 1) rotate(13deg);\n}\n.cloud-bg path[data-v-b73c2bf6] {\n  stroke: none;\n  fill: rgba(0, 188, 126, 0.05);\n}\n.page-title[data-v-b73c2bf6] {\n  padding-top: 340px;\n}\n.get-started-button[data-v-b73c2bf6] {\n  display: flex;\n  align-items: center;\n  background: none;\n  outline: none;\n  border: none;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  background: rgba(0, 188, 126, 0.8);\n  padding: 20px 36px;\n  border-radius: 6px;\n  box-shadow: 0 5px 10px 2px rgba(0, 188, 126, 0.34);\n  margin-bottom: 395px;\n  transition: 150ms all ease;\n  position: relative;\n  z-index: 1;\n}\n.get-started-button[data-v-b73c2bf6]:hover {\n  box-shadow: 0 7px 16px 2px rgba(0, 188, 126, 0.4);\n  background: #00bc7e;\n}\n.get-started-button .content[data-v-b73c2bf6] {\n  font-size: 1.1875em;\n  font-weight: 700;\n  margin-right: 8px;\n  color: white;\n}\n.get-started-button polyline[data-v-b73c2bf6] {\n  stroke: white;\n}\n@media only screen and (max-width: 1190px) {\n.get-started-button[data-v-b73c2bf6] {\n    margin-bottom: 280px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title[data-v-b73c2bf6] {\n    padding-top: 20px;\n}\n.get-started-button[data-v-b73c2bf6] {\n    margin-bottom: 30px;\n}\n.cloud-bg[data-v-b73c2bf6],\n  .icons[data-v-b73c2bf6] {\n    display: none;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-258ceb3a] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-258ceb3a] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-258ceb3a] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-258ceb3a] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-258ceb3a] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-258ceb3a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-258ceb3a] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-258ceb3a] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-258ceb3a] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-258ceb3a] {\n    width: 100%;\n}\n}\n.icons .icon[data-v-258ceb3a] {\n  z-index: 0;\n  position: absolute;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(1) {\n  top: -14%;\n  right: 2%;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(2) {\n  top: -5%;\n  right: 14%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-258ceb3a]:nth-child(3) {\n  top: -6.5%;\n  right: 28.5%;\n  transform: rotate(-12deg);\n}\n.icons .icon:nth-child(3) line[data-v-258ceb3a], .icons .icon:nth-child(3) path[data-v-258ceb3a] {\n  stroke: #00BC7E;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(4) {\n  top: -9.5%;\n  right: 41.5%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(4) path[data-v-258ceb3a], .icons .icon:nth-child(4) line[data-v-258ceb3a] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(5) {\n  top: -16%;\n  right: 26%;\n}\n.icons .icon:nth-child(5) circle[data-v-258ceb3a], .icons .icon:nth-child(5) path[data-v-258ceb3a] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(6) {\n  top: -13%;\n  right: 49%;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(7) {\n  top: 2.5%;\n  right: 46%;\n}\n.icons .icon:nth-child(7) polygon[data-v-258ceb3a] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(8) {\n  top: 13%;\n  right: 2.5%;\n  transform: rotate(22deg);\n}\n.icons .icon:nth-child(8) polyline[data-v-258ceb3a], .icons .icon:nth-child(8) path[data-v-258ceb3a], .icons .icon:nth-child(8) line[data-v-258ceb3a] {\n  stroke: #FE6057;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(9) {\n  top: 14%;\n  right: 11%;\n}\n.icons .icon:nth-child(9) circle[data-v-258ceb3a], .icons .icon:nth-child(9) line[data-v-258ceb3a] {\n  stroke: #9D66FE;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(10) {\n  top: 29%;\n  right: 7%;\n  transform: rotate(19deg);\n}\n.icons .icon[data-v-258ceb3a]:nth-child(11) {\n  top: 38%;\n  right: 3%;\n}\n.icons .icon:nth-child(11) polygon[data-v-258ceb3a] {\n  stroke: #FFBD2D;\n}\n.icons .icon[data-v-258ceb3a]:nth-child(12) {\n  top: 50%;\n  right: 11.5%;\n  transform: rotate(-22deg);\n}\n.icons .icon[data-v-258ceb3a]:nth-child(13) {\n  top: 34%;\n  right: 16%;\n  transform: rotate(13deg);\n}\n.icons .icon:nth-child(13) rect[data-v-258ceb3a] {\n  stroke: #00BC7E;\n}\n.hero-screenshot[data-v-258ceb3a] {\n  position: relative;\n  z-index: 1;\n  padding-top: 75px;\n  padding-bottom: 130px;\n}\n.hero-screenshot img[data-v-258ceb3a] {\n  border-radius: 8px;\n  width: 80%;\n  box-shadow: 0 7px 255px rgba(25, 54, 60, 0.1);\n}\n.hero-screenshot img.hero-dark[data-v-258ceb3a] {\n  display: none;\n}\n@media only screen and (max-width: 890px) {\n.icons[data-v-258ceb3a] {\n    display: none;\n}\n.hero-screenshot[data-v-258ceb3a] {\n    padding-top: 40px;\n    padding-bottom: 90px;\n}\n.hero-screenshot img[data-v-258ceb3a] {\n    width: 100%;\n}\n}\n@media (prefers-color-scheme: dark) {\n.hero-screenshot img.hero-light[data-v-258ceb3a] {\n    display: none;\n}\n.hero-screenshot img.hero-dark[data-v-258ceb3a] {\n    display: block;\n    box-shadow: 0 7px 185px rgba(0, 0, 0, 0.8);\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-3c501660] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-3c501660] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-3c501660] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-3c501660] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-3c501660] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-3c501660] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-3c501660] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-3c501660] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-3c501660] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-3c501660] {\n    width: 100%;\n}\n}\n.features[data-v-3c501660] {\n  padding-left: 75px;\n}\n.features .feature[data-v-3c501660] {\n  margin-bottom: 25px;\n}\n.features .feature .title[data-v-3c501660] {\n  font-size: 1.625em;\n  font-weight: 800;\n  margin-bottom: 4px;\n}\n.features .feature .description[data-v-3c501660] {\n  line-height: 1.5;\n  color: rgba(27, 37, 57, 0.7);\n  font-size: 1.125em;\n}\n.features .feature .icon[data-v-3c501660] {\n  border-radius: 12px;\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  margin-bottom: 18px;\n}\n.features .feature .icon svg[data-v-3c501660] {\n  margin: 0 auto;\n}\n.features .feature:nth-child(1) .icon[data-v-3c501660] {\n  background: rgba(255, 189, 45, 0.1);\n}\n.features .feature:nth-child(1) .icon path[data-v-3c501660], .features .feature:nth-child(1) .icon line[data-v-3c501660], .features .feature:nth-child(1) .icon polyline[data-v-3c501660], .features .feature:nth-child(1) .icon rect[data-v-3c501660], .features .feature:nth-child(1) .icon circle[data-v-3c501660] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) .icon[data-v-3c501660] {\n  background: rgba(0, 188, 126, 0.1);\n}\n.features .feature:nth-child(2) .icon path[data-v-3c501660], .features .feature:nth-child(2) .icon line[data-v-3c501660], .features .feature:nth-child(2) .icon polyline[data-v-3c501660], .features .feature:nth-child(2) .icon rect[data-v-3c501660], .features .feature:nth-child(2) .icon circle[data-v-3c501660] {\n  stroke: #00BC7E;\n}\n.features .feature:nth-child(3) .icon[data-v-3c501660] {\n  background: rgba(157, 102, 254, 0.1);\n}\n.features .feature:nth-child(3) .icon path[data-v-3c501660], .features .feature:nth-child(3) .icon line[data-v-3c501660], .features .feature:nth-child(3) .icon polyline[data-v-3c501660], .features .feature:nth-child(3) .icon rect[data-v-3c501660], .features .feature:nth-child(3) .icon circle[data-v-3c501660] {\n  stroke: #9D66FE;\n}\n.content[data-v-3c501660] {\n  margin-top: 107px;\n  display: flex;\n}\n@media only screen and (max-width: 1190px) {\n.hero[data-v-3c501660] {\n    flex: 0 0 60%;\n}\n.hero img[data-v-3c501660] {\n    width: 100%;\n}\n.features[data-v-3c501660] {\n    padding-left: 25px;\n    margin-top: 0px;\n}\n}\n@media only screen and (max-width: 960px) {\n.content[data-v-3c501660] {\n    display: block;\n    margin-top: 40px;\n}\n.features[data-v-3c501660] {\n    margin-top: 50px;\n    padding-left: 0;\n}\n.features .feature[data-v-3c501660] {\n    margin-bottom: 35px;\n}\n.features .feature .title[data-v-3c501660] {\n    font-size: 1.375em;\n}\n.features .feature .description[data-v-3c501660] {\n    font-size: 1em;\n}\n}\n@media (prefers-color-scheme: dark) {\n.features .feature .description[data-v-3c501660] {\n    color: #7d858c;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-1010f736] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-1010f736] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-1010f736] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-1010f736] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-1010f736] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-1010f736] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-1010f736] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-1010f736] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-1010f736] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-1010f736] {\n    width: 100%;\n}\n}\n.features[data-v-1010f736] {\n  display: flex;\n  margin-top: 35px;\n}\n.features .feature[data-v-1010f736] {\n  display: flex;\n  margin-right: 35px;\n}\n.features .feature:nth-child(1) path[data-v-1010f736], .features .feature:nth-child(1) line[data-v-1010f736], .features .feature:nth-child(1) polyline[data-v-1010f736], .features .feature:nth-child(1) rect[data-v-1010f736], .features .feature:nth-child(1) circle[data-v-1010f736] {\n  stroke: #FFBD2D;\n}\n.features .feature:nth-child(2) path[data-v-1010f736], .features .feature:nth-child(2) line[data-v-1010f736], .features .feature:nth-child(2) polyline[data-v-1010f736], .features .feature:nth-child(2) rect[data-v-1010f736], .features .feature:nth-child(2) circle[data-v-1010f736] {\n  stroke: #9D66FE;\n}\n.features .feature[data-v-1010f736]:last-child {\n  margin-right: 0;\n}\n.features .feature .feature-title[data-v-1010f736] {\n  font-size: 0.875em;\n  font-weight: 700;\n}\n.features .feature .feature-icon[data-v-1010f736] {\n  margin-right: 10px;\n}\n.main-header[data-v-1010f736] {\n  padding-top: 70px;\n}\n.sign-up-button[data-v-1010f736] {\n  margin-top: 65px;\n  display: block;\n}\n.sign-up-button .button[data-v-1010f736] {\n  margin-left: 0;\n  margin-right: 0;\n}\n@media only screen and (max-width: 690px) {\n.main-header[data-v-1010f736] {\n    padding-top: 50px;\n}\n.features[data-v-1010f736] {\n    display: block;\n}\n.features .feature[data-v-1010f736] {\n    margin-right: 0;\n    margin-bottom: 15px;\n}\n.features .feature[data-v-1010f736]:last-child {\n    margin-bottom: 0;\n}\n.sign-up-button[data-v-1010f736] {\n    margin-top: 30px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-9d6a01fe] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-9d6a01fe] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-9d6a01fe] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-9d6a01fe] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-9d6a01fe] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-9d6a01fe] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-9d6a01fe] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-9d6a01fe] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-9d6a01fe] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-9d6a01fe] {\n    width: 100%;\n}\n}\n.pricing .cloud-bg[data-v-9d6a01fe] {\n  z-index: 0;\n}\n.pricing .cloud-bg path[data-v-9d6a01fe] {\n  stroke: none;\n  fill: rgba(0, 188, 126, 0.05);\n}\n.pricing .cloud-bg[data-v-9d6a01fe]:first-of-type {\n  position: absolute;\n  top: 30px;\n  right: -130px;\n  transform: scale(-1, 1) rotate(-17deg);\n}\n.pricing .cloud-bg[data-v-9d6a01fe]:last-of-type {\n  position: absolute;\n  bottom: 160px;\n  left: -230px;\n  transform: rotate(13deg);\n}\n.page-title[data-v-9d6a01fe] {\n  position: relative;\n  z-index: 1;\n}\n.page-title.center[data-v-9d6a01fe] {\n  text-align: center;\n}\n.page-title.center .title[data-v-9d6a01fe] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title.center .description[data-v-9d6a01fe] {\n  margin-left: auto;\n  margin-right: auto;\n}\n.page-title .title[data-v-9d6a01fe] {\n  max-width: 580px;\n  font-size: 48px;\n  font-weight: 800;\n  line-height: 1.25;\n  margin-bottom: 15px;\n}\n.page-title .title[data-v-9d6a01fe] span {\n  font-size: 48px;\n}\n.page-title .description[data-v-9d6a01fe] {\n  max-width: 580px;\n  font-size: 1.25em;\n  font-weight: 500;\n  line-height: 1.6;\n  margin-bottom: 30px;\n}\n.pricing[data-v-9d6a01fe] {\n  padding-top: 250px;\n  padding-bottom: 120px;\n}\n.pricing-tables[data-v-9d6a01fe] {\n  margin-top: 50px;\n  margin-bottom: 60px;\n  position: relative;\n  z-index: 1;\n}\n.sign-up-button[data-v-9d6a01fe] {\n  padding-top: 10px;\n  display: block;\n}\n@media only screen and (max-width: 1190px) {\n.cloud-bg[data-v-9d6a01fe] {\n    display: none;\n}\n.pricing[data-v-9d6a01fe] {\n    padding-top: 150px;\n    padding-bottom: 60px;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-title .title[data-v-9d6a01fe] {\n    font-size: 28px;\n    line-height: 1.25;\n    margin-bottom: 15px;\n}\n.page-title .title[data-v-9d6a01fe] span {\n    font-size: 28px;\n}\n.page-title .description[data-v-9d6a01fe] {\n    font-size: 1em;\n    line-height: 1.6;\n    margin-bottom: 30px;\n}\n.pricing[data-v-9d6a01fe] {\n    padding-top: 50px;\n    padding-bottom: 120px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".landing-page[data-v-ad9d0a4c] {\n  overflow-x: hidden;\n}\n.page-wrapper[data-v-ad9d0a4c] {\n  position: relative;\n  margin: 0 auto;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n.page-wrapper.large[data-v-ad9d0a4c] {\n  width: 1490px;\n}\n.page-wrapper.medium[data-v-ad9d0a4c] {\n  width: 1150px;\n}\n.page-wrapper.small[data-v-ad9d0a4c] {\n  width: 890px;\n}\n@media only screen and (max-width: 1390px) {\n.page-wrapper.large[data-v-ad9d0a4c] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 1190px) {\n.page-wrapper.large[data-v-ad9d0a4c] {\n    width: 100%;\n}\n.page-wrapper.medium[data-v-ad9d0a4c] {\n    width: 100%;\n}\n}\n@media only screen and (max-width: 960px) {\n.page-wrapper[data-v-ad9d0a4c] {\n    padding-left: 25px;\n    padding-right: 25px;\n}\n.page-wrapper.small[data-v-ad9d0a4c] {\n    width: 100%;\n}\n}\n", ""]);

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/sass-loader/dist/cjs.js??ref--7-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&");

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

/***/ "./node_modules/vue-feather-icons/icons/HardDriveIcon.js":
/*!***************************************************************!*\
  !*** ./node_modules/vue-feather-icons/icons/HardDriveIcon.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! babel-helper-vue-jsx-merge-props */ "./node_modules/babel-helper-vue-jsx-merge-props/index.js");
/* harmony import */ var babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'HardDriveIcon',
  props: {
    size: {
      type: String,
      default: '24',
      validator: function validator(s) {
        return !isNaN(s) || s.length >= 2 && !isNaN(s.slice(0, s.length - 1)) && s.slice(-1) === 'x';
      }
    }
  },
  functional: true,
  render: function render(h, ctx) {
    var size = ctx.props.size.slice(-1) === 'x' ? ctx.props.size.slice(0, ctx.props.size.length - 1) + 'em' : parseInt(ctx.props.size) + 'px';
    var attrs = ctx.data.attrs || {};
    attrs.width = attrs.width || size;
    attrs.height = attrs.height || size;
    ctx.data.attrs = attrs;
    return h("svg", babel_helper_vue_jsx_merge_props__WEBPACK_IMPORTED_MODULE_0___default()([{
      attrs: {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "2",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      },
      "class": "feather feather-hard-drive"
    }, ctx.data]), [h("line", {
      attrs: {
        x1: "22",
        y1: "12",
        x2: "2",
        y2: "12"
      }
    }), h("path", {
      attrs: {
        d: "M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    }), h("line", {
      attrs: {
        x1: "6",
        y1: "16",
        x2: "6.01",
        y2: "16"
      }
    }), h("line", {
      attrs: {
        x1: "10",
        y1: "16",
        x2: "10.01",
        y2: "16"
      }
    })]);
  }
});

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
  return _vm.plans
    ? _c(
        "div",
        { staticClass: "plans-wrapper" },
        _vm._l(_vm.plans, function(plan, i) {
          return _c("article", { key: i, staticClass: "plan" }, [
            _c("div", { staticClass: "plan-wrapper" }, [
              _c("header", { staticClass: "plan-header" }, [
                _c(
                  "div",
                  { staticClass: "icon" },
                  [_c("hard-drive-icon", { attrs: { size: "26" } })],
                  1
                ),
                _vm._v(" "),
                _c("h1", { staticClass: "title" }, [
                  _vm._v(_vm._s(plan.data.attributes.name))
                ]),
                _vm._v(" "),
                _c("h2", { staticClass: "description" }, [
                  _vm._v(_vm._s(plan.data.attributes.description))
                ])
              ]),
              _vm._v(" "),
              _c("section", { staticClass: "plan-features" }, [
                _c("b", { staticClass: "storage-size" }, [
                  _vm._v(_vm._s(plan.data.attributes.capacity_formatted))
                ]),
                _vm._v(" "),
                _c("span", { staticClass: "storage-description" }, [
                  _vm._v(_vm._s(_vm.$t("page_pricing_tables.storage_capacity")))
                ])
              ]),
              _vm._v(" "),
              _c("footer", { staticClass: "plan-footer" }, [
                _c("b", { staticClass: "price" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(plan.data.attributes.price) +
                      "/" +
                      _vm._s(_vm.$t("global.monthly_ac")) +
                      "\n                    "
                  ),
                  plan.data.attributes.tax_rates.length > 0
                    ? _c("small", { staticClass: "vat-disclaimer" }, [
                        _vm._v(
                          _vm._s(_vm.$t("page_pricing_tables.vat_excluded"))
                        )
                      ])
                    : _vm._e()
                ])
              ])
            ])
          ])
        }),
        0
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _vm.index.section_get_started === "1"
    ? _c(
        "div",
        { staticClass: "page-wrapper large get-started" },
        [
          _c("PageTitle", {
            staticClass: "page-title",
            attrs: {
              type: "center",
              title: _vm.index.get_started_title,
              description: _vm.index.get_started_description
            }
          }),
          _vm._v(" "),
          _c(
            "router-link",
            {
              staticClass: "get-started-button",
              attrs: { tag: "button", to: { name: "SignUp" } }
            },
            [
              _c("span", { staticClass: "content" }, [
                _vm._v(_vm._s(_vm.$t("page_index.get_started_button")))
              ]),
              _vm._v(" "),
              _c("chevron-right-icon", { attrs: { size: "22" } })
            ],
            1
          ),
          _vm._v(" "),
          _c("cloud-icon", { staticClass: "cloud-bg", attrs: { size: "790" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "icons" },
            [
              _c("hard-drive-icon", {
                staticClass: "icon",
                attrs: { size: "42" }
              }),
              _vm._v(" "),
              _c("settings-icon", {
                staticClass: "icon",
                attrs: { size: "22" }
              }),
              _vm._v(" "),
              _c("image-icon", { staticClass: "icon", attrs: { size: "50" } }),
              _vm._v(" "),
              _c("link-icon", { staticClass: "icon", attrs: { size: "24" } }),
              _vm._v(" "),
              _c("trash2-icon", { staticClass: "icon", attrs: { size: "40" } }),
              _vm._v(" "),
              _c("search-icon", { staticClass: "icon", attrs: { size: "18" } }),
              _vm._v(" "),
              _c("eye-icon", { staticClass: "icon", attrs: { size: "36" } }),
              _vm._v(" "),
              _c("star-icon", { staticClass: "icon", attrs: { size: "34" } }),
              _vm._v(" "),
              _c("folder-plus-icon", {
                staticClass: "icon",
                attrs: { size: "20" }
              }),
              _vm._v(" "),
              _c("grid-icon", { staticClass: "icon", attrs: { size: "28" } }),
              _vm._v(" "),
              _c("share-icon", { staticClass: "icon", attrs: { size: "32" } }),
              _vm._v(" "),
              _c("folder-plus-icon", {
                staticClass: "icon",
                attrs: { size: "48" }
              }),
              _vm._v(" "),
              _c("search-icon", { staticClass: "icon", attrs: { size: "34" } }),
              _vm._v(" "),
              _c("star-icon", { staticClass: "icon", attrs: { size: "22" } }),
              _vm._v(" "),
              _c("upload-cloud-icon", {
                staticClass: "icon",
                attrs: { size: "42" }
              }),
              _vm._v(" "),
              _c("grid-icon", { staticClass: "icon", attrs: { size: "18" } }),
              _vm._v(" "),
              _c("settings-icon", {
                staticClass: "icon",
                attrs: { size: "32" }
              }),
              _vm._v(" "),
              _c("link-icon", { staticClass: "icon", attrs: { size: "36" } }),
              _vm._v(" "),
              _c("hard-drive-icon", {
                staticClass: "icon",
                attrs: { size: "22" }
              }),
              _vm._v(" "),
              _c("info-icon", { staticClass: "icon", attrs: { size: "36" } })
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "page-wrapper large hero-screenshot" }, [
    _c("img", {
      staticClass: "hero-light",
      attrs: {
        src: "/assets/images/vuefilemanager-screenshot-light.png",
        alt: _vm.config.app_name
      }
    }),
    _vm._v(" "),
    _c("img", {
      staticClass: "hero-dark",
      attrs: {
        src: "/assets/images/vuefilemanager-screenshot-dark.png",
        alt: _vm.config.app_name
      }
    }),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "icons" },
      [
        _c("link-icon", { staticClass: "icon", attrs: { size: "20" } }),
        _vm._v(" "),
        _c("image-icon", { staticClass: "icon", attrs: { size: "38" } }),
        _vm._v(" "),
        _c("hard-drive-icon", { staticClass: "icon", attrs: { size: "34" } }),
        _vm._v(" "),
        _c("folder-plus-icon", { staticClass: "icon", attrs: { size: "40" } }),
        _vm._v(" "),
        _c("settings-icon", { staticClass: "icon", attrs: { size: "18" } }),
        _vm._v(" "),
        _c("search-icon", { staticClass: "icon", attrs: { size: "24" } }),
        _vm._v(" "),
        _c("star-icon", { staticClass: "icon", attrs: { size: "18" } }),
        _vm._v(" "),
        _c("trash2-icon", { staticClass: "icon", attrs: { size: "32" } }),
        _vm._v(" "),
        _c("search-icon", { staticClass: "icon", attrs: { size: "18" } }),
        _vm._v(" "),
        _c("eye-icon", { staticClass: "icon", attrs: { size: "30" } }),
        _vm._v(" "),
        _c("star-icon", { staticClass: "icon", attrs: { size: "30" } }),
        _vm._v(" "),
        _c("folder-plus-icon", { staticClass: "icon", attrs: { size: "16" } }),
        _vm._v(" "),
        _c("grid-icon", { staticClass: "icon", attrs: { size: "20" } })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true& ***!
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
    "section",
    { staticClass: "main-features page-wrapper medium" },
    [
      _vm.index.section_features === "1"
        ? _c("PageTitle", {
            attrs: {
              type: "center",
              title: _vm.index.features_title,
              description: _vm.index.features_description
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _vm.index.section_feature_boxes === "1"
        ? _c("div", { staticClass: "content" }, [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "features" }, [
              _c("div", { staticClass: "feature" }, [
                _c(
                  "div",
                  { staticClass: "icon" },
                  [_c("cloud-icon", { attrs: { size: "24" } })],
                  1
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_title_1) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "description" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_description_1) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feature" }, [
                _c(
                  "div",
                  { staticClass: "icon" },
                  [_c("user-icon", { attrs: { size: "24" } })],
                  1
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_title_2) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "description" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_description_2) +
                      "\n                "
                  )
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "feature" }, [
                _c(
                  "div",
                  { staticClass: "icon" },
                  [_c("hard-drive-icon", { attrs: { size: "24" } })],
                  1
                ),
                _vm._v(" "),
                _c("h3", { staticClass: "title" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_title_3) +
                      "\n                "
                  )
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "description" }, [
                  _vm._v(
                    "\n                    " +
                      _vm._s(_vm.index.feature_description_3) +
                      "\n                "
                  )
                ])
              ])
            ])
          ])
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hero" }, [
      _c("img", {
        attrs: { src: "/assets/images/hero-Illustration.svg", alt: "Hero" }
      })
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
    "header",
    { staticClass: "main-header page-wrapper medium" },
    [
      _c("PageTitle", {
        attrs: {
          title: _vm.index.header_title,
          description: _vm.index.header_description
        }
      }),
      _vm._v(" "),
      _vm.config.userRegistration
        ? _c(
            "router-link",
            {
              staticClass: "sign-up-button",
              attrs: { to: { name: "SignUp" } }
            },
            [
              _c("AuthButton", {
                staticClass: "button",
                attrs: {
                  icon: "chevron-right",
                  text: _vm.$t("page_index.sign_up_button")
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.config.isSaaS
        ? _c("div", { staticClass: "features" }, [
            _c(
              "div",
              { staticClass: "feature" },
              [
                _c("credit-card-icon", {
                  staticClass: "feature-icon",
                  attrs: { size: "19" }
                }),
                _vm._v(" "),
                _c("b", { staticClass: "feature-title" }, [
                  _vm._v(_vm._s(_vm.$t("page_index.sign_feature_1")))
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "feature" },
              [
                _c("hard-drive-icon", {
                  staticClass: "feature-icon",
                  attrs: { size: "19" }
                }),
                _vm._v(" "),
                _c("b", { staticClass: "feature-title" }, [
                  _vm._v(
                    _vm._s(
                      _vm.$t("page_index.sign_feature_2", {
                        defaultSpace: _vm.config.storageDefaultSpaceFormatted
                      })
                    )
                  )
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true& ***!
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
  return !_vm.isEmpty &&
    _vm.index.section_pricing_content === "1" &&
    _vm.config.stripe_public_key
    ? _c(
        "div",
        { staticClass: "page-wrapper medium pricing" },
        [
          _c(
            "div",
            { staticClass: "page-title center", attrs: { id: "pricing" } },
            [
              _c("h1", {
                staticClass: "title",
                domProps: { innerHTML: _vm._s(_vm.index.pricing_title) }
              })
            ]
          ),
          _vm._v(" "),
          _c("PricingTables", {
            staticClass: "pricing-tables",
            on: { load: _vm.pricingLoaded }
          }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "page-title center" },
            [
              _c("h2", { staticClass: "description" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.index.pricing_description) +
                    "\n        "
                )
              ]),
              _vm._v(" "),
              _c(
                "router-link",
                {
                  staticClass: "sign-up-button",
                  attrs: { to: { name: "SignUp" } }
                },
                [
                  _c("AuthButton", {
                    staticClass: "button",
                    attrs: {
                      icon: "chevron-right",
                      text: _vm.$t("page_index.sign_up_button")
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("cloud-icon", { staticClass: "cloud-bg", attrs: { size: "800" } }),
          _vm._v(" "),
          _c("cloud-icon", { staticClass: "cloud-bg", attrs: { size: "560" } })
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "landing-page" }, [
    !_vm.isLoading
      ? _c(
          "div",
          [
            _c("Navigation", { staticClass: "page-wrapper medium" }),
            _vm._v(" "),
            _c("PageHeader"),
            _vm._v(" "),
            _c("HeroScreenshot"),
            _vm._v(" "),
            _c("MainFeatures"),
            _vm._v(" "),
            _vm.config.isSaaS ? _c("PricingTables") : _vm._e(),
            _vm._v(" "),
            _c("GetStarted"),
            _vm._v(" "),
            _c("PageFooter")
          ],
          1
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.isLoading ? _c("div", [_c("Spinner")], 1) : _vm._e()
  ])
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

/***/ "./resources/js/components/Index/Components/PricingTables.vue":
/*!********************************************************************!*\
  !*** ./resources/js/components/Index/Components/PricingTables.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=template&id=217bfada&scoped=true& */ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true&");
/* harmony import */ var _PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& */ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "217bfada",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/Components/PricingTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PricingTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=style&index=0&id=217bfada&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_style_index_0_id_217bfada_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PricingTables.vue?vue&type=template&id=217bfada&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/Components/PricingTables.vue?vue&type=template&id=217bfada&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PricingTables_vue_vue_type_template_id_217bfada_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index/IndexGetStarted.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Index/IndexGetStarted.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true& */ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true&");
/* harmony import */ var _IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& */ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b73c2bf6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/IndexGetStarted.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexGetStarted.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=style&index=0&id=b73c2bf6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_style_index_0_id_b73c2bf6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexGetStarted.vue?vue&type=template&id=b73c2bf6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexGetStarted_vue_vue_type_template_id_b73c2bf6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index/IndexHeroScreenshot.vue":
/*!***************************************************************!*\
  !*** ./resources/js/components/Index/IndexHeroScreenshot.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true& */ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true&");
/* harmony import */ var _IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& */ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "258ceb3a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/IndexHeroScreenshot.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=style&index=0&id=258ceb3a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_style_index_0_id_258ceb3a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexHeroScreenshot.vue?vue&type=template&id=258ceb3a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexHeroScreenshot_vue_vue_type_template_id_258ceb3a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index/IndexMainFeatures.vue":
/*!*************************************************************!*\
  !*** ./resources/js/components/Index/IndexMainFeatures.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true& */ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true&");
/* harmony import */ var _IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& */ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c501660",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/IndexMainFeatures.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexMainFeatures.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=style&index=0&id=3c501660&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_style_index_0_id_3c501660_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexMainFeatures.vue?vue&type=template&id=3c501660&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexMainFeatures_vue_vue_type_template_id_3c501660_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index/IndexPageHeader.vue":
/*!***********************************************************!*\
  !*** ./resources/js/components/Index/IndexPageHeader.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true& */ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true&");
/* harmony import */ var _IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& */ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1010f736",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/IndexPageHeader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPageHeader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=style&index=0&id=1010f736&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_style_index_0_id_1010f736_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPageHeader.vue?vue&type=template&id=1010f736&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPageHeader_vue_vue_type_template_id_1010f736_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/Index/IndexPricingTables.vue":
/*!**************************************************************!*\
  !*** ./resources/js/components/Index/IndexPricingTables.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true& */ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true&");
/* harmony import */ var _IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=script&lang=js& */ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& */ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "9d6a01fe",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Index/IndexPricingTables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPricingTables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=style&index=0&id=9d6a01fe&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_style_index_0_id_9d6a01fe_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/Index/IndexPricingTables.vue?vue&type=template&id=9d6a01fe&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_IndexPricingTables_vue_vue_type_template_id_9d6a01fe_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/views/Index/SaaSLandingPage.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/Index/SaaSLandingPage.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true& */ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true&");
/* harmony import */ var _SaaSLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaaSLandingPage.vue?vue&type=script&lang=js& */ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& */ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SaaSLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ad9d0a4c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Index/SaaSLandingPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaaSLandingPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--7-3!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=style&index=0&id=ad9d0a4c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_sass_loader_dist_cjs_js_ref_7_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_style_index_0_id_ad9d0a4c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/views/Index/SaaSLandingPage.vue?vue&type=template&id=ad9d0a4c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaaSLandingPage_vue_vue_type_template_id_ad9d0a4c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);