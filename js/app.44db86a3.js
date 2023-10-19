(function (a) {
  function t(t) {
    for (var e, r, l = t[0], o = t[1], c = t[2], v = 0, m = []; v < l.length; v++) r = l[v], i[r] && m.push(i[r][0]), i[r] = 0;
    for (e in o) Object.prototype.hasOwnProperty.call(o, e) && (a[e] = o[e]);
    u && u(t);
    while (m.length) m.shift()();
    return s.push.apply(s, c || []), n()
  }

  function n() {
    for (var a, t = 0; t < s.length; t++) {
      for (var n = s[t], e = !0, l = 1; l < n.length; l++) {
        var o = n[l];
        0 !== i[o] && (e = !1)
      }
      e && (s.splice(t--, 1), a = r(r.s = n[0]))
    }
    return a
  }

  var e = {}, i = {app: 0}, s = [];

  function r(t) {
    if (e[t]) return e[t].exports;
    var n = e[t] = {i: t, l: !1, exports: {}};
    return a[t].call(n.exports, n, n.exports, r), n.l = !0, n.exports
  }

  r.m = a, r.c = e, r.d = function (a, t, n) {
    r.o(a, t) || Object.defineProperty(a, t, {enumerable: !0, get: n})
  }, r.r = function (a) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(a, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(a, "__esModule", {value: !0})
  }, r.t = function (a, t) {
    if (1 & t && (a = r(a)), 8 & t) return a;
    if (4 & t && "object" === typeof a && a && a.__esModule) return a;
    var n = Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", {
      enumerable: !0,
      value: a
    }), 2 & t && "string" != typeof a) for (var e in a) r.d(n, e, function (t) {
      return a[t]
    }.bind(null, e));
    return n
  }, r.n = function (a) {
    var t = a && a.__esModule ? function () {
      return a["default"]
    } : function () {
      return a
    };
    return r.d(t, "a", t), t
  }, r.o = function (a, t) {
    return Object.prototype.hasOwnProperty.call(a, t)
  }, r.p = "/";
  var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
      o = l.push.bind(l);
  l.push = t, l = l.slice();
  for (var c = 0; c < l.length; c++) t(l[c]);
  var u = o;
  s.push([0, "chunk-vendors"]), n()
})({
  0: function (a, t, n) {
    a.exports = n("56d7")
  }, "034f": function (a, t, n) {
    "use strict";
    var e = n("64a9"), i = n.n(e);
    i.a
  }, "11cc": function (a, t, n) {
    // a.exports = n.p + "img/img2.94d7cbaf.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img2.94d7cbaf.png"
  }, "3c11": function (a, t, n) {
    // a.exports = n.p + "img/img_4.4132147f.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img_4.4132147f.png"
  }, 4530: function (a, t, n) {
    "use strict";
    var e = n("f1c0"), i = n.n(e);
    i.a
  }, "56d7": function (a, t, n) {
    "use strict";
    n.r(t);
    n("cadf"), n("551c"), n("f751"), n("097d");
    var e = n("2b0e"), i = function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("div", {attrs: {id: "app"}}, [n("HelloWorld", {attrs: {msg: "Welcome to Your Vue.js App"}})], 1)
        }, s = [], r = function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("div", {staticClass: "home"}, [n("div", {staticClass: "title_c"}, [n("h1", [a._v("\n        RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models\n      ")]), n("br"), n("span", {staticStyle: {color: "red"}}, [a._v("\n        disclaimer: potentially sensitive content\n      ")]), n("p", [n("name", {
            attrs: {
              val: "Zekun Moore Wang",
              num: "1,9∗"
            }
          }), n("name", {
            attrs: {
              val: "Zhongyuan Peng",
              num: "2∗"
            }
          }), n("name", {
            attrs: {
              val: "Haoran Que",
              num: "1∗"
            }
          }), n("name", {
            attrs: {
              val: "Jiaheng Liu",
              num: "1†"
            }
          }), n("br"), n("name", {
            attrs: {
              val: "Wangchunshu Zhou",
              num: "3"
            }
          }), n("name", {
            attrs: {
              val: "Yuhan Wu",
              num: "4"
            }
          }), n("name", {
            attrs: {
              val: "Hongcheng Guo",
              num: "1"
            }
          }), n("name", {
            attrs: {
              val: "Ruitong Gan",
              num: "5"
            }
          }), n("name", {
            attrs: {
              val: "Zehao Ni",
              num: "2"
            }
          }), n("br"), n("name", {
            attrs: {
              val: "Man Zhang",
              num: "4"
            }
          }), n("name", {
            attrs: {
              val: "Zhaoxiang Zhang",
              num: "6"
            }
          }), n("name", {
            attrs: {
              val: "Wanli Ouyang",
              num: "7"
            }
          }), n("name", {
            attrs: {
              val: "Ke Xu",
              num: "1"
            }
          }), n("name", {
            attrs: {
              val: "Wenhu Chen",
              num: "8"
            }
          }), n("name", {
            attrs: {
              val: "Jie Fu",
              num: "9"
            }
          }), n("name", {
            attrs: {
              val: "Junran Peng",
              num: "2,10"
            }
          }), n("br"), n("company", {
            attrs: {
              val: "Beihang University",
              num: "1"
            }
          }), n("company", {
            attrs: {
              val: "University of the Chinese Academy of Sciences",
              num: "2"
            }
          }), n("company", {
            attrs: {
              val: "ETH Zürich",
              num: "3"
            }
          }), n("br"), n("company", {
            attrs: {
              val: "Beijing University of Posts and Telecommunications",
              num: "4"
            }
          }), n("company", {
            attrs: {
              val: "The Hong Kong Polytechnic University",
              num: "5"
            }
          }), n("br"), n("company", {
            attrs: {
              val: "Institute of Automation, Chinese Academy of Science",
              num: "6"
            }
          }), n("company", {
            attrs: {
              val: "Shanghai AI Lab",
              num: "7"
            }
          }), n("br"), n("company", {
            attrs: {
              val: "University of Waterloo",
              num: "8"
            }
          }), n("company", {
            attrs: {
              val: "The Hong Kong University of Science and Technology",
              num: "9"
            }
          }), n("company", {
            attrs: {
              val: "Cheery.AI",
              num: "10"
            }
          }), n("br"), n("span", {
            staticStyle: {
              "font-size": "0.8rem",
              "font-weight": "400"
            }
          }, [a._v("\n          zenmoore@buaa.edu.cn, liujiaheng@buaa.edu.cn\n        ")])], 1), a._m(0)]), a._m(1), a._m(2), a._m(3), a._m(4), a._m(5), a._m(6), a._m(7), a._m(8)])
        }, l = [function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("p", {staticClass: "a_div"}, [n("span", {staticClass: "a_class"}, [n("a", {
            staticClass: "a_text",
            attrs: {href: "https://arxiv.org/abs/2310.00746"}
          }, [a._v("arXiv")])]), n("span", {staticClass: "a_class"}, [n("a", {
            staticClass: "a_text",
            attrs: {href: "https://github.com/InteractiveNLP-Team/RoleLLM-public"}
          }, [a._v("Code\n          ")])]), n("span", {staticClass: "a_class"}, [n("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [a._v("RoleBench")])]), n("span", {staticClass: "a_class"}, [n("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [a._v("Demo(coming soon)")])])])
        }, function () {
          var a = this, t = a.$createElement, e = a._self._c || t;
          return e("div", {staticClass: "cover"}, [e("img", {
            staticClass: "img",
            attrs: {src: n("7e77"), alt: ""}
          }), e("br"), e("span", {staticClass: "abstract_text"}, [a._v("\n        Illustration of RoleLLM. RoleLLM comprises four stages: (1) role profile construction; (2) context-based instruction generation (Context-Instruct), primarily aimed at extracting role-specific knowledge and episodic memories; (3) role prompting using GPT (RoleGPT), chiefly for the imitation of speaking styles; and (4) role-conditioned instruction tuning (RoCIT), which utilizes the data generated by Context-Instruct and RoleGPT to enhance existing open-source LLMs.\n      ")])])
        }, function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("div", {staticClass: "abstract"}, [n("h2", [a._v("\n        Abstract\n      ")]), n("span", {staticClass: "abstract_text"}, [a._v("\nThe advent of Large Language Models (LLMs) has paved the way for complex tasks such as role-playing, which enhances user interactions by enabling models to imitate various characters. However, the closed-source nature of state-of-the-art LLMs and their general-purpose training limit role-playing optimization. In this paper, we introduce RoleLLM, a framework to benchmark, elicit, and enhance role-playing abilities in LLMs. RoleLLM comprises four stages: (1) Role Profile Construction for 100 roles; (2) Context-Based Instruction Generation (Context-Instruct) for role-specific knowledge extraction; (3) Role Prompting using GPT (RoleGPT) for speaking style imitation; and (4) Role-Conditioned Instruction Tuning (RoCIT) for fine-tuning open-source models along with role customization. By Context-Instruct and RoleGPT, we create RoleBench, the first systematic and fine-grained character-level benchmark dataset for role-playing with 168,093 samples. Moreover, RoCIT on RoleBench yields RoleLLaMA (English) and RoleGLM (Chinese), significantly enhancing role-playing abilities and even achieving comparable results with RoleGPT (using GPT-4).\n      ")])])
        }, function () {
          var a = this, t = a.$createElement, e = a._self._c || t;
          return e("div", {staticClass: "cover"}, [e("h2", [a._v("Basic Statistics of RoleBench")]), e("img", {
            staticClass: "img",
            attrs: {src: n("a80a"), alt: ""}
          }), e("img", {staticClass: "img", attrs: {src: n("e98e"), alt: ""}})])
        }, function () {
          var a = this, t = a.$createElement, e = a._self._c || t;
          return e("div", {staticClass: "video"}, [e("h2", [a._v("\n          Demonstration\n        ")]), e("img", {
            staticClass: "img",
            attrs: {src: n("f85b"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: n("f731"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: n("3c11"), alt: ""}
          }), e("img", {staticClass: "img", attrs: {src: n("7c41"), alt: ""}})])
        }, function () {
          var a = this, t = a.$createElement, e = a._self._c || t;
          return e("div", {staticClass: "method"}, [e("h2", [a._v("\n        Method\n      ")]), e("img", {
            staticClass: "img",
            attrs: {src: n("8d95"), alt: ""}
          }), e("p", {staticClass: "text_p"}, [a._v("\n        Illustration of RoleLLM. RoleLLM comprises four stages: (1) role profile construction; (2) context-based instruction generation (Context-Instruct), primarily aimed at extracting role-specific knowledge and episodic memories; (3) role prompting using GPT (RoleGPT), chiefly for the imitation of speaking styles; and (4) role-conditioned instruction tuning (RoCIT), which utilizes the data generated by Context-Instruct and RoleGPT to enhance existing open-source LLMs.\n      ")])])
        }, function () {
          var a = this, t = a.$createElement, e = a._self._c || t;
          return e("div", {staticClass: "result"}, [e("h2", [a._v("Experimental Results")]), e("img", {
            staticClass: "img",
            attrs: {src: n("71d3"), alt: ""}
          }), e("img", {
            staticClass: "img",
            attrs: {src: n("11cc"), alt: ""}
          }), e("img", {staticClass: "img", attrs: {src: n("f15c"), alt: ""}})])
        }, function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("div", {staticClass: "end2"}, [n("h2", [a._v("\n        Acquirements\n      ")]), n("h3", [a._v("\n        License\n      ")]), n("h4", [a._v("\n         It is distributed under Apache License 2.0\n      ")])])
        }, function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("div", {staticClass: "end"}, [n("h2", [a._v("BibTeX")]), n("div", {staticClass: "code_c"}, [n("pre", [a._v("            "), n("code", [a._v("\n  @misc{wang2023rolellm,\n      title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},\n      author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},\n      year={2023},\n      eprint={2310.00746},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n  }")])])])])
        }], o = function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("span", {staticClass: "nameT"}, [a._v("\r\n  " + a._s(a.val) + "\r\n  "), n("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  ,\r\n")])
        }, c = [], u = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, v = u, m = (n("4530"), n("2877")),
        g = Object(m["a"])(v, o, c, !1, null, "2b2c9a25", null), p = g.exports,
        f = function () {
          var a = this, t = a.$createElement, n = a._self._c || t;
          return n("span", {staticClass: "nameT"}, [n("span", {staticClass: "valT"}, [a._v("\r\n    " + a._s(a.num) + "\r\n  ")]), a._v("\r\n  " + a._s(a.val) + "\r\n  ;\r\n")])
        }, d = [], h = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, _ = h,
        y = (n("8ec9"), Object(m["a"])(_, f, d, !1, null, "11d45211", null)),
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
        x = (n("c189"), Object(m["a"])(L, r, l, !1, null, "547e6f48", null)),
        R = x.exports, M = {name: "app", components: {HelloWorld: R}}, T = M,
        P = (n("034f"), Object(m["a"])(T, i, s, !1, null, null, null)),
        w = P.exports, G = n("5c96"), E = n.n(G);
    n("0fae");
    e["default"].config.productionTip = !1, e["default"].use(E.a), new e["default"]({
      render: function (a) {
        return a(w)
      }
    }).$mount("#app")
  }, "63a0": function (a, t, n) {
  }, "64a9": function (a, t, n) {
  }, "71d3": function (a, t, n) {
    // a.exports = n.p + "img/img1.2bf7fdf0.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img1.2bf7fdf0.png"
  }, "7c41": function (a, t, n) {
    // a.exports = n.p + "img/img_5.10b0b9ff.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img_5.10b0b9ff.png"
  }, "7e77": function (a, t, n) {
    // a.exports = n.p + "img/img.fc51f956.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img.fc51f956.png"
  }, "8d95": function (a, t, n) {
    // a.exports = n.p + "img/img_3.394a600a.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img_3.394a600a.png"
  }, "8ec9": function (a, t, n) {
    "use strict";
    var e = n("63a0"), i = n.n(e);
    i.a
  }, a80a: function (a, t, n) {
    // a.exports = n.p + "img/img6.d7af2b16.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img6.d7af2b16.png"
  }, c189: function (a, t, n) {
    "use strict";
    var e = n("e1c7"), i = n.n(e);
    i.a
  }, e1c7: function (a, t, n) {
  }, e98e: function (a, t, n) {
    // a.exports = n.p + "img/img7.20c0d5f2.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img7.20c0d5f2.png"
  }, f15c: function (a, t, n) {
    // a.exports = n.p + "img/img3.a4da6670.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img3.a4da6670.png"
  }, f1c0: function (a, t, n) {
  }, f731: function (a, t, n) {
    // a.exports = n.p + "img/img_2.a744cc45.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img_2.a744cc45.png"
  }, f85b: function (a, t, n) {
    // a.exports = n.p + "img/img_1.a1b44af7.png"
    a.exports = "https://rolellm.github.io/Rolellm/img/img_1.a1b44af7.png"
  }
});
//# sourceMappingURL=app.44db86a3.js.map
