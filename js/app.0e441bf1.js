(function (a) {
  function e(e) {
    for (var n, r, i = e[0], o = e[1], c = e[2], v = 0, p = []; v < i.length; v++) r = i[v], l[r] && p.push(l[r][0]), l[r] = 0;
    for (n in o) Object.prototype.hasOwnProperty.call(o, n) && (a[n] = o[n]);
    u && u(e);
    while (p.length) p.shift()();
    return s.push.apply(s, c || []), t()
  }

  function t() {
    for (var a, e = 0; e < s.length; e++) {
      for (var t = s[e], n = !0, i = 1; i < t.length; i++) {
        var o = t[i];
        0 !== l[o] && (n = !1)
      }
      n && (s.splice(e--, 1), a = r(r.s = t[0]))
    }
    return a
  }

  var n = {}, l = {app: 0}, s = [];

  function r(e) {
    if (n[e]) return n[e].exports;
    var t = n[e] = {i: e, l: !1, exports: {}};
    return a[e].call(t.exports, t, t.exports, r), t.l = !0, t.exports
  }

  r.m = a, r.c = n, r.d = function (a, e, t) {
    r.o(a, e) || Object.defineProperty(a, e, {enumerable: !0, get: t})
  }, r.r = function (a) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(a, "__esModule", {value: !0})
  }, r.t = function (a, e) {
    if (1 & e && (a = r(a)), 8 & e) return a;
    if (4 & e && "object" === typeof a && a && a.__esModule) return a;
    var t = Object.create(null);
    if (r.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: a
    }), 2 & e && "string" != typeof a) for (var n in a) r.d(t, n, function (e) {
      return a[e]
    }.bind(null, n));
    return t
  }, r.n = function (a) {
    var e = a && a.__esModule ? function () {
      return a["default"]
    } : function () {
      return a
    };
    return r.d(e, "a", e), e
  }, r.o = function (a, e) {
    return Object.prototype.hasOwnProperty.call(a, e)
  }, r.p = "/";
  var i = window["webpackJsonp"] = window["webpackJsonp"] || [],
      o = i.push.bind(i);
  i.push = e, i = i.slice();
  for (var c = 0; c < i.length; c++) e(i[c]);
  var u = o;
  s.push([0, "chunk-vendors"]), t()
})({
  0: function (a, e, t) {
    a.exports = t("56d7")
  }, "034f": function (a, e, t) {
    "use strict";
    var n = t("64a9"), l = t.n(n);
    l.a
  }, 3213: function (a, e, t) {
  }, 4530: function (a, e, t) {
    "use strict";
    var n = t("f1c0"), l = t.n(n);
    l.a
  }, "56d7": function (a, e, t) {
    "use strict";
    t.r(e);
    t("cadf"), t("551c"), t("f751"), t("097d");
    var n = t("2b0e"), l = function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {attrs: {id: "app"}}, [t("HelloWorld", {attrs: {msg: "Welcome to Your Vue.js App"}})], 1)
        }, s = [], r = function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {staticClass: "home"}, [t("div", {staticClass: "title_c"}, [t("h1", [a._v("\n        RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models\n      ")]), t("p", [t("name", {
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
          }, [a._v("\n          zenmoore@buaa.edu.cn, liujiaheng@buaa.edu.cn\n        ")])], 1), a._m(0)]), a._m(1), a._m(2), a._m(3), a._m(4), t("div", {staticClass: "result"}, [t("h2", [a._v("Experimental result")]), t("h3", [a._v("Instruction Generalization")]), t("h4", {staticClass: "text4"}, [a._v("\n          Rouge-L. English.\n        ")]), t("el-table", {
            staticClass: "table",
            staticStyle: {width: "800px"},
            attrs: {data: a.tableData1, border: ""}
          }, [t("el-table-column", {
            attrs: {
              prop: "val1",
              label: "Model",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val2",
              label: "rouge-l, CUS",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val3",
              label: "rouge-l, RAW "
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val4",
              label: "rouge-l, SPE",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val5",
              label: "ave."
            }
          })], 1), t("h4", {staticClass: "text4"}, [a._v("\n        Rouge-L. Chinese.\n      ")]), t("el-table", {
            staticClass: "table",
            staticStyle: {width: "800px"},
            attrs: {data: a.tableData2, border: ""}
          }, [t("el-table-column", {
            attrs: {
              prop: "val1",
              label: "Model",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val2",
              label: "rouge-l, CUS",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val3",
              label: "rouge-l, RAW "
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val4",
              label: "rouge-l, SPE",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val5",
              label: "ave."
            }
          })], 1), t("h3", [a._v("Role Generalization")]), t("h4", {staticClass: "text4"}, [a._v("\n        Rouge-L.\n      ")]), t("el-table", {
            staticClass: "table",
            staticStyle: {width: "800px"},
            attrs: {data: a.tableData3, border: ""}
          }, [t("el-table-column", {
            attrs: {
              prop: "val1",
              label: "Model",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val2",
              label: "rouge-l, CUS",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val3",
              label: "rouge-l, RAW "
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val4",
              label: "rouge-l, SPE",
              width: "180"
            }
          }), t("el-table-column", {
            attrs: {
              prop: "val5",
              label: "ave."
            }
          })], 1)], 1), a._m(5), a._m(6), a._m(7)])
        }, i = [function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("p", {staticClass: "a_div"}, [t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: "https://arxiv.org/abs/2310.00746"}
          }, [a._v("Arxiv")])]), t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [a._v("Demo")])]), t("span", {staticClass: "a_class"}, [t("a", {
            staticClass: "a_text",
            attrs: {href: "https://arxiv.org/"}
          }, [a._v("Data")])])])
        }, function () {
          var a = this, e = a.$createElement, n = a._self._c || e;
          return n("div", {staticClass: "cover"}, [n("img", {
            staticClass: "img",
            attrs: {src: t("7e77"), alt: ""}
          })])
        }, function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {staticClass: "abstract"}, [t("h2", [a._v("\n        Abstract\n      ")]), t("span", {staticClass: "abstract_text"}, [a._v("\nThe advent of Large Language Models (LLMs) has paved the way for complex tasks such as role-playing, which enhances user interactions by enabling models to imitate various characters. However, the closed-source nature of state-of-the-art LLMs and their general-purpose training limit role-playing optimization. In this paper, we introduce RoleLLM, a framework to benchmark, elicit, and enhance role-playing abilities in LLMs. RoleLLM comprises four stages: (1) Role Profile Construction for 100 roles; (2) Context-Based Instruction Generation (Context-Instruct) for role-specific knowledge extraction; (3) Role Prompting using GPT (RoleGPT) for speaking style imitation; and (4) Role-Conditioned Instruction Tuning (RoCIT) for fine-tuning open-source models along with role customization. By Context-Instruct and RoleGPT, we create RoleBench, the first systematic and fine-grained character-level benchmark dataset for role-playing with 168,093 samples. Moreover, RoCIT on RoleBench yields RoleLLaMA (English) and RoleGLM (Chinese), significantly enhancing role-playing abilities and even achieving comparable results with RoleGPT (using GPT-4).\n      ")])])
        }, function () {
          var a = this, e = a.$createElement, n = a._self._c || e;
          return n("div", {staticClass: "video"}, [n("h2", [a._v("\n          Demonstration\n        ")]), n("img", {
            staticClass: "img",
            attrs: {src: t("f85b"), alt: ""}
          }), n("img", {staticClass: "img", attrs: {src: t("f731"), alt: ""}})])
        }, function () {
          var a = this, e = a.$createElement, n = a._self._c || e;
          return n("div", {staticClass: "method"}, [n("h2", [a._v("\n        Method\n      ")]), n("p", {staticClass: "text_p"}, [a._v("\n        The construction of the RoleBench dataset consists of five steps: (1) Role selection; (2) Role profile construction (input); (3) General instruction sampling (input); (4) Generation of raw RoleBench data (output); and (5) Cleaning of RoleBench data.\n      ")]), n("p", {staticClass: "text_p"}, [a._v("\n        1. Role selection. We selected 100 roles, including 5 Chinese roles and 95 English roles, each of which exhibits a unique personality and speaking style.\n      ")]), n("p", {staticClass: "text_p"}, [a._v("\n        2. Role profile construction. The role profile consists of three parts: description, catchphrase, and structured data from the script. The description and catchphrase are generated by GPT-4 and verified by humans. The structured data is parsed by regular expressions according to certain rules, including dialogue content, background, and narration.\n      ")]), n("p", {staticClass: "text_p"}, [a._v("\n        3. General instruction sampling. For the English dataset, we randomly sampled 1500 instructions with a length of no more than 100 words from Super-NaturalInstruct. For the Chinese dataset, we randomly sampled 750 instructions with a length of less than 100 characters from each of the coig and balle datasets. The sampled instructions are deduplicated by the BM_25 method.\n      ")]), n("p", {staticClass: "text_p"}, [a._v("\n        4. Generation of raw RoleBench data. As shown in the figure below, RoleBench consists of two parts: general instruction and role specific instruction. The former is generated by a model that combines the role’s unique speaking style and relevant knowledge, generating 6 responses, one of which is used as a baseline, and 5 as ground truths. The latter is generated by another model based on the actions or plots in the original script, generating 1 response as a ground truth.\n\n      ")]), n("img", {
            staticClass: "img",
            attrs: {src: t("8d95"), alt: ""}
          }), n("p", {staticClass: "text_p"}, [a._v("\n        5. Cleaning of RoleBench data. We cleaned all RoleBench data according to four principles: completeness, AI identity hiding, role identity hiding, and responsiveness. We excluded samples that violated any of these principles.\n      ")])])
        }, function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {staticClass: "end1"}, [t("h2", [a._v("Safety statement")]), t("h4", [a._v("\n        disclaimer: potentially sensitive content\n      ")])])
        }, function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {staticClass: "end2"}, [t("h2", [a._v("Open source protocol description")]), t("h4", [a._v("\n        apache 2.0 license\n      ")])])
        }, function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("div", {staticClass: "end"}, [t("h2", [a._v("BibTeX")]), t("div", {staticClass: "code_c"}, [t("pre", [a._v("            "), t("code", [a._v("\n  @misc{wang2023rolellm,\n      title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},\n      author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},\n      year={2023},\n      eprint={2310.00746},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n  }")])])])])
        }], o = function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("span", {staticClass: "nameT"}, [a._v("\r\n  " + a._s(a.val) + "\r\n  "), t("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  ,\r\n")])
        }, c = [], u = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, v = u, p = (t("4530"), t("2877")),
        h = Object(p["a"])(v, o, c, !1, null, "2b2c9a25", null), d = h.exports,
        m = function () {
          var a = this, e = a.$createElement, t = a._self._c || e;
          return t("span", {staticClass: "nameT"}, [t("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  " + a._s(a.val) + "\r\n  ;\r\n")])
        }, g = [], f = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, b = f,
        _ = (t("8ec9"), Object(p["a"])(b, m, g, !1, null, "11d45211", null)),
        y = _.exports, C = {
          name: "HelloWorld",
          props: {msg: String},
          components: {name: d, company: y},
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
        }, w = C,
        x = (t("8981"), Object(p["a"])(w, r, i, !1, null, "2cc4dbb0", null)),
        R = x.exports, L = {name: "app", components: {HelloWorld: R}}, M = L,
        T = (t("034f"), Object(p["a"])(M, l, s, !1, null, null, null)),
        P = T.exports, S = t("5c96"), E = t.n(S);
    t("0fae");
    n["default"].config.productionTip = !1, n["default"].use(E.a), new n["default"]({
      render: function (a) {
        return a(P)
      }
    }).$mount("#app")
  }, "63a0": function (a, e, t) {
  }, "64a9": function (a, e, t) {
  }, "7e77": function (a, e, t) {
    a.exports = t.p + "web_fe/img/img.fc51f956.png"
  }, 8981: function (a, e, t) {
    "use strict";
    var n = t("3213"), l = t.n(n);
    l.a
  }, "8d95": function (a, e, t) {
    a.exports = t.p + "web_fe/img/img_3.394a600a.png"
  }, "8ec9": function (a, e, t) {
    "use strict";
    var n = t("63a0"), l = t.n(n);
    l.a
  }, f1c0: function (a, e, t) {
  }, f731: function (a, e, t) {
    a.exports = t.p + "web_fe/img/img_2.a744cc45.png"
  }, f85b: function (a, e, t) {
    a.exports = t.p + "web_fe/img/img_1.a1b44af7.png"
  }
});
//# sourceMappingURL=app.0e441bf1.js.map