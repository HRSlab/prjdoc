(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{407:function(e,s,t){"use strict";t.r(s);var a=t(4),n=Object(a.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nginx-server-configs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-server-configs"}},[e._v("#")]),e._v(" Nginx Server Configs")]),e._v(" "),t("p",[e._v("["),t("img",{attrs:{src:"https://github.com/h5bp/server-configs-nginx/workflows/server/badge.svg",alt:"Test"}}),e._v("]\n"),t("strong",[e._v("Nginx Server Configs")]),e._v(" is a collection of configuration snippets that can help\nyour server improve the website's performance and security, while also\nensuring that resources are served with the correct content-type and are\naccessible, if needed, even cross-domain.")]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("p",[e._v("Using the Nginx server configs repo directly has a few required steps to be able to work.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://nginx.org/en/docs/beginners_guide.html",target:"_self",rel:""}},[e._v("Nginx Beginners Guide")])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://nginx.org/en/docs/http/request_processing.html",target:"_self",rel:""}},[e._v("Nginx Request Processing")])])]),e._v(" "),t("h3",{attrs:{id:"check-nginx-conf-settings"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#check-nginx-conf-settings"}},[e._v("#")]),e._v(" Check "),t("code",[e._v("nginx.conf")]),e._v(" settings")]),e._v(" "),t("p",[e._v("The first thing to check is that the "),t("code",[e._v("nginx.conf")]),e._v(" file contains appropriate values for\nyour specific install.")]),e._v(" "),t("p",[e._v("Most specific variables are:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("user")])]),e._v(" "),t("li",[t("code",[e._v("error_log")])]),e._v(" "),t("li",[t("code",[e._v("pid")])]),e._v(" "),t("li",[t("code",[e._v("access_log")])])]),e._v(" "),t("h3",{attrs:{id:"nginx-test-and-restart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nginx-test-and-restart"}},[e._v("#")]),e._v(" Nginx test and restart")]),e._v(" "),t("ul",[t("li",[t("p",[e._v("To verify Nginx config")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nginx -t\n")])])])]),e._v(" "),t("li",[t("p",[e._v("To verify Nginx config with a custom file")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nginx -t -c nginx.conf\n")])])])]),e._v(" "),t("li",[t("p",[e._v("To reload Nginx and apply the new config")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nginx -s reload\n")])])])])]),e._v(" "),t("h3",{attrs:{id:"basic-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-structure"}},[e._v("#")]),e._v(" Basic structure")]),e._v(" "),t("p",[e._v("This repository has the following structure:")]),e._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("./\n├── conf.d/\n│   ├── default.conf\n│   └── templates/\n├── h5bp/\n│   ├── basic.conf\n│   ├── location/\n│   └── .../\n├── mime.types\n└── nginx.conf\n")])])]),t("ul",[t("li",[t("p",[t("strong",[t("code",[e._v("conf.d/")])])]),e._v(" "),t("p",[e._v("This directory should contain all the "),t("code",[e._v("server")]),e._v(" definitions.")]),e._v(" "),t("p",[e._v("Except if they are dot prefixed or non "),t("code",[e._v(".conf")]),e._v(" extension, all files in this\nfolder "),t("strong",[e._v("are")]),e._v(" loaded automatically.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("code",[e._v("templates")]),e._v(" folder")])]),e._v(" "),t("p",[e._v("Files in this folder contain a "),t("code",[e._v("server")]),e._v(" template for secure and non-secure hosts.\nThey are intended to be copied in the "),t("code",[e._v("conf.d")]),e._v(" folder with all "),t("code",[e._v("example.com")]),e._v("\noccurrences changed to the target host.")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("code",[e._v("h5bp/")])])]),e._v(" "),t("p",[e._v("This directory contains config snippets (mixins) to be included as desired.")]),e._v(" "),t("p",[e._v("There are two types of config files provided, individual config snippets and\ncombined config files which provide convenient defaults.")]),e._v(" "),t("ul",[t("li",[t("p",[t("strong",[t("code",[e._v("basic.conf")])])]),e._v(" "),t("p",[e._v("This file loads a small subset of the rules provided by this repository to add\nexpires headers, allow cross-domain fonts and protect system files from web\naccess.\nThe "),t("code",[e._v("basic.conf")]),e._v(" file includes the rules which are recommended to always be\ndefined.")])]),e._v(" "),t("li",[t("p",[t("strong",[t("code",[e._v("location/")])])]),e._v(" "),t("p",[e._v("Files in this folder contain one or more "),t("code",[e._v("location")]),e._v(" directives. They are intended\nto be loaded in the "),t("code",[e._v("server")]),e._v(" context (or, in a nested "),t("code",[e._v("location")]),e._v(" block).")])])])]),e._v(" "),t("li",[t("p",[t("strong",[t("code",[e._v("mime.types")])])]),e._v(" "),t("p",[e._v("The mime.types file is responsible for mapping file extensions to mime types.")])]),e._v(" "),t("li",[t("p",[t("strong",[t("code",[e._v("nginx.conf")])])]),e._v(" "),t("p",[e._v("The main Nginx config file.")])])]),e._v(" "),t("h2",{attrs:{id:"usage"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[e._v("#")]),e._v(" Usage")]),e._v(" "),t("h3",{attrs:{id:"as-a-reference"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#as-a-reference"}},[e._v("#")]),e._v(" As a reference")]),e._v(" "),t("p",[e._v("To use as reference requires no special installation steps, download/checkout the\nrepository to a convenient location and adapt your existing Nginx configuration\nincorporating the desired functionality from this repository.")]),e._v(" "),t("p",[e._v("Download the "),t("a",{attrs:{href:"https://github.com/h5bp/server-configs-nginx/releases/latest",target:"_self",rel:""}},[e._v("latest release archive")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"directly"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#directly"}},[e._v("#")]),e._v(" Directly")]),e._v(" "),t("p",[e._v("To use directly, replace the Nginx config directory with this repository.\nFor example:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("nginx -s stop\n"),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" nginx nginx-previous\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/h5bp/server-configs-nginx.git nginx\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# install-specific edits")]),e._v("\nnginx\n")])])]),t("h3",{attrs:{id:"manage-sites"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#manage-sites"}},[e._v("#")]),e._v(" Manage sites")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" /etc/nginx/conf.d\n")])])]),t("ul",[t("li",[t("p",[e._v("Creating a new site")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" templates/example.com.conf .actual-hostname.conf\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sed")]),e._v(" -i "),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'s/example.com/actual-hostname/g'")]),e._v(" .actual-hostname.conf\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Enabling a site")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" .actual-hostname.conf actual-hostname.conf\n")])])])]),e._v(" "),t("li",[t("p",[e._v("Disabling a site")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("mv")]),e._v(" actual-hostname.conf .actual-hostname.conf\n")])])])])]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("nginx -s reload\n")])])]),t("h2",{attrs:{id:"support"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#support"}},[e._v("#")]),e._v(" Support")]),e._v(" "),t("ul",[t("li",[e._v("Nginx v"),t("strong",[e._v("1.8.0")]),e._v("+")])])])}),[],!1,null,null,null);s.default=n.exports}}]);