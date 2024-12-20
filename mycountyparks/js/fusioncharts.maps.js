/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @version 3.4.0
*/
FusionCharts.register("module", ["private", "modules.renderer.js-gradientlegend", function() {
    function W(b, d, n) {
        var l = b[0]
          , p = b[1];
        b = b[2];
        l += (d[0] - l) * n;
        p += (d[1] - p) * n;
        d = b + (d[2] - b) * n;
        return {
            hex: (sa + (l << 16 | p << 8 | d).toString(16)).slice(-6),
            rgb: [l, p, d]
        }
    }
    function X(b, d) {
        return b.maxvalue - d.maxvalue
    }
    function z(b) {
        var d, n, l = b.colorRange || {}, p = b.dataMin, B = b.dataMax, t = b.sortLegend || !1, h = b.mapByCategory || !1, f = b.defaultColor, c = b.numberFormatter, m = l.color;
        b = this.colorArr = [];
        var e, a, g;
        this.mapByCategory = h;
        "1" === l.mapbypercent && (this.mapbypercent = !0);
        if ("1" === l.gradient && !h) {
            this.gradient = !0;
            n = Ca($(l.startcolor, l.mincolor, l.code));
            t = fa(Ca($(n, f, "CCCCCC")));
            h = this.scaleMin = E(l.startvalue, l.minvalue, this.mapbypercent ? 0 : p);
            b.push({
                code: n,
                maxvalue: h,
                label: ba(l.startlabel),
                codeRGB: fa(n)
            });
            if (m && (d = m.length))
                for (p = 0; p < d; p += 1)
                    f = m[p],
                    n = Ca($(f.color, f.code)),
                    a = E(f.value, f.maxvalue),
                    g = E(f.minvalue),
                    a > h && b.push({
                        code: n,
                        maxvalue: a,
                        userminvalue: g,
                        label: ba($(f.label, f.displayvalue)),
                        codeRGB: fa(n)
                    });
            b.sort(X);
            d = b.length;
            for (p = 1; p < d; p += 1)
                f = b[p],
                n = f.maxvalue - h,
                0 < n ? (f.minvalue = h,
                f.range = n,
                h = f.maxvalue) : (b.splice(p, 1),
                p -= 1,
                d -= 1);
            2 <= b.length && (this.scaleMax = h,
            b[p - 1].label = $(l.endlabel, b[p - 1].label, b[p - 1].displayvalue));
            1 === b.length && (a = E(l.maxvalue, this.mapbypercent ? 100 : B),
            b.push({
                minvalue: h,
                maxvalue: a,
                range: a - h,
                label: l.endlabel
            }),
            this.scaleMax = a,
            delete b[0].code);
            l = b[0];
            B = b[b.length - 1];
            l.code && B.code || (n = la(t),
            d = Fa((n[2] = 0,
            n)),
            n = Fa((n[2] = 100,
            n)),
            l.code || (l.codeRGB = d,
            l.code = ta(d)),
            B.code || (B.codeRGB = n,
            B.code = ta(n)));
            d = b.length;
            for (p = 1; p < d; p += 1)
                if (f = b[p],
                f.code) {
                    if (e)
                        for (B = f,
                        g = l.maxvalue,
                        m = B.maxvalue - g; e < p; e += 1)
                            t = b[e],
                            n = W(l.codeRGB, B.codeRGB, (t.maxvalue - g) / m),
                            t.code = n.hex,
                            t.codeRGB = n.rgb;
                    e = null;
                    l = f
                } else
                    e = e || p;
            if (void 0 === this.scaleMin || void 0 === this.scaleMax)
                this.noValidRange = !0
        } else if (m && (d = m.length)) {
            for (p = 0; p < d; p += 1)
                f = m[p],
                n = $(f.color, f.code),
                a = E(f.maxvalue),
                g = E(f.minvalue),
                e = $(f.label, f.displayvalue, h ? U : c.dataLabels(g) + " - " + c.dataLabels(a)),
                (n && a > g || h && e) && b.push({
                    code: n,
                    maxvalue: a,
                    minvalue: g,
                    label: ba(e),
                    labelId: e.toLowerCase()
                });
            b.length ? t && b.sort(X) : this.noValidRange = !0
        }
    }
    function V(b, d) {
        return d ? w(100 * b) / 100 + T : K(b, U).toString()
    }
    var ha = this, b = ha.hcLib, ua = ha.window, ua = /msie/i.test(ua.navigator.userAgent) && !ua.opera, E = b.pluckNumber, sa = b.COLOR_BLACK, d = b.COLOR_GLASS, Da = b.FC_CONFIG_STRING, za = b.graphics, Fa = za.HSBtoRGB, la = za.RGBtoHSB, ta = za.RGBtoHex, fa = za.HEXtoRGB, oa = b.COMMASTRING, U = b.BLANKSTRING, ba = b.parseUnsafeString, va = b.graphics.convertColor, Ga = b.POSITION_TOP, ga = b.POSITION_MIDDLE, wa = b.POSITION_START, Ha = b.POSITION_END, xa = b.graphics.getDarkColor, pa = b.graphics.getLightColor, $ = b.pluck, K = b.getValidValue, qa = b.toRaphaelColor, Aa = b.hasTouch, w = Math.round, O = Math.max, R = Math.min, Ia = Math.abs, T = "%", Ea, Ja, Ba, Ka = "rgba(192,192,192," + (ua ? 0.002 : 1E-6) + ")", Ca = function(b) {
        return b && b.replace(/^#?([a-f0-9]+)/ig, "$1")
    };
    z.prototype = {
        getColorObj: function(b) {
            var d = this.colorArr, n = this.gradient ? 1 : 0, l = d[n], p;
            if (this.mapByCategory) {
                for (b = ba(b).toLowerCase(); l; ) {
                    if (l.labelId === b)
                        return {
                            code: l.code,
                            seriesIndex: n
                        };
                    n += 1;
                    l = d[n]
                }
                return {
                    outOfRange: !0
                }
            }
            if (this.gradient) {
                if (this.scaleMin <= b && this.scaleMax >= b) {
                    for (; l && l.maxvalue < b; )
                        n += 1,
                        l = d[n];
                    b = (b - l.minvalue) / l.range;
                    return {
                        code: W(d[n - 1].codeRGB, l.codeRGB, b).hex
                    }
                }
                return {
                    outOfRange: !0
                }
            }
            for (; l; ) {
                if (l.maxvalue > b && l.minvalue <= b)
                    return {
                        code: l.code,
                        seriesIndex: n
                    };
                l.maxvalue === b && (p = n);
                n += 1;
                l = d[n]
            }
            return (l = d[p]) && l.maxvalue === b ? {
                code: l.code,
                seriesIndex: p
            } : {
                outOfRange: !0
            }
        }
    };
    z.prototype.constructor = z;
    b.colorRange = z;
    Ea = b.configureGradientLegendOptions = function(b, d) {
        var n = b.legend
          , l = d.chart;
        n.legendSliderBorderWidth = E(l.legendpointerborderthickness, 1);
        n.legendSliderBorderColor = va($(l.legendpointerbordercolor, sa), E(l.legendpointerborderalpha, 100));
        n.legendSliderWidth = E(l.legendpointerwidth, l.legendpointerswidth, 12);
        n.legendSliderHeight = E(l.legendpointerheight, l.legendpointersheight, 12);
        n.legendColorBoxBorderColor = n.borderColor;
        n.legendColorBoxBorderWidth = n.borderWidth;
        n.legendScaleColor = va($(l.legendscalelinecolor, sa), E(l.legendscalelinealpha, 100));
        n.legendScalePadding = E(l.legendscalepadding, 4);
        n.legendScaleLineThickness = E(l.legendscalelinethickness, 1);
        n.legendScaleTickDistance = E(l.legendscaletickdistance, 6);
        n.itemStyle.cursor = "default";
        n.interActivity = E(l.interactivelegend, 1)
    }
    ;
    b.placeGLegendBlockRight = function(b, d, n, l, p) {
        this.configureLegendOptions(b, d.chart, !0, p, n);
        Ea(b, d);
        p = this.snapLiterals || (this.snapLiterals = {});
        var B = b[Da], t = this.smartLabel || B.smartLabel, h = b.legend, f = b.chart.spacingRight, c, m, e = h.textPadding = 2, a = 2 * e, g = h.title.padding, aa = 0, k = 0, J = 2 * h.padding;
        d = E(d.chart.legendpadding, 7) + h.borderWidth / 2 + 1;
        var u = b.colorRange || {}
          , da = u.colorArr
          , P = u.mapbypercent
          , s = u.scaleMin
          , S = u.scaleMax - s
          , ia = h.legendSliderWidth
          , v = h.legendSliderHeight / 2;
        m = h.legendScalePadding;
        var q = h.legendScaleTickDistance
          , x = h.itemStyle || {};
        c = E(parseInt(x.lineHeight, 10) || 12);
        var Q = 0.75 * c, A = n - J, L, r, C = 0, H, y, M, D, G, F, z;
        l -= J;
        if (!u.noValidRange && da && 1 < (r = da.length)) {
            r -= 1;
            h.title.text !== U && (t.setStyle(h.title.style),
            c = t.getSmartText(h.title.text, A, O(c, l / 4)),
            h.title.text = c.text,
            aa = c.width + J,
            l -= k = c.height + g);
            t.setStyle(x);
            c = t.lineHeight;
            A -= q + m + ia;
            h.colorBoxX = ia;
            g = O(c, A / 2);
            A = R(A - g - 4, c);
            H = O(c, l / 2);
            L = l / 4;
            q = da[0];
            q.scaleLabel = V(q.maxvalue, P);
            c = t.getSmartText(q.label, L, A);
            q.label = c.text;
            x = c.height;
            q.labelY = Q - c.height / 2;
            m = t.getSmartText(q.scaleLabel, g, H);
            q.scaleLabel = m.text;
            u = m.height / 2;
            y = m.width;
            q.scaleLabelY = Q - m.height / 2;
            h.colorBoxY = O(u, c.width + a, v) + k;
            q = z = da[r];
            q.scaleLabel = V(q.maxvalue, P);
            c = t.getSmartText(q.label, L, A);
            q.label = c.text;
            x = O(x, c.height);
            q.labelY = Q - c.height / 2;
            m = t.getSmartText(q.scaleLabel, g, H);
            q.scaleLabel = m.text;
            y = O(y, m.width);
            L = m.height / 2;
            c = O(c.width + a, L, v);
            q.scaleLabelY = Q - m.height / 2;
            h.colorBoxHeight = v = l - h.colorBoxY - c;
            H = v - L;
            M = v / S;
            G = R(v - C, H - u) - 4;
            for (L = 1; L < r; L += 1)
                q = da[L],
                D = (q.maxvalue - s) * M,
                c = t.getSmartText(q.label, 2 * R(D - C, v - D), A),
                q.label = c.text,
                x = O(x, c.height),
                q.labelY = Q - c.height / 2,
                c = c.width / 2,
                q.scaleLabel = V(q.maxvalue, P),
                m = t.getSmartText(q.scaleLabel, g, 2 * R(D - u, H - D)),
                q.scaleLabel = m.text,
                y = O(y, m.width),
                F = m.height / 2,
                q.scaleLabelY = Q - m.height / 2,
                G = R(G, (D - O(F + u, c + C) - 4) * S / q.range),
                C = c + D,
                u = F + D;
            G = O(R(G, (R(H - u, v - C) - 4) * S / z.range, 0.3 * l), 0);
            h.colorBoxHeight -= G;
            h.colorBoxWidth = x && x + a || 15;
            h.height = h.totalHeight = l + k + J - G;
            h.width = (y && y + e) + h.colorBoxWidth + ia + h.legendScaleTickDistance + h.legendScalePadding + J;
            h.width < aa && (h.colorBoxX += (aa - h.width) / 2,
            h.width = aa);
            h.width > n && (h.width = n);
            p.legendstartx = B.width - f - h.width;
            p.legendwidth = h.width;
            p.legendendx = p.legendstartx + p.legendwidth;
            p.legendheight = h.height;
            d += h.width;
            b.chart.marginRight += d;
            return d
        }
        h.enabled = !1;
        return 0
    }
    ;
    b.placeGLegendBlockBottom = function(b, d, n, l, p) {
        this.configureLegendOptions(b, d.chart, !1, p, n);
        Ea(b, d);
        p = this.snapLiterals || (this.snapLiterals = {});
        var z = b[Da], t = this.smartLabel || z.smartLabel, h = b.legend, f = b.chart, c = f.spacingBottom, m = f.spacingLeft, f = f.spacingRight, e, a, g = h.textPadding = 2, aa = h.title.padding, k = 0, J = 0, u = 2 * h.padding;
        d = E(d.chart.legendpadding, 7) + h.borderWidth / 2 + 1;
        var da = b.colorRange || {}
          , P = da.colorArr
          , s = da.mapbypercent
          , S = da.scaleMin
          , ia = da.scaleMax - S
          , v = h.legendSliderWidth
          , q = h.legendSliderHeight
          , x = h.legendScalePadding
          , Q = h.legendScaleTickDistance
          , A = h.itemStyle || {};
        e = E(parseInt(A.lineHeight, 10) || 12);
        var L = 0.75 * e, r = l - u, C, H, y, M, D = 0, G, F, w;
        n -= u;
        if (!da.noValidRange && P && 1 < (H = P.length)) {
            H -= 1;
            h.title.text !== U && (t.setStyle(h.title.style),
            e = t.getSmartText(h.title.text, n, r / 3),
            h.title.text = e.text,
            k = e.width + u,
            r -= J = e.height + aa);
            t.setStyle(A);
            e = t.lineHeight;
            r -= Q + x + q;
            aa = O(e, r / 2);
            A = R(r - aa - 4, e);
            C = n / 4;
            M = 2 * C;
            y = P[0];
            y.scaleLabel = V(y.maxvalue, s);
            e = t.getSmartText(y.label, C, A);
            y.label = e.text;
            r = e.height;
            y.labelY = L - e.height / 2;
            a = t.getSmartText(y.scaleLabel, M, aa);
            y.scaleLabel = a.text;
            x = a.width / 2;
            Q = a.height;
            y.code || (y.code = $(h.minColor, "CCCCCC"));
            h.colorBoxX = O(x, e.width + g, v);
            y = da = P[H];
            y.scaleLabel = V(y.maxvalue, s);
            e = t.getSmartText(y.label, C, A);
            y.label = e.text;
            r = O(r, e.height);
            y.labelY = L - e.height / 2;
            a = t.getSmartText(y.scaleLabel, M, aa);
            y.scaleLabel = a.text;
            Q = O(Q, a.height);
            y = a.width / 2;
            e = O(e.width + g, y, v);
            h.colorBoxWidth = v = n - h.colorBoxX - e;
            M = v - y;
            G = v / ia;
            w = R(v - D, M - x) - 4;
            for (C = 1; C < H; C += 1)
                y = P[C],
                F = (y.maxvalue - S) * G,
                e = t.getSmartText(y.label, 2 * R(F - D, v - F), A),
                y.label = e.text,
                r = O(r, e.height),
                y.labelY = L - e.height / 2,
                e = e.width / 2,
                y.scaleLabel = V(y.maxvalue, s),
                a = t.getSmartText(y.scaleLabel, 2 * R(F - x, M - F), aa),
                y.scaleLabel = a.text,
                Q = O(Q, a.height),
                a = a.width / 2,
                w = R(w, (F - O(a + x, e + D) - 4) * ia / y.range),
                D = e + F,
                x = a + F;
            w = O(R(w, (R(M - x, v - D) - 4) * ia / da.range, 0.3 * n), 0);
            h.colorBoxWidth -= w;
            h.width = n + u - w;
            h.width < k && (h.colorBoxX += (k - h.width) / 2,
            h.width = k);
            h.colorBoxY = J + q;
            h.colorBoxHeight = r && r + 2 * g || 15;
            h.height = h.totalHeight = (Q && Q + g) + h.colorBoxHeight + J + q + h.legendScaleTickDistance + h.legendScalePadding + u;
            h.height > l && (h.height = l);
            p.legendstartx = m + 0.5 * (z.width - m - f - h.width) + (h.x || 0);
            p.legendwidth = h.width;
            p.legendendx = p.legendstartx + p.legendwidth;
            p.legendstarty = z.height - c - h.height;
            p.legendheight = h.height;
            p.legendendy = p.legendstarty + p.legendheight;
            d += h.height;
            b.chart.marginBottom += d;
            return d
        }
        h.enabled = !1;
        return 0
    }
    ;
    Ja = function() {
        return {
            point: this
        }
    }
    ;
    Ba = function(b) {
        return w(100 * b) / 100
    }
    ;
    b.rendererRoot.drawGradientLegendItem = function(b) {
        var z = this, n = z.paper, l = z.options, p = z.canvasLeft, B = z.canvasTop, t = z.canvasWidth, h = z.canvasHeight, f = l.colorRange, c, m, e, a, g = l.legend, aa = E(g.padding, 4), k = g.itemStyle, l = g.symbolStyle, J = g.interActivity, u = b.elements;
        b = u.elementGroup.trackTooltip(!0);
        var da = "vertical" === g.layout, P, s, S, ia, v, q, x = 0, Q = g.lighting3d, A = g.colorBoxWidth, L = g.colorBoxHeight, r = A, C = L, H = {
            FCcolor: {
                color: U,
                alpha: U,
                angle: 0,
                ratio: U
            }
        }, y = H.FCcolor, M = g.colorBoxX + aa, D = g.colorBoxY + aa, G, F, Ma = g.legendColorBoxBorderColor, Na = g.legendColorBoxBorderWidth, ya = ["M"], ca = g.legendScaleColor;
        q = g.legendScalePadding;
        var W = g.legendScaleLineThickness
          , R = W % 2 / 2;
        m = g.legendScaleTickDistance;
        var T = g.legendSliderWidth
          , V = g.legendSliderHeight;
        v = C / 2;
        a = r / 2;
        var K = T / 2, Y = V / 2, ba, Z, ma;
        F = 0;
        var ea = pa("ABABAB", 50), aa = xa("ABABAB", 70), g = va("ABABAB", 100), aa = va(aa, 100), ea = va(ea, 100), X, N = {
            isFirst: !0
        }, I = {}, na, ja, ka, fa;
        if (f && (c = f.colorArr) && 1 < (e = c.length)) {
            N.toolText = na = S = f.scaleMin;
            I.toolText = ja = f = f.scaleMax;
            ia = f - S;
            N.snapPX = I.snapPX = 0;
            N.tooltipConstraint = I.tooltipConstraint = "chart";
            N.getLabelConfig = I.getLabelConfig = Ja;
            N.tooltipPos = [0, 0];
            I.tooltipPos = [0, 0];
            I.tooltipOffsetReference = N.tooltipOffsetReference = {};
            I.tooltipOffsetReference.left = N.tooltipOffsetReference.left += p - 20;
            I.tooltipOffsetReference.top = N.tooltipOffsetReference.top += B;
            ka = u.colorBox = n.group("colorBox", b);
            if (da) {
                N.tooltipPos[0] = I.tooltipPos[0] = t + p;
                F = 270;
                y.angle = 90;
                p = M - T;
                t = M + r;
                B = D - Y;
                P = D + Y;
                p = w(M - T) + 0.5;
                t = w(M) + 0.5;
                B = w(D - Y) + 0.5;
                P = w(D + Y) + 0.5;
                ba = w(M + r) + 0.5;
                ma = w(D - 2) + 0.5;
                s = w(D + 2) + 0.5;
                G = w(D) + 0.5;
                h = M - K / 2;
                Z = w(h - Y) + 0.5;
                h = w(h) + 0.5;
                v = D - Y / 2;
                Y = w(v + Y) + 0.5;
                v = w(v) + 0.5;
                A /= 2;
                K = ["M", p, B, "L", t, B, t, ma, ba, G, t, s, t, P, p, P, "Z", "M", Z, v, "L", h, v, "M", Z, G, "L", h, G, "M", Z, Y, "L", h, Y];
                Y = ["M", p + 1, B, "L", p + 1, P, "M", Z, v - 1, "L", h, v - 1, "M", Z, G - 1, "L", h, G - 1, "M", Z, Y - 1, "L", h, Y - 1];
                v = M + r + q;
                P = w(v + m) + R;
                v = w(v) + R;
                G = M + a;
                Z = e - 1;
                for (m = 0; m < e; m += 1)
                    a = c[m],
                    t = (a.maxvalue - S) / ia,
                    s = C * t + D,
                    q = w(s) + R,
                    m ? (y.ratio += oa,
                    y.color += oa,
                    y.alpha += oa,
                    ya.push("L", v, q, P, q, "M", v, q),
                    m === Z ? (h = Ha,
                    q = s + 2) : (h = ga,
                    q = s)) : (ya.push(v, q, "L", P, q, "M", v, q),
                    h = wa,
                    q = s - 2),
                    y.ratio += 100 * (t - x),
                    y.color += $(a.code, sa),
                    y.alpha += $(a.alpha, 100),
                    x = t,
                    a.legendItem = n.text(b).attr({
                        text: a.label,
                        x: G,
                        y: q,
                        "text-anchor": h,
                        "vertical-align": ga
                    }).rotate(F, G, q).css(k),
                    a.legendSymbol = n.text(b).attr({
                        text: a.scaleLabel,
                        x: P,
                        y: s,
                        "text-anchor": wa,
                        "vertical-align": ga
                    }).css(k);
                N.xMin = I.xMin = 0;
                N.xMax = I.xMax = 0;
                N.yMin = I.yMin = 0;
                N.yMax = I.yMax = C;
                N.x = I.x = 0;
                N.y = 0;
                I.y = C;
                c = V + r;
                e = T
            } else {
                N.tooltipPos[1] = I.tooltipPos[1] = h + B;
                p = w(M - K) + 0.5;
                t = w(M + K) + 0.5;
                B = w(D - V) + 0.5;
                P = w(D + C) + 0.5;
                ba = w(M - 2) + 0.5;
                h = w(M + 2) + 0.5;
                Z = w(M) + 0.5;
                ma = w(D) + 0.5;
                s = D - Y / 2;
                G = w(s - Y) + 0.5;
                s = w(s) + 0.5;
                F = M - K / 2;
                a = w(F + K) + 0.5;
                F = w(F) + 0.5;
                L /= 2;
                K = ["M", p, B, "L", t, B, t, ma, h, ma, Z, P, ba, ma, p, ma, "Z", "M", F, G, "L", F, s, "M", Z, G, "L", Z, s, "M", a, G, "L", a, s];
                Y = ["M", p, B + 1, "L", t, B + 1, "M", F - 1, G, "L", F - 1, s, "M", Z - 1, G, "L", Z - 1, s, "M", a - 1, G, "L", a - 1, s];
                q = D + C + q;
                F = w(q + m) + R;
                q = w(q) + R;
                s = D + v;
                Z = e - 1;
                for (m = 0; m < e; m += 1)
                    a = c[m],
                    t = (a.maxvalue - S) / ia,
                    P = r * t + M,
                    v = w(P) + R,
                    m ? (y.ratio += oa,
                    y.color += oa,
                    y.alpha += oa,
                    ya.push("L", v, q, v, F, "M", v, q),
                    m === Z ? (h = wa,
                    v = P + 2) : (h = ga,
                    v = P)) : (ya.push(v, q, "L", v, F, "M", v, q),
                    h = Ha,
                    v = P - 2),
                    y.ratio += 100 * (t - x),
                    y.color += $(a.code, sa),
                    y.alpha += $(a.alpha, 100),
                    x = t,
                    a.legendItem = n.text(b).attr({
                        text: a.label,
                        x: v,
                        y: s,
                        "text-anchor": h,
                        "vertical-align": ga
                    }).css(k),
                    a.legendSymbol = n.text(b).attr({
                        text: a.scaleLabel,
                        x: P,
                        y: F,
                        "text-anchor": ga,
                        "vertical-align": Ga
                    }).css(k);
                N.xMin = I.xMin = 0;
                N.xMax = I.xMax = r;
                N.yMin = I.yMin = 0;
                N.yMax = I.yMax = 0;
                N.y = I.y = 0;
                N.x = 0;
                I.x = r;
                c = T;
                e = V + C
            }
            u.colorBox = n.rect(ka).attr({
                x: M,
                y: D,
                width: r,
                height: C,
                fill: qa(H),
                stroke: Ma,
                strokeWidth: Na
            });
            Q && (u.colorBoxEffect = n.rect(ka).attr({
                x: M,
                y: D,
                width: A,
                height: L,
                fill: d,
                "stroke-width": 0
            }));
            u.scale = n.path(b).attr({
                path: ya,
                stroke: ca,
                "stroke-width": W
            });
            X = function(a, c, f, b, m) {
                var e;
                da ? (e = c * ia / C + S,
                b = 0 < c ? b : b + c + 0.01) : (e = a * ia / r + S,
                f = 0 < a ? f : f + a + 0.01);
                a = Ba(e);
                m ? (u.slider1.translate(f, b),
                u.slider1Effect.translate(f, b),
                u.slider1Tracker.toFront().translate(f, b).tooltip(a, null, null, !0),
                na = e) : (u.slider2.translate(f, b),
                u.slider2Effect.translate(f, b),
                u.slider2Tracker.toFront().translate(f, b).tooltip(a, null, null, !0),
                ja = e);
                J && (fa = clearTimeout(fa),
                fa = setTimeout(function() {
                    z.setScaleRange && z.setScaleRange(na, ja)
                }, 100))
            }
            ;
            Q = function(a, c) {
                var f = 0, b = f, m, e = this.isFirst, g = e ? I : N;
                if (da) {
                    b = this._startY + c;
                    0 >= b && (b = 0);
                    b > C && (b = C);
                    if (e ? b > g.y : b < g.y)
                        b = g.y;
                    Ia(b - this.y) >= (this.snapPX || 0) && (m = !0)
                } else {
                    f = this._startX + a;
                    0 >= f && (f = 0);
                    f > r && (f = r);
                    if (e ? f > g.x : f < g.x)
                        f = g.x;
                    Ia(f - this.x) >= (this.snapPX || 0) && (m = !0)
                }
                m && (X(f, b, f - this.x, b - this.y, e),
                this.x = f,
                this.y = b)
            }
            ;
            A = function() {
                var a = this.isFirst;
                this._startX = this.x;
                this._startY = this.y;
                this._scaleStart = na;
                this._scaleEnd = ja;
                ha.raiseEvent("LegendPointerDragStart", {
                    pointerIndex: a ? 0 : 1,
                    pointers: [{
                        value: na
                    }, {
                        value: ja
                    }],
                    legendPointerHeight: V,
                    legendPointerWidth: T
                }, z.logic.chartInstance)
            }
            ;
            L = function() {
                var a = this._scaleStart
                  , c = this._scaleEnd;
                ha.raiseEvent("LegendPointerDragStop", {
                    pointerIndex: this.isFirst ? 0 : 1,
                    pointers: [{
                        value: na
                    }, {
                        value: ja
                    }],
                    legendPointerHeight: V,
                    legendPointerWidth: T
                }, z.logic.chartInstance);
                a === na && c === ja || ha.raiseEvent("LegendRangeUpdated", {
                    previousMinValue: a,
                    previousMaxValue: c,
                    minValue: na,
                    maxValue: ja
                }, z.logic.chartInstance);
                delete this._scaleStart;
                delete this._scaleEnd
            }
            ;
            H = Ba(S);
            u.slider1 = n.path(b).attr({
                path: K,
                fill: g,
                strokeWidth: 1,
                stroke: aa
            });
            u.slider1Effect = n.path(b).attr({
                path: Y,
                fill: "none",
                strokeWidth: 1,
                stroke: ea
            });
            Aa && (p -= 0.5 * (O(30, c) - c),
            B -= 0.5 * (O(40, e) - e),
            c = O(30, c),
            e = O(40, e));
            u.slider1Tracker = n.rect(b).attr({
                ishot: !0,
                width: c,
                height: e,
                x: p,
                y: B,
                fill: Ka,
                stroke: "none"
            }).drag(Q, A, L, N, N, N).tooltip(H, null, null, !0).css(l);
            H = Ba(f);
            u.slider2 = n.path(b).attr({
                path: K,
                fill: g,
                strokeWidth: 1,
                stroke: aa
            }).translate(I.x, I.y);
            u.slider2Effect = n.path(b).attr({
                path: Y,
                fill: "none",
                strokeWidth: 1,
                stroke: ea
            }).translate(I.x, I.y);
            u.slider2Tracker = n.rect(b).attr({
                ishot: !0,
                width: c,
                height: e,
                x: p,
                y: B,
                fill: Ka,
                stroke: "none"
            }).translate(I.x, I.y).css(l).drag(Q, A, L, I, I, I).tooltip(H, null, null, !0)
        }
    }
}
]);
FusionCharts.register("module", ["private", "modules.renderer.js-maps", function() {
    var W = this
      , X = W.window
      , z = W.hcLib
      , V = z.chartAPI
      , ha = X.document
      , b = z.pluck
      , ua = z.imprint
      , E = z.extend2
      , sa = z.parseTooltext
      , d = z.pluckNumber
      , Da = z.pluckFontSize
      , za = z.HCstub
      , Fa = E(z.defaultPaletteOptions, {
        foregroundcolor: "333333",
        foregroundalpha: "100",
        foregrounddarkcolor: "111111",
        foregrounddarkalpha: "100",
        foregroundlightcolor: "666666",
        foregroundlightalpha: "100",
        backgroundlightcolor: "FFFFFF",
        backgroundlightalpha: "100",
        backgroundlightangle: 90,
        backgroundlightratio: "",
        backgroundcolor: "FFFFCC",
        backgroundalpha: "100",
        backgrounddarkcolor: "ffcc66",
        backgrounddarkalpha: "100",
        backgrounddarkangle: 270,
        backgrounddarkratio: "",
        shadow: 1
    })
      , la = z.setLineHeight
      , ta = z.getValidValue
      , fa = z.parseUnsafeString
      , oa = z.getFirstColor
      , U = z.graphics.convertColor
      , ba = z.hashify
      , va = z.getDashStyle
      , Ga = X.navigator.userAgent
      , ga = /msie/i.test(Ga) && !X.opera
      , wa = /AppleWebKit/.test(Ga)
      , Ha = /stroke/ig
      , xa = z.hasSVG
      , pa = z.FC_CONFIG_STRING
      , $ = X.Math
      , K = $.min
      , qa = $.max
      , Aa = $.ceil
      , w = z.toRaphaelColor
      , O = {
        left: "start",
        right: "end",
        center: "middle"
    }
      , R = function(f, c) {
        var b;
        f || (f = {});
        for (b in c)
            f[b] = c[b];
        return f
    }
      , Ia = function(f) {
        var c = this.parentNode;
        if (!c)
            return !1;
        for (; c && c !== ha.documentElement; ) {
            if (c === f)
                return !0;
            c = c.parentNode
        }
        return !1
    }
      , T = function(f, c) {
        var b = c ? R(f.FCcolor, c) : {
            FCcolor: f
        };
        b.toString = w;
        return b
    }
      , Ea = function(f, c) {
        var b, e;
        this.index = c;
        for (e in f)
            b = Fa[f[e]],
            this[e] = b instanceof Array ? b[c] : b
    }
      , Ja = {
        right: function(f, c) {
            return c
        },
        left: function(f, c) {
            return f - c
        },
        center: function(f, c) {
            return 2 * K(c, f - c)
        }
    }
      , Ba = {
        top: function(f, c) {
            return c
        },
        middle: function(f, c) {
            return 2 * K(c, f - c)
        },
        bottom: function(f, c) {
            return f - c
        }
    }
      , Ka = function(f, c, b, e) {
        c = K(f, c);
        f = 0.02 * c;
        c *= 0.07;
        e = parseFloat(e);
        b = parseFloat(b);
        return isNaN(e) || isNaN(b) ? isNaN(e) ? isNaN(b) ? {
            min: f,
            max: c
        } : {
            min: parseInt(b / 10, 10),
            max: b
        } : {
            min: e,
            max: 10 * e
        } : e < b ? {
            min: e,
            max: b
        } : {
            min: b,
            max: e
        }
    }
      , Ca = function(f) {
        for (var c = f && f.length || 0, b = {}, e; c--; )
            e = f[c],
            void 0 !== e.id && (b[e.id.toLowerCase()] = e);
        return b
    }
      , La = function(f, c) {
        var b, e = {};
        c = c || 1;
        if (!f || "object" !== typeof f)
            return e;
        for (b in f)
            Ha.test(b) || ("stroke-width" === b ? (e[b] = Number(f[b]) / c,
            wa && (e[b] = e[b] && Aa(e[b]) || 0)) : e[b] = f[b]);
        return e
    }
      , ra = function() {
        this.hoverEntity && (z.raiseEvent.apply(z, this.hoverEntityEventArgs),
        delete this.hoverEntityEventArgs,
        this.hoverEntity && this.hoverEntityAttr && this.hoverEntity.attr(this.hoverEntityAttr),
        delete this.hoverEntityAttr,
        this.hoverEntity = null)
    }
      , n = function(f, c) {
        var b = f && f.length || !1, e = c || "id", a = {}, g;
        if (!f)
            return f;
        for (; b--; )
            g = f[b],
            void 0 !== g[e] && (a[g[e].toLowerCase()] = g);
        return a
    }
      , l = function(f, c, b, e) {
        function a() {
            var a = this, c = a.entityPathMap, f = a.data, b = a.items, e, f = Ca(f);
            q = function() {
                for (var m, d = c[e]; d; )
                    b[e] ? a = null : ((m = f[e]) ? m.mapItem = b[e] = new p(e,ua(g(m), d),s,a.group) : b[e] = new p(e,d,s,a.group),
                    e = d.nextId && d.nextId.toLowerCase(),
                    d = void 0 !== e && c[e] || null);
                h.call(a)
            }
            ;
            x = function() {
                var e, m, d = v, q, k = 0;
                for (q in l)
                    if (!b[q] && (e = c[q],
                    (m = f[q]) ? m.mapItem = b[q] = new p(q,ua(g(m), e),s,a.group) : b[q] = new p(q,e,s,a.group),
                    k += 1,
                    delete l[q],
                    k === d))
                        break;
                k < n ? (n -= k,
                setTimeout(x, 0)) : h.call(a)
            }
            ;
            (e = u && u.toLowerCase()) ? q() : x()
        }
        function g(a) {
            delete a.outlines;
            delete a.label;
            delete a.shortlabel;
            delete a.labelposition;
            delete a.labelalignment;
            delete a.labelconnectors;
            return a
        }
        function d() {
            var a = this.items, c = [], b, f = {
                id: "entityLabels",
                items: c
            };
            for (b in a)
                a[b].drawLabel(c);
            S.addGroup(f)
        }
        function k() {
            var a = this.items, c;
            for (c in a)
                a[c].destroy();
            delete this.entityPathMap;
            delete this.data;
            delete this.chartObj;
            delete this.items;
            delete this.group
        }
        function h() {
            t.entities.labelsOnTop && d.call(this);
            this.ready = !0;
            s.checkComplete()
        }
        if (b && b.getEntityPaths()) {
            var u = b.getFirstId(), n = b.entityCount, l = b.getEntityPaths(!0), s = c, S = c.mapAnnotations, t = s.options, v = ga ? 50 : 0, q, x, Q;
            this.entityPathMap = l;
            this.data = f;
            this.chartObj = s;
            this.items = {};
            this.ready = !1;
            this.group = e || c.mapGroup;
            this.isReady = function() {
                return this.ready
            }
            ;
            a.call(this);
            this.drawLabels = d;
            this.destroy = k;
            this.init = a;
            this.initComplete = h;
            s.__canvasMouseOutListenerAdded || (s.__canvasMouseOutListenerAdded = !0,
            Q = c.paper.canvas,
            z.addEvent(Q, "mouseout", function(a) {
                a = a.originalEvent.relatedTarget || a.originalEvent.toElement;
                !ga || xa ? a && a.ownerSVGElement && a.ownerSVGElement === Q || ra.call(s) : a === ha.documentElement || a === c.container || a === c.container.parentElement ? ra.call(s) : Ia.call(a, Q) || ra.call(s)
            }))
        }
    }
      , p = function(f, c, m, e) {
        function a(a) {
            var c = this.featureConfig;
            return c && "undefined" !== typeof c[a] ? Boolean(c[a]) : !1
        }
        function g() {
            var b;
            if (a.apply(this, ["_ds"])) {
                b = c.labels && c.labels[0];
                if (!b)
                    return;
                b = (r.useSNameInTooltip ? b.shortText : b.text) + (isNaN(H) ? "" : r.tooltipSepChar + y)
            } else
                b = (r.useSNameInTooltip ? c.shortLabel : c.label) + (isNaN(H) ? "" : r.tooltipSepChar + y);
            return b
        }
        function h(a, f, e) {
            f ? e && "undefined" !== typeof c.displayvalue ? a = c.displayvalue : (a = b(r.includeNameInLabels ? r.useShortName ? a.shortText : a.text : ""),
            r.includeValueInLabels && !isNaN(H) && (a = void 0 === a ? y : a + M + y)) : a = a.text;
            return a
        }
        function k(a) {
            for (var c = a && a.length || 0, b; c--; )
                b = a[c],
                this.connectorElem[c] = L.path(b, this.group).attr({
                    transform: ka.transform,
                    stroke: U(O, R),
                    "shape-rendering": "crisp",
                    "stroke-width": K
                })
        }
        function n() {
            var a = this.chart.paper, c = xa || !ga ? "litepath" : "path", b = this.eJSON.outlines, f = this.group, e, d, g;
            e = b && b.length || 0;
            if (this.hasFeature("_ds")) {
                if (this.hasFeature("isDataEnabled"))
                    if (I)
                        for (; e--; )
                            d = b[e].outline,
                            this.svgElems[e] = {},
                            this.svgElems[e].graphic = a[c](d, f).attr(ka).tooltip(G).shadow(ha, m.shadowLayer);
                    else
                        for (; e--; )
                            d = b[e].outline,
                            this.svgElems[e] = {},
                            this.svgElems[e].graphic = a[c](d, f).tooltip(G).attr(ka);
                else if (I)
                    for (; e--; )
                        g = E(E({}, ka), La(b[e].style, ja)),
                        d = b[e].outline,
                        this.svgElems[e] = {},
                        this.svgElems[e].graphic = a[c](d, f).attr(g).tooltip(G).shadow(ha, m.shadowLayer);
                else
                    for (; e--; )
                        g = E(E({}, ka), La(b[e].style, ja)),
                        d = b[e].outline,
                        this.svgElems[e] = {},
                        this.svgElems[e].graphic = a[c](d, f).tooltip(G).attr(g);
                this.hasFeature("isDataEnabled") && this.addMouseGestures()
            } else {
                if (I)
                    for (; e--; )
                        d = b[e],
                        this.svgElems[e] = {},
                        this.svgElems[e].graphic = a[c](d, f).attr(ka).tooltip(G).shadow(ha, m.shadowLayer);
                else
                    for (; e--; )
                        d = b[e],
                        this.svgElems[e] = {},
                        this.svgElems[e].graphic = a[c](d, f).tooltip(G).attr(ka);
                this.addMouseGestures()
            }
            return this
        }
        function u(a) {
            var c = this.chart;
            c.hoverEntityEventArgs = ["entityrollout", this.eventArgs, c.fusionCharts, [c.fusionCharts.id, "rollOut", this.legacyEventArgs], a];
            ma && this.isVisible && (c.hoverEntity = this,
            c.hoverEntityAttr = this.revertAttr,
            this.attr(this.hoverAttr));
            z.raiseEvent("entityrollover", this.eventArgs, c.fusionCharts, [c.fusionCharts.id, "rollOver", this.legacyEventArgs], a)
        }
        function l(a, c, b) {
            var f = this, e = f.chart, d = a.labelPosition, g = a.labelAlignment, q = f.svgElems[0] && f.svgElems[0].graphic, k = a.style, r, x, A, s, n;
            d ? (q = d[0],
            d = d[1]) : (d = q.getBBox(),
            q = d.x + d.width / 2,
            d = d.y + d.height / 2);
            g ? (r = g[0],
            g = g[1],
            "right" === r ? q -= X : "left" === r && (q += X),
            "top" === g ? d -= X : "bottom" === g && (d += X)) : (r = "center",
            g = "middle");
            x = Y;
            A = parseFloat(ba) / m.sFactor;
            s = V;
            n = la;
            !c && k && (k.color && (x = k.color),
            k["font-size"] && (A = parseFloat(k["font-size"]) / m.sFactor),
            k["font-family"] && (s = k["font-family"]),
            void 0 !== k["font-weight"] && (n = "bold" === k["font-weight"]));
            return {
                x: q.toString(),
                y: d.toString(),
                wrapwidth: Ja[r](oa, q + ua) - X,
                wrapheight: Ba[g](ta, d + va) - X,
                wrap: 1,
                type: "text",
                align: r,
                valign: g,
                text: h(a, c, b),
                tooltext: G,
                link: N,
                bgcolor: "",
                bordercolor: "",
                fillcolor: x,
                fontsize: A,
                font: s,
                bold: n,
                onclick: function(a) {
                    W.raiseEvent("entityclick", f.eventArgs, m.fusionCharts, a)
                },
                onmouseover: function(a) {
                    f !== e.hoverEntity && (ra.call(f.chart),
                    u.call(f, a))
                },
                ontouchstart: function(a) {
                    f !== e.hoverEntity && (ra.call(f.chart),
                    u.call(f, a))
                }
            }
        }
        function p(a) {
            var c = this.eJSON, b = this.hasFeature("isDataEnabled"), f, e;
            if (!ya)
                return null;
            if (this.hasFeature("_ds"))
                for (e = (c = c.labels) && c.length || 0; e--; )
                    f = c[e],
                    a.push(this.getLabelObject(f, b, !e)),
                    f.labelConnectors && this.drawLabelConnectors(f.labelConnectors);
            else
                f = {
                    text: c.label,
                    shortText: c.shortLabel,
                    labelAlignment: c.labelAlignment,
                    labelPosition: c.labelPosition
                },
                a.push(this.getLabelObject(f, !0, !0)),
                c.labelConnectors && this.drawLabelConnectors(c.labelConnectors)
        }
        function s(a, c) {
            var b = this.svgElems, f;
            for (f in b)
                b[f].graphic && b[f].graphic.attr(a, c)
        }
        function S() {
            var a = this.svgElems, c;
            this.isVisible = !0;
            for (c in a)
                a[c].graphic && a[c].graphic.attr(ka)
        }
        function t() {
            var a = this.svgElems, c = this.chart, b;
            this.isVisible = !1;
            c.hoverEntity === this && ra.call(c);
            for (b in a)
                a[b].graphic && a[b].graphic.attr(na)
        }
        function v(a) {
            W.raiseEvent("entityclick", this.node.__entity.eventArgs, m.fusionCharts, a);
            void 0 !== N && m.logic.linkClickFN.call({
                link: N
            })
        }
        function q(a) {
            var c = this.node.__entity
              , b = c.chart;
            c !== b.hoverEntity && (ra.call(b),
            u.call(c, a))
        }
        function x() {
            var a = this.eJSON, c = this.svgElems, b;
            this.eventArgs = {
                value: this.value,
                label: a.label,
                shortLabel: a.shortLabel,
                originalId: this.originalId || this.id,
                id: this.id
            };
            this.legacyEventArgs = {
                value: this.value,
                lName: a.label,
                sName: a.shortLabel,
                id: this.originalId || this.id
            };
            ma && (this.hoverAttr = {
                fill: this.hoverColor.toString()
            },
            this.revertAttr = {
                fill: this.fillColor.toString()
            },
            ea !== ca && (this.hoverAttr["stroke-width"] = ea,
            this.revertAttr["stroke-width"] = ca));
            if (!isNaN(H) || Z)
                for (b in c)
                    void 0 !== N && c[b].graphic.css({
                        cursor: "pointer",
                        _cursor: "hand"
                    }),
                    c[b].graphic.node.__entity = this,
                    c[b].graphic.click(v).hover(q)
        }
        function Q() {
            var a = this.svgElems, c = this.connectorElem, b;
            for (b in a)
                a[b].remove && a[b].remove();
            for (b in c)
                c[b].destroy && c[b].destroy();
            delete this.value;
            delete this.formattedValue;
            delete this.toolText;
            delete this.fillColor;
            delete this.hoverColor;
            delete this.chart;
            delete this.group;
            delete this.id;
            delete this.isVisible;
            delete this.svgElems;
            delete this.connectorElem;
            delete this.renderer;
            delete this.options
        }
        if (c && m && void 0 !== f) {
            this.chart = m;
            this.eJSON = c;
            this.group = e;
            this.id = f;
            this.originalId = c.origId;
            this.isVisible = !0;
            this.svgElems = {};
            this.connectorElem = {};
            this.featureConfig = c.options;
            "object" === typeof this.featureConfig && (this.featureConfig._ds = !0);
            var A = m.options
              , L = m.paper
              , r = A.entities
              , C = r.dataLabels.style;
            f = c.cleanValue;
            var H = null === f ? void 0 : f
              , y = this.formattedValue = c.formattedValue || ""
              , M = r.labelSepChar
              , D = d(c.showtooltip, r.showTooltip);
            f = g.call(this);
            e = {
                formattedValue: y,
                sName: c.shortLabel,
                lName: c.label
            };
            var G = D ? fa(b(sa(b(c.tooltext, r.tooltext, f), [1, 2, 7, 38, 39], e, c))) : "", F, w, B, ya = d(c.showlabel, r.showLabels);
            e = b(c.bordercolor, r.borderColor);
            f = b(c.borderalpha, r.borderAlpha);
            var D = 1 === r.scaleBorder
              , ca = d(c.borderthickness, r.borderThickness)
              , O = b(c.labelconnectorcolor, r.connectorColor)
              , R = b(c.labelconnectoralpha, r.connectorAlpha)
              , K = d(c.labelconnectorthickness, r.connectorThickness)
              , V = b(c.font, C.fontFamily)
              , ba = d(parseInt(c.fontsize, 10), parseInt(C.fontSize, 10))
              , Y = b(c.fontcolor, C.color)
              , X = d(c.labelpadding, r.labelPadding)
              , Z = r.hoverOnNull
              , ma = d(c.showhovereffect, c.usehovercolor, Z ? r.showHoverEffect : isNaN(H) ? 0 : r.showHoverEffect)
              , ea = d(c.borderhoverthickness, c.hoverborderthickness, r.hoverBorderThickness)
              , la = d(c.fontbold, 0)
              , N = c.link
              , I = r.shadow;
            B = !ga || xa;
            C = m.sFactor / r.baseScaleFactor;
            F = m.strokeWidth;
            w = (B ? r.baseScaleFactor : 1) * F;
            var na = r.hiddenEntityFillObject || (r.hiddenEntityFillObject = {
                fill: T({
                    color: r.hiddenEntityColor,
                    alpha: r.hiddenEntityAlpha
                }).toString()
            }), ja, ka, ha, A = A[pa], oa = A._labelBaseWidth, ta = A._labelBaseHeight, ua = A._labelXOffset, va = A._labelYOffset;
            B ? (ca = D ? ca * w : ca / C,
            K /= C,
            ja = D ? C : m.sFactor,
            wa && (ca = ca && Aa(ca) || 0,
            K = K && Aa(K) || 0)) : (ca = D ? ca * F : ca,
            ja = D ? m.scaleFactor : r.baseScaleFactor);
            r.showHiddenEntityBorder || (na["stroke-width"] = 0);
            void 0 === ea ? ea = ca : B ? (ea = D ? ca * w : ea / C,
            wa && (ea = ea && Aa(ea) || 0)) : ea = D ? ea * F : ea;
            !r.showNullEntityBorder && isNaN(H) && (ca = 0);
            void 0 !== b(c.color, c.alpha, c.angle, c.ratio) ? (D = b(c.color, r.fillColor),
            A = b(c.alpha, r.fillAlpha),
            F = b(c.angle, r.fillAngle),
            w = b(c.ratio, r.fillRatio),
            B = T({
                color: D,
                alpha: A,
                angle: F,
                ratio: w
            })) : (r.fillColorObject || (r.fillColorObject = T({
                color: b(r.fillColor),
                alpha: b(r.fillAlpha),
                angle: b(r.fillAngle),
                ratio: b(r.fillRatio)
            })),
            r.emptyColorObject || (r.emptyColorObject = T({
                color: b(r.nullEntityColor),
                alpha: b(r.nullEntityAlpha),
                angle: b(r.nullEntityAngle),
                ratio: b(r.nullEntityRatio)
            })),
            B = isNaN(H) ? r.emptyColorObject : r.fillColorObject,
            D = B.FCcolor.color,
            A = B.FCcolor.alpha,
            F = B.FCcolor.angle,
            w = B.FCcolor.ratio);
            "" === G && (D = 0);
            ka = {
                transform: xa || !ga ? "" : m.transformStr,
                stroke: U(e, f),
                "stroke-width": ca,
                fill: (this.fillColor = B).toString()
            };
            e = A.split(",");
            ca && e.push(f);
            ha = {
                scalefactor: [C, m.sFactor],
                opacity: qa.apply($, e) / 100
            };
            ma && (void 0 !== b(c.fillhovercolor, c.fillhoveralpha, c.fillhoverangle, c.fillhoverratio, c.hoverfillcolor, c.hoverfillalpha, c.hoverfillratio, c.hoverfillangle) ? (D = b(c.fillhovercolor, c.hoverfillcolor, r.hoverFillColor),
            A = b(c.fillhoveralpha, c.hoverfillalpha, r.hoverFillAlpha),
            F = b(c.fillhoverangle, c.hoverfillangle, r.hoverFillAngle),
            w = b(c.fillhoverratio, c.hoverfillratio, r.hoverFillRatio),
            f = T({
                color: D,
                alpha: A,
                angle: F,
                ratio: w
            })) : (r.hoverColorObject || (r.hoverColorObject = T({
                color: r.hoverFillColor,
                alpha: r.hoverFillAlpha,
                angle: r.hoverFillAngle,
                ratio: r.hoverFillRatio
            })),
            f = r.hoverColorObject),
            this.hoverColor = f);
            this.value = H;
            this.addMouseGestures = x;
            this.attr = s;
            this.draw = n;
            this.drawLabel = p;
            this.getLabelObject = l;
            this.destroy = Q;
            this.show = S;
            this.hide = t;
            this.hasFeature = a;
            this.drawLabelConnectors = k;
            n.call(this);
            r.hideNullEntities && void 0 === H && this.hide()
        }
    }
      , B = function(b, c, d, e) {
        this.id = b;
        this.definition = c;
        this.application = d;
        this.rapi = e;
        this.markerLabel = this.markerShape = this.label = this.options = this.value = this.hasValue = null;
        this.drawOptions = {
            shape: null,
            label: null
        };
        this.drawComplete = !1;
        if (b = e.options)
            this._conf = b[pa];
        this.init()
    }
      , t = function(b, c, d, e) {
        this.options = b;
        this.from = c;
        this.to = d;
        this.api = e;
        if (b = e.options)
            this._conf = b[pa]
    }
      , h = function(f, c) {
        function d() {
            var b = u.definition, f = n(b) || {}, e = n(u.application) || {}, m = u.shapes, k, r;
            if (b && b.length) {
                if (m && m.length)
                    for (b = m.length; b; b -= 1)
                        if (k = m[b - 1],
                        r = k.id.toLowerCase())
                            a[r] = k;
                for (r in f) {
                    k = f[r];
                    m = new B(r,k,e[r],c);
                    if (b = m.getShapeId())
                        m.shapeObj = a[b];
                    g[r] = m
                }
            }
        }
        function e() {
            var b = u.items, f = u.shapes, e, d, m, k;
            if (b && b.length) {
                if (f && f.length)
                    for (e = f.length; e; e -= 1)
                        if (d = f[e - 1],
                        k = d.id.toLowerCase())
                            a[k] = d;
                for (e = b.length; e--; )
                    if (d = b[e],
                    k = d.id && d.id.toLowerCase())
                        void 0 !== d.value && "" !== d.value && parseFloat(d.value),
                        d.mapItem = f = new B(k,d,null,c),
                        m = f.getShapeId(),
                        d.__hideMarker && (f._isHidden = !0),
                        m && (f.shapeObj = a[m]),
                        g[k] = f
            }
        }
        var a = {}, g = {}, h = [], k = c.options.markers, J = c.options.connectors, u = f, l = c.mapAnnotations, p, s, S, z, v = [];
        this.items = g;
        (function() {
            var a = B.prototype, f = t.prototype, e;
            e = Boolean(b(k.hoverFillColor, k.hoverFillAlpha, k.hoverFillAngle, k.hoverFillRatio, k.hoverBorderThickness, k.hoverBorderColor, k.hoverBorderAlpha));
            a.markerFont = k.dataLabels.style.fontFamily;
            a.markerFontSize = k.dataLabels.style.fontSize;
            a.markerFontColor = k.dataLabels.style.fontColor;
            a.showMarkerTooltip = k.showTooltip;
            a.showHoverEffect = e;
            a.tooltext = k.tooltext;
            a.showMarkerLabels = k.showLabels;
            a.markerLabelPadding = k.labelPadding;
            a.labelWrapWidth = k.labelWrapWidth;
            a.labelWrapHeight = k.labelWrapHeight;
            a.labelSepChar = k.labelSepChar;
            a.tooltipSepChar = k.tooltipSepChar;
            a.fillColor = k.fillColor;
            a.fillAlpha = k.fillAlpha;
            a.fillRatio = k.fillRatio;
            a.fillAngle = k.fillAngle;
            a.hoverFillColor = k.hoverFillColor;
            a.hoverFillAlpha = k.hoverFillAlpha;
            a.hoverFillRatio = k.hoverFillRatio;
            a.hoverFillAngle = k.hoverFillAngle;
            a.startAngle = k.startAngle;
            a.shapeId = k.shapeId;
            a.borderThickness = k.borderThickness;
            a.borderColor = k.borderColor;
            a.borderAlpha = k.borderAlpha;
            a.hoverBorderThickness = k.hoverBorderThickness;
            a.hoverBorderColor = k.hoverBorderColor;
            a.hoverBorderAlpha = k.hoverBorderAlpha;
            a.markerRadius = k.radius;
            a.autoScale = k.autoScale ? c.sFactor : 1;
            a.shadow = k.shadow;
            a.applyAll = k.applyAll;
            a.dataEnabled = k.dataEnabled;
            a.valueToRadius = k.valueToRadius;
            a = Boolean(b(J.hoverthickness, J.hovercolor, J.hoveralpha));
            f.showHoverEffect = a;
            f.showTooltip = J.showTooltip;
            f.tooltext = J.tooltext;
            f.thickness = J.thickness;
            f.color = J.color;
            f.alpha = J.alpha;
            f.hoverThickness = J.hoverthickness;
            f.hoverColor = J.hovercolor;
            f.hoverAlpha = J.hoveralpha;
            f.dashed = J.dashed;
            f.dashlen = J.dashLen;
            f.dashgap = J.dashGap;
            f.font = J.font;
            f.fontsize = J.fontSize;
            f.fontcolor = J.fontColor;
            f.bgcolor = J.labelBgColor;
            f.bordercolor = J.labelBorderColor;
            f.shadow = J.shadow;
            f.hideOpen = J.hideOpen
        }
        )();
        k.dataEnabled ? e() : d();
        (function() {
            var c = g, b = [], f, e, d, m;
            p = l.addGroup({
                fillalpha: "100",
                items: b
            });
            s = l.addGroup({
                items: []
            });
            for (m in c)
                f = null,
                e = c[m],
                d = e.getShapeId(),
                e && !e._isHidden && (d && (e.shapeObj = a[d]),
                f = e.draw()),
                f && (e._annotationIndex = b.length,
                e.markerShape = f.markerShape && p.addItem(f.markerShape),
                e.markerLabel = f.markerLabel && s.addItem(f.markerLabel))
        }
        )();
        (function() {
            var a = J.showLabels, b = u.connectors, f = b && b.length, e = [], d = [], m, k, s;
            if (f)
                for (v.push({
                    id: "connectorLabels",
                    fillalpha: "100",
                    items: d
                }),
                v.push({
                    id: "connectors",
                    fillalpha: "100",
                    items: e
                }); f--; )
                    if (s = b[f],
                    s.from && s.to && (m = g[s.from.toLowerCase()],
                    k = g[s.to.toLowerCase()],
                    m && k && (!J.hideOpen || !m._isHidden && !k._isHidden) && (h.push(k = new t(s,m,k,c)),
                    k.connectJSON = m = k.computeConnectorJSON())))
                        e.push(m),
                        m.label && a && d.push(k.getLabelJSON())
        }
        )();
        z = v.length;
        for (c.internalAnnotations = {}; z--; )
            S = v.shift(),
            S.id ? c.internalAnnotations[S.id] = l.addGroup(S) : l.addGroup(S);
        this.addMarkerItem = function(b) {
            var f, e;
            if ((f = b.id.toLowerCase()) && !g[f]) {
                delete b.value;
                b = new B(f,b,null,c);
                if (e = b.getShapeId())
                    b.shapeObj = a[e];
                g[f] = b;
                f = b.draw();
                p && s && (b.markerShape = f.markerShape && p.addItem(f.markerShape, !0),
                b.markerLabel = f.markerLabel && s.addItem(f.markerLabel, !0))
            }
        }
    };
    t.prototype = {
        constructor: t,
        computeConnectorJSON: function() {
            var f = this.api, c = this.options, m = this.from, e = this.to, a = c.link, g = c.label, h = d(c.showtooltip, this.showTooltip), k = h ? b(c.tooltext, this.tooltext) : "", n = b(c.thickness, this.thickness), u = b(c.color, this.color), l = b(c.alpha, this.alpha), p = d(c.showhovereffect, this.showHoverEffect), s = b(c.hovercolor, this.hoverColor, u), S = b(c.hoveralpha, this.hoverAlpha, l), z = b(c.hoverthickness, this.hoverThickness, n), v = b(c.dashed, this.dashed), q = d(c.dashlen, this.dashlen), x = d(c.dashgap, this.dashgap), t;
            k && (this.tooltext = k = fa(sa(k, [3, 40, 41, 42, 43], {
                label: g,
                fromId: m.definition.id,
                toId: e.definition.id,
                fromLabel: m.definition.label,
                toLabel: e.definition.label
            }, c)));
            return m && e ? (t = {
                fromMarkerId: m.id,
                toMarkerId: e.id,
                label: g
            },
            E({
                type: "line"
            }, {
                x: m.definition.x,
                y: m.definition.y,
                tox: e.definition.x,
                toy: e.definition.y,
                dashed: v,
                dashlen: q,
                dashgap: x,
                link: a,
                tooltext: h ? k : "",
                thickness: n,
                color: u,
                alpha: l,
                label: g,
                showshadow: this.shadow,
                _hovereffect: p,
                _defaultattrs: {
                    stroke: T({
                        color: u,
                        alpha: l
                    }).toString(),
                    "stroke-width": n
                },
                _hoverattrs: {
                    stroke: T({
                        color: s,
                        alpha: S
                    }).toString(),
                    "stroke-width": z
                },
                onmouseover: function(a) {
                    var b = a.data
                      , c = b.wrapper;
                    c && b.options._hovereffect && (ra.call(f),
                    c.attr(b.options._hoverattrs));
                    W.raiseEvent("connectorrollover", t, f.fusionCharts, a)
                },
                onmouseout: function(a) {
                    var b = a.data
                      , c = b.wrapper;
                    c && b.options._hovereffect && c.attr(b.options._defaultattrs);
                    W.raiseEvent("connectorrollout", t, f.fusionCharts, a)
                },
                onclick: function(a) {
                    W.raiseEvent("connectorClick", t, f.fusionCharts, a)
                }
            })) : null
        },
        getLabelJSON: function() {
            var b = this.connectJSON;
            return E({
                type: "text"
            }, {
                x: ((Number(b.x) + Number(b.tox)) / 2).toString(),
                y: ((Number(b.y) + Number(b.toy)) / 2).toString(),
                text: b.label,
                align: "center",
                valign: "middle",
                font: this.font,
                fontsize: this.fontsize / this.api.sFactor,
                fillcolor: this.fontcolor,
                bgcolor: this.bgcolor,
                bordercolor: this.bordercolor,
                tooltext: this.tooltext
            })
        }
    };
    B.prototype = {
        constructor: B,
        init: function() {
            var b;
            b = this.options = E({}, this.definition);
            this.dataEnabled ? isNaN(b.value) || "" === b.value || (this.value = parseFloat(b.value),
            this.hasValue = !0) : this.applyAll ? this.options = E(b, this.application) : this.application && (this.options = E(b, this.application))
        },
        getShapeId: function() {
            return this.options.shapeid && this.options.shapeid.toLowerCase()
        },
        getLabelOptions: function(b, c, d, e, a) {
            var g, h = b && b.toLowerCase();
            this.getLabelAlignment[h] || (h = "center");
            b = Number(d.x);
            g = Number(d.y);
            d = void 0 === e || void 0 === a ? d.radius || 0 : /^(top|bottom)$/ig.test(h) && 0.5 * a || /^(left|right)$/ig.test(h) && 0.5 * e || 0;
            d = Number(d) + Number(c);
            return this.getLabelAlignment[h](b, g, d)
        },
        draw: function() {
            if (this.options) {
                var f = this.rapi
                  , c = this._conf
                  , m = f.translateX
                  , e = f.translateY
                  , a = this.options
                  , g = a.shapeid
                  , h = a.scale || 1
                  , k = a.label || ""
                  , n = (a.labelpos || "top").toLowerCase()
                  , u = void 0 === a.formattedValue ? void 0 : a.formattedValue
                  , l = a.tooltext || this.tooltext
                  , p = d(a.radius, this.markerRadius) * h * this.autoScale || 1E-4
                  , s = b(a.fillcolor, a.color, this.fillColor)
                  , t = b(a.fillalpha, a.alpha, this.fillAlpha)
                  , z = b(a.fillratio, this.fillRatio)
                  , v = b(a.fillangle, this.fillAngle)
                  , q = d(a.borderthickness, this.borderThickness)
                  , x = b(a.bordercolor, this.borderColor)
                  , w = b(a.borderalpha, this.borderAlpha)
                  , A = a.labelpadding || this.markerLabelPadding;
                if (g) {
                    l = l ? fa(sa(l, [1, 2, 3], {
                        formattedValue: u,
                        label: k
                    }, a)) : u ? k + this.tooltipSepChar + u : k;
                    g = g.toLowerCase();
                    void 0 !== u && null !== u ? k = k + this.labelSepChar + u : isNaN(h) ? h = 1 : 0 > h ? h = 0 : 5 < h && (h = 5);
                    a = {
                        x: a.x.toString(),
                        y: a.y.toString(),
                        fillcolor: s,
                        fillalpha: t,
                        fillratio: z,
                        fillangle: v,
                        borderthickness: q,
                        bordercolor: x,
                        borderalpha: w,
                        hovereffect: b(a.showhovereffect, this.showHoverEffect),
                        radius: p.toString(),
                        tooltext: this.showMarkerTooltip ? l : "",
                        link: a.link,
                        showshadow: d(a.showshadow, this.shadow),
                        _markerLabel: k,
                        _markerId: a.id,
                        id: (a.id + "").toLowerCase(),
                        onmouseover: function(a) {
                            var b = a.data
                              , c = b.options
                              , d = b.bounds
                              , g = c._markerEventArgs;
                            (b = b.wrapper) && c.hovereffect && (ra.call(f),
                            b.attr(c._hoverattrs));
                            g || (g = c._markerEventArgs = {
                                x: d.x1 / d.xs,
                                y: d.y1 / d.ys,
                                scaledX: d.x1,
                                scaledY: d.y1,
                                chartX: m + d.x1,
                                chartY: e + d.y1,
                                id: c._markerId,
                                label: c._markerLabel
                            });
                            W.raiseEvent("markerRollOver", g, f.fusionCharts, a)
                        },
                        onmouseout: function(a) {
                            var b = a.data
                              , c = b.wrapper;
                            c && b.options.hovereffect && c.attr(b.options._defaultattrs);
                            W.raiseEvent("markerRollOut", b.options._markerEventArgs, f.fusionCharts, a)
                        },
                        onclick: function(a) {
                            W.raiseEvent("markerClick", a.data.options._markerEventArgs, f.fusionCharts, a)
                        }
                    };
                    "triangle" === g ? E(a, {
                        type: "polygon",
                        sides: 3,
                        startangle: this.startAngle
                    }) : "diamond" === g ? E(a, {
                        type: "polygon",
                        sides: 4,
                        startangle: this.startAngle
                    }) : "arc" === g ? E(a, {
                        type: "arc",
                        startangle: 0,
                        endangle: 360,
                        innerradius: 0.6 * p
                    }) : "circle" === g ? a.type = "circle" : (A = this.getShapeArgs(),
                    this.dataEnabled && this.valueToRadius && void 0 !== a.radius ? delete A.radius : (!A.radius && (A.radius = this.markerRadius),
                    A.radius = A.radius * h * this.autoScale),
                    E(a, A));
                    E(a, {
                        hoverfillcolor: b(a.fillhovercolor, this.hoverFillColor, a.fillcolor),
                        hoverfillalpha: b(a.fillhoveralpha, this.hoverFillAlpha, a.fillalpha),
                        hoverfillratio: b(a.fillhoverratio, this.hoverFillRatio, a.fillratio),
                        hoverfillangle: b(a.fillhoverangle, this.hoverFillAngle, a.fillangle),
                        hoverborderthickness: d(a.borderhoverthickness, this.hoverBorderThickness, a.borderthickness),
                        hoverbordercolor: b(a.borderhovercolor, this.hoverBorderColor, a.bordercolor),
                        hoverborderalpha: b(a.borderhoveralpha, this.hoverBorderAlpha, a.borderalpha)
                    });
                    a._defaultattrs = {
                        fill: T({
                            alpha: a.fillalpha,
                            color: a.fillcolor,
                            angle: a.fillangle,
                            ratio: a.fillratio
                        }).toString(),
                        "stroke-width": "0" !== a.showborder ? a.borderthickness : 0,
                        stroke: U(a.bordercolor, a.borderalpha)
                    };
                    a._hoverattrs = {
                        fill: T({
                            alpha: a.hoverfillalpha,
                            color: a.hoverfillcolor,
                            angle: a.hoverfillangle,
                            ratio: a.hoverfillratio
                        }).toString(),
                        "stroke-width": "0" !== a.showborder ? a.hoverborderthickness : 0,
                        stroke: U(a.hoverbordercolor, a.hoverborderalpha)
                    };
                    "image" === a.type && (a.borderthickness = a.borderthickness || 0,
                    a.onload = function(a) {
                        var b = this.options
                          , c = a.width;
                        a = a.height;
                        var e = (Number(b.x) - c / (2 * f.sFactor)) * f.sFactor, b = (Number(b.y) - a / (2 * f.sFactor)) * f.sFactor, d;
                        if (c && a)
                            for (d in {
                                wrapper: 1,
                                tracker: 1
                            })
                                this[d] && this[d].attr({
                                    x: e,
                                    y: b,
                                    width: c,
                                    height: a
                                })
                    }
                    );
                    this.drawOptions.shape = a;
                    if (!this.showMarkerLabels)
                        return {
                            markerShape: a
                        };
                    A = a.labelpadding || this.markerLabelPadding;
                    h = this.getLabelOptions(n, A, a);
                    n = h.align;
                    g = h.valign;
                    l = c._labelBaseWidth;
                    u = c._labelBaseHeight;
                    p = c._labelXOffset;
                    c = c._labelYOffset;
                    l = this.labelWrapWidth ? this.labelWrapWidth : this.getWrapWidth[n](l, Number(h.x) + p);
                    c = this.labelWrapHeight ? this.labelWrapHeight : this.getWrapHeight[g](u, Number(h.y) + c);
                    l > A && (l -= A);
                    c > A && (c -= A);
                    this.drawOptions.label = E({
                        type: "text"
                    }, {
                        text: k,
                        tooltext: a.tooltext,
                        x: h.x,
                        y: h.y,
                        align: n,
                        valign: h.valign,
                        wrap: 1,
                        wrapwidth: l,
                        wrapheight: c,
                        fontsize: this.markerFontSize / f.sFactor,
                        font: this.markerFont,
                        fillcolor: this.markerFontColor
                    });
                    return {
                        markerShape: a,
                        markerLabel: this.drawOptions.label
                    }
                }
            }
        },
        show: function() {
            this.setMarkerVisibility(!0)
        },
        hide: function() {
            this.setMarkerVisibility(!1)
        },
        setMarkerVisibility: function(b) {
            var c = this.rapi && this.rapi.internalAnnotations;
            if (c = (c = c && c.markers) && c.items)
                if (c = c[this._annotationIndex])
                    this._origFill || (this._origFill = T({
                        alpha: c.fillAlpha,
                        color: c.fillColor,
                        angle: c.fillAngle,
                        ratio: c.fillRatio
                    }),
                    this._hideFill = T({
                        alpha: "0",
                        color: c.fillColor,
                        angle: c.fillAngle,
                        ratio: c.fillRatio
                    })),
                    b ? c.wrapper.attr({
                        fill: this._origFill
                    }) : c.wrapper.attr({
                        fill: this._hideFill
                    })
        },
        getShapeArgs: function() {
            var b = E({}, this.shapeObj), c;
            return b ? ("polygon" === b.type ? 3 > b.sides ? b.type = "circle" : b.startangle = this.startAngle : "arc" === b.type && (c = (b.radius || this.markerRadius) * this.autoScale,
            b.radius = c,
            b.innerradius = b.innerradius && b.innerradius * this.autoScale || 0.6 * c),
            b) : null
        },
        destroy: function() {
            var b = this.markerShape, c = this.markerLabel, d;
            b && b.destroy();
            c && c.destroy();
            for (d in this)
                delete this[d]
        },
        getLabelAlignment: {
            top: function(b, c, d) {
                return {
                    x: b.toString(),
                    y: (c - d).toString(),
                    align: "center",
                    valign: "top"
                }
            },
            left: function(b, c, d) {
                return {
                    x: (b - d).toString(),
                    y: c.toString(),
                    align: "right",
                    valign: "middle"
                }
            },
            right: function(b, c, d) {
                return {
                    x: (b + d).toString(),
                    y: c.toString(),
                    align: "left",
                    valign: "middle"
                }
            },
            bottom: function(b, c, d) {
                return {
                    x: b.toString(),
                    y: (c + d).toString(),
                    align: "center",
                    valign: "bottom"
                }
            },
            center: function(b, c) {
                return {
                    x: b.toString(),
                    y: c.toString(),
                    align: "center",
                    valign: "middle"
                }
            }
        },
        getWrapWidth: {
            right: function(b, c) {
                return c
            },
            left: function(b, c) {
                return b - c
            },
            center: function(b, c) {
                return 2 * K(c, b - c)
            }
        },
        getWrapHeight: {
            top: function(b, c) {
                return c
            },
            middle: function(b, c) {
                return 2 * K(c, b - c)
            },
            bottom: function(b, c) {
                return b - c
            }
        }
    };
    R(z.eventList, {
        entityrollover: "FC_Event",
        entityrollout: "FC_Event"
    });
    V("geo", {
        name: "geo",
        friendlyName: "Map",
        revision: 1,
        creditLabel: !1,
        standaloneInit: !1,
        annotationInteractionEvents: !1,
        charttopmargin: 10,
        chartrightmargin: 10,
        chartbottommargin: 10,
        chartleftmargin: 10,
        baseWidth: 400,
        baseHeight: 300,
        baseScaleFactor: 1,
        defaultSeriesType: "geo",
        rendererId: "maps",
        entities: {},
        draw: function(b, c) {
            var d = this.renderer
              , e = this.chartInstance;
            d || (d = this.renderer = new V("renderer." + this.rendererId));
            this.updateDefaultAnnotations();
            e.addEventListener("internal.mapdrawingcomplete", function(a, b) {
                c && c.apply(this, [b.renderer]);
                a.detachHandler()
            });
            return d.init(this, b, function(a) {
                a.checkComplete()
            })
        },
        chart: function(f, c) {
            E(this.dataObj.chart, {
                charttopmargin: this.dataObj.chart.maptopmargin,
                chartrightmargin: this.dataObj.chart.maprightmargin,
                chartbottommargin: this.dataObj.chart.mapbottommargin,
                chartleftmargin: this.dataObj.chart.mapleftmargin,
                animation: this.dataObj.chart.animation || "0"
            });
            var m = this.dataObj, e = za(m, f, c, this), a = m.chart, g = m.markers, h = e.chart, k = e[pa], n = h.useRoundEdges = 1 === d(a.useroundedges), u = n ? 1 : 0, n = n ? 0 : 1, l = h.use3DLighting = 1 === d(a.use3dlighting, 1), p = E({}, e.tooltip.style), s = new Ea(this.colorPaletteMap,(0 < a.palette && 6 > a.palette ? a.palette : d(this.paletteIndex, 1)) - 1), t = b(a.basefont, "Verdana,sans"), w = Da(a.basefontsize, 10), v = b(a.basefontcolor, s.basefontcolor), q = Da(a.outcnvbasefontsize, w), x = b(a.outcnvbasefont, t), B = q + "px", A = ba(b(a.outcnvbasefontcolor, v)), L = b(a.bgcolor, a.canvasbgcolor, s.canvasbgcolor), r = b(a.bgalpha, a.canvasbgalpha, s.canvasbgalpha), C = d(a.usevaluesformarkers, m.markers && m.markers.items && m.markers.items.length, !(m.markers && m.markers.application && m.markers.application.length && m.markers.definition && m.markers.definition.length)), H, y, M, D, G, F, K, w = w + "px", v = ba(v);
            this.realtimeEnabled && this.postHCJSONCreation && this.postHCJSONCreation.call(this, e);
            h.events.click = this.linkClickFN;
            k.numberFormatter = this.numberFormatter;
            E(k, {
                width: f,
                height: c,
                showTooltip: d(a.showtooltip, this.showtooltip, 1),
                showHoverEffect: d(a.showhovereffect, 1),
                tooltipSepChar: b(a.tooltipsepchar, ", "),
                showValues: d(a.showvalues, this.showValues, 1),
                showCanvasBG: b(a.showcanvasbg, 1),
                useValuesForMarkers: C,
                adjustViewPortForMarkers: d(a.adjustviewportformarkers, C),
                flatScrollBars: d(a.flatscrollbars, 0),
                scrollBar3DLighting: d(a.scrollbar3dlighting, 1),
                outCanvasStyle: {
                    fontFamily: x,
                    color: A,
                    fontSize: B
                },
                inCanvasStyle: {
                    fontFamily: t,
                    fontSize: w,
                    color: v
                }
            });
            la(k.outCanvasStyle);
            H = la(k.inCanvasStyle);
            k.trendStyle = k.outCanvasStyle;
            "0" == k.showCanvasBG && (r = "0");
            y = b(a.entitybordercolor, a.bordercolor, s.plotbordercolor);
            M = b(a.entityfillcolor, a.fillcolor, s.plotfillcolor);
            D = b(a.entityfillalpha, a.fillalpha, s.plotfillalpha);
            G = b(a.entityfillratio, a.fillratio, s.plotfillratio);
            F = b(a.entityfillangle, a.fillangle, s.plotfillangle);
            K = b(a.nullentityfillcolor, a.nullentitycolor, M);
            C = d(a.showcanvasborder, n) ? d(a.canvasborderthickness, 1) : 0;
            E(e, {
                chart: {
                    emulateFlashGutter: d(a._emulateflashgutter, 1),
                    defaultSeriesType: this.defaultSeriesType,
                    paletteIndex: s.index,
                    borderRadius: d(a.canvasborderradius, 0),
                    borderColor: U(b(a.canvasbordercolor, s.canvasbordercolor), b(a.canvasborderalpha, s.canvasborderalpha)),
                    borderWidth: C,
                    borderDashStyle: d(a.canvasborderdashed, 0) ? va(d(a.canvasborderdashlen, 4), d(a.canvasborderdashgap, 2), C) : void 0,
                    backgroundColor: T({
                        color: L,
                        alpha: r,
                        angle: b(a.bgangle, a.canvasbgangle, s.canvasbgangle),
                        ratio: b(a.bgratio, a.canvasbgratio, s.canvasbgratio)
                    }),
                    plotBorderColor: "#ffffff",
                    plotBorderWidth: 0,
                    plotBackgroundColor: T({
                        color: "#ffffff",
                        alpha: 0
                    }),
                    bgSWF: b(a.bgimage, a.bgswf),
                    bgSWFAlpha: d(a.bgimagealpha, a.bgswfalpha, 100),
                    bgImageScale: d(a.bgimagescale, 100),
                    bgImageDisplayMode: b(a.bgimagedisplaymode, "none").toLowerCase(),
                    logoURL: ta(a.logourl),
                    logoPosition: b(a.logoposition, "tl").toLowerCase(),
                    logoAlpha: d(a.logoalpha, 100),
                    logoLink: ta(a.logolink),
                    logoScale: d(a.logoscale, 100),
                    logoLeftMargin: d(a.logoleftmargin, 0),
                    logoTopMargin: d(a.logotopmargin, 0),
                    toolbar: function() {
                        var e = {
                            button: {}
                        }, m = e.button, g;
                        m.scale = d(a.toolbarbuttonscale, 1.15);
                        m.width = d(a.toolbarbuttonwidth, 15);
                        m.height = d(a.toolbarbuttonheight, 15);
                        m.radius = d(a.toolbarbuttonradius, 2);
                        m.spacing = d(a.toolbarbuttonspacing, 5);
                        m.fill = U(b(a.toolbarbuttoncolor, "ffffff"));
                        m.labelFill = U(b(a.toolbarlabelcolor, "cccccc"));
                        m.symbolFill = U(b(a.toolbarsymbolcolor, "ffffff"));
                        m.hoverFill = U(b(a.toolbarbuttonhovercolor, "ffffff"));
                        m.stroke = U(b(a.toolbarbuttonbordercolor, "bbbbbb"));
                        m.symbolStroke = U(b(a.toolbarsymbolbordercolor, "9a9a9a"));
                        m.strokeWidth = d(a.toolbarbuttonborderthickness, 1);
                        m.symbolStrokeWidth = d(a.toolbarsymbolborderthickness, 1);
                        g = m.symbolPadding = d(a.toolbarsymbolpadding, 5);
                        m.symbolHPadding = d(a.toolbarsymbolhpadding, g);
                        m.symbolVPadding = d(a.toolbarsymbolvpadding, g);
                        g = e.position = b(a.toolbarposition, "tr").toLowerCase();
                        switch (g) {
                        case "tr":
                        case "tl":
                        case "br":
                        case "bl":
                            break;
                        default:
                            g = "tr"
                        }
                        m = e.hAlign = "left" === ("" + a.toolbarhalign).toLowerCase() ? "l" : g.charAt(1);
                        g = e.vAlign = "bottom" === ("" + a.toolbarvalign).toLowerCase() ? "b" : g.charAt(0);
                        e.hDirection = d(a.toolbarhdirection, "r" === m ? -1 : 1);
                        e.vDirection = d(a.toolbarvdirection, "b" === g ? -1 : 1);
                        e.vMargin = d(a.toolbarvmargin, 6);
                        e.hMargin = d(a.toolbarhmargin, 10);
                        e.x = d(a.toolbarx, "l" === m ? 0 : f);
                        e.y = d(a.toolbary, "t" === g ? 0 : c);
                        return e
                    }()
                },
                title: {
                    text: fa(a.caption),
                    offsetX: Number(a.captionxshift),
                    offsetY: Number(a.captionyshift),
                    position: b(a.captionposition, void 0 !== a.captionxshift || void 0 !== a.captionyshift ? "top left" : "top"),
                    padding: d(a.captionpadding, 10),
                    style: {
                        fontFamily: b(a.captionfontfamily, x),
                        color: b(a.captionfontcolor, A).replace(/^#?([a-f0-9]+)/ig, "#$1"),
                        fontSize: d(a.captionfontsize, q + 3) + "px",
                        fontWeight: 0 === d(a.captionfontbold) ? "normal" : "bold"
                    }
                },
                subtitle: {
                    text: fa(a.subcaption),
                    style: {
                        fontFamily: b(a.subcaptionfontfamily, a.captionfontfamily, x),
                        color: b(a.subcaptionfontcolor, a.captionfontcolor, A).replace(/^#?([a-f0-9]+)/ig, "#$1"),
                        fontSize: d(a.subcaptionfontsize, d(qa(a.captionfontsize - 3, 1), q)) + "px",
                        fontWeight: 0 === d(a.subcaptionfontbold) ? "normal" : "bold"
                    }
                },
                orphanStyles: {
                    defaultStyle: {
                        style: E({}, k.inCanvasStyle)
                    }
                },
                tooltip: {
                    enabled: 0 !== k.showTooltip,
                    style: {
                        fontFamily: t,
                        fontSize: w,
                        lineHeight: H,
                        color: v,
                        padding: d(a.tooltippadding, this.tooltippadding, 3) + "px",
                        backgroundColor: U(b(p.backgroundColor, a.tooltipbgcolor, s.tooltipbgcolor), b(a.tooltipbgalpha, "100")),
                        borderColor: U(b(p.borderColor, a.tooltipbordercolor, s.tooltipbordercolor), b(a.tooltipborderalpha, "100")),
                        borderWidth: d(a.tooltipborderthickness, n) + "px",
                        borderRadius: d(a.tooltipborderradius, u + 1) + "px"
                    },
                    constrain: d(a.constraintooltip, 1),
                    shadow: d(a.showtooltipshadow, a.showshadow, 1) ? {
                        enabled: !0,
                        opacity: qa(d(a.tooltipbgalpha, 100), d(a.tooltipborderalpha, 100)) / 100
                    } : !1
                },
                legend: {
                    itemStyle: {
                        fontFamily: b(a.legenditemfont, x),
                        fontSize: d(a.legenditemfontsize, q) + "px",
                        color: ba(b(a.legenditemfontcolor, A)),
                        fontWeight: d(a.legenditemfontbold) ? "bold" : "normal"
                    },
                    itemHiddenStyle: {
                        fontFamily: x,
                        fontSize: B,
                        color: ba(b(a.legenditemhiddencolor, A))
                    },
                    itemHoverStyle: {
                        color: ba(b(a.legenditemhoverfontcolor, a.legenditemfontcolor, A))
                    },
                    enabled: d(a.showlegend, 1),
                    title: {
                        text: fa(a.legendcaption),
                        style: {
                            fontFamily: b(a.legendcaptionfont, x),
                            fontSize: d(a.legendcaptionfontsize, q) + "px",
                            color: ba(b(a.legendcaptionfontcolor, A)),
                            fontWeight: d(a.legendcaptionfontbold, 1) ? "bold" : "normal"
                        },
                        align: O[b(a.legendcaptionalignment)]
                    },
                    position: b(a.legendposition, 0 === d(m.colorrange && m.colorrange.gradient, 0) ? "right" : "bottom"),
                    backgroundColor: b(a.legendbgcolor, s.bgcolor),
                    backgroundAlpha: b(a.legendbgalpha, "100"),
                    borderColor: b(a.legendbordercolor, s.legendbordercolor),
                    borderThickness: b(a.legendborderthickness, "1"),
                    borderAlpha: b(a.legendborderalpha, "100"),
                    shadow: d(a.legendshadow, 1),
                    allowDrag: d(a.legendallowdrag, 0),
                    scroll: {
                        scrollBgColor: b(a.legendscrollbgcolor, a.scrollcolor, "AAAAAA"),
                        scrollBtnColor: b(a.legendscrollbtncolor, "BBBBBB"),
                        scrollBarColor: b(a.legendscrollbarcolor, "CCCCCC")
                    },
                    reversed: d(a.reverselegend, 0),
                    interactive: d(a.interactivelegend, 0),
                    minColor: K,
                    lighting3d: l
                },
                markers: {
                    dataLabels: {
                        style: {
                            fontFamily: b(a.markerfont, t),
                            fontSize: d(a.markerfontsize, parseInt(w, 10)),
                            fontColor: b(a.markerfontcolor, v)
                        }
                    },
                    showTooltip: d(a.showmarkertooltip, k.showTooltip),
                    showLabels: d(a.showmarkerlabels, a.showlabels, 1),
                    showHoverEffect: d(a.showmarkerhovereffect, 1),
                    labelPadding: b(a.markerlabelpadding, "5"),
                    labelWrapWidth: d(a.markerlabelwrapwidth, 0),
                    labelWrapHeight: d(a.markerlabelwrapheight, 0),
                    fillColor: b(a.markerfillcolor, a.markerbgcolor, s.markerfillcolor),
                    fillAlpha: b(a.markerfillalpha, s.markerfillalpha),
                    fillAngle: b(a.markerfillangle, s.markerfillangle),
                    fillRatio: b(a.markerfillratio, s.markerfillratio),
                    fillPattern: b(a.markerfillpattern, s.markerbgpattern),
                    hoverFillColor: a.markerfillhovercolor,
                    hoverFillAlpha: a.markerfillhoveralpha,
                    hoverFillRatio: a.markerfillhoverratio,
                    hoverFillAngle: a.markerfillhoverangle,
                    borderThickness: b(a.markerborderthickness, 1),
                    borderColor: b(a.markerbordercolor, s.markerbordercolor),
                    borderAlpha: d(a.markerborderalpha, s.markerborderalpha),
                    hoverBorderThickness: a.markerborderhoverthickness,
                    hoverBorderColor: a.markerborderhovercolor,
                    hoverBorderAlpha: a.markerborderhoveralpha,
                    radius: d(a.markerradius && z.trimString(a.markerradius), 7),
                    shapeId: b(a.defaultmarkershape, "circle"),
                    labelSepChar: b(a.labelsepchar, ", "),
                    tooltipSepChar: k.tooltipSepChar,
                    autoScale: d(a.autoscalemarkers, 0),
                    tooltext: b(g && g.tooltext, a.markertooltext),
                    dataEnabled: k.useValuesForMarkers,
                    valueToRadius: d(a.markerradiusfromvalue, 1),
                    valueMarkerAlpha: b(a.valuemarkeralpha, "75"),
                    hideNull: d(a.hidenullmarkers, 0),
                    nullRadius: d(a.nullmarkerradius, a.markerradius, 7),
                    adjustViewPort: d(a.adjustviewportformarkers, 0),
                    startAngle: d(a.markerstartangle, 90),
                    maxRadius: d(a.maxmarkerradius, 0),
                    minRadius: d(a.minmarkerradius, 0),
                    applyAll: d(a.applyallmarkers, 0),
                    shadow: d(a.showmarkershadow, a.showshadow, 0)
                },
                connectors: {
                    showHoverEffect: d(a.showconnectorhovereffect, 1),
                    thickness: d(a.connectorthickness, a.markerconnthickness, "2"),
                    color: b(a.connectorcolor, a.markerconncolor, s.markerbordercolor),
                    alpha: b(a.connectoralpha, a.markerconnalpha, "100"),
                    hoverthickness: d(a.connectorhoverthickness, a.connectorthickness, a.markerconnthickness, "2"),
                    hovercolor: b(a.connectorhovercolor, a.connectorcolor, a.markerconncolor, s.markerbordercolor),
                    hoveralpha: b(a.connectorhoveralpha, a.connectoralpha, a.markerconnalpha, "100"),
                    dashed: d(a.connectordashed, a.markerconndashed, 0),
                    dashLen: d(a.connectordashlen, a.markerconndashlen, 3),
                    dashGap: d(a.connectordashgap, a.markerconndashgap, 2),
                    font: b(a.connectorfont, a.markerconnfont, t),
                    fontColor: b(a.connectorfontcolor, a.markerconnfontcolor, v),
                    fontSize: d(a.connectorfontsize, a.markerconnfontsize, parseInt(w, 10)),
                    showLabels: d(a.showconnectorlabels, a.showmarkerlabels, a.showlabels, 1),
                    labelBgColor: b(a.connectorlabelbgcolor, a.markerconnlabelbgcolor, s.plotfillcolor),
                    labelBorderColor: b(a.connectorlabelbordercolor, a.markerconnlabelbordercolor, s.markerbordercolor),
                    shadow: d(a.showconnectorshadow, a.showmarkershadow, a.showshadow, 0),
                    showTooltip: d(a.showconnectortooltip, a.showmarkertooltip, k.showTooltip),
                    tooltext: b(g && g.connectortooltext, a.connectortooltext),
                    hideOpen: d(a.hideopenconnectors, 1)
                },
                entities: {
                    baseScaleFactor: this.baseScaleFactor,
                    dataLabels: {
                        style: {
                            fontFamily: t,
                            fontSize: w,
                            lineHeight: H,
                            color: e.plotOptions.series.dataLabels.color = v
                        }
                    },
                    fillColor: M,
                    fillAlpha: D,
                    fillRatio: G,
                    fillAngle: F,
                    borderColor: y,
                    borderAlpha: b(a.entityborderalpha, a.borderalpha, this.borderAlpha, "100"),
                    borderThickness: d(a.showentityborder, a.showborder, 1) ? d(a.entityborderthickness, a.borderthickness, 1) : 0,
                    scaleBorder: d(a.scaleentityborder, a.scaleborder, 0),
                    hoverFillColor: b(a.entityfillhovercolor, a.hoverfillcolor, a.hovercolor, s.plothoverfillcolor),
                    hoverFillAlpha: b(a.entityfillhoveralpha, a.hoverfillalpha, a.hoveralpha, s.plothoverfillalpha),
                    hoverFillRatio: b(a.entityfillhoverratio, a.hoverfillratio, a.hoverratio, s.plothoverfillratio),
                    hoverFillAngle: b(a.entityfillhoverangle, a.hoverfillangle, a.hoverangle, s.plothoverfillangle),
                    hoverBorderThickness: b(a.entityborderhoverthickness, a.hoverborderthickness),
                    hoverBorderColor: b(a.entityborderhovercolor, s.plotbordercolor),
                    hoverBorderAlpha: b(a.entityborderhoveralpha, s.plotborderalpha),
                    nullEntityColor: K,
                    nullEntityAlpha: b(a.nullentityfillalpha, a.nullentityalpha, D),
                    nullEntityRatio: b(a.nullentityfillratio, a.nullentityratio, G),
                    nullEntityAngle: b(a.nullentityfillangle, a.nullentityangle, F),
                    connectorColor: b(a.labelconnectorcolor, a.connectorcolor, v),
                    connectorAlpha: b(a.labelconnectoralpha, a.connectoralpha, "100"),
                    connectorThickness: d(a.labelconnectorthickness, a.borderthickness, 1),
                    showHoverEffect: d(a.showentityhovereffect, a.usehovercolor, k.showHoverEffect),
                    hoverOnNull: d(a.hoveronnull, a.entityhoveronnull, 1),
                    labelPadding: d(a.labelpadding, 5),
                    showLabels: d(a.showlabels, 1),
                    labelsOnTop: d(a.entitylabelsontop, 1),
                    includeNameInLabels: d(a.includenameinlabels, 1),
                    includeValueInLabels: d(a.includevalueinlabels, 0),
                    useSNameInTooltip: d(a.usesnameintooltip, 0),
                    useShortName: d(a.usesnameinlabels, 1),
                    labelSepChar: b(a.labelsepchar, ", "),
                    showTooltip: d(a.showentitytooltip, k.showTooltip),
                    tooltipSepChar: k.tooltipSepChar,
                    tooltext: a.entitytooltext,
                    hideNullEntities: d(a.hidenullentities, 0),
                    showHiddenEntityBorder: d(a.showhiddenentityborder, 1),
                    showNullEntityBorder: d(a.shownullentityborder, 1),
                    hiddenEntityColor: b(a.hiddenentitycolor, a.hiddenentityfillcolor, a.hiddenentityalpha || a.hiddenentityfillalpha ? K : "ffffff"),
                    hiddenEntityAlpha: b(a.hiddenentityalpha, a.hiddenentityfillalpha, 0.001),
                    shadow: d(a.showshadow, this.defaultPlotShadow, s.shadow)
                },
                entitydef: {
                    useSNameAsId: d(a.usesnameasid, 0)
                }
            });
            e.legend.title.style.lineHeight = la(e.legend.title.style);
            e.legend.itemStyle.lineHeight = la(e.legend.itemStyle);
            e.legend.itemHiddenStyle.lineHeight = la(e.legend.itemHiddenStyle);
            g = Ka(f, c, a.markermaxradius, a.markerminradius);
            e.markers.maxRadius = g.max;
            e.markers.minRadius = g.min;
            a.tooltipcolor && (e.tooltip.style.color = oa(a.tooltipcolor));
            void 0 !== b(a.clickurl) && (h.link = a.clickurl,
            h.style.cursor = "pointer",
            ga && (h.style._cursor = "hand"),
            e.plotOptions.series.point.events.click = function() {
                h.events.click.call({
                    link: a.clickurl
                })
            }
            );
            g = h.bgImageDisplayMode;
            k = ta(a.bgimagevalign, "").toLowerCase();
            u = ta(a.bgimagehalign, "").toLowerCase();
            "tile" == g || "fill" == g || "fit" == g ? ("top" != k && "middle" != k && "bottom" != k && (k = "middle"),
            "left" != u && "middle" != u && "right" != u && (u = "middle")) : ("top" != k && "middle" != k && "bottom" != k && (k = "top"),
            "left" != u && "middle" != u && "right" != u && (u = "left"));
            h.bgImageVAlign = k;
            h.bgImageHAlign = u;
            this.parseStyles(e);
            la(e.title.style);
            la(e.subtitle.style);
            la(e.tooltip.style);
            e.plotOptions.series.allowPointSelect = !0;
            this.parseExportOptions(e);
            this.preSeriesAddition && this.preSeriesAddition(e, m, f, c);
            this.series && this.series(m, e, this.name, f, c);
            this.postSeriesAddition && this.postSeriesAddition(e, m, f, c);
            this.spaceManager(e, m, f, c);
            X.console && X.FC_DEV_ENVIRONMENT && X.console.log(e);
            return e
        },
        series: function(f, c) {
            function m(b) {
                for (y = b && b.length || 0; y--; )
                    x = b[y],
                    r = x.value,
                    x.cleanValue = a.getCleanValue(r),
                    x.formattedValue = null !== x.cleanValue ? a.dataLabels(r) : void 0,
                    x.origValue = r,
                    null !== x.cleanValue && (v = K(x.cleanValue, v),
                    q = qa(x.cleanValue, q))
            }
            function e(a, f, e) {
                for (y = a && a.length || 0; y--; ) {
                    x = a[y];
                    var m;
                    a: {
                        m = d(x.value);
                        for (var g = void 0, h = void 0, g = void 0, l = L && L.length || 0; l--; )
                            if (g = L[l],
                            h = Number(g.maxvalue),
                            g = d(g.minvalue, c.colorRange.scaleMin),
                            m >= g && m <= h) {
                                m = l;
                                break a
                            }
                        m = null
                    }
                    C = m;
                    null !== C && (B = "gradient" === t.type ? c.colorRange.getColorObj(x.value).code : s && s[C] && b(s[C].color, s[C].code),
                    w[C] || (w[C] = []),
                    B && (x.color = x.color ? x.color : B,
                    f && (x.alpha = x.alpha ? x.alpha : f),
                    e && (n || x.fillhoveralpha || (x.fillhoveralpha = x.alpha),
                    k || x.fillhovercolor || (x.fillhovercolor = x.color)),
                    w[C].push(x)))
                }
            }
            var a = this.numberFormatter, g = this.hcJSON.series, h = c.markers.valueMarkerAlpha, k = c.markers.hasHoverColor, n = c.markers.hasHoverAlpha, u = this.dataObj, l = c[pa], p = u.colorrange, s = p && p.color, t = c.legend, w = {}, p = {
                legendClick: function() {
                    var a;
                    if (a = this.chart)
                        !this.legend && (this.legend = this.plot.legend),
                        a.legendClick(this, !this.visible)
                },
                getEventArgs: function() {
                    var a;
                    if (a = this.chart)
                        return !this.legend && (this.legend = this.plot.legend),
                        a.getEventArgs(this)
                },
                setVisible: function(a) {
                    var b = this.data
                      , c = this.legendItem
                      , f = this.visible;
                    this.visible = a = void 0 === a ? !f : a;
                    c && t.colorizeItem && t.colorizeItem(this, a);
                    for (f = b && b.length; f--; )
                        (c = b[f].mapItem) && (a ? c.show && c.show() : c.hide && c.hide())
                }
            }, v = Infinity, q = -Infinity, x, B, A, L, r, C, H, y;
            m(u.data || []);
            l.useValuesForMarkers && m(u.markers && u.markers.items || []);
            l._doNotShowLegend = !0;
            t.type = u.colorrange && "1" === u.colorrange.gradient ? "gradient" : "point";
            Infinity === v && (v = void 0);
            -Infinity === q && (q = void 0);
            l.dataMin = v;
            l.dataMax = q;
            c.colorRange = new z.colorRange({
                colorRange: u.colorrange,
                dataMin: v,
                dataMax: q,
                defaultColor: t.minColor,
                numberFormatter: a
            });
            y = (L = c.colorRange.colorArr) && L.length || 0;
            if (0 < y) {
                for (; y--; )
                    A = L[y],
                    !l._doNotShowLegend || "" === A.label && void 0 === A.label || (l._doNotShowLegend = !1),
                    g.push(E({
                        type: this.defaultSeriesType,
                        showInLegend: !0,
                        data: [],
                        plot: {},
                        name: A.label,
                        color: A.code,
                        rangeMin: A.minvalue,
                        rangeMax: A.maxvalue,
                        visible: !0
                    }, p));
                e(u.data || []);
                l.useValuesForMarkers && e(u.markers && u.markers.items || [], h, !0);
                g = g.reverse();
                for (H in w)
                    g[H] && (g[H].data = w[H])
            } else
                g.push({
                    type: this.defaultSeriesType,
                    data: []
                });
            l._doNotShowLegend && (this.hcJSON.legend.enabled = !1)
        },
        preliminaryScaling: function(b, c) {
            for (var d = c.markers && c.markers.items || [], e = d && d.length || 0, a = Infinity, g = Infinity, h = -Infinity, k = -Infinity, l, u; e--; )
                u = d[e],
                l = Number(u.x),
                u = Number(u.y),
                a = K(a, l),
                g = K(g, u),
                h = qa(h, l),
                k = qa(k, u);
            return {
                x: a,
                y: g,
                x1: h,
                y1: k
            }
        },
        getScalingParameters: function(b, c, d, e) {
            var a = b / c
              , g = d / (b * this.baseScaleFactor)
              , h = e / (c * this.baseScaleFactor)
              , k = 0
              , l = 0;
            g > h ? (g = h,
            k += (d - e * a) / 2,
            b = 200 / (c * g)) : (l += (e - d / a) / 2,
            b = 200 / (b * g));
            return {
                scaleFactor: g,
                strokeWidth: b,
                translateX: k,
                translateY: l
            }
        },
        calculateMarkerBounds: function(b, c, d, e, a) {
            var g = b.markers
              , h = b[pa];
            b = h.dataMin;
            for (var h = h.dataMax, k = g.minRadius, l = g.maxRadius, u = g.hideNull, n = g.nullRadius, g = g.valueToRadius, p = (c = c.markers && c.markers.items || []) && c.length || 0, s = Infinity, t = Infinity, w = -Infinity, v = -Infinity, q, x, z; p--; )
                x = c[p],
                null !== x.cleanValue ? (g && void 0 === x.radius && (x.radius = k + (l - k) * (x.cleanValue - b) / (h - b)),
                z = Number(x.radius),
                q = (Number(x.x) + e) * d,
                x = (Number(x.y) + a) * d,
                s = K(s, q - z),
                t = K(t, x - z),
                w = qa(w, q + z),
                v = qa(v, x + z)) : u ? x.__hideMarker = !0 : void 0 === x.radius && (x.radius = n);
            return {
                x: s,
                y: t,
                x1: w,
                y1: v
            }
        },
        spaceManager: function(b, c, d, e) {
            var a = b.chart
              , g = b[pa]
              , h = a.spacingLeft
              , k = a.spacingTop
              , l = this.baseWidth
              , n = this.baseHeight;
            d -= a.spacingRight + h;
            a = e - (a.spacingBottom + k);
            e = g._captionBlock = this.manageTitleSpace(b, c, d, a);
            var p = g._legendBlock = this.placeLegendBlock(b, c, d, a - e.height, e.isBottom ? e.height : 0);
            d -= p.width;
            var a = a - e.height - p.height
              , t = p = 0;
            g.useValuesForMarkers ? (g.adjustViewPortForMarkers ? (g = this.preliminaryScaling(b, c),
            g.x1 > l && (l = g.x1),
            0 > g.x && (l += -g.x,
            t = -g.x),
            g.y1 > n && (n = g.y1),
            0 > g.y && (n += -g.y,
            p = -g.y),
            g = this.getScalingParameters(l, n, d, a),
            g = this.calculateMarkerBounds(b, c, g.scaleFactor * this.baseScaleFactor, t, p),
            b = a,
            c = d,
            0 > g.x && (h += -g.x,
            d += g.x),
            0 > g.y && (k += -g.y,
            a += g.y),
            g.x1 > c && (d -= g.x1 - c),
            g.y1 > b && (a -= g.y1 - b)) : (g = this.getScalingParameters(l, n, d, a),
            this.calculateMarkerBounds(b, c, g.scaleFactor * this.baseScaleFactor, t, p)),
            g = this.getScalingParameters(l, n, d, a),
            h += t * g.scaleFactor * this.baseScaleFactor,
            k += p * g.scaleFactor * this.baseScaleFactor) : g = this.getScalingParameters(l, n, d, a);
            /bottom/i.test(e.position) || (k += e.height);
            this.scaleFactor = g.scaleFactor;
            this.strokeWidth = g.strokeWidth;
            this.translateX = g.translateX + h;
            this.translateY = g.translateY + k
        },
        placeGLegendBlockRight: z.placeGLegendBlockRight,
        placeGLegendBlockBottom: z.placeGLegendBlockBottom,
        placeLegendBlock: function(b, c, d, e, a) {
            var g = b.legend
              , h = b[pa]
              , k = g.position.toLowerCase()
              , l = {
                position: k
            };
            if ("0" === c.chart.showlegend || h._doNotShowLegend)
                return l.height = 0,
                l.width = 0,
                l;
            "bottom" === k ? (l.height = "gradient" === g.type ? this.placeGLegendBlockBottom(b, c, d, e) : this.placeLegendBlockBottom(b, c, d, e),
            l.width = 0,
            a && (g.y = -a)) : (d /= 2,
            l.width = "gradient" === g.type ? this.placeGLegendBlockRight(b, c, d, e) : this.placeLegendBlockRight(b, c, d, e),
            l.height = 0);
            return l
        },
        manageTitleSpace: function(b, c, d, e) {
            var a = this.hcJSON;
            b = a.title;
            c = a.chart;
            var a = a.subtitle, g = this.smartLabel, h = e / 2, k = 0, l = b.position.toLowerCase(), n = b.padding, p = !1, t = b.offsetX, s = b.offsetY, w = 0, z = {}, v, q;
            if ("" === b.text && "" === a.text)
                return {
                    height: 0,
                    position: l
                };
            isNaN(t) && isNaN(s) || (p = !0,
            t = isNaN(t) ? 0 : t,
            s = isNaN(s) ? 0 : s);
            v = b.text;
            if ("" !== v) {
                g.setStyle(b.style);
                q = g.getOriSize(v);
                if (q.width > d || q.height > h)
                    q = g.getSmartText(v, d, h),
                    b.text = q.text,
                    q.tooltext && (b.originalText = q.tooltext);
                b.height = w = q.height;
                k += w
            }
            h -= k;
            v = a.text;
            if ("" !== v) {
                g.setStyle(a.style);
                q = g.getOriSize(v);
                if (q.width > d || q.height > h)
                    q = g.getSmartText(v, d, h),
                    a.text = q.text,
                    q.tooltext && (a.originalText = q.tooltext);
                k += a.height = q.height
            }
            k = k + n > h ? h : k + n;
            l.match(/left/) ? (a.align = b.align = "start",
            a.x = b.x = c.marginLeft) : l.match(/right/) ? (a.align = b.align = "end",
            a.x = b.x = d) : (a.align = b.align = "middle",
            a.x = b.x = d / 2);
            /bottom/.test(l) ? (d = e - k + c.marginTop + n,
            b.y = d,
            a.y = d + w,
            p ? (b.y += s,
            a.y += s,
            b.x += t,
            a.x += t) : (c.marginBottom += k,
            z.isBottom = !0)) : p ? (b.y += s,
            a.y += s,
            b.x += t,
            a.x += t) : c.marginTop += k;
            z.height = p ? 0 : k;
            z.position = l;
            return z
        },
        getFirstId: function() {
            return this.firstEntity
        },
        getEntityPaths: function(b) {
            var c = {}, d = this.entities, e;
            if (b) {
                for (e in d)
                    c[e] = d[e];
                return c
            }
            return d
        },
        redefineEntities: function(b, c) {
            var d = this.entities, e = {}, a = {}, g = 0, h, k, l, n, p, t, s, w;
            for (s = b.length; s--; )
                if (h = b[s],
                k = h.internalid,
                p = h.newid ? h.newid : k,
                l = h.sname,
                h = h.lname,
                n = d[k],
                k = z.trimString(k),
                p = z.trimString(p),
                n) {
                    e[p] = p = {
                        origId: k
                    };
                    a[k] = !0;
                    for (t in n)
                        p[t] = n[t];
                    p.shortLabel = l ? l : n.shortLabel;
                    p.label = h ? h : n.label
                }
            this.entities = {};
            for (w in e)
                e[w].origId = w,
                this.entities[w.toLowerCase()] = e[w],
                g += 1;
            for (w in d)
                if (p = d[w],
                w = z.trimString(w),
                !a[w]) {
                    c.useSNameAsId ? (this.entities[p.shortLabel.toLowerCase()] = n = {},
                    n.origId = p.shortLabel) : (this.entities[w.toLowerCase()] = n = {},
                    n.origId = w);
                    for (t in p)
                        n[t] = p[t];
                    g += 1
                }
            this.entityCount = g
        },
        colorPaletteMap: {
            basefontcolor: "foregroundcolor",
            bordercolor: "foregrounddarkcolor",
            borderalpha: "foregrounddarkalpha",
            bgcolor: "backgroundlightcolor",
            bgalpha: "backgroundlightalpha",
            bgangle: "backgroundlightangle",
            bgratio: "backgroundlightratio",
            canvasbordercolor: "foregrounddarkcolor",
            canvasborderalpha: "foregrounddarkalpha",
            canvasbgcolor: "backgroundlightcolor",
            canvasbgalpha: "backgroundlightalpha",
            canvasbgangle: "backgroundlightangle",
            canvasbgratio: "backgroundlightratio",
            tooltipbordercolor: "foregrounddarkcolor",
            tooltipborderalpha: "foregrounddarkalpha",
            tooltipbgcolor: "backgroundlightcolor",
            tooltipbgalpha: "backgroundlightalpha",
            tooltipfontcolor: "foregroundcolor",
            legendbordercolor: "foregrounddarkcolor",
            legendborderalpha: "foregrounddarkalpha",
            markerbordercolor: "foregroundlightcolor",
            markerborderalpha: "foregroundlightalpha",
            markerfillcolor: "backgrounddarkcolor",
            markerfillalpha: "backgrounddarkalpha",
            markerfillangle: "backgrounddarkangle",
            markerfillratio: "backgrounddarkratio",
            plotfillcolor: "backgroundcolor",
            plotfillalpha: "backgroundalpha",
            plotfillangle: "backgroundangle",
            plotfillratio: "backgroundratio",
            plothoverfillcolor: "backgrounddarkcolor",
            plothoverfillalpha: "backgrounddarkalpha",
            plothoverfillangle: "backgrounddarkangle",
            plothoverfillratio: "backgrounddarkratio",
            plotbordercolor: "foregroundcolor",
            plotborderalpha: "foregroundalpha",
            shadow: "shadow"
        },
        eiMethods: {
            getMapName: function() {
                return this.jsVars.hcObj.logic.name
            },
            getEntityList: function() {
                var b = this.jsVars.hcObj, b = b.entities && b.entities.items, c, d = [], e, a;
                for (e in b)
                    a = b[e],
                    c = a.eJSON,
                    d.push({
                        id: a.id,
                        originalId: a.originalId || a.id,
                        label: c.label,
                        shortlabel: c.shortLabel,
                        value: a.value,
                        formattedValue: a.formattedValue,
                        toolText: a.toolText
                    });
                return d
            },
            getDataAsCSV: function() {
                var b = this.jsVars, b = b.hcObj && b.hcObj.entities && b.hcObj.entities.items, c = '"Id","Short Name","Long Name","Value","Formatted Value"', d, e, a, g;
                for (d in b)
                    e = b[d],
                    a = e.eJSON,
                    g = e.value,
                    c += '\r\n"' + e.id + '","' + a.shortLabel + '","' + a.label + '","' + (void 0 === g ? "" : g) + '","' + e.formattedValue + '"';
                return c
            },
            getMapAttribute: function() {
                var b = this.jsVars.fcObj;
                W.raiseWarning(this, "12061210581", "run", "JavaScriptRenderer~getMapAttribute()", 'Use of deprecated "getMapAttribute()". Replace with "getChartAttribute()".');
                return b.getChartAttribute.apply(b, arguments)
            },
            exportMap: function() {
                var b = this.jsVars.fcObj;
                W.raiseWarning(this, "12061210581", "run", "JavaScriptRenderer~exportMap()", 'Use of deprecated "exportMap()". Replace with "exportChart()".');
                return b.exportChart && b.exportChart.apply(b, arguments)
            },
            addMarker: function(b) {
                this.jsVars.hcObj.markers.addMarkerItem(b) || W.raiseWarning(this, "1309264086", "run", "MapsRenderer~addMarker()", "Failed to add marker. Check the options and try again.")
            },
            updateMarker: function(b, c) {
                var d = this.jsVars.hcObj, e = d.markers, d = d.mapAnnotations, a;
                b && (b = (b + "").toLowerCase(),
                e = e.items[b]) && (a = e.options,
                E(a, c),
                e = e.draw().markerShape,
                d.update(b, e))
            },
            removeMarker: function(b) {
                var c = this.jsVars.hcObj.markers, d;
                b && (b = (b + "").toLowerCase(),
                (d = c.items[b]) && d.destroy(),
                delete c.items[b])
            }
        }
    }, V.linebase);
    V("renderer.maps", {
        drawGraph: function() {
            var b = this.paper, c = this.layers, d, e, a;
            if (!this.options.nativeMessage) {
                c.dataset || (c.dataset = b.group("dataset").insertAfter(c.background),
                c.tracker = b.group("hot").insertAfter(c.dataset));
                this.shadowLayer || (this.shadowLayer = c.shadow = b.group("shadow").insertBefore(c.dataset));
                this.strokeWidth = this.logic.strokeWidth;
                d = this.logic.scaleFactor;
                this.translateX = e = this.logic.translateX;
                this.translateY = a = this.logic.translateY;
                this.sFactor = d * this.logic.baseScaleFactor;
                this.transformStr = ["t", e, ",", a, "s", d, ",", d, ",0,0"].join("");
                this.options.tooltip && !1 !== this.options.tooltip.enabled && b.tooltip(this.options.tooltip.style, this.options.tooltip.shadow, this.options.tooltip.constrain);
                this.mapAnnotations = new z.Annotations;
                this.mapAnnotations.reset(null, {
                    id: "geo",
                    showbelow: 0,
                    autoscale: 0,
                    grpxshift: this.translateX ? this.translateX : 0,
                    grpyshift: this.translateY ? this.translateY : 0,
                    xscale: 100 * (this.sFactor ? this.sFactor : 1),
                    yscale: 100 * (this.sFactor ? this.sFactor : 1),
                    options: {
                        useTracker: !0
                    }
                });
                this.processEntityDefs();
                this.drawEntities();
                if (!ga || xa)
                    c.dataset.attr({
                        transform: this.transformStr
                    }),
                    c.shadow.attr({
                        transform: this.transformStr
                    });
                this.drawMarkers()
            }
        },
        setScaleRange: function(b, c) {
            for (var d = this.options.series, e = d.length, a, g, h, k; e--; )
                if (h = d[e],
                g = (a = h.data) && a.length)
                    if (h.rangeMin >= b && h.rangeMax <= c)
                        h.setVisible(!0);
                    else if (h.rangeMax < b || h.rangeMin > c)
                        h.setVisible(!1);
                    else
                        for (; g--; )
                            h = (k = a[g].mapItem) && k.value,
                            isNaN(h) || "" === h || (h >= b && h <= c ? k.show() : k.hide())
        },
        processEntityDefs: function() {
            var b = this.logic
              , c = this.options.series
              , d = c && c.length;
            for (b.redefineEntities(b.dataObj.entitydef || [], this.options.entitydef); d--; )
                c[d].chart = this
        },
        drawEntities: function() {
            this.entities = new l(this.logic && this.logic.dataObj && this.logic.dataObj.data,this,this.logic,this.layers.dataset)
        },
        drawMarkers: function() {
            var b = this.logic && this.logic.dataObj && this.logic.dataObj.markers || null;
            b && (this.markers = new h(b,this,this.group));
            this.options.entities.labelsOnTop || this.entities.drawLabels()
        },
        checkComplete: function() {
            var b = this.logic
              , c = b.chartInstance;
            this.entities && this.entities.isReady() && (this.mapAnnotations.draw(this),
            b.hasRendered = !0,
            W.raiseEvent("internal.mapdrawingcomplete", {
                renderer: this
            }, c))
        }
    }, V["renderer.root"])
}
, [3, 2, 0, "release"]]);
