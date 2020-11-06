(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{401:function(e,o,t){"use strict";t.r(o);var a=t(4),n=Object(a.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"google-app-engine-server-configs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#google-app-engine-server-configs"}},[e._v("#")]),e._v(" Google App Engine Server Configs")]),e._v(" "),t("ol",[t("li",[e._v("[Install Cloud SDK][1] and select Option 2 - Python and PHP - when prompted about App Engine.")]),e._v(" "),t("li",[e._v("Install App Engine command line interface component of Cloud SDK\nby executing")])]),e._v(" "),t("p",[t("code",[e._v("gcloud components update app")])]),e._v(" "),t("p",[e._v("Your command line tool is all set now.")]),e._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[e._v("Copy "),t("code",[e._v("app.yaml")]),e._v(" file from this repo into your app build root folder:")])]),e._v(" "),t("p",[t("code",[e._v("curl https://raw.githubusercontent.com/h5bp/server-configs-gae/master/app.yaml > app.yaml")])]),e._v(" "),t("ol",{attrs:{start:"4"}},[t("li",[e._v("Create a new project in [Google Developers Console][2] if you don't have one already,\nand modify "),t("code",[e._v("application")]),e._v(" field in the "),t("code",[e._v("app.yaml")]),e._v(" to reflect your Project ID.\nIt is a good idea to look through the rest of "),t("code",[e._v("app.yaml")]),e._v(" file in case it needs some adjustments\nfor your specific case.")])]),e._v(" "),t("p",[e._v("Also, let "),t("code",[e._v("gcloud")]),e._v(" tool know what project you are using by executing:")]),e._v(" "),t("p",[t("code",[e._v("gcloud config set project my-project-id")])]),e._v(" "),t("ol",{attrs:{start:"5"}},[t("li",[e._v("You should be all set now. Any time you want to update your website,\nexecute the following command from the root of your app build directory:")])]),e._v(" "),t("p",[t("code",[e._v("gcloud preview app deploy .")])]),e._v(" "),t("p",[e._v("It might be a good idea to keep a master version of your "),t("code",[e._v("app.yaml")]),e._v(" file and copy it over to the app root directory as the last build step.")])])}),[],!1,null,null,null);o.default=n.exports}}]);