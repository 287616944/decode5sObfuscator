window["_cf_chl_opt"]["uaSR"] = true;
~function (r, q, p, m, g, f, e, d, c, b) {
  d = this || self;
  e = d["document"];
  f = [];

  g = function (E, D, C, B, A) {
    C = String["fromCharCode"];
    D = {
      'h': function (F) {
        return null == F ? '' : D["g"](F, 6, function (H) {
          return "vzo9W1OH257JpYAj8eF3+kEUdZf6NX-wD0tGTnRIaVsrgLq4cyBSK$xuMPhblmQCi"["charAt"](H);
        });
      },
      'g': function (F, G, H, X, W, V, U, T, S, R, Q, P, O, N, M, L, K, J, I) {
        if (null == F) {
          return '';
        }

        L = {};
        M = {};
        N = '';
        O = 2;
        P = 3;
        Q = 2;
        R = [];
        S = 0;
        T = 0;

        for (U = 0; U < F["length"]; U += 1) {
          V = F["charAt"](U);

          if (Object["prototype"]["hasOwnProperty"]["call"](L, V)) {} else {
            L[V] = P++;
            M[V] = true;
          }

          W = N + V;

          if (Object["prototype"]["hasOwnProperty"]["call"](L, W)) {
            N = W;
          } else {
            if (Object["prototype"]["hasOwnProperty"]["call"](M, N)) {
              if (256 > N["charCodeAt"](0)) {
                for (K = 0; K < Q; S <<= 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, K++) {}

                X = N["charCodeAt"](0);

                for (K = 0; 8 > K; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
              } else {
                X = 1;

                for (K = 0; K < Q; S = S << 1 | X, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X = 0, K++) {}

                X = N["charCodeAt"](0);

                for (K = 0; 16 > K; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
              }

              O--;

              if (0 == O) {
                O = Math["pow"](2, Q);
                Q++;
              }

              delete M[N];
            } else {
              X = L[N];

              for (K = 0; K < Q; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
            }

            O--;

            if (0 == O) {
              O = Math["pow"](2, Q);
              Q++;
            }

            L[W] = P++;
            N = String(V);
          }
        }

        if ('' !== N) {
          if (Object["prototype"]["hasOwnProperty"]["call"](M, N)) {
            if (256 > N["charCodeAt"](0)) {
              for (K = 0; K < Q; S <<= 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, K++) {}

              X = N["charCodeAt"](0);

              for (K = 0; 8 > K; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
            } else {
              X = 1;

              for (K = 0; K < Q; S = S << 1 | X, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X = 0, K++) {}

              X = N["charCodeAt"](0);

              for (K = 0; 16 > K; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
            }

            O--;

            if (0 == O) {
              O = Math["pow"](2, Q);
              Q++;
            }

            delete M[N];
          } else {
            X = L[N];

            for (K = 0; K < Q; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}
          }

          O--;

          if (0 == O) {
            Q++;
          }
        }

        X = 2;

        for (K = 0; K < Q; S = S << 1 | X & 1, T == G - 1 ? (T = 0, R["push"](H(S)), S = 0) : T++, X >>= 1, K++) {}

        for (;;) {
          S <<= 1;

          if (T == G - 1) {
            R["push"](H(S));
            break;
          } else {
            T++;
          }
        }

        return R["join"]('');
      },
      'j': function (F) {
        return null == F ? '' : '' == F ? null : D["i"](F["length"], 32768, function (G) {
          return F["charCodeAt"](G);
        });
      },
      'i': function (F, G, H, V, U, T, S, R, Q, P, O, N, M, L, K, J, I) {
        I = [];
        J = 4;
        K = 4;
        L = 3;
        M = [];
        P = H(0);
        Q = G;
        R = 1;

        for (N = 0; 3 > N; I[N] = N, N += 1) {}

        S = 0;
        T = Math["pow"](2, 2);

        for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

        switch (S) {
          case 0:
            S = 0;
            T = Math["pow"](2, 8);

            for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

            V = C(S);
            break;

          case 1:
            S = 0;
            T = Math["pow"](2, 16);

            for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

            V = C(S);
            break;

          case 2:
            return '';
        }

        N = I[3] = V;

        for (M["push"](V);;) {
          if (R > F) {
            return '';
          }

          S = 0;
          T = Math["pow"](2, L);

          for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

          switch (V = S) {
            case 0:
              S = 0;
              T = Math["pow"](2, 8);

              for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

              I[K++] = C(S);
              V = K - 1;
              J--;
              break;

            case 1:
              S = 0;
              T = Math["pow"](2, 16);

              for (O = 1; O != T; U = P & Q, Q >>= 1, 0 == Q && (Q = G, P = H(R++)), S |= (0 < U ? 1 : 0) * O, O <<= 1) {}

              I[K++] = C(S);
              V = K - 1;
              J--;
              break;

            case 2:
              return M["join"]('');
          }

          if (0 == J) {
            J = Math["pow"](2, L);
            L++;
          }

          if (I[V]) {
            V = I[V];
          } else {
            if (V === K) {
              V = N + N["charAt"](0);
            } else {
              return null;
            }
          }

          M["push"](V);
          I[K++] = N + V["charAt"](0);
          J--;
          N = V;

          if (0 == J) {
            J = Math["pow"](2, L);
            L++;
          }
        }
      }
    };
    E = {
      "EqyoiPUDeLFt": D["h"]
    };
    return E;
  }();

  if ("object" !== typeof d["JSON"]) {
    d["JSON"] = {};
  }

  (function (B, H, I, J, K, L, M, R, Q, P, O, N, C) {
    if ("function" !== typeof Date["prototype"]["toJSON"]) {
      Date["prototype"]["toJSON"] = function () {
        return isFinite(this["valueOf"]() || '') ? this["getUTCFullYear"]() + '-' + D(this["getUTCMonth"]() + 1) + '-' + D(this["getUTCDate"]()) + 'T' + D(this["getUTCHours"]()) + ':' + D(this["getUTCMinutes"]()) + ':' + D(this["getUTCSeconds"]()) + 'Z' : null;
      };

      Boolean["toJSON"] = E;
      Number["toJSON"] = E;
      String["toJSON"] = E;
    }

    if ("function" !== typeof JSON["stringify"]) {
      Q = {};
      Q['\b'] = '\\b';
      Q['\t'] = '\\t';
      Q['\n'] = '\\n';
      Q['\f'] = '\\f';
      Q['\r'] = '\\r';
      Q['"'] = '\\"';
      Q['\\'] = '\\\\';
      R = Q;

      JSON["stringify"] = function (S, T, U, W, V) {
        O = N = '';

        if ("number" === typeof U) {
          for (V = 0; V < U; O += ' ', V += 1) {}
        } else {
          if ("string" === typeof U) {
            O = U;
          }
        }

        if ((P = T) && "function" !== typeof T && ("object" !== typeof T || "number" !== typeof T["length"])) {
          throw Error("JSON.stringify");
        }

        W = {
          '': S
        };
        return G('', W);
      };
    }

    if ("function" !== typeof JSON["parse"]) {
      JSON["parse"] = function (S, T, W, V) {
        S = String(S);
        M["lastIndex"] = 0;

        if (M["test"](S)) {
          S = S["replace"](M, function (X) {
            return '\\u' + ("0000" + X["charCodeAt"](0)["toString"](16))["slice"](-4);
          });
        }

        if (H["test"](S["replace"](I, '@')["replace"](J, ']')["replace"](K, ''))) {
          V = eval('(' + S + ')');
          W = {
            '': V
          };
          return "function" === typeof T ? U(W, '') : V;
        }

        throw new SyntaxError("JSON.parse");

        function U(X, Y, a0, Z) {
          a0 = X[Y];

          if (a0 && "object" === typeof a0) {
            for (Z in a0) if (Object["prototype"]["hasOwnProperty"]["call"](a0, Z)) {
              var a1;
              a1 = U(a0, Z);
              void 0 !== a1 ? a0[Z] = a1 : delete a0[Z];
            }
          }

          return T["call"](X, Y, a0);
        }
      };
    }

    function D(S) {
      return 10 > S ? '0' + S : S;
    }

    function E() {
      return this["valueOf"]();
    }

    function F(S) {
      L["lastIndex"] = 0;
      return L["test"](S) ? '"' + S["replace"](L, function (T, U) {
        U = R[T];
        return "string" === typeof U ? U : '\\u' + ("0000" + T["charCodeAt"](0)["toString"](16))["slice"](-4);
      }) + '"' : '"' + S + '"';
    }

    function G(S, T, a0, Z, Y, X, W, V, U) {
      switch (V = N, W = T[S], W && "object" === typeof W && "function" === typeof W["toJSON"] && (W = W["toJSON"](S)), "function" === typeof P && (W = P["call"](T, S, W)), typeof W) {
        case "string":
          return F(W);

        case "number":
          return isFinite(W) ? String(W) : "null";

        case "boolean":
        case "null":
          return String(W);

        case "object":
          if (!W) {
            return "null";
          }

          N += O;
          X = [];

          if ("[object Array]" === Object["prototype"]["toString"]["apply"](W)) {
            Y = W["length"];

            for (U = 0; U < Y; X[U] = G(U, W) || "null", U += 1) {}

            Z = 0 === X["length"] ? '[]' : N ? '[\n' + N + X["join"](',\n' + N) + '\n' + V + ']' : '[' + X["join"](',') + ']';
            N = V;
            return Z;
          }

          if (P && "object" === typeof P) {
            Y = P["length"];

            for (U = 0; U < Y; "string" === typeof P[U] && (a0 = P[U], (Z = G(a0, W)) && X["push"](F(a0) + (N ? ': ' : ':') + Z)), U += 1) {}
          } else {
            for (a0 in W) if (Object["prototype"]["hasOwnProperty"]["call"](W, a0) && (Z = G(a0, W))) {
              X["push"](F(a0) + (N ? ': ' : ':') + Z);
            }
          }

          Z = 0 === X["length"] ? '{}' : N ? '{\n' + N + X["join"](',\n' + N) + '\n' + V + '}' : '{' + X["join"](',') + '}';
          N = V;
          return Z;
      }
    }
  })({}, /^[\],:{}\s]*$/, /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, /(?:^|:|,)(?:\s*\[)+/g, /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g);

  f["push"](function () {
    return l();
  });
  f["push"](function () {
    return j();
  });
  f["push"](function (B, A) {
    return k();
  });
  f["push"](function (G, F, E, D, C, B, A) {
    C = e["getElementById"]("challenge-form");

    if (C) {
      G = e["createElement"]("span");
      G["style"]["display"] = "none";
      C["appendChild"](G);
      F = e["createElement"]("span");

      if (Math["random"]() < .25) {
        F["style"]["display"] = "none";
      }

      F["className"] = 'text-gray-600';
      F["setAttribute"]("data-translate", "error");
      F["innerText"] = "error code: 1020";
      G["appendChild"](F);
    }
  });
  f["push"](function (B, A) {
    d["_cf_chl_ctx"]["ffs"] = false;

    if (!d["Proxy"] || !Object["assign"] || !e["querySelector"]) {
      return void 0;
    }

    A = {
      "apply": function (C, D, E) {
        if (E["length"] != 0 && E[0] == '#trk_jschal_js') {
          d["_cf_chl_ctx"]["ffs"] = true;
        }

        return C["apply"](D, E);
      }
    };
    B = A;
    e["querySelector"] = new Proxy(e["querySelector"], B);
  });

  d["_cf_chl_enter"] = function (J, I, H, G, F, E, D, C, B, A) {
    if (d["_cf_chl_opt"]["cLt"] !== 'd') {
      d["_cf_chl_opt"]["cLt"] = 'd';
    } else {
      return void 0;
    }

    C = d["_cf_chl_opt"];
    D = "cf_chl_" + C["cvId"];
    t(D, C["cHash"], 1);
    E = e["cookie"]["indexOf"](D) === -1 || !d["navigator"]["cookieEnabled"];

    if (E) {
      F = e["getElementById"]("no-cookie-warning");

      if (F) {
        F["style"]["display"] = "block";
      } else {
        i("Please enable Cookies and reload the page.", "&#x8BF7;&#x542F;&#x7528;Cookie&#x5E76;&#x91CD;&#x65B0;&#x52A0;&#x8F7D;&#x9875;&#x9762;&#x3002;");
      }

      return void 0;
    }

    u("cf_chl_" + C["cvId"]);
    t("cf_chl_prog", 's', 1);
    G = {
      "chReq": C["cType"],
      "cNounce": C["cNounce"],
      "cvId": C["cvId"],
      "chC": 0,
      "chCAS": 0,
      "oV": 1,
      "cRq": C["cRq"],
      "ie": 0
    };
    d["_cf_chl_ctx"] = G;

    for (H = 0; H < f["length"]; H++) {
      if (f[H]() === false) {
        return void 0;
      }
    }

    o();
    t("cf_chl_prog", 'e', 1);
    I = C["cFPWv"] ? 'h/' + C["cFPWv"] + '/' : '';
    J = "/cdn-cgi/challenge-platform/" + I + "flow/ov" + 1 + "/0.61616120112034:1653286072:d871153fce70e41314e1ddf30921d560ab333696e24d7dacbf533e1cb48e8e67/" + C["cRay"] + '/' + C["cHash"];
    n(function () {
      setTimeout(d["sendRequest"], 100, J);
    });
  };

  d["_cf_chl_done_ran"] = false;

  d["_cf_chl_done"] = function () {
    if (d["_cf_chl_done_ran"]) {
      return void 0;
    }

    t("cf_chl_prog", 'b', 1);
    d["_cf_chl_done_ran"] = true;
  };

  f["push"](function () {
    d["setTimeout"](function () {
      d["_cf_chl_done"]();
    }, +d["_cf_chl_opt"]["cTTimeMs"]);
    return true;
  });
  m = 0;

  if (d["_cf_chl_opt"] && +d["_cf_chl_opt"]["cvId"] === 2) {
    p = function () {
      try {
        return !!d["addEventListener"];
      } catch (A) {
        return false;
      }
    };

    q = function (A, B, D, C) {
      if (e["readyState"] && (e["readyState"] === "complete" || e["readyState"] === "interactive")) {
        d["_cf_chl_opt"]["cLt"] = 'c';
        setTimeout(function () {
          A({});
        }, 0);
      } else {
        if (p()) {
          e["addEventListener"]("DOMContentLoaded", A, B);
        } else {
          e["attachEvent"]("onreadystatechange", A);
        }
      }
    };

    q(function (B, A) {
      if (!e["readyState"] || e["readyState"] === "loaded" || e["readyState"] === "interactive" || e["readyState"] === "complete") {
        d["_cf_chl_enter"]();
      }
    });
  } else {
    A(function (B, D, C) {
      if (B["type"] === "readystatechange" && e["readyState"] && e["readyState"] !== "complete") {
        return void 0;
      }

      d["_cf_chl_enter"]();
    });

    function A(B, D, C) {
      "addEventListener" in d ? e["addEventListener"]("DOMContentLoaded", B) : e["attachEvent"]("onreadystatechange", B);
    }
  }

  r = function (B, I, H, G, G, F, E, D, C) {
    F = 32;
    G = d["_cf_chl_opt"]["cRay"] + '_' + 0;
    G = G["replace"](/./g, function (J, K) {
      F ^= G["charCodeAt"](K);
    });
    B = d["_cf_atob"](B);
    H = [];

    for (I = -1; !isNaN(E = B["charCodeAt"](++I)); H["push"](String["fromCharCode"](((E & 255) - F - I % 65535 + 65535) % 255))) {}

    return H["join"]('');
  };

  d["onerror"] = function (B, C, D, E, F, O, N, M, L, K, J, I, H, G) {
    L = B["toLowerCase"]();
    K = "script error";
    L["indexOf"](K) > -1 ? d["setTimeout"](function () {
      v();
    }, 1e3) : (M = ["Message: " + B, "URL: " + C, "Line: " + D, "Column: " + E, "Error object: " + JSON["stringify"](F)]["join"](" - "), d["setTimeout"](function () {
      w(M);
    }, 10), d["setTimeout"](function () {
      v();
    }, 1e3), d["console"]["log"]("[[[ERROR]]]:", M, d["_cf_chl_ctx"][d["_cf_chl_ctx"]["chC"]]));
    return false;
  };

  d["sendRequest"] = function (B, C, J, I, H, G, F, E, D) {
    C = C || 0;

    if (C >= 5) {
      v();
      return void 0;
    }

    F = false;

    G = function (L, K) {
      if (F) {
        return void 0;
      }

      F = true;
      d["setTimeout"](function () {
        sendRequest(B, C + 1);
      }, 250 * (C + 1));
    };

    H = y();

    if (!H) {
      return void 0;
    }

    I = "POST";
    H["open"](I, B, true);

    if ("timeout" in H) {
      H["timeout"] = 2500 * (1 + C);

      H["ontimeout"] = function () {
        G();
      };
    }

    H["setRequestHeader"]("Content-type", "application/x-www-form-urlencoded");
    H["setRequestHeader"]("CF-Challenge", d["_cf_chl_opt"]["cHash"]);

    H["onreadystatechange"] = function () {
      if (H["readyState"] != 4) {
        return void 0;
      }

      if (H["status"] != 200 && H["status"] != 304) {
        G();
        return void 0;
      }

      x(H);
      new d["Function"](r(H["responseText"]))();
    };

    J = g["EqyoiPUDeLFt"](JSON["stringify"](d["_cf_chl_ctx"]))["replace"]('+', "%2b");
    H["send"]('v_' + d["_cf_chl_opt"]["cRay"] + '=' + J);
  };

  d["_cf_atob"] = d["atob"] || z;

  d["SHA256"] = function (B, D, C) {
    B = function (G, J, I, H) {
      G = G["replace"](/\r\n/g, '\n');
      H = '';

      for (I = 0; I < G["length"]; J = G["charCodeAt"](I), 128 > J ? H += String["fromCharCode"](J) : (127 < J && 2048 > J ? H += String["fromCharCode"](J >> 6 | 192) : (H += String["fromCharCode"](J >> 12 | 224), H += String["fromCharCode"](J >> 6 & 63 | 128)), H += String["fromCharCode"](J & 63 | 128)), I++) {}

      return H;
    }(B);

    return function (G, K, J, I, H) {
      J = '';

      for (K = 0; K < 4 * G["length"]; J += "0123456789abcdef"["charAt"](G[K >> 2] >> 8 * (3 - K % 4) + 4 & 15) + "0123456789abcdef"["charAt"](G[K >> 2] >> 8 * (3 - K % 4) & 15), K++) {}

      return J;
    }(function (G, H, Z, Y, X, W, V, U, T, S, R, Q, P, O, N, M, L, K, J, I) {
      I = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];
      J = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
      K = Array(64);
      G[H >> 5] |= 128 << 24 - H % 32;
      G[(H + 64 >> 9 << 4) + 15] = H;

      for (L = 0; L < G["length"]; L += 16) {
        N = J[0];
        O = J[1];
        P = J[2];
        Q = J[3];
        R = J[4];
        S = J[5];
        T = J[6];
        U = J[7];

        for (M = 0; 64 > M; M++) {
          X = M;
          16 > M ? Y = G[M + L] : (Z = F(Z, 7) ^ F(Z, 18) ^ Z >>> 3, (Z = K[M - 15], (Y = E(Y, K[M - 7]), (Y = F(Y, 17) ^ F(Y, 19) ^ Y >>> 10, (Y = K[M - 2], Y = E(E(Y, Z), K[M - 16]))))));
          K[X] = Y;
          X = R;
          X = F(X, 6) ^ F(X, 11) ^ F(X, 25);
          X = E(E(E(E(U, X), R & S ^ ~R & T), I[M]), K[M]);
          U = N;
          U = F(U, 2) ^ F(U, 13) ^ F(U, 22);
          Y = E(U, N & O ^ N & P ^ O & P);
          U = T;
          T = S;
          S = R;
          R = E(Q, X);
          Q = P;
          P = O;
          O = N;
          N = E(X, Y);
        }

        J[0] = E(N, J[0]);
        J[1] = E(O, J[1]);
        J[2] = E(P, J[2]);
        J[3] = E(Q, J[3]);
        J[4] = E(R, J[4]);
        J[5] = E(S, J[5]);
        J[6] = E(T, J[6]);
        J[7] = E(U, J[7]);
      }

      return J;
    }(function (G, I, H) {
      H = [];

      for (I = 0; I < 8 * G["length"]; H[I >> 5] |= (G["charCodeAt"](I / 8) & 255) << 24 - I % 32, I += 8) {}

      return H;
    }(B), 8 * B["length"]));
  };

  function h(A, B) {
    B = e["createElement"]('a');
    B["href"] = A;
    return B;
  }

  function i(A, B, H, G, F, E, D, C) {
    E = function (I) {
      return e["getElementById"](I);
    };

    F = E("challenge-form");

    if (F) {
      E("jc-content") ? F["innerHTML"] += "<div class=\"jc-content\"><p style=\"background-color: #de5052; border-color: #521010; color: #fff;\" class=\"jc-alert jc-alert-error\">" + B + "</p></div>" : F["innerHTML"] += "<div class=\"cf-content\"><p style=\"background-color: #de5052; border-color: #521010; color: #fff;\" class=\"cf-alert cf-alert-error\">" + A + "</p></div>";
    }

    G = E("cf-please-wait") || E("jc-please-wait");

    if (G) {
      G["style"]["display"] = "none";
    }

    H = E('cf-content') || E("jc-content");

    if (H) {
      H["style"]["display"] = "none";
    }
  }

  function j(H, G, F, E, D, C, B, A) {
    C = d["_cf_chl_opt"];
    t("cf_chl_prog", 'cc', 1);
    D = 12 * 3600;

    if (C["cRq"] && C["cRq"]["t"]) {
      E = function (I) {
        return e["getElementById"](I);
      };

      F = Math["floor"](+z(C["cRq"]["t"]));
      G = Math["floor"](Date["now"]() / 1e3);
    }

    if (C["cRq"] && C["cRq"]["t"] && G - F > D) {
      H = E("cached-challenge-warning");

      if (H) {
        H["style"]["display"] = "block";
      } else {
        i("This challenge page was accidentally cached by an intermediary and is no longer available.", "&#x8BE5;&#x8D28;&#x8BE2;&#x9875;&#x9762;&#x88AB;&#x610F;&#x5916;&#x7F13;&#x5B58;&#xFF0C;&#x4E0D;&#x518D;&#x53EF;&#x7528;&#x3002;");
      }

      t("cf_chl_prog", 'cc', 'F');
      return false;
    }

    return true;
  }

  function k(G, F, E, D, C, B, A) {
    C = d["_cf_chl_opt"];
    t("cf_chl_prog", 'hc', 1);

    if (C["cRq"] && C["cRq"]["ru"]) {
      D = function (H, J, I) {
        return e["getElementById"](H);
      };

      E = h(z(C["cRq"]["ru"]));
      F = E["protocol"] + '//' + E["hostname"];
    }

    if (C["cRq"] && C["cRq"]["ru"] && e["location"]["href"]["indexOf"](F) !== 0) {
      G = D("location-mismatch-warning");

      if (G) {
        G["style"]["display"] = "block";
      } else {
        i("This web property is not accessible via this address.", '&#35813;&#32593;&#31449;&#36164;&#28304;&#26080;&#27861;&#36890;&#36807;&#27492;&#22320;&#22336;&#35775;&#38382;&#12290;');
      }

      t("cf_chl_prog", 'hc', 'F');
      return false;
    }

    return true;
  }

  function l(F, E, D, C, B, A) {
    C = function (G, I, H) {
      return e["getElementById"](G);
    };

    D = C("challenge-form");

    E = function (M, L, K, J, I, H, G) {
      K = e["createElement"]("div");
      M = "Khtml Ms O Moz Webkit"["split"](' ');
      L = M["length"];
      return function (N, P, O) {
        if (N in K["style"]) {
          return true;
        }

        for (N = N["replace"](/^[a-z]/, function (Q) {
          return Q["toUpperCase"]();
        }); L--;) {
          if (M[L] + N in K["style"]) {
            return true;
          }
        }

        return false;
      };
    }();

    F = E("borderImage") && E("transform");

    if (!F) {
      i('<b>Your browser is out of date!</b><br/>Update your browser to view this website correctly. <a href="https://support.cloudflare.com/hc/en-us/articles/200170136#browser-support">More Information.</a>', "&#x60A8;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x5DF2;&#x7ECF;&#x8FC7;&#x65F6;&#x4E86;&#xFF01; &#x66F4;&#x65B0;&#x60A8;&#x7684;&#x6D4F;&#x89C8;&#x5668;&#x4EE5;&#x6B63;&#x786E;&#x67E5;&#x770B;&#x672C;&#x7F51;&#x7AD9;&#x3002;");
      return false;
    }
  }

  function n(A, K, J, I, H, G, F, E, D, C, B) {
    D = d["parseInt"](s("cf_chl_rc_ni"));
    E = false;

    if (isNaN(D) || D < 50) {
      A();
      return void 0;
    }

    F = e["getElementById"]('cf-spinner-allow-5-secs');
    G = "Please click here to continue: ";
    H = "I am human!";

    if (!F) {
      F = e["getElementById"]("jc-spinner-allow-5-secs");
      G = decodeURI("%E8%AF%B7%E7%82%B9%E5%87%BB%E8%BF%99%E9%87%8C%E7%BB%A7%E7%BB%AD");
    }

    I = 0;
    J = e["createElement"]("input");
    K = '';

    if (!!F) {
      K = F["innerHTML"];
      F["innerText"] = G;
      F["appendChild"](J);
      J["style"]["cursor"] = "pointer";
      J["style"]["color"] = "black";
      J["value"] = H;
      J["type"] = "submit";
    }

    if (J) {
      J["onclick"] = L;
    }

    I = setInterval(function () {
      if (m) {
        L();
      }
    }, 150);

    function L(M) {
      if (E) {
        return void 0;
      }

      E = true;

      if (F) {
        F["innerHTML"] = K;
      }

      if (I) {
        clearInterval(I);
      }

      A();
    }
  }

  function o(A, H, G, F, D, C, B) {
    D = false;

    H = function (I, J, K) {
      e["addEventListener"] ? e["addEventListener"](I, J) : e["attachEvent"]('on' + I, J);
    };

    H("keydown", E, G);
    H("pointermove", E, G);
    H("pointerover", E, G);
    H("touchstart", E, G);
    H("mousemove", E, G);
    H("click", E, G);

    function E(I, K, J) {
      if (D) {
        return void 0;
      }

      m++;
      d["_cf_chl_ctx"]["ie"] = m;

      if (m < 25) {
        return void 0;
      }

      D = true;

      if (e["removeEventListener"]) {
        e["removeEventListener"]("keydown", E, G);
        e["removeEventListener"]("pointermove", E, G);
        e["removeEventListener"]("pointerover", E, G);
        e["removeEventListener"]("touchstart", E, G);
        e["removeEventListener"]("mousemove", E);
        e["removeEventListener"]("click", E);
      }
    }
  }

  function s(B, H, G, F, E, D, C) {
    E = B + '=';
    F = e["cookie"]["split"](';');

    for (G = 0; G < F["length"]; G++) {
      for (H = F[G]; H["charAt"](0) == ' '; H = H["substring"](1)) {}

      if (H["indexOf"](E) == 0) {
        return H["substring"](E["length"], H["length"]);
      }
    }

    return '';
  }

  function t(B, C, D, H, G, F, E) {
    G = new d["Date"]();
    G["setTime"](G["getTime"]() + D * 1 * 60 * 60 * 1e3);
    H = "expires=" + G["toUTCString"]();
    e["cookie"] = B + '=' + C + ';' + H + ";path=/";
  }

  function u(B, D, C) {
    e["cookie"] = B + "=; Max-Age=-99999999;";
  }

  function v(E, D, C, B) {
    D = d["parseInt"](s("cf_chl_rc_ni"));

    if (isNaN(D)) {
      D = 0;
    }

    E = 1e3 * d["Math"]["min"](2 << D, 128);
    t("cf_chl_rc_ni", D + 1, 1);
    d["setTimeout"](function () {
      e["location"]["reload"]();
    }, E);
  }

  function w(B, D, C) {
    try {
      var E, F, G, H, I, J;
      E = d["_cf_chl_opt"]["cFPWv"] ? 'h/' + d["_cf_chl_opt"]["cFPWv"] + '/' : '';
      F = "/cdn-cgi/challenge-platform/" + E + "beacon/ov" + 1 + "/0.61616120112034:1653286072:d871153fce70e41314e1ddf30921d560ab333696e24d7dacbf533e1cb48e8e67/" + d["_cf_chl_opt"]["cRay"] + '/' + d["_cf_chl_opt"]["cHash"];
      G = y();

      if (!G) {
        return void 0;
      }

      H = "POST";
      G["open"](H, F, true);

      if ("timeout" in G) {
        G["timeout"] = 2500;

        G["ontimeout"] = function () {};
      }

      G["setRequestHeader"]("Content-type", 'application/x-www-form-urlencoded');
      I = {
        "msg": B,
        "cc": d["_cf_chl_ctx"][d["_cf_chl_ctx"]["chC"]],
        "prog": s("cf_chl_prog")
      };
      J = g["EqyoiPUDeLFt"](JSON["stringify"](I))["replace"]('+', "%2b");
      G["send"]('v_' + d["_cf_chl_opt"]["cRay"] + '=' + J);
    } catch (L) {}
  }

  function x(B) {}

  function y(C, B) {
    if (d["XMLHttpRequest"]) {
      return new d["XMLHttpRequest"]();
    }

    if (d["ActiveXObject"]) {
      try {
        return new d["ActiveXObject"]("Microsoft.XMLHTTP");
      } catch (D) {}
    }

    d["alert"]("This browser is not supported.");
    v();
  }

  function z(B, L, K, J, I, H, G, F, E, D, C) {
    G = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    B = String(B)["replace"](/[\t\n\f\r ]+/g, '');
    B += '=='["slice"](2 - (B["length"] & 3));
    I = '';
    L = 0;

    for (; L < B["length"]; H = G["indexOf"](B["charAt"](L++)) << 18 | G["indexOf"](B["charAt"](L++)) << 12 | (J = G["indexOf"](B["charAt"](L++))) << 6 | (K = G["indexOf"](B["charAt"](L++))), I += J === 64 ? String["fromCharCode"](H >> 16 & 255) : K === 64 ? String["fromCharCode"](H >> 16 & 255, H >> 8 & 255) : String["fromCharCode"](H >> 16 & 255, H >> 8 & 255, H & 255)) {}

    return I;
  }
}();