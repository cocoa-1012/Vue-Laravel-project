(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{ASoH:function(e,a,t){"use strict";var r={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(t("s/ZW"),t("KHd+")),o=Object(i.a)(r,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("button",{staticClass:"button outline"},[t("span",{staticClass:"text-label"},[e._v(e._s(e.text))]),e._v(" "),e.loading?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):e._e(),e._v(" "),!e.loading&&e.icon?t("span",{staticClass:"icon"},[t("FontAwesomeIcon",{attrs:{icon:e.icon}})],1):e._e()])}),[],!1,null,"59e2dfc0",null);a.a=o.exports},Dcbv:function(e,a,t){"use strict";t.r(a);var r=t("o0o1"),i=t.n(r),o=t("A5+z"),d=t("bDRN"),s=t("4TWA"),n=t("eZ9V"),l=t("KnjL"),p=t("j8qy"),b=t("ASoH"),u=t("CjXH"),c=t("TJPC"),v=t("vDqi"),m=t.n(v);function f(e,a,t,r,i,o,d){try{var s=e[o](d),n=s.value}catch(e){return void t(e)}s.done?a(n):Promise.resolve(n).then(r,i)}var g={name:"EnvironmentSetup",components:{AuthContentWrapper:d.a,ValidationProvider:o.ValidationProvider,ValidationObserver:o.ValidationObserver,SettingsIcon:u.U,SelectInput:s.a,AuthContent:p.a,AuthButton:b.a,FormLabel:n.a,required:c.a,InfoBox:l.a},watch:{"storage.driver":function(){this.storage.region=""},"storage.region":function(e){"spaces"===this.storage.driver&&(this.storage.endpoint="https://"+e+".digitaloceanspaces.com"),"wasabi"===this.storage.driver&&(this.storage.endpoint="https://s3."+e+".wasabisys.com"),"backblaze"===this.storage.driver&&(this.storage.endpoint="https://s3."+e+".backblazeb2.com")}},computed:{regionList:function(){switch(this.storage.driver){case"s3":return this.s3Regions;case"spaces":return this.digitalOceanRegions;case"wasabi":return this.wasabiRegions;case"backblaze":return this.backblazeRegions}}},data:function(){return{isLoading:!1,wasabiRegions:[{label:"US East 1 (N. Virginia)",value:"us-east-1"},{label:"US East 2 (N. Virginia)",value:"us-east-2"},{label:"US West 1 (Oregon)",value:"us-west-1"},{label:"EU Central 1 (Amsterdam)",value:"eu-central-1"}],backblazeRegions:[{label:"us-west-001",value:"us-west-001"},{label:"us-west-002",value:"us-west-002"},{label:"eu-central-003",value:"eu-central-003"}],digitalOceanRegions:[{label:"New York",value:"nyc3"},{label:"San Francisco",value:"sfo2"},{label:"Amsterdam",value:"ams3"},{label:"Singapore",value:"sgp1"},{label:"Frankfurt",value:"fra1"}],s3Regions:[{label:"us-east-1",value:"us-east-1"},{label:"us-east-2",value:"us-east-2"},{label:"us-west-1",value:"us-west-1"},{label:"us-west-2",value:"us-west-2"},{label:"af-south-1",value:"af-south-1"},{label:"ap-east-1",value:"ap-east-1"},{label:"ap-south-1",value:"ap-south-1"},{label:"ap-northeast-2",value:"ap-northeast-2"},{label:"ap-southeast-1",value:"ap-southeast-1"},{label:"ap-southeast-2",value:"ap-southeast-2"},{label:"ap-northeast-1",value:"ap-northeast-1"},{label:"ca-central-1",value:"ca-central-1"},{label:"eu-central-1",value:"eu-central-1"},{label:"eu-west-1",value:"eu-west-1"},{label:"eu-west-2",value:"eu-west-2"},{label:"eu-south-1",value:"eu-south-1"},{label:"eu-west-3",value:"eu-west-3"},{label:"eu-north-1",value:"eu-north-1"},{label:"me-south-1",value:"me-south-1"},{label:"sa-east-1",value:"sa-east-1"}],storageServiceList:[{label:"Local Driver",value:"local"},{label:"Amazon Web Services S3",value:"s3"},{label:"Digital Ocean Spaces",value:"spaces"},{label:"Object Cloud Storage by Wasabi",value:"wasabi"},{label:"Backblaze B2 Cloud Storage",value:"backblaze"}],encryptionList:[{label:"TLS",value:"tls"},{label:"SSL",value:"ssl"}],mailDriverList:[{label:"smtp",value:"smtp"},{label:"sendmail",value:"sendmail"},{label:"mailgun",value:"mailgun"},{label:"ses",value:"ses"},{label:"postmark",value:"postmark"},{label:"log",value:"log"},{label:"array",value:"array"}],storage:{driver:"local",key:"",secret:"",endpoint:"",region:"",bucket:""},mail:{driver:"smtp",host:"",port:"",username:"",password:"",encryption:""}}},methods:{EnvironmentSetupSubmit:function(){var e,a=this;return(e=i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.$refs.environmentSetup.validate();case 2:if(e.sent){e.next=5;break}return e.abrupt("return");case 5:a.isLoading=!0,m.a.post("/api/setup/environment-setup",{storage:a.storage,mail:a.mail}).then((function(e){a.isLoading=!1,a.$router.push({name:"AppSetup"})})).catch((function(e){a.isLoading=!1}));case 7:case"end":return e.stop()}}),e)})),function(){var a=this,t=arguments;return new Promise((function(r,i){var o=e.apply(a,t);function d(e){f(o,r,i,d,s,"next",e)}function s(e){f(o,r,i,d,s,"throw",e)}d(void 0)}))})()}},created:function(){this.$scrollTop()}},h=(t("o3s6"),t("KHd+")),x=Object(h.a)(g,(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("AuthContentWrapper",{ref:"auth"},[t("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[t("div",{staticClass:"content-headline"},[t("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),e._v(" "),t("h1",[e._v("Setup Wizard")]),e._v(" "),t("h2",[e._v("Set up your storage driver and email client.")])],1),e._v(" "),t("ValidationObserver",{ref:"environmentSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(a){return a.preventDefault(),e.EnvironmentSetupSubmit.apply(null,arguments)}},scopedSlots:e._u([{key:"default",fn:function(a){a.invalid;return[t("InfoBox",[t("p",[e._v("If you don’t know which storage driver set, keep selected "),t("b",[e._v("'Local Driver'")]),e._v(". For more info, where\n                    you can host your files "),t("a",{attrs:{href:"https://vuefilemanager.com/docs/guide/storage.html#introduction",target:"_blank"}},[e._v("visit our guide")]),e._v(".")])]),e._v(" "),t("FormLabel",[e._v("Storage Setup")]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Storage Service:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Storage Service",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("SelectInput",{attrs:{options:e.storageServiceList,default:"local",placeholder:"Select your storage service",isError:r[0]},model:{value:e.storage.driver,callback:function(a){e.$set(e.storage,"driver",a)},expression:"storage.driver"}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),"local"!==e.storage.driver?t("div",{staticClass:"storage-additionals"},[t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Key:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Key",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.key,expression:"storage.key"}],class:{"is-error":r[0]},attrs:{placeholder:"Paste your key",type:"text"},domProps:{value:e.storage.key},on:{input:function(a){a.target.composing||e.$set(e.storage,"key",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Secret:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Secret",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.secret,expression:"storage.secret"}],class:{"is-error":r[0]},attrs:{placeholder:"Paste your secret",type:"text"},domProps:{value:e.storage.secret},on:{input:function(a){a.target.composing||e.$set(e.storage,"secret",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Region:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Region",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("SelectInput",{key:e.storage.driver,attrs:{options:e.regionList,placeholder:"Select your region",isError:r[0]},model:{value:e.storage.region,callback:function(a){e.$set(e.storage,"region",a)},expression:"storage.region"}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e(),e._v(" "),t("small",{staticClass:"input-help"},[e._v("\n                            Select your region where is your bucket/space created.\n                        ")])]}}],null,!0)})],1),e._v(" "),"s3"!==e.storage.driver?t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Endpoint URL:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Endpoint",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.endpoint,expression:"storage.endpoint"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your endpoint",type:"text",readonly:""},domProps:{value:e.storage.endpoint},on:{input:function(a){a.target.composing||e.$set(e.storage,"endpoint",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1):e._e(),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Bucket:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Bucket",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.storage.bucket,expression:"storage.bucket"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your bucket name",type:"text"},domProps:{value:e.storage.bucket},on:{input:function(a){a.target.composing||e.$set(e.storage,"bucket",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e(),e._v(" "),t("small",{staticClass:"input-help"},[e._v("\n                            Provide your created unique bucket name\n                        ")])]}}],null,!0)})],1),e._v(" "),t("InfoBox",[t("p",[e._v("Later, you can edit these data in your "),t("b",[e._v(".env")]),e._v(" file which is located in app root folder.")])])],1):e._e(),e._v(" "),t("FormLabel",{staticClass:"mt-70"},[e._v("Email Setup")]),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Driver:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Driver",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("SelectInput",{attrs:{options:e.mailDriverList,default:"smtp",placeholder:"Select your mail driver",isError:r[0]},model:{value:e.mail.driver,callback:function(a){e.$set(e.mail,"driver",a)},expression:"mail.driver"}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Host:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Host",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.host,expression:"mail.host"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail host",type:"text"},domProps:{value:e.mail.host},on:{input:function(a){a.target.composing||e.$set(e.mail,"host",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Port:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Port",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.port,expression:"mail.port"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail port",type:"text"},domProps:{value:e.mail.port},on:{input:function(a){a.target.composing||e.$set(e.mail,"port",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Username:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Username",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.username,expression:"mail.username"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail username",type:"text"},domProps:{value:e.mail.username},on:{input:function(a){a.target.composing||e.$set(e.mail,"username",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Password:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Password",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("input",{directives:[{name:"model",rawName:"v-model",value:e.mail.password,expression:"mail.password"}],class:{"is-error":r[0]},attrs:{placeholder:"Type your mail password",type:"text"},domProps:{value:e.mail.password},on:{input:function(a){a.target.composing||e.$set(e.mail,"password",a.target.value)}}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"block-wrapper"},[t("label",[e._v("Mail Encryption:")]),e._v(" "),t("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Mail Encryption",rules:"required"},scopedSlots:e._u([{key:"default",fn:function(a){var r=a.errors;return[t("SelectInput",{attrs:{options:e.encryptionList,placeholder:"Select your mail encryption",isError:r[0]},model:{value:e.mail.encryption,callback:function(a){e.$set(e.mail,"encryption",a)},expression:"mail.encryption"}}),e._v(" "),r[0]?t("span",{staticClass:"error-message"},[e._v(e._s(r[0]))]):e._e()]}}],null,!0)})],1),e._v(" "),t("div",{staticClass:"submit-wrapper"},[t("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Set General Settings",loading:e.isLoading,disabled:e.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"3b0bdd66",null);a.default=x.exports},GwTe:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".button[data-v-59e2dfc0]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-59e2dfc0]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-59e2dfc0]{margin-left:12px;font-size:1em}.button.solid[data-v-59e2dfc0]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-59e2dfc0]{color:#fff}.button.outline[data-v-59e2dfc0]{border:2px solid #1b2539}.button.outline .text-label[data-v-59e2dfc0]{color:#1b2539}.button.outline .icon path[data-v-59e2dfc0]{fill:#00bc7e}.button.outline[data-v-59e2dfc0]:hover{border-color:#00bc7e}.button.outline:hover .text-label[data-v-59e2dfc0]{color:#00bc7e}@media (prefers-color-scheme:dark){.button.outline[data-v-59e2dfc0]{background:#131414;border-color:#bec6cf}.button.outline .text-label[data-v-59e2dfc0]{color:#bec6cf}}.sync-alt[data-v-59e2dfc0]{-webkit-animation:spin-data-v-59e2dfc0 1s linear infinite;animation:spin-data-v-59e2dfc0 1s linear infinite}@-webkit-keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},Idvm:function(e,a,t){var r=t("lig4");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(e.exports=r.locals)},Jx8r:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},K2cP:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form[data-v-3b0bdd66]{max-width:700px}.form.inline-form[data-v-3b0bdd66]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-3b0bdd66]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-3b0bdd66]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-3b0bdd66]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-3b0bdd66]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-3b0bdd66]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-3b0bdd66]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-3b0bdd66]:last-child{margin-bottom:0}.form.block-form .button[data-v-3b0bdd66]{margin-top:50px}.form .inline-wrapper[data-v-3b0bdd66]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-3b0bdd66]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-3b0bdd66]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-3b0bdd66]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-3b0bdd66]{display:flex}.single-line-form .submit-button[data-v-3b0bdd66]{margin-left:20px}.error-message[data-v-3b0bdd66]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-3b0bdd66]{width:100%}input[type=email][data-v-3b0bdd66],input[type=number][data-v-3b0bdd66],input[type=password][data-v-3b0bdd66],input[type=text][data-v-3b0bdd66],textarea[data-v-3b0bdd66]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-3b0bdd66],input[type=number].is-error[data-v-3b0bdd66],input[type=password].is-error[data-v-3b0bdd66],input[type=text].is-error[data-v-3b0bdd66],textarea.is-error[data-v-3b0bdd66]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-3b0bdd66]::-moz-placeholder,input[type=number][data-v-3b0bdd66]::-moz-placeholder,input[type=password][data-v-3b0bdd66]::-moz-placeholder,input[type=text][data-v-3b0bdd66]::-moz-placeholder,textarea[data-v-3b0bdd66]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-3b0bdd66]:-ms-input-placeholder,input[type=number][data-v-3b0bdd66]:-ms-input-placeholder,input[type=password][data-v-3b0bdd66]:-ms-input-placeholder,input[type=text][data-v-3b0bdd66]:-ms-input-placeholder,textarea[data-v-3b0bdd66]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-3b0bdd66]::placeholder,input[type=number][data-v-3b0bdd66]::placeholder,input[type=password][data-v-3b0bdd66]::placeholder,input[type=text][data-v-3b0bdd66]::placeholder,textarea[data-v-3b0bdd66]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-3b0bdd66]:focus,input[type=number][data-v-3b0bdd66]:focus,input[type=password][data-v-3b0bdd66]:focus,input[type=text][data-v-3b0bdd66]:focus,textarea[data-v-3b0bdd66]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-3b0bdd66],input[type=number][disabled][data-v-3b0bdd66],input[type=password][disabled][data-v-3b0bdd66],input[type=text][disabled][data-v-3b0bdd66],textarea[disabled][data-v-3b0bdd66]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-3b0bdd66]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-3b0bdd66],.additional-link b[data-v-3b0bdd66]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-3b0bdd66]:hover,.additional-link b[data-v-3b0bdd66]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-3b0bdd66]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-3b0bdd66]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-3b0bdd66],.form textarea[data-v-3b0bdd66]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-3b0bdd66]{display:block}.form.block-form .block-wrapper label[data-v-3b0bdd66]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-3b0bdd66]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-3b0bdd66]{display:block}.form.inline-form .input-wrapper .error-message[data-v-3b0bdd66]{position:relative;bottom:0}.form .button[data-v-3b0bdd66]{padding:14px 32px}.single-line-form[data-v-3b0bdd66]{display:block}.single-line-form .submit-button[data-v-3b0bdd66]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-3b0bdd66],input[type=number][data-v-3b0bdd66],input[type=password][data-v-3b0bdd66],input[type=text][data-v-3b0bdd66],textarea[data-v-3b0bdd66]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-3b0bdd66]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-3b0bdd66]{color:#7d858c}.form.block-form .block-wrapper label[data-v-3b0bdd66],.form .inline-wrapper .switch-label .input-label[data-v-3b0bdd66]{color:#bec6cf}input[type=email][data-v-3b0bdd66],input[type=number][data-v-3b0bdd66],input[type=password][data-v-3b0bdd66],input[type=text][data-v-3b0bdd66],textarea[data-v-3b0bdd66]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-3b0bdd66]::-moz-placeholder,input[type=number][data-v-3b0bdd66]::-moz-placeholder,input[type=password][data-v-3b0bdd66]::-moz-placeholder,input[type=text][data-v-3b0bdd66]::-moz-placeholder,textarea[data-v-3b0bdd66]::-moz-placeholder{color:#7d858c}input[type=email][data-v-3b0bdd66]:-ms-input-placeholder,input[type=number][data-v-3b0bdd66]:-ms-input-placeholder,input[type=password][data-v-3b0bdd66]:-ms-input-placeholder,input[type=text][data-v-3b0bdd66]:-ms-input-placeholder,textarea[data-v-3b0bdd66]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-3b0bdd66]::placeholder,input[type=number][data-v-3b0bdd66]::placeholder,input[type=password][data-v-3b0bdd66]::placeholder,input[type=text][data-v-3b0bdd66]::placeholder,textarea[data-v-3b0bdd66]::placeholder{color:#7d858c}input[type=email][disabled][data-v-3b0bdd66],input[type=number][disabled][data-v-3b0bdd66],input[type=password][disabled][data-v-3b0bdd66],input[type=text][disabled][data-v-3b0bdd66],textarea[disabled][data-v-3b0bdd66]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.auth-logo-text[data-v-3b0bdd66]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-3b0bdd66]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-3b0bdd66]{min-width:310px}.auth-form .additional-link a[data-v-3b0bdd66]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-3b0bdd66]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-3b0bdd66]{width:120px;margin-bottom:20px}.auth-form h1[data-v-3b0bdd66]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-3b0bdd66]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-3b0bdd66]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-3b0bdd66]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-3b0bdd66]{width:100%}.auth-form h1[data-v-3b0bdd66]{font-size:1.875em}.auth-form h2[data-v-3b0bdd66]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-3b0bdd66]{font-size:1.375em}.auth-form h2[data-v-3b0bdd66]{font-size:1.125em}.auth-form input[data-v-3b0bdd66]{min-width:0}.auth-form .additional-link[data-v-3b0bdd66]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-3b0bdd66],.auth-form h1[data-v-3b0bdd66],.auth-form h2[data-v-3b0bdd66]{color:#bec6cf}}.content-headline[data-v-3b0bdd66]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-3b0bdd66]{min-width:0}.duplicator .duplicator-add-button[data-v-3b0bdd66]{width:100%}.duplicator .duplicator-item[data-v-3b0bdd66]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-3b0bdd66]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-3b0bdd66]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-3b0bdd66]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-3b0bdd66],.duplicator .duplicator-item textarea[data-v-3b0bdd66]{box-shadow:none;background:#fafafa}.form[data-v-3b0bdd66]{max-width:580px;text-align:left}.submit-wrapper[data-v-3b0bdd66]{text-align:right}.submit-wrapper .button[data-v-3b0bdd66]{margin:58px 0 50px;width:100%}.title-icon[data-v-3b0bdd66]{margin-bottom:10px;-webkit-animation:spinner-data-v-3b0bdd66 5s linear infinite;animation:spinner-data-v-3b0bdd66 5s linear infinite}.title-icon circle[data-v-3b0bdd66],.title-icon path[data-v-3b0bdd66]{stroke:#00bc7e}@-webkit-keyframes spinner-data-v-3b0bdd66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-3b0bdd66{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-3b0bdd66]{background:#1e2024}.duplicator .duplicator-item input[data-v-3b0bdd66],.duplicator .duplicator-item textarea[data-v-3b0bdd66]{background:#131414}}",""])},NbAf:function(e,a,t){var r=t("GwTe");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(e.exports=r.locals)},UKxo:function(e,a,t){var r=t("K2cP");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(e.exports=r.locals)},Xk6H:function(e,a,t){"use strict";t("Idvm")},bDRN:function(e,a,t){"use strict";var r={name:"AuthContentWrapper"},i=(t("iYAH"),t("KHd+")),o=Object(i.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);a.a=o.exports},eZ9V:function(e,a,t){"use strict";var r={name:"FormLabel",components:{Edit2Icon:t("CjXH").q}},i=(t("Xk6H"),t("KHd+")),o=Object(i.a)(r,(function(){var e=this.$createElement,a=this._self._c||e;return a("div",{staticClass:"form-label"},[a("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),a("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);a.a=o.exports},iYAH:function(e,a,t){"use strict";t("lh0Q")},j8qy:function(e,a,t){"use strict";var r={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=t("KHd+"),o=Object(i.a)(r,(function(){var e=this.$createElement,a=this._self._c||e;return this.isVisible?a("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);a.a=o.exports},lh0Q:function(e,a,t){var r=t("Jx8r");"string"==typeof r&&(r=[[e.i,r,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(r,i);r.locals&&(e.exports=r.locals)},lig4:function(e,a,t){(e.exports=t("I1BE")(!1)).push([e.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},o3s6:function(e,a,t){"use strict";t("UKxo")},"s/ZW":function(e,a,t){"use strict";t("NbAf")}}]);