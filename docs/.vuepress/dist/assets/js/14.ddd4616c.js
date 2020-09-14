(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{387:function(t,s,e){"use strict";e.r(s);var a=e(4),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"node-js-server-configuration"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#node-js-server-configuration"}},[t._v("#")]),t._v(" Node.js Server Configuration "),e("img",{attrs:{src:"https://secure.travis-ci.org/h5bp/server-configs-node.svg",alt:"Build Status"}})]),t._v(" "),e("div",{staticClass:"custom-block danger"},[e("p",{staticClass:"custom-block-title"},[t._v("Attenzione")]),t._v(" "),e("p",[t._v("Questo Modulo (Express 3.x) è deprecato ed è in procinto di essere "),e("a",{attrs:{href:"https://github.com%22",target:"_blank",rel:"noopener noreferrer"}},[t._v("riscritto"),e("OutboundLink")],1)])]),t._v(" "),e("p",[e("strong",[t._v("HTML5")]),t._v(" server config for node.js.")]),t._v(" "),e("p",[e("code",[t._v("h5bp")]),t._v(" for node.js follows the guidelines of the "),e("a",{attrs:{href:"https://github.com/h5bp/server-configs-apache",target:"_blank",rel:"noopener noreferrer"}},[t._v("Apache"),e("OutboundLink")],1),t._v(" version:")]),t._v(" "),e("ul",[e("li",[t._v("secures backup and hidden files.")]),t._v(" "),e("li",[t._v("optionally redirects "),e("code",[t._v("www.yoursite.tld")]),t._v(" to "),e("code",[t._v("yoursite.tld")]),t._v(" or vice versa.")]),t._v(" "),e("li",[t._v("offers a simple cache busting mechanism.")]),t._v(" "),e("li",[t._v("normalize content types.")]),t._v(" "),e("li",[t._v("optionally enables CORS.")]),t._v(" "),e("li",[t._v("sets correct cache expires depending of the type of resource.")]),t._v(" "),e("li",[t._v("and some others...")])]),t._v(" "),e("p",[t._v("It also focuses on offering additional features such as on-the-fly script concatenation using "),e("strong",[t._v("CommonJS")]),t._v(" or "),e("strong",[t._v("AMD")]),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"installation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" --save h5bp\n")])])]),e("h2",{attrs:{id:"quick-start"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#quick-start"}},[t._v("#")]),t._v(" Quick Start")]),t._v(" "),e("h3",{attrs:{id:"create-a-simple-http-server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#create-a-simple-http-server"}},[t._v("#")]),t._v(" Create a simple http server")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" h5bp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h5bp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" h5bp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("code",[t._v("app")]),t._v(" is an instance of an "),e("code",[t._v("express")]),t._v(" application. You can add additional middlewares or routes if you like.")]),t._v(" "),e("h3",{attrs:{id:"use-it-as-a-connect-express-middleware"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-it-as-a-connect-express-middleware"}},[t._v("#")]),t._v(" Use it as a connect / express middleware")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" express "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'express'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    h5bp "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'h5bp'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" app "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("express")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("h5bp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" root"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// in order to serve files, you should add the two following middlewares")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("compress")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("express"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("static")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\napp"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h3",{attrs:{id:"concatenate-scripts-on-the-fly"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#concatenate-scripts-on-the-fly"}},[t._v("#")]),t._v(" Concatenate scripts on-the-fly")]),t._v(" "),e("p",[t._v("If you want to split your application source files but only serve one file, you can use the on-the-fly concatenation.\nIf you are familiar with node.js, you can use the "),e("strong",[t._v("CommonJS")]),t._v(" style. You can also use the "),e("strong",[t._v("AMD")]),t._v(" style.")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[t._v("app"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("h5bp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" __dirname "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/public'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    scripts"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        files"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'app.js'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        processor"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commonjs'")]),t._v("   "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// can also be "amd"')]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("At the first request hit to "),e("code",[t._v("/app.js")]),t._v(", the server will compile, cache and serve the file. Any subsequent request will\nserve the cached file without any performance impact.")]),t._v(" "),e("p",[t._v("So, this feature is meant to be used with the "),e("a",{attrs:{href:"https://github.com/h5bp/server-configs/tree/master/apache#cache-busting",target:"_blank",rel:"noopener noreferrer"}},[t._v("cache busting mechanism"),e("OutboundLink")],1),t._v(" in order to ensure the client always has the\nlatest resource version. If you restart your server, the cache will be flushed.")]),t._v(" "),e("p",[t._v("Note that the next release will provide a "),e("em",[t._v("development mode")]),t._v(" where the server will simply disable its cache and\nalways serve the latest version of the file.")]),t._v(" "),e("h2",{attrs:{id:"options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[t._v("#")]),t._v(" Options")]),t._v(" "),e("p",[t._v("There are several options you can pass to the middleware.")]),t._v(" "),e("p",[e("code",[t._v("app.use(h5bp(options));")])]),t._v(" "),e("h3",{attrs:{id:"root"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#root"}},[t._v("#")]),t._v(" root")]),t._v(" "),e("p",[t._v("Tells the filesystem path to the root directory of static resources. This options is mandatory if you serve static files.")]),t._v(" "),e("h3",{attrs:{id:"www"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#www"}},[t._v("#")]),t._v(" www")]),t._v(" "),e("p",[t._v("Forces "),e("strong",[t._v("www")]),t._v(" if "),e("code",[t._v("true")]),t._v(", forces "),e("strong",[t._v("non-www")]),t._v(" if "),e("code",[t._v("false")]),t._v(", does nothing if not defined. By default, this is disabled.")]),t._v(" "),e("h3",{attrs:{id:"cors"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#cors"}},[t._v("#")]),t._v(" cors")]),t._v(" "),e("p",[t._v("Enables "),e("strong",[t._v("CORS")]),t._v(" for everything. By default this is disabled.")]),t._v(" "),e("h3",{attrs:{id:"dotfiles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dotfiles"}},[t._v("#")]),t._v(" dotfiles")]),t._v(" "),e("p",[t._v("Enables access to dotfiles. By default this is disabled.")]),t._v(" "),e("h3",{attrs:{id:"scripts"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[t._v("#")]),t._v(" scripts")]),t._v(" "),e("p",[t._v("Tells which scripts to concatenate.")]),t._v(" "),e("p",[t._v("This is an object with the following properties:")]),t._v(" "),e("h4",{attrs:{id:"files"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#files"}},[t._v("#")]),t._v(" files")]),t._v(" "),e("p",[t._v("This is an array of files to concatenate. Their path is relative to the "),e("code",[t._v("root")]),t._v(" option. Their URL will be absolute.")]),t._v(" "),e("p",[t._v("For example, if you set "),e("strong",[t._v("files")]),t._v(" to "),e("code",[t._v("['scripts/app.js']")]),t._v(" and "),e("strong",[t._v("root")]),t._v(" to "),e("code",[t._v("/home/h5bp/app/")]),t._v(":")]),t._v(" "),e("ul",[e("li",[t._v("The path will be: "),e("code",[t._v("/home/h5bp/app/scripts/app.js")]),t._v(".")]),t._v(" "),e("li",[t._v("The served URL will be: "),e("code",[t._v("yoursite.tld/scripts/app.js")]),t._v(".")])]),t._v(" "),e("h4",{attrs:{id:"processor"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#processor"}},[t._v("#")]),t._v(" processor")]),t._v(" "),e("p",[t._v("Tells which processor to use for scripts concatenation.")]),t._v(" "),e("p",[t._v("For now, it can be one of the following values:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("commonjs")]),t._v(": will concatenate files using the "),e("strong",[t._v("CommonJS")]),t._v(" method ("),e("code",[t._v("require/exports")]),t._v(").")]),t._v(" "),e("li",[e("code",[t._v("amd")]),t._v(": will concatenate files using the "),e("strong",[t._v("AMD")]),t._v(" method ("),e("code",[t._v("require/define")]),t._v(").")])]),t._v(" "),e("h2",{attrs:{id:"additional-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#additional-options"}},[t._v("#")]),t._v(" Additional options")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("h5bp.createServer")]),t._v(" function takes the same options, plus additional ones.")]),t._v(" "),e("p",[t._v("The "),e("code",[t._v("callback")]),t._v(" is optional. It is a custom middleware that you can register directly if you want to.")]),t._v(" "),e("p",[e("code",[t._v("h5bp.createServer(options, [callback]);")])]),t._v(" "),e("h3",{attrs:{id:"server"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server"}},[t._v("#")]),t._v(" server")]),t._v(" "),e("p",[t._v("Tells which type of server you want to use.")]),t._v(" "),e("p",[t._v("It can be one of the following values:")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("express")]),t._v(": uses "),e("strong",[t._v("express")]),t._v(", this is the default value.")]),t._v(" "),e("li",[e("code",[t._v("connect")]),t._v(": uses "),e("strong",[t._v("connect")]),t._v(".")])]),t._v(" "),e("h3",{attrs:{id:"logger"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#logger"}},[t._v("#")]),t._v(" logger")]),t._v(" "),e("p",[t._v("Tells if you want to log server requests or not. This can also be an object containing "),e("a",{attrs:{href:"http://www.senchalabs.org/connect/middleware-logger.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("logger options"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h3",{attrs:{id:"compress"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compress"}},[t._v("#")]),t._v(" compress")]),t._v(" "),e("p",[t._v("Tells if you want to serve "),e("code",[t._v("gzipped")]),t._v(" content or not. By default this is "),e("code",[t._v("true")]),t._v(".")]),t._v(" "),e("p",[t._v("If you are using "),e("code",[t._v("h5bp")]),t._v(" as a middleware, we strongly encourage you to use the "),e("code",[t._v("compress")]),t._v(" middleware provided by\n"),e("strong",[t._v("express")]),t._v(" / "),e("strong",[t._v("connect")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);