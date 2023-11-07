(function (t) {
  function e(e) {
    for (var n, r, o = e[0], c = e[1], l = e[2], p = 0, h = []; p < o.length; p++) r = o[p], s[r] && h.push(s[r][0]), s[r] = 0;
    for (n in c) Object.prototype.hasOwnProperty.call(c, n) && (t[n] = c[n]);
    u && u(e);
    while (h.length) h.shift()();
    return i.push.apply(i, l || []), a()
  }

  function a() {
    for (var t, e = 0; e < i.length; e++) {
      for (var a = i[e], n = !0, o = 1; o < a.length; o++) {
        var c = a[o];
        0 !== s[c] && (n = !1)
      }
      n && (i.splice(e--, 1), t = r(r.s = a[0]))
    }
    return t
  }

  var n = {}, s = {app: 0}, i = [];

  function r(e) {
    if (n[e]) return n[e].exports;
    var a = n[e] = {i: e, l: !1, exports: {}};
    return t[e].call(a.exports, a, a.exports, r), a.l = !0, a.exports
  }

  r.m = t, r.c = n, r.d = function (t, e, a) {
    r.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: a})
  }, r.r = function (t) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
  }, r.t = function (t, e) {
    if (1 & e && (t = r(t)), 8 & e) return t;
    if (4 & e && "object" === typeof t && t && t.__esModule) return t;
    var a = Object.create(null);
    if (r.r(a), Object.defineProperty(a, "default", {
      enumerable: !0,
      value: t
    }), 2 & e && "string" != typeof t) for (var n in t) r.d(a, n, function (e) {
      return t[e]
    }.bind(null, n));
    return a
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t["default"]
    } : function () {
      return t
    };
    return r.d(e, "a", e), e
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e)
  }, r.p = "/";
  var o = window["webpackJsonp"] = window["webpackJsonp"] || [],
      c = o.push.bind(o);
  o.push = e, o = o.slice();
  for (var l = 0; l < o.length; l++) e(o[l]);
  var u = c;
  i.push([0, "chunk-vendors"]), a()
})({
  0: function (t, e, a) {
    t.exports = a("56d7")
  }, "034f": function (t, e, a) {
    "use strict";
    var n = a("64a9"), s = a.n(n);
    s.a
  }, "11cc": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img2.94d7cbaf.png"
  }, 1822: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/sun.ab71d7a4.jpeg"
  }, 3191: function (t, e, a) {
    "use strict";
    var n = a("af5d"), s = a.n(n);
    s.a
  }, "3c11": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img_4.4132147f.png"
  }, 4530: function (t, e, a) {
    "use strict";
    var n = a("f1c0"), s = a.n(n);
    s.a
  }, "555a": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/icon.e33af21c.png"
  }, "56d7": function (t, e, a) {
    "use strict";
    a.r(e);
    a("cadf"), a("551c"), a("f751"), a("097d");
    var n = a("2b0e"), s = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {attrs: {id: "app"}}, [a("HelloWorld", {attrs: {msg: "Welcome to Your Vue.js App"}})], 1)
        }, i = [], r = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {staticClass: "home"}, [a("div", {staticClass: "title_c"}, [a("h1", [t._v("\n        RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models\n      ")]), a("br"), a("span", {staticStyle: {color: "red"}}, [t._v("\n        disclaimer: potentially sensitive content\n      ")]), a("p", [a("name", {
            attrs: {
              val: "Zekun Moore Wang",
              num: "1,9∗"
            }
          }), a("name", {
            attrs: {
              val: "Zhongyuan Peng",
              num: "2∗"
            }
          }), a("name", {
            attrs: {
              val: "Haoran Que",
              num: "1∗"
            }
          }), a("name", {
            attrs: {
              val: "Jiaheng Liu",
              num: "1†"
            }
          }), a("br"), a("name", {
            attrs: {
              val: "Wangchunshu Zhou",
              num: "3"
            }
          }), a("name", {
            attrs: {
              val: "Yuhan Wu",
              num: "4"
            }
          }), a("name", {
            attrs: {
              val: "Hongcheng Guo",
              num: "1"
            }
          }), a("name", {
            attrs: {
              val: "Ruitong Gan",
              num: "5"
            }
          }), a("name", {
            attrs: {
              val: "Zehao Ni",
              num: "2"
            }
          }), a("br"), a("name", {
            attrs: {
              val: "Man Zhang",
              num: "4"
            }
          }), a("name", {
            attrs: {
              val: "Zhaoxiang Zhang",
              num: "6"
            }
          }), a("name", {
            attrs: {
              val: "Wanli Ouyang",
              num: "7"
            }
          }), a("name", {
            attrs: {
              val: "Ke Xu",
              num: "1"
            }
          }), a("name", {
            attrs: {
              val: "Wenhu Chen",
              num: "8"
            }
          }), a("name", {
            attrs: {
              val: "Jie Fu",
              num: "9"
            }
          }), a("name", {
            attrs: {
              val: "Junran Peng",
              num: "2,10"
            }
          }), a("br"), a("company", {
            attrs: {
              val: "Beihang University",
              num: "1"
            }
          }), a("company", {
            attrs: {
              val: "University of the Chinese Academy of Sciences",
              num: "2"
            }
          }), a("company", {
            attrs: {
              val: "ETH Zürich",
              num: "3"
            }
          }), a("br"), a("company", {
            attrs: {
              val: "Beijing University of Posts and Telecommunications",
              num: "4"
            }
          }), a("company", {
            attrs: {
              val: "The Hong Kong Polytechnic University",
              num: "5"
            }
          }), a("br"), a("company", {
            attrs: {
              val: "Institute of Automation, Chinese Academy of Science",
              num: "6"
            }
          }), a("company", {
            attrs: {
              val: "Shanghai AI Lab",
              num: "7"
            }
          }), a("br"), a("company", {
            attrs: {
              val: "University of Waterloo",
              num: "8"
            }
          }), a("company", {
            attrs: {
              val: "The Hong Kong University of Science and Technology",
              num: "9"
            }
          }), a("company", {
            attrs: {
              val: "Cheery.AI",
              num: "10"
            }
          }), a("br"), a("span", {
            staticStyle: {
              "font-size": "0.8rem",
              "font-weight": "400"
            }
          }, [t._v("\n          zenmoore@buaa.edu.cn, liujiaheng@buaa.edu.cn\n        ")])], 1), t._m(0)]), t._m(1), a("chat"), t._m(2), t._m(3), t._m(4), t._m(5), t._m(6), t._m(7), t._m(8)], 1)
        }, o = [function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("p", {staticClass: "a_div"}, [a("span", {staticClass: "a_class"}, [a("a", {
            staticClass: "a_text",
            attrs: {href: "https://arxiv.org/abs/2310.00746"}
          }, [t._v("arXiv")])]), a("span", {staticClass: "a_class"}, [a("a", {
            staticClass: "a_text",
            attrs: {href: "https://github.com/InteractiveNLP-Team/RoleLLM-public"}
          }, [t._v("Code\n          ")])]), a("span", {staticClass: "a_class"}, [a("a", {
            staticClass: "a_text",
            attrs: {href: "https://huggingface.co/datasets/ZenMoore/RoleBench"}
          }, [t._v("RoleBench")])]), a("span", {staticClass: "a_class"}, [a("a", {
            staticClass: "a_text",
            attrs: {href: ""}
          }, [t._v("Demo(coming soon)")])])])
        }, function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "cover"}, [n("img", {
            staticClass: "img",
            attrs: {src: a("7e77"), alt: ""}
          }), n("br"), n("span", {staticClass: "abstract_text"}, [t._v("\n        Illustration of RoleLLM. RoleLLM comprises four stages: (1) role profile construction; (2) context-based instruction generation (Context-Instruct), primarily aimed at extracting role-specific knowledge and episodic memories; (3) role prompting using GPT (RoleGPT), chiefly for the imitation of speaking styles; and (4) role-conditioned instruction tuning (RoCIT), which utilizes the data generated by Context-Instruct and RoleGPT to enhance existing open-source LLMs.\n      ")])])
        }, function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {staticClass: "abstract"}, [a("h2", [t._v("\n        Abstract\n      ")]), a("span", {staticClass: "abstract_text"}, [t._v("\nThe advent of Large Language Models (LLMs) has paved the way for complex tasks such as role-playing, which enhances user interactions by enabling models to imitate various characters. However, the closed-source nature of state-of-the-art LLMs and their general-purpose training limit role-playing optimization. In this paper, we introduce RoleLLM, a framework to benchmark, elicit, and enhance role-playing abilities in LLMs. RoleLLM comprises four stages: (1) Role Profile Construction for 100 roles; (2) Context-Based Instruction Generation (Context-Instruct) for role-specific knowledge extraction; (3) Role Prompting using GPT (RoleGPT) for speaking style imitation; and (4) Role-Conditioned Instruction Tuning (RoCIT) for fine-tuning open-source models along with role customization. By Context-Instruct and RoleGPT, we create RoleBench, the first systematic and fine-grained character-level benchmark dataset for role-playing with 168,093 samples. Moreover, RoCIT on RoleBench yields RoleLLaMA (English) and RoleGLM (Chinese), significantly enhancing role-playing abilities and even achieving comparable results with RoleGPT (using GPT-4).\n      ")])])
        }, function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "cover"}, [n("h2", [t._v("Basic Statistics of RoleBench")]), n("img", {
            staticClass: "img",
            attrs: {src: a("a80a"), alt: ""}
          }), n("img", {staticClass: "img", attrs: {src: a("e98e"), alt: ""}})])
        }, function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "video"}, [n("h2", [t._v("\n          Demonstration\n        ")]), n("img", {
            staticClass: "img",
            attrs: {src: a("f85b"), alt: ""}
          }), n("img", {
            staticClass: "img",
            attrs: {src: a("f731"), alt: ""}
          }), n("img", {
            staticClass: "img",
            attrs: {src: a("3c11"), alt: ""}
          }), n("img", {staticClass: "img", attrs: {src: a("7c41"), alt: ""}})])
        }, function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "method"}, [n("h2", [t._v("\n        Method\n      ")]), n("img", {
            staticClass: "img",
            attrs: {src: a("8d95"), alt: ""}
          }), n("p", {staticClass: "text_p"}, [t._v("\n        Illustration of RoleLLM. RoleLLM comprises four stages: (1) role profile construction; (2) context-based instruction generation (Context-Instruct), primarily aimed at extracting role-specific knowledge and episodic memories; (3) role prompting using GPT (RoleGPT), chiefly for the imitation of speaking styles; and (4) role-conditioned instruction tuning (RoCIT), which utilizes the data generated by Context-Instruct and RoleGPT to enhance existing open-source LLMs.\n      ")])])
        }, function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "result"}, [n("h2", [t._v("Experimental Results")]), n("img", {
            staticClass: "img",
            attrs: {src: a("71d3"), alt: ""}
          }), n("img", {
            staticClass: "img",
            attrs: {src: a("11cc"), alt: ""}
          }), n("img", {staticClass: "img", attrs: {src: a("f15c"), alt: ""}})])
        }, function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {staticClass: "end2"}, [a("h2", [t._v("\n        Acquirements\n      ")]), a("h3", [t._v("\n        License\n      ")]), a("h4", [t._v("\n         It is distributed under Apache License 2.0\n      ")])])
        }, function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("div", {staticClass: "end"}, [a("h2", [t._v("BibTeX")]), a("div", {staticClass: "code_c"}, [a("pre", [t._v("            "), a("code", [t._v("\n  @misc{wang2023rolellm,\n      title={RoleLLM: Benchmarking, Eliciting, and Enhancing Role-Playing Abilities of Large Language Models},\n      author={Zekun Moore Wang and Zhongyuan Peng and Haoran Que and Jiaheng Liu and Wangchunshu Zhou and Yuhan Wu and Hongcheng Guo and Ruitong Gan and Zehao Ni and Man Zhang and Zhaoxiang Zhang and Wanli Ouyang and Ke Xu and Wenhu Chen and Jie Fu and Junran Peng},\n      year={2023},\n      eprint={2310.00746},\n      archivePrefix={arXiv},\n      primaryClass={cs.CL}\n  }")])])])])
        }], c = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("span", {staticClass: "nameT"}, [t._v("\r\n  " + t._s(t.val) + "\r\n  "), a("span", {staticClass: "valT"}, [t._v("\r\n    " + t._s(t.num) + "\r\n  ")]), t._v("\r\n  ,\r\n")])
        }, l = [], u = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, p = u, h = (a("4530"), a("2877")),
        v = Object(h["a"])(p, c, l, !1, null, "2b2c9a25", null), m = v.exports,
        f = function () {
          var t = this, e = t.$createElement, a = t._self._c || e;
          return a("span", {staticClass: "nameT"}, [a("span", {staticClass: "valT"}, [t._v("\r\n    " + t._s(t.num) + "\r\n  ")]), t._v("\r\n  " + t._s(t.val) + "\r\n  ;\r\n")])
        }, d = [], g = {
          name: "name",
          props: {val: String, num: {type: String, default: ""}}
        }, _ = g,
        y = (a("8ec9"), Object(h["a"])(_, f, d, !1, null, "11d45211", null)),
        b = y.exports, C = function () {
          var t = this, e = t.$createElement, n = t._self._c || e;
          return n("div", {staticClass: "chat"}, [n("div", {staticClass: "chat_box"}, [t.chat1 ? n("div", {staticClass: "chat1"}, [n("span", {staticClass: "chat_title"}, [t._v("\r\n        " + t._s(t.chat1) + "\r\n      ")]), n("img", {
            staticClass: "chat_img",
            attrs: {src: a("555a"), alt: ""}
          })]) : t._e(), t.chat1 ? n("div", {staticClass: "chat2"}, [n("img", {
            staticClass: "chat_img",
            attrs: {src: t.chat2Img, alt: ""}
          }), n("span", {staticClass: "chat_title"}, [t.chat2 ? [t._v("\r\n            " + t._s(t.chat2) + "\r\n            "), n("i", {
            staticClass: "el-icon-microphone",
            staticStyle: {cursor: "pointer"},
            on: {click: t.play}
          })] : [n("i", {staticClass: "el-icon-loading"})]], 2)]) : t._e()]), n("div", {staticClass: "chat_btn"}, [n("div", {staticClass: "btn_c"}, [n("el-select", {
            staticStyle: {width: "130px"},
            attrs: {size: "small", placeholder: "请选择"},
            on: {change: t.getQuestion},
            model: {
              value: t.value, callback: function (e) {
                t.value = e
              }, expression: "value"
            }
          }, t._l(t.options, function (t) {
            return n("el-option", {key: t, attrs: {label: t, value: t}})
          }), 1)], 1), n("div", {staticClass: "btn_c check"}, [n("el-checkbox", {
            model: {
              value: t.checked,
              callback: function (e) {
                t.checked = e
              },
              expression: "checked"
            }
          }, [t._v("启用few-shot")])], 1), n("div", {staticClass: "btn_c"}, t._l(t.list, function (e, a) {
            return n("p", {
              key: a,
              staticStyle: {cursor: "pointer"},
              on: {
                click: function (a) {
                  return t.send(e, "1")
                }
              }
            }, [t._v("\r\n        " + t._s(a + 1) + ". " + t._s(e) + "\r\n      ")])
          }), 0)]), n("div", {staticClass: "chat_check"}, [n("el-row", {
            staticClass: "check_row",
            staticStyle: {"margin-top": "10px"}
          }, [n("div", {staticClass: "input_c"}, [n("img", {
            staticClass: "chat_img",
            attrs: {src: t.chat2Img, alt: ""}
          })]), n("div", {staticStyle: {width: "100%"}}, [n("el-input", {
            staticStyle: {width: "95%"},
            attrs: {placeholder: "请输入内容", type: "textarea", rows: 2, clearable: ""},
            model: {
              value: t.input, callback: function (e) {
                t.input = e
              }, expression: "input"
            }
          })], 1)]), n("el-row", {staticClass: "btn_row"}, [n("el-button", {on: {click: t.clear}}, [t._v("清空")]), n("el-button", {on: {click: t.send}}, [t._v("发送")])], 1)], 1), n("audio", {
            ref: "audioPlayer",
            attrs: {src: t.mp3Url, autoplay: ""}
          })])
        }, x = [], L = (a("96cf"), a("3b8d")), R = {
          name: "chat", data: function () {
            return {
              options: ["华妃", "孙悟空", "Jack Sparrow", "Jack Tolerance", "Peter Parker"],
              value: "华妃",
              checked: !0,
              input: "",
              chat1: "",
              chat2: "",
              list: [],
              mp3Url: ""
            }
          }, created: function () {
            this.getQuestion()
          }, computed: {
            chat2Img: function () {
              return "华妃" === this.value ? a("64ff") : "孙悟空" === this.value ? a("1822") : a("555a")
            }
          }, methods: {
            send: function (t, e) {
              var a;
              console.log(3333, t), t && "1" === e ? (a = JSON.stringify({
                name: this.value,
                prompt: t,
                "few-shot": !!this.checked
              }), this.chat1 = t) : (a = JSON.stringify({
                name: this.value,
                prompt: this.input,
                "few-shot": !!this.checked
              }), this.chat1 = this.input), this.chat2 = "";
              var n = this;
              n.input = "";
              var s = new XMLHttpRequest;
              s.withCredentials = !0, s.addEventListener("readystatechange", function (t) {
                4 === this.readyState && (n.chat2 = this.responseText)
              }), s.open("POST", "https://36.111.142.184:12000/prompt?Content-Type=application%2Fjson%3Bcharset%3Dutf-8"), s.setRequestHeader("Content-Type", "application/json"), s.send(a)
            }, play: function () {
              var t = JSON.stringify({name: this.value, prompt: this.chat2}),
                  e = this, a = new XMLHttpRequest;
              a.withCredentials = !0, a.addEventListener("readystatechange", function () {
                var t = Object(L["a"])(regeneratorRuntime.mark(function t(a) {
                  var n;
                  return regeneratorRuntime.wrap(function (t) {
                    while (1) switch (t.prev = t.next) {
                      case 0:
                        4 === this.readyState && (console.log(this.response), n = new Blob([this.response], {type: "audio/mp3"}), e.mp3Url = URL.createObjectURL(n), console.log(148, e.mp3Url, n.type));
                      case 1:
                      case"end":
                        return t.stop()
                    }
                  }, t, this)
                }));
                return function (e) {
                  return t.apply(this, arguments)
                }
              }()), a.open("POST", "https://36.111.142.184:12000/audio?Content-Type=application%2Fjson%3Bcharset%3Dutf-8"), a.responseType = "blob", a.setRequestHeader("Content-Type", "application/json"), a.send(t)
            }, clear: function () {
              this.input = "", this.chat1 = "", this.chat2 = ""
            }, getQuestion: function () {
              var t = JSON.stringify({name: this.value});
              this.chat2 = "", this.chat1 = "";
              var e = this;
              e.input = "";
              var a = new XMLHttpRequest;
              a.withCredentials = !0, a.addEventListener("readystatechange", function (t) {
                4 === this.readyState && (console.log(this.responseText), e.list = JSON.parse(this.responseText))
              }), a.open("POST", "https://36.111.142.184:12000/question?Content-Type=application%2Fjson%3Bcharset%3Dutf-8"), a.setRequestHeader("Content-Type", "application/json"), a.send(t)
            }
          }
        }, w = R,
        T = (a("3191"), Object(h["a"])(w, C, x, !1, null, "a060dd2c", null)),
        k = T.exports, M = {
          name: "HelloWorld",
          props: {msg: String},
          components: {name: m, company: b, chat: k},
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
        }, P = M,
        S = (a("7392"), Object(h["a"])(P, r, o, !1, null, "35ce8ead", null)),
        j = S.exports, O = {name: "app", components: {HelloWorld: j}}, E = O,
        G = (a("034f"), Object(h["a"])(E, s, i, !1, null, null, null)),
        I = G.exports, A = a("5c96"), B = a.n(A), H = (a("0fae"), a("cee4")),
        $ = "https://36.111.142.184:12000",
        Z = H["a"].create({baseURL: $, timeout: 5e5});

    function J() {
      return W.apply(this, arguments)
    }

    function W() {
      return W = Object(L["a"])(regeneratorRuntime.mark(function t() {
        var e, a, n = arguments;
        return regeneratorRuntime.wrap(function (t) {
          while (1) switch (t.prev = t.next) {
            case 0:
              if (e = n.length > 0 && void 0 !== n[0] ? n[0] : {}, a = null, "get" !== e.method && "delete" !== e.method) {
                t.next = 7;
                break
              }
              return t.next = 5, Z[e.method](e.url, {params: e.params}).then(function (t) {
                a = t.data
              }).catch(function (t) {
                a = t
              });
            case 5:
              t.next = 10;
              break;
            case 7:
              if ("post" !== e.method && "put" !== e.method) {
                t.next = 10;
                break
              }
              return t.next = 10, Z[e.method](e.url, e.params).then(function (t) {
                a = t.data
              }).catch(function (t) {
                a = t
              });
            case 10:
              return t.abrupt("return", a);
            case 11:
            case"end":
              return t.stop()
          }
        }, t)
      })), W.apply(this, arguments)
    }

    Z.interceptors.request.use(function (t) {
      return console.log("正在请求……"), t
    }, function (t) {
      console.error("请求失败", t)
    }), Z.header = {"content-type": "application/json"}, Z.interceptors.response.use(function (t) {
      return console.log("请求成功！"), t
    }, function (t) {
      console.log("响应失败！", t)
    });
    n["default"].config.productionTip = !1, n["default"].use(B.a), n["default"].prototype.$http = J, n["default"].prototype.$baseURL = $, new n["default"]({
      render: function (t) {
        return t(I)
      }
    }).$mount("#app")
  }, "63a0": function (t, e, a) {
  }, "64a9": function (t, e, a) {
  }, "64ff": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/hua.f9aef9ea.jpeg"
  }, "71d3": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img1.2bf7fdf0.png"
  }, 7392: function (t, e, a) {
    "use strict";
    var n = a("f222"), s = a.n(n);
    s.a
  }, "7c41": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img_5.10b0b9ff.png"
  }, "7e77": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img.fc51f956.png"
  }, "8d95": function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img_3.394a600a.png"
  }, "8ec9": function (t, e, a) {
    "use strict";
    var n = a("63a0"), s = a.n(n);
    s.a
  }, a80a: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img6.d7af2b16.png"
  }, af5d: function (t, e, a) {
  }, e98e: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img7.20c0d5f2.png"
  }, f15c: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img3.a4da6670.png"
  }, f1c0: function (t, e, a) {
  }, f222: function (t, e, a) {
  }, f731: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img_2.a744cc45.png"
  }, f85b: function (t, e, a) {
    t.exports = "https://rolellm.github.io/img/img_1.a1b44af7.png"
  }
});
//# sourceMappingURL=app.75c38859.js.map
