(function (a) {
  function n(n) {
    for (var e, r, l = n[0], o = n[1], c = n[2], v = 0, m = []; v < l.length; v++) r = l[v], s[r] && m.push(s[r][0]), s[r] = 0;
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (a[e] = o[e]);
    u && u(n);
    while (m.length) m.shift()();
    return i.push.apply(i, c || []), t()
  }

  function t() {
    for (var a, n = 0; n < i.length; n++) {
      for (var t = i[n], e = !0, l = 1; l < t.length; l++) {
        var o = t[l];
        0 !== s[o] && (e = !1)
      }
      e && (i.splice(n--, 1), a = r(r.s = t[0]))
    }
    return a
  }

  var e = {}, s = {app: 0}, i = [];

  function r(n) {
    if (e[n]) return e[n].exports;
    var t = e[n] = {i: n, l: !1, exports: {}};
    return a[n].call(t.exports, t, t.exports, r), t.l = !0, t.exports
  }

  r.m = a, r.c = e, r.d = function (a, n, t) {
    r.o(a, n) || Object.defineProperty(a, n, {enumerable: !0, get: t})
  }, r.r = function (a) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(a, "__esModule", {value: !0})
  }, r.t = function (a, n) {
    if (1 & n && (a = r(a)), 8 & n) return a;
    if (4 & n && "object" === typeof a && a && a.__esModule) return a;
    var t = Object.create(null);
    if (r.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: a
    }), 2 & n && "string" != typeof a) for (var e in a) r.d(t, e, function (n) {
      return a[n]
    }.bind(null, e));
    return t
  }, r.n = function (a) {
    var n = a && a.__esModule ? function () {
      return a["default"]
    } : function () {
      return a
    };
    return r.d(n, "a", n), n
  }, r.o = function (a, n) {
    return Object.prototype.hasOwnProperty.call(a, n)
  }, r.p = "/";
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
      o = l.push.bind(l);
  l.push = n, l = l.slice();
  for (var c = 0; c < l.length; c++) n(l[c]);
  var u = o;
  i.push([0, "chunk-vendors"]), t()
})({
  0: function (a, n, t) {
    a.exports = t("56d7")
  }, "034f": function (a, n, t) {
    "use strict";
    var e = t("64a9"), s = t.n(e);
    s.a
  }, "081c": function (a, n, t) {
    "use strict";
    var e = t("b317"), s = t.n(e);
    s.a
  }, "11cc": function (a, n, t) {
    // a.exports = t.p + "img/img2.94d7cbaf.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img2.94d7cbaf.png"
  }, "3c11": function (a, n, t) {
    // a.exports = t.p + "img/img_4.4132147f.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img_4.4132147f.png"
  }, 4530: function (a, n, t) {
    "use strict";
    var e = t("f1c0"), s = t.n(e);
    s.a
  }, "56d7": function (a, n, t) {
    "use strict";
    t.r(n);
    t("cadf"), t("551c"), t("f751"), t("097d");
    var e = t("2b0e"), s = function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("div", {attrs: {id: "app"}}, [t("HelloWorld", {attrs: {msg: "Welcome to Your Vue.js App"}})], 1)
        }, i = [], r = function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("div", {staticClass: "home"}, [t("div", {staticClass: "title_c"}, [t("h1", [a._v("\n        RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models\n      ")]), t("br"), t("span", {staticStyle: {color: "red"}}, [a._v("\n        disclaimer: potentially sensitive content\n      ")]), t("p", [t("name", {
            attrs: {
              val: "Zekun Moore Wang",
              num: "1,9∗"
            }
          }), t("name", {
            attrs: {
              val: "Zhongyuan Peng",
              num: "2∗"
            }
          }), t("name", {
            attrs: {
              val: "Haoran Que",
              num: "1∗"
            }
          }), t("name", {
            attrs: {
              val: "Jiaheng Liu",
              num: "1†"
            }
          }), t("br"), t("name", {
            attrs: {
              val: "Wangchunshu Zhou",
              num: "3"
            }
          }), t("name", {
            attrs: {
              val: "Yuhan Wu",
              num: "4"
            }
          }), t("name", {
            attrs: {
              val: "Hongcheng Guo",
              num: "1"
            }
          }), t("name", {
            attrs: {
              val: "Ruitong Gan",
              num: "5"
            }
          }), t("name", {
            attrs: {
              val: "Zehao Ni",
              num: "2"
            }
          }), t("br"), t("name", {
            attrs: {
              val: "Man Zhang",
              num: "4"
            }
          }), t("name", {
            attrs: {
              val: "Zhaoxiang Zhang",
              num: "6"
            }
          }), t("name", {
            attrs: {
              val: "Wanli Ouyang",
              num: "7"
            }
          }), t("name", {
            attrs: {
              val: "Ke Xu",
              num: "1"
            }
          }), t("name", {
            attrs: {
              val: "Wenhu Chen",
              num: "8"
            }
          }), t("name", {
            attrs: {
              val: "Jie Fu",
              num: "9"
            }
          }), t("name", {
            attrs: {
              val: "Junran Peng",
              num: "2,10"
            }
          }), t("br"), t("company", {
            attrs: {
              val: "Beihang University",
              num: "1"
            }
          }), t("company", {
            attrs: {
              val: "University of the Chinese Academy of Sciences",
              num: "2"
            }
          }), t("company", {
            attrs: {
              val: "ETH Zürich",
              num: "3"
            }
          }), t("br"), t("company", {
            attrs: {
              val: "Beijing University of Posts and Telecommunications",
              num: "4"
            }
          }), t("company", {
            attrs: {
              val: "The Hong Kong Polytechnic University",
              num: "5"
            }
          }), t("br"), t("company", {
            attrs: {
              val: "Institute of Automation, Chinese Academy of Science",
              num: "6"
            }
          }), t("company", {
            attrs: {
              val: "Shanghai AI Lab",
              num: "7"
            }
          }), t("br"), t("company", {
            attrs: {
              val: "University of Waterloo",
              num: "8"
            }
          }), t("company", {
            attrs: {
              val: "The Hong Kong University of Science and Technology",
              num: "9"
            }
          }), t("company", {
            attrs: {
              val: "Chongyue Technology",
              num: "10"
            }
          }), t("br"), t("span", {
            staticStyle: {
              "font-size": "0.8rem",
              "font-weight": "400"
            }
          }, [a._v("\n          zenmoore@buaa.edu.cn, liujiaheng@buaa.edu.cn\n        ")])], 1), a._m(0)]), a._m(1), a._m(2), a._m(3), a._m(4), a._m(5), a._m(6), a._m(7)])
        }, l = [function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("p", {staticClass: "a_div"}, [t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [a._v("demos")])]), t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: "https://arxiv.org/abs/2310.00746"}
          }, [a._v("arxiv")])]), t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: "https://github.com/InteractiveNLP-Team/RoleLLM-public"}
          }, [a._v("github")])]), t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [a._v("rolebench")])])])
        }, function () {
          var a = this, n = a.$createElement, e = a._self._c || n;
          return e("div", {staticClass: "cover"}, [e("img", {
            staticClass: "img",
            attrs: {src: t("7e77"), alt: ""}
          })])
        }, function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("div", {staticClass: "abstract"}, [t("h2", [a._v("\n        Abstract\n      ")]), t("span", {staticClass: "abstract_text"}, [a._v("\nThe advent of Large Language Models (LLMs) has paved the way for complex tasks such as role-playing, which enhances user interactions by enabling models to imitate various characters. However, the closed-source nature of state-of-the-art LLMs and their general-purpose training limit role-playing optimization. In this paper, we introduce RoleLLM, a framework to benchmark, elicit, and enhance role-playing abilities in LLMs. RoleLLM comprises four stages: (1) Role Profile Construction for 100 roles; (2) Context-Based Instruction Generation (Context-Instruct) for role-specific knowledge extraction; (3) Role Prompting using GPT (RoleGPT) for speaking style imitation; and (4) Role-Conditioned Instruction Tuning (RoCIT) for fine-tuning open-source models along with role customization. By Context-Instruct and RoleGPT, we create RoleBench, the first systematic and fine-grained character-level benchmark dataset for role-playing with 168,093 samples. Moreover, RoCIT on RoleBench yields RoleLLaMA (English) and RoleGLM (Chinese), significantly enhancing role-playing abilities and even achieving comparable results with RoleGPT (using GPT-4).\n      ")])])
        }, function () {
          var a = this, n = a.$createElement, e = a._self._c || n;
          return e("div", {staticClass: "video"}, [e("h2", [a._v("\n          Demonstration\n        ")]), e("img", {
            staticClass: "img",
            attrs: {src: t("f85b"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: t("f731"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: t("3c11"), alt: ""}
          }), e("img", {staticClass: "img", attrs: {src: t("7c41"), alt: ""}})])
        }, function () {
          var a = this, n = a.$createElement, e = a._self._c || n;
          return e("div", {staticClass: "method"}, [e("h2", [a._v("\n        Method\n      ")]), e("img", {
            staticClass: "img",
            attrs: {src: t("8d95"), alt: ""}
          }), e("p", {staticClass: "text_p"}, [a._v("\n        Illustration of RoleLLM. RoleLLM comprises four stages: (1) role profile construction; (2) context-based instruction generation (Context-Instruct), primarily aimed at extracting role-specific knowledge and episodic memories; (3) role prompting using GPT (RoleGPT), chiefly for the imitation of speaking styles; and (4) role-conditioned instruction tuning (RoCIT), which utilizes the data generated by Context-Instruct and RoleGPT to enhance existing open-source LLMs.\n      ")])])
        }, function () {
          var a = this, n = a.$createElement, e = a._self._c || n;
          return e("div", {staticClass: "result"}, [e("h2", [a._v("Experimental Results")]), e("img", {
            staticClass: "img",
            attrs: {src: t("71d3"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: t("11cc"), alt: ""}
          }), e("img", {staticClass: "img", attrs: {src: t("f15c"), alt: ""}})])
        }, function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("div", {staticClass: "end2"}, [t("h2", [a._v("\n        Acquirements\n      ")]), t("h3", [a._v("\n        License\n      ")]), t("h4", [a._v("\n        apache 2.0\n      ")])])
        }, function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("div", {staticClass: "end"}, [t("h2", [a._v("BibTeX")]), t("div", {staticClass: "code_c"}, [t("pre", [a._v("            "), t("code", [a._v("\n  @misc{wang2023rolellm,\n      title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},\n      author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},\n      year={2023},\n      eprint={2310.00746},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n  }")])])])])
        }], o = function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("span", {staticClass: "nameT"}, [a._v("\r\n  " + a._s(a.val) + "\r\n  "), t("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  ,\r\n")])
        }, c = [], u = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, v = u, m = (t("4530"), t("2877")),
        g = Object(m["a"])(v, o, c, !1, null, "2b2c9a25", null), p = g.exports,
        f = function () {
          var a = this, n = a.$createElement, t = a._self._c || n;
          return t("span", {staticClass: "nameT"}, [t("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  " + a._s(a.val) + "\r\n  ;\r\n")])
        }, h = [], d = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, _ = d,
        y = (t("8ec9"), Object(m["a"])(_, f, h, !1, null, "11d45211", null)),
        b = y.exports, C = {
          name: "HelloWorld",
          props: {msg: String},
          components: {name: p, company: b},
          data: function () {
            return {
              tableData1: [{
                val1: "RoleGPT",
                val2: .5764,
                val3: .5322,
                val4: .3229,
                val5: .4772
              }, {
                val1: "LLaMA",
                val2: .1291,
                val3: .1232,
                val4: .2553,
                val5: .1692
              }, {
                val1: "Alpaca",
                val2: .2423,
                val3: .3529,
                val4: .2695,
                val5: .2882
              }, {
                val1: "Vicuna",
                val2: .2101,
                val3: .255,
                val4: .2913,
                val5: .2521
              }, {
                val1: "LLaMA-script",
                val2: .0832,
                val3: .0509,
                val4: .1081,
                val5: .0807
              }, {
                val1: "RoleLLaMA",
                val2: .3294,
                val3: .3755,
                val4: .3814,
                val5: .3621
              }],
              tableData2: [{
                val1: "RoleGPT",
                val2: .5368,
                val3: .5748,
                val4: .2478,
                val5: .4531
              }, {
                val1: "ChatGLM",
                val2: .3938,
                val3: .506,
                val4: .3099,
                val5: .4132
              }, {
                val1: "ChatGLM-script",
                val2: .1401,
                val3: .3066,
                val4: .0915,
                val5: .1794
              }, {
                val1: "RoleGLM",
                val2: .5049,
                val3: .5255,
                val4: .3406,
                val5: .4587
              }],
              tableData3: [{
                val1: "RoleGPT",
                val2: .602,
                val3: .5322,
                val4: .2985,
                val5: .4776
              }, {
                val1: "LLaMA",
                val2: .2931,
                val3: .1232,
                val4: .2551,
                val5: .2238
              }, {
                val1: "Alpaca",
                val2: .293,
                val3: .3529,
                val4: .2587,
                val5: .3015
              }, {
                val1: "Vicuna",
                val2: .32,
                val3: .255,
                val4: .2775,
                val5: .2842
              }, {
                val1: "RoleLLaMA",
                val2: .4126,
                val3: .4107,
                val4: .2568,
                val5: .36
              }]
            }
          }
        }, L = C,
        x = (t("081c"), Object(m["a"])(L, r, l, !1, null, "0caeeaa1", null)),
        M = x.exports, R = {name: "app", components: {HelloWorld: M}}, T = R,
        P = (t("034f"), Object(m["a"])(T, s, i, !1, null, null, null)),
        w = P.exports, G = t("5c96"), E = t.n(G);
    t("0fae");
    e["default"].config.productionTip = !1, e["default"].use(E.a), new e["default"]({
      render: function (a) {
        return a(w)
      }
    }).$mount("#app")
  }, "63a0": function (a, n, t) {
  }, "64a9": function (a, n, t) {
  }, "71d3": function (a, n, t) {
    // a.exports = t.p + "img/img1.2bf7fdf0.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img1.2bf7fdf0.png"
  }, "7c41": function (a, n, t) {
    // a.exports = t.p + "img/img_5.10b0b9ff.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img_5.10b0b9ff.png"
  }, "7e77": function (a, n, t) {
    // a.exports = t.p + "img/img.fc51f956.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img.fc51f956.png"
  }, "8d95": function (a, n, t) {
    // a.exports = t.p + "img/img_3.394a600a.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img_3.394a600a.png"
  }, "8ec9": function (a, n, t) {
    "use strict";
    var e = t("63a0"), s = t.n(e);
    s.a
  }, b317: function (a, n, t) {
  }, f15c: function (a, n, t) {
    // a.exports = t.p + "img/img3.a4da6670.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img3.a4da6670.png"
  }, f1c0: function (a, n, t) {
  }, f731: function (a, n, t) {
    // a.exports = t.p + "img/img_2.a744cc45.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img_2.a744cc45.png"
  }, f85b: function (a, n, t) {
    // a.exports = t.p + "img/img_1.a1b44af7.png"
    a.exports = "https://dabzzg.github.io/web_fe/img/img_1.a1b44af7.png"
  }
});
//# sourceMappingURL=app.4a66c6a9.js.map
