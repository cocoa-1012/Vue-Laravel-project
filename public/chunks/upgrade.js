(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{ASoH:function(a,t,e){"use strict";var o={name:"AuthContent",props:["loading","icon","text"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=(e("s/ZW"),e("KHd+")),r=Object(i.a)(o,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("button",{staticClass:"button outline"},[e("span",{staticClass:"text-label"},[a._v(a._s(a.text))]),a._v(" "),a.loading?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{staticClass:"sync-alt",attrs:{icon:"sync-alt"}})],1):a._e(),a._v(" "),!a.loading&&a.icon?e("span",{staticClass:"icon"},[e("FontAwesomeIcon",{attrs:{icon:a.icon}})],1):a._e()])}),[],!1,null,"59e2dfc0",null);t.a=r.exports},"D+dh":function(a,t,e){"use strict";var o=e("CjXH"),i={name:"ImageInput",props:["image","error"],components:{ImageIcon:o.C,XIcon:o.gb},data:function(){return{imagePreview:void 0}},computed:{isData:function(){return void 0!==this.imagePreview&&""!==this.imagePreview}},methods:{resetImage:function(){this.imagePreview=void 0,this.$emit("input",void 0)},showImagePreview:function(a){var t=this,e=a.target.files[0].name,o=e.substring(e.lastIndexOf(".")+1).toLowerCase();if(["png","jpg","jpeg","svg"].includes(o)){var i=a.target.files[0],r=new FileReader;r.onload=function(){return t.imagePreview=r.result},r.readAsDataURL(i),this.$emit("input",a.target.files[0])}else alert(this.$t("validation_errors.wrong_image"))}},created:function(){this.image&&(this.imagePreview=this.image)}},r=(e("w9z4"),e("KHd+")),d=Object(r.a)(i,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"dropzone",class:{"is-error":a.error}},[a.imagePreview?e("div",{staticClass:"reset-image",on:{click:a.resetImage}},[e("x-icon",{staticClass:"close-icon",attrs:{size:"14"}})],1):a._e(),a._v(" "),e("input",{ref:"file",staticClass:"dummy",attrs:{type:"file"},on:{change:function(t){return a.showImagePreview(t)}}}),a._v(" "),a.imagePreview?e("img",{ref:"image",staticClass:"image-preview",attrs:{src:a.imagePreview}}):a._e(),a._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!a.isData,expression:"! isData"}],staticClass:"dropzone-message"},[e("image-icon",{staticClass:"icon-upload",attrs:{size:"28"}}),a._v(" "),e("span",{staticClass:"dropzone-title"},[a._v("\n            "+a._s(a.$t("input_image.title"))+"\n        ")]),a._v(" "),e("span",{staticClass:"dropzone-description"},[a._v("\n            "+a._s(a.$t("input_image.supported"))+"\n        ")])],1)])}),[],!1,null,"eb0cae00",null);t.a=d.exports},DqBE:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form[data-v-6c36d9ad]{max-width:700px}.form.inline-form[data-v-6c36d9ad]{display:flex;position:relative;justify-content:center;margin:0 auto}.form.inline-form .input-wrapper[data-v-6c36d9ad]{position:relative}.form.inline-form .input-wrapper .error-message[data-v-6c36d9ad]{position:absolute;left:0;bottom:-25px}.form.block-form .wrapper-inline[data-v-6c36d9ad]{display:flex;margin:0 -15px}.form.block-form .wrapper-inline .block-wrapper[data-v-6c36d9ad]{width:100%;padding:0 15px}.form.block-form .block-wrapper[data-v-6c36d9ad]{margin-bottom:32px}.form.block-form .block-wrapper label[data-v-6c36d9ad]{font-size:.875em;color:rgba(27,37,57,.8);font-weight:700;display:block;margin-bottom:7px;text-align:left}.form.block-form .block-wrapper[data-v-6c36d9ad]:last-child{margin-bottom:0}.form.block-form .button[data-v-6c36d9ad]{margin-top:50px}.form .inline-wrapper[data-v-6c36d9ad]{display:flex;align-items:center;justify-content:space-between}.form .inline-wrapper .switch-label .input-help[data-v-6c36d9ad]{padding-top:0}.form .inline-wrapper .switch-label .input-label[data-v-6c36d9ad]{font-weight:700;color:#1b2539;font-size:1em;margin-bottom:5px}.form .input-help[data-v-6c36d9ad]{font-size:.75em;color:rgba(27,37,57,.7);line-height:1.35;padding-top:10px;display:block}.single-line-form[data-v-6c36d9ad]{display:flex}.single-line-form .submit-button[data-v-6c36d9ad]{margin-left:20px}.error-message[data-v-6c36d9ad]{font-size:.875em;color:#fd397a;padding-top:5px;display:block;text-align:left}textarea[data-v-6c36d9ad]{width:100%}input[type=email][data-v-6c36d9ad],input[type=number][data-v-6c36d9ad],input[type=password][data-v-6c36d9ad],input[type=text][data-v-6c36d9ad],textarea[data-v-6c36d9ad]{border:1px solid transparent;transition:all .15s ease;font-size:1em;border-radius:8px;padding:13px 20px;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-weight:700;outline:0;width:100%;box-shadow:0 1px 5px rgba(0,0,0,.12)}input[type=email].is-error[data-v-6c36d9ad],input[type=number].is-error[data-v-6c36d9ad],input[type=password].is-error[data-v-6c36d9ad],input[type=text].is-error[data-v-6c36d9ad],textarea.is-error[data-v-6c36d9ad]{border-color:#fd397a;box-shadow:0 1px 5px rgba(253,57,122,.3)}input[type=email][data-v-6c36d9ad]::-moz-placeholder,input[type=number][data-v-6c36d9ad]::-moz-placeholder,input[type=password][data-v-6c36d9ad]::-moz-placeholder,input[type=text][data-v-6c36d9ad]::-moz-placeholder,textarea[data-v-6c36d9ad]::-moz-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-6c36d9ad]:-ms-input-placeholder,input[type=number][data-v-6c36d9ad]:-ms-input-placeholder,input[type=password][data-v-6c36d9ad]:-ms-input-placeholder,input[type=text][data-v-6c36d9ad]:-ms-input-placeholder,textarea[data-v-6c36d9ad]:-ms-input-placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-6c36d9ad]::placeholder,input[type=number][data-v-6c36d9ad]::placeholder,input[type=password][data-v-6c36d9ad]::placeholder,input[type=text][data-v-6c36d9ad]::placeholder,textarea[data-v-6c36d9ad]::placeholder{color:rgba(27,37,57,.5);font-size:.9375em}input[type=email][data-v-6c36d9ad]:focus,input[type=number][data-v-6c36d9ad]:focus,input[type=password][data-v-6c36d9ad]:focus,input[type=text][data-v-6c36d9ad]:focus,textarea[data-v-6c36d9ad]:focus{border-color:#00bc7e;box-shadow:0 1px 5px rgba(0,188,126,.3)}input[type=email][disabled][data-v-6c36d9ad],input[type=number][disabled][data-v-6c36d9ad],input[type=password][disabled][data-v-6c36d9ad],input[type=text][disabled][data-v-6c36d9ad],textarea[disabled][data-v-6c36d9ad]{background:#fff;color:rgba(27,37,57,.8);-webkit-text-fill-color:rgba(27,37,57,.8);opacity:1;cursor:not-allowed}.additional-link[data-v-6c36d9ad]{font-size:1em;margin-top:50px;display:block;color:#1b2539}.additional-link a[data-v-6c36d9ad],.additional-link b[data-v-6c36d9ad]{color:#00bc7e;cursor:pointer}.additional-link a[data-v-6c36d9ad]:hover,.additional-link b[data-v-6c36d9ad]:hover{text-decoration:underline}@media only screen and (max-width:1024px){.form[data-v-6c36d9ad]{max-width:100%}}@media only screen and (max-width:960px){.form .button[data-v-6c36d9ad]{margin-top:20px;width:100%;margin-left:0;margin-right:0}.form input[data-v-6c36d9ad],.form textarea[data-v-6c36d9ad]{width:100%;min-width:100%}.form.block-form .block-wrapper[data-v-6c36d9ad]{display:block}.form.block-form .block-wrapper label[data-v-6c36d9ad]{width:100%;padding-right:0;display:block;margin-bottom:7px;text-align:left!important;font-size:.875em;padding-top:0}.form.block-form .button[data-v-6c36d9ad]{margin-top:25px;margin-left:0;margin-right:0}.form.inline-form[data-v-6c36d9ad]{display:block}.form.inline-form .input-wrapper .error-message[data-v-6c36d9ad]{position:relative;bottom:0}.form .button[data-v-6c36d9ad]{padding:14px 32px}.single-line-form[data-v-6c36d9ad]{display:block}.single-line-form .submit-button[data-v-6c36d9ad]{margin-left:0;margin-top:20px;width:100%}input[type=email][data-v-6c36d9ad],input[type=number][data-v-6c36d9ad],input[type=password][data-v-6c36d9ad],input[type=text][data-v-6c36d9ad],textarea[data-v-6c36d9ad]{padding:14px 20px}}@media only screen and (max-width:690px){.form.block-form .wrapper-inline[data-v-6c36d9ad]{display:block}}@media (prefers-color-scheme:dark){.form .input-help[data-v-6c36d9ad]{color:#7d858c}.form.block-form .block-wrapper label[data-v-6c36d9ad],.form .inline-wrapper .switch-label .input-label[data-v-6c36d9ad]{color:#bec6cf}input[type=email][data-v-6c36d9ad],input[type=number][data-v-6c36d9ad],input[type=password][data-v-6c36d9ad],input[type=text][data-v-6c36d9ad],textarea[data-v-6c36d9ad]{border-color:#1e2024;background:#1e2024;color:#bec6cf}input[type=email][data-v-6c36d9ad]::-moz-placeholder,input[type=number][data-v-6c36d9ad]::-moz-placeholder,input[type=password][data-v-6c36d9ad]::-moz-placeholder,input[type=text][data-v-6c36d9ad]::-moz-placeholder,textarea[data-v-6c36d9ad]::-moz-placeholder{color:#7d858c}input[type=email][data-v-6c36d9ad]:-ms-input-placeholder,input[type=number][data-v-6c36d9ad]:-ms-input-placeholder,input[type=password][data-v-6c36d9ad]:-ms-input-placeholder,input[type=text][data-v-6c36d9ad]:-ms-input-placeholder,textarea[data-v-6c36d9ad]:-ms-input-placeholder{color:#7d858c}input[type=email][data-v-6c36d9ad]::placeholder,input[type=number][data-v-6c36d9ad]::placeholder,input[type=password][data-v-6c36d9ad]::placeholder,input[type=text][data-v-6c36d9ad]::placeholder,textarea[data-v-6c36d9ad]::placeholder{color:#7d858c}input[type=email][disabled][data-v-6c36d9ad],input[type=number][disabled][data-v-6c36d9ad],input[type=password][disabled][data-v-6c36d9ad],input[type=text][disabled][data-v-6c36d9ad],textarea[disabled][data-v-6c36d9ad]{background:#1e2024;color:rgba(125,133,140,.8);-webkit-text-fill-color:rgba(125,133,140,.8)}}.auth-logo-text[data-v-6c36d9ad]{font-size:1.375em;font-weight:800;margin-bottom:40px;display:block}.auth-form[data-v-6c36d9ad]{text-align:center;max-width:600px;padding:25px 20px;display:table-cell;vertical-align:middle}.auth-form input[data-v-6c36d9ad]{min-width:310px}.auth-form .additional-link a[data-v-6c36d9ad]{font-weight:700;text-decoration:none}.auth-form .user-avatar[data-v-6c36d9ad]{width:100px;height:100px;-o-object-fit:cover;object-fit:cover;margin-bottom:20px;border-radius:8px;box-shadow:0 10px 30px rgba(25,54,60,.2)}.auth-form .logo[data-v-6c36d9ad]{width:120px;margin-bottom:20px}.auth-form h1[data-v-6c36d9ad]{font-size:2.125em;font-weight:800;line-height:1.2;margin-bottom:2px;color:#1b2539}.auth-form h2[data-v-6c36d9ad]{font-size:1.4375em;font-weight:500;margin-bottom:50px;color:#1b2539}.auth-form .block-form[data-v-6c36d9ad]{margin-left:auto;margin-right:auto}@media only screen and (min-width:690px) and (max-width:960px){.auth-form[data-v-6c36d9ad]{padding-left:20%;padding-right:20%}}@media only screen and (max-width:690px){.auth-form[data-v-6c36d9ad]{width:100%}.auth-form h1[data-v-6c36d9ad]{font-size:1.875em}.auth-form h2[data-v-6c36d9ad]{font-size:1.3125em}}@media only screen and (max-width:490px){.auth-form h1[data-v-6c36d9ad]{font-size:1.375em}.auth-form h2[data-v-6c36d9ad]{font-size:1.125em}.auth-form input[data-v-6c36d9ad]{min-width:0}.auth-form .additional-link[data-v-6c36d9ad]{font-size:.9375em}}@media (prefers-color-scheme:dark){.auth-form .additional-link[data-v-6c36d9ad],.auth-form h1[data-v-6c36d9ad],.auth-form h2[data-v-6c36d9ad]{color:#bec6cf}}.content-headline[data-v-6c36d9ad]{max-width:630px;margin-left:auto;margin-right:auto}.auth-form input[data-v-6c36d9ad]{min-width:0}.duplicator .duplicator-add-button[data-v-6c36d9ad]{width:100%}.duplicator .duplicator-item[data-v-6c36d9ad]{box-shadow:0 1px 5px rgba(0,0,0,.12);border-radius:8px;background:#fff;padding:25px;margin:0 -25px 32px;position:relative}.duplicator .duplicator-item .duplicator-title[data-v-6c36d9ad]{font-size:1.125em;margin-bottom:20px;display:block;font-weight:700}.duplicator .duplicator-item .delete-item[data-v-6c36d9ad]{position:absolute;top:15px;right:15px;cursor:pointer}.duplicator .duplicator-item .delete-item:hover line[data-v-6c36d9ad]{stroke:#00bc7e}.duplicator .duplicator-item input[data-v-6c36d9ad],.duplicator .duplicator-item textarea[data-v-6c36d9ad]{box-shadow:none;background:#fafafa}.form[data-v-6c36d9ad]{max-width:580px;text-align:left}.submit-wrapper[data-v-6c36d9ad]{text-align:right}.submit-wrapper .button[data-v-6c36d9ad]{margin:58px 0 50px;width:100%}.title-icon[data-v-6c36d9ad]{margin-bottom:10px;-webkit-animation:spinner-data-v-6c36d9ad 5s linear infinite;animation:spinner-data-v-6c36d9ad 5s linear infinite}.title-icon circle[data-v-6c36d9ad],.title-icon path[data-v-6c36d9ad]{stroke:#00bc7e}@-webkit-keyframes spinner-data-v-6c36d9ad{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@keyframes spinner-data-v-6c36d9ad{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}@media (prefers-color-scheme:dark){.duplicator .duplicator-item[data-v-6c36d9ad]{background:#1e2024}.duplicator .duplicator-item input[data-v-6c36d9ad],.duplicator .duplicator-item textarea[data-v-6c36d9ad]{background:#131414}}",""])},GwTe:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".button[data-v-59e2dfc0]{cursor:pointer;border-radius:8px;text-decoration:none;padding:12px 32px;display:inline-block;margin-left:15px;margin-right:15px;white-space:nowrap;transition:all .15s ease;background:transparent}.button .text-label[data-v-59e2dfc0]{transition:all .15s ease;font-size:1.0625em;font-weight:800;line-height:0}.button .icon[data-v-59e2dfc0]{margin-left:12px;font-size:1em}.button.solid[data-v-59e2dfc0]{background:#00bc7e;border:2px solid #00bc7e}.button.solid .text-label[data-v-59e2dfc0]{color:#fff}.button.outline[data-v-59e2dfc0]{border:2px solid #1b2539}.button.outline .text-label[data-v-59e2dfc0]{color:#1b2539}.button.outline .icon path[data-v-59e2dfc0]{fill:#00bc7e}.button.outline[data-v-59e2dfc0]:hover{border-color:#00bc7e}.button.outline:hover .text-label[data-v-59e2dfc0]{color:#00bc7e}@media (prefers-color-scheme:dark){.button.outline[data-v-59e2dfc0]{background:#131414;border-color:#bec6cf}.button.outline .text-label[data-v-59e2dfc0]{color:#bec6cf}}.sync-alt[data-v-59e2dfc0]{-webkit-animation:spin-data-v-59e2dfc0 1s linear infinite;animation:spin-data-v-59e2dfc0 1s linear infinite}@-webkit-keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes spin-data-v-59e2dfc0{0%{transform:rotate(0)}to{transform:rotate(1turn)}}",""])},IS7u:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".dropzone[data-v-eb0cae00]{border:1px dashed #a1abc2;border-radius:8px;position:relative;text-align:center;display:flex;align-items:center;min-height:175px}.dropzone.is-error[data-v-eb0cae00]{border:2px dashed rgba(253,57,122,.3)}.dropzone.is-error .dropzone-title[data-v-eb0cae00]{color:#fd397a}.dropzone.is-error .icon-upload circle[data-v-eb0cae00],.dropzone.is-error .icon-upload polyline[data-v-eb0cae00],.dropzone.is-error .icon-upload rect[data-v-eb0cae00]{stroke:#fd397a}.dropzone input[type=file][data-v-eb0cae00]{opacity:0;position:absolute;top:0;left:0;right:0;bottom:0;z-index:1;width:100%;cursor:pointer}.dropzone .image-preview[data-v-eb0cae00]{position:absolute;width:100%;height:100%;-o-object-fit:contain;object-fit:contain;left:0;padding:25px;display:block}.dropzone .image-preview.fit-image[data-v-eb0cae00]{-o-object-fit:cover;object-fit:cover;border-radius:12px;overflow:hidden}.dropzone .dropzone-message[data-v-eb0cae00]{padding:50px 0;width:100%}.dropzone .dropzone-message .icon-upload circle[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload rect[data-v-eb0cae00]{stroke:#00bc7e}.dropzone .dropzone-message .dropzone-title[data-v-eb0cae00]{font-size:1em;font-weight:700;display:block}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:rgba(27,37,57,.7);font-size:.75em}.dropzone .reset-image[data-v-eb0cae00]{z-index:2;background:#fff;border-radius:50px;display:block;position:absolute;right:0;top:0;cursor:pointer;transform:translateY(-50%) translateX(50%);padding:0 4px;box-shadow:0 1px 5px rgba(0,0,0,.12)}.dropzone .reset-image .close-icon[data-v-eb0cae00]{vertical-align:middle}.dropzone .reset-image .close-icon line path[data-v-eb0cae00]{fill:#1b2539}@media (prefers-color-scheme:dark){.dropzone[data-v-eb0cae00]{border-color:hsla(0,0%,100%,.2)}.dropzone .dropzone-message .icon-upload line[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload path[data-v-eb0cae00],.dropzone .dropzone-message .icon-upload polyline[data-v-eb0cae00]{stroke:#00bc7e}.dropzone .dropzone-message .dropzone-description[data-v-eb0cae00]{color:#7d858c}}",""])},Idvm:function(a,t,e){var o=e("lig4");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},Jx8r:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,"#auth[data-v-31af8372]{height:100%;width:100%;display:table}",""])},NbAf:function(a,t,e){var o=e("GwTe");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},Wt3U:function(a,t,e){var o=e("DqBE");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},Xk6H:function(a,t,e){"use strict";e("Idvm")},bDRN:function(a,t,e){"use strict";var o={name:"AuthContentWrapper"},i=(e("iYAH"),e("KHd+")),r=Object(i.a)(o,(function(){var a=this.$createElement;return(this._self._c||a)("div",{attrs:{id:"auth"}},[this._t("default")],2)}),[],!1,null,"31af8372",null);t.a=r.exports},"bN/l":function(a,t,e){var o=e("IS7u");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},eZ9V:function(a,t,e){"use strict";var o={name:"FormLabel",components:{Edit2Icon:e("CjXH").q}},i=(e("Xk6H"),e("KHd+")),r=Object(i.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return t("div",{staticClass:"form-label"},[t("edit-2-icon",{staticClass:"icon",attrs:{size:"22"}}),this._v(" "),t("b",{staticClass:"label"},[this._t("default")],2)],1)}),[],!1,null,"c1157a8e",null);t.a=r.exports},fuXW:function(a,t,e){"use strict";e("Wt3U")},iYAH:function(a,t,e){"use strict";e("lh0Q")},j8qy:function(a,t,e){"use strict";var o={name:"AuthContent",props:["visible","name"],data:function(){return{isVisible:!1}},created:function(){this.isVisible=this.visible}},i=e("KHd+"),r=Object(i.a)(o,(function(){var a=this.$createElement,t=this._self._c||a;return this.isVisible?t("div",{staticClass:"auth-form"},[this._t("default")],2):this._e()}),[],!1,null,null,null);t.a=r.exports},lh0Q:function(a,t,e){var o=e("Jx8r");"string"==typeof o&&(o=[[a.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e("aET+")(o,i);o.locals&&(a.exports=o.locals)},lig4:function(a,t,e){(a.exports=e("I1BE")(!1)).push([a.i,".form-label[data-v-c1157a8e]{display:flex;align-items:center;margin-bottom:30px}.form-label .icon[data-v-c1157a8e]{margin-right:10px}.form-label .icon path[data-v-c1157a8e]{stroke:#00bc7e}.form-label .label[data-v-c1157a8e]{font-size:1.125em;font-weight:700}@media (prefers-color-scheme:dark){.form-label .label[data-v-c1157a8e]{color:#bec6cf}}",""])},m48H:function(a,t,e){"use strict";e.r(t);var o=e("o0o1"),i=e.n(o),r=e("A5+z"),d=e("bDRN"),n=e("4TWA"),s=e("xxrA"),p=e("D+dh"),l=e("eZ9V"),c=e("KnjL"),u=e("j8qy"),v=e("ASoH"),m=e("CjXH"),f=e("TJPC"),b=e("L2JU"),g=e("vDqi"),h=e.n(g);function x(a,t,e,o,i,r,d){try{var n=a[r](d),s=n.value}catch(a){return void e(a)}n.done?t(s):Promise.resolve(s).then(o,i)}function w(a,t){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),e.push.apply(e,o)}return e}function y(a,t,e){return t in a?Object.defineProperty(a,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[t]=e,a}var _={name:"EnvironmentSetup",components:{AuthContentWrapper:d.a,ValidationProvider:r.ValidationProvider,ValidationObserver:r.ValidationObserver,SettingsIcon:m.U,SelectInput:n.a,SwitchInput:s.a,AuthContent:u.a,ImageInput:p.a,AuthButton:v.a,FormLabel:l.a,required:f.a,InfoBox:c.a},computed:function(a){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?w(Object(e),!0).forEach((function(t){y(a,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):w(Object(e)).forEach((function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(e,t))}))}return a}({},Object(b.b)(["config"])),data:function(){return{isLoading:!1,app:{license:void 0,purchase_code:"",title:"",description:"",logo:void 0,logo_horizontal:void 0,favicon:void 0,contactMail:"",googleAnalytics:"",defaultStorage:"5",userRegistration:1,storageLimitation:1}}},methods:{storeAppSetup:function(){var a=this,t=new FormData;t.append("purchase_code",this.app.purchase_code),t.append("license",this.app.license),t.append("title",this.app.title),t.append("description",this.app.description),t.append("contactMail",this.app.contactMail),t.append("userRegistration",Boolean(this.app.userRegistration)?1:0),t.append("storageLimitation",Boolean(this.app.storageLimitation)?1:0),this.app.googleAnalytics&&t.append("googleAnalytics",this.app.googleAnalytics),this.app.defaultStorage&&t.append("defaultStorage",this.app.defaultStorage),this.app.logo&&t.append("logo",this.app.logo),this.app.logo_horizontal&&t.append("logo_horizontal",this.app.logo_horizontal),this.app.favicon&&t.append("favicon",this.app.favicon),h.a.post("/api/upgrade/app",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.isLoading=!1,a.$router.push({name:"SignIn"})})).catch((function(t){a.isLoading=!1}))},appSetupSubmit:function(){var a,t=this;return(a=i.a.mark((function a(){return i.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.$refs.appSetup.validate();case 2:if(a.sent){a.next=5;break}return a.abrupt("return");case 5:t.isLoading=!0,h.a.post("/api/setup/purchase-code",{purchaseCode:t.app.purchase_code}).then((function(a){"b6896a44017217c36f4a6fdc56699728"===a.data?(t.app.license="Extended",t.$store.commit("SET_SAAS",!0)):t.app.license="Regular",t.storeAppSetup()})).catch((function(a){a.response.status})).finally((function(){t.isLoading=!1}));case 7:case"end":return a.stop()}}),a)})),function(){var t=this,e=arguments;return new Promise((function(o,i){var r=a.apply(t,e);function d(a){x(r,o,i,d,n,"next",a)}function n(a){x(r,o,i,d,n,"throw",a)}d(void 0)}))})()}},created:function(){"1.7"===this.config.latest_upgrade&&this.$router.push({name:"SignIn"})}},k=(e("fuXW"),e("KHd+")),z=Object(k.a)(_,(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("AuthContentWrapper",{ref:"auth"},[e("AuthContent",{attrs:{name:"database-credentials",visible:!0}},[e("div",{staticClass:"content-headline"},[e("settings-icon",{staticClass:"title-icon",attrs:{size:"40"}}),a._v(" "),e("h1",[a._v("Upgrade VueFileManager")]),a._v(" "),e("h2",[a._v("Please fill form bellow to upgrade VueFileManager.")])],1),a._v(" "),e("ValidationObserver",{ref:"appSetup",staticClass:"form block-form",attrs:{tag:"form"},on:{submit:function(t){return t.preventDefault(),a.appSetupSubmit.apply(null,arguments)}},scopedSlots:a._u([{key:"default",fn:function(t){t.invalid;return[e("FormLabel",[a._v("Set your License")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Purchase Code:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Purchase code",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.purchase_code,expression:"app.purchase_code"}],class:{"is-error":o[0]},attrs:{placeholder:"Paste your purchase code",type:"text"},domProps:{value:a.app.purchase_code},on:{input:function(t){t.target.composing||a.$set(a.app,"purchase_code",t.target.value)}}}),a._v(" "),e("a",{staticClass:"input-help",attrs:{href:"https://help.market.envato.com/hc/en-us/articles/202822600-Where-Is-My-Purchase-Code-",target:"_blank"}},[a._v("\n                        Where I can find purchase code?\n                    ")]),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("General Settings")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Title:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Title",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.title,expression:"app.title"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your app title",type:"text"},domProps:{value:a.app.title},on:{input:function(t){t.target.composing||a.$set(a.app,"title",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Description:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Description",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.description,expression:"app.description"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your app description",type:"text"},domProps:{value:a.app.description},on:{input:function(t){t.target.composing||a.$set(a.app,"description",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Logo (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:a.app.logo,callback:function(t){a.$set(a.app,"logo",t)},expression:"app.logo"}})]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Logo Horizontal (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Logo"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:a.app.logo_horizontal,callback:function(t){a.$set(a.app,"logo_horizontal",t)},expression:"app.logo_horizontal"}})]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("App Favicon (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"App Favicon"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("ImageInput",{attrs:{error:o[0]},model:{value:a.app.favicon,callback:function(t){a.$set(a.app,"favicon",t)},expression:"app.favicon"}})]}}],null,!0)})],1),a._v(" "),e("FormLabel",{staticClass:"mt-70"},[a._v("Others Information")]),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Contact Email:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Contact Email",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.contactMail,expression:"app.contactMail"}],class:{"is-error":o[0]},attrs:{placeholder:"Type your contact email",type:"email"},domProps:{value:a.app.contactMail},on:{input:function(t){t.target.composing||a.$set(a.app,"contactMail",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Google Analytics Code (optional):")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Google Analytics Code"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.googleAnalytics,expression:"app.googleAnalytics"}],class:{"is-error":o[0]},attrs:{placeholder:"Paste your Google Analytics Code",type:"text"},domProps:{value:a.app.googleAnalytics},on:{input:function(t){t.target.composing||a.$set(a.app,"googleAnalytics",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v("Storage Limitation:")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v("If this value is off, all users will have infinity storage capacity and you won't be "),e("br"),a._v("able to charge your users for storage plan.")])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.app.storageLimitation},model:{value:a.app.storageLimitation,callback:function(t){a.$set(a.app,"storageLimitation",t)},expression:"app.storageLimitation"}})],1)])]),a._v(" "),a.app.storageLimitation?e("div",{staticClass:"block-wrapper"},[e("label",[a._v("Default Storage Space for Accounts:")]),a._v(" "),e("ValidationProvider",{staticClass:"input-wrapper",attrs:{tag:"div",mode:"passive",name:"Default Storage Space",rules:"required"},scopedSlots:a._u([{key:"default",fn:function(t){var o=t.errors;return[e("input",{directives:[{name:"model",rawName:"v-model",value:a.app.defaultStorage,expression:"app.defaultStorage"}],class:{"is-error":o[0]},attrs:{min:"1",max:"999999999",placeholder:"Set default storage space in GB",type:"number"},domProps:{value:a.app.defaultStorage},on:{input:function(t){t.target.composing||a.$set(a.app,"defaultStorage",t.target.value)}}}),a._v(" "),o[0]?e("span",{staticClass:"error-message"},[a._v(a._s(o[0]))]):a._e()]}}],null,!0)})],1):a._e(),a._v(" "),e("div",{staticClass:"block-wrapper"},[e("div",{staticClass:"input-wrapper"},[e("div",{staticClass:"inline-wrapper"},[e("div",{staticClass:"switch-label"},[e("label",{staticClass:"input-label"},[a._v("Allow User Registration:")]),a._v(" "),e("small",{staticClass:"input-help"},[a._v("You can disable public registration for new users. You will still able to "),e("br"),a._v("create new users in administration panel.")])]),a._v(" "),e("SwitchInput",{staticClass:"switch",attrs:{state:a.app.userRegistration},model:{value:a.app.userRegistration,callback:function(t){a.$set(a.app,"userRegistration",t)},expression:"app.userRegistration"}})],1)])]),a._v(" "),e("div",{staticClass:"submit-wrapper"},[e("AuthButton",{attrs:{icon:"chevron-right",text:"Save and Upgrade",loading:a.isLoading,disabled:a.isLoading}})],1)]}}])})],1)],1)}),[],!1,null,"6c36d9ad",null);t.default=z.exports},"s/ZW":function(a,t,e){"use strict";e("NbAf")},w9z4:function(a,t,e){"use strict";e("bN/l")}}]);