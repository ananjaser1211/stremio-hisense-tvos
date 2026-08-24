from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
import json
import shutil
import sys
import time
from urllib.parse import parse_qs, unquote_plus, urlparse


CORE_DEBUG_PREFIX = r"""!function(){
try {
    var B = "20260710-remote-refresh-global-1080p-back-fixed";
    var D = "/__stremio_debug";
    var W = 1920;
    var H = 1080;
    var Z = "44.45%";
    var selectors = [
        "#root",
        ".page-jI4PO",
        ".inner-DXVjx",
        ".navbar-NNb1c",
        ".tabs-wr1wR",
        ".search-guyhx",
        ".discover-sKRNy",
        ".content-sFo_t",
        ".content-XYvEJ",
        ".catalog-Aq3BF",
        ".scroll-container-vsSy7"
    ];

    function stringify(value) {
        try {
            return JSON.stringify(value);
        } catch (e) {
            return "{\"label\":\"debug-json-error\"}";
        }
    }

    function post(value) {
        try {
            var body = stringify(value);
            if (navigator.sendBeacon && navigator.sendBeacon(D, body)) return;
            if (window.fetch) {
                fetch(D, {
                    method: "POST",
                    body: body,
                    headers: {"Content-Type": "application/json"},
                    keepalive: true
                }).catch(function(){});
            }
        } catch (e) {}
    }

    function defineConst(target, name, value) {
        try {
            Object.defineProperty(target, name, {
                configurable: true,
                get: function() { return value; },
                set: function() {}
            });
        } catch (e) {
            try { target[name] = value; } catch (_) {}
        }
    }

    function forceFlags(target) {
        if (!target) return;
        defineConst(target, "screen720p", false);
        defineConst(target, "innerWidth", W);
        defineConst(target, "innerHeight", H);
    }

    function ensureStyle() {
        if (!document.head || document.getElementById("__stremio_global_1080p_fix")) return;
        var style = document.createElement("style");
        style.id = "__stremio_global_1080p_fix";
        style.textContent = [
            "html,body,#root{width:1920px!important;height:1080px!important;min-width:1920px!important;min-height:1080px!important;max-width:1920px!important;max-height:1080px!important;overflow:hidden!important;}",
            "body{margin:0!important;zoom:44.45%!important;background:#000!important;}",
            "#root{display:block!important;position:relative!important;}",
            ".page-jI4PO{width:1920px!important;height:1080px!important;min-width:1920px!important;min-height:1080px!important;max-width:1920px!important;max-height:1080px!important;overflow:hidden!important;}",
            ".page-jI4PO .inner-DXVjx{height:1080px!important;width:calc(1920px - 10rem)!important;margin-left:10rem!important;overflow:hidden!important;}",
            ".page-jI4PO.hide-navbar-Q5Bl7 .inner-DXVjx{width:1920px!important;margin-left:0!important;}",
            ".item-preview-nq13h{height:443px!important;}",
            ".item-preview-nq13h.item-preview-720p-nskCW{height:680px!important;}",
            ".item-preview-nq13h .background-container-D9GP9{position:fixed!important;top:0!important;right:0!important;bottom:0!important;left:0!important;width:1920px!important;height:1080px!important;overflow:hidden!important;}",
            ".item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj,.item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj.background-inner-720p-Xc9rr{position:absolute!important;top:0!important;right:0!important;bottom:auto!important;left:0!important;width:1920px!important;height:1080px!important;overflow:hidden!important;}",
            ".item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj .background-image-Tlzwm{width:1920px!important;height:1080px!important;min-width:1920px!important;min-height:1080px!important;object-fit:cover!important;object-position:center center!important;}",
            ".item-preview-nq13h .background-container-D9GP9 .background-inner-h_eaj .gradient-overlay-sYJZ9{width:1920px!important;height:1080px!important;}",
            ".details-omgjE .info-c3Gsa{height:475px!important;}",
            ".details-omgjE .info-c3Gsa.info-720p-jPzlb{height:724px!important;}",
            ".player-SmYw4 .background-image-jHLNn{width:1920px!important;height:1080px!important;}",
            ".addons-LUJe6 .heading-q2AKI{max-width:1248px!important;}",
            ".tabs-wr1wR{display:flex!important;visibility:visible!important;}",
            ".navbar-NNb1c{display:flex!important;visibility:visible!important;}"
        ].join("\n");
        document.head.appendChild(style);
    }

    function forceLayout() {
        // Scaling hacks removed: no screen720p/innerWidth override, no zoom, no
        // fixed-1920 CSS wall. stremio-web renders natively into the real VIDAA
        // viewport and fills the screen. Diagnostics below (snap/error capture)
        // are kept intact for debugging live playback on-device.
        return;
    }

    function rect(selector) {
        try {
            var el = document.querySelector(selector);
            if (!el || !el.getBoundingClientRect) return null;
            var r = el.getBoundingClientRect();
            var cs = getComputedStyle(el);
            return {
                selector: selector,
                w: Math.round(r.width),
                h: Math.round(r.height),
                x: Math.round(r.left),
                y: Math.round(r.top),
                display: cs.display,
                visibility: cs.visibility,
                overflow: cs.overflow
            };
        } catch (e) {
            return {selector: selector, error: e && e.message ? e.message : String(e)};
        }
    }

    function snap(label) {
        var de = document.documentElement || {};
        var bo = document.body || {};
        var vv = window.visualViewport || {};
        post({
            label: label,
            build: B,
            href: location.href,
            hash: location.hash,
            screen720p: !!window.screen720p,
            inner: {width: window.innerWidth || 0, height: window.innerHeight || 0},
            documentElement: {
                clientWidth: de.clientWidth || 0,
                clientHeight: de.clientHeight || 0,
                scrollWidth: de.scrollWidth || 0,
                scrollHeight: de.scrollHeight || 0,
                styleWidth: de.style ? de.style.width || "" : "",
                styleHeight: de.style ? de.style.height || "" : ""
            },
            body: {
                clientWidth: bo.clientWidth || 0,
                clientHeight: bo.clientHeight || 0,
                scrollWidth: bo.scrollWidth || 0,
                scrollHeight: bo.scrollHeight || 0,
                styleWidth: bo.style ? bo.style.width || "" : "",
                styleHeight: bo.style ? bo.style.height || "" : "",
                zoom: bo.style ? bo.style.zoom || "" : ""
            },
            screen: {
                width: screen.width || 0,
                height: screen.height || 0,
                availWidth: screen.availWidth || 0,
                availHeight: screen.availHeight || 0
            },
            visualViewport: {width: vv.width || 0, height: vv.height || 0, scale: vv.scale || 0},
            devicePixelRatio: window.devicePixelRatio || 0,
            selectors: selectors.map(rect),
            timestamp: (new Date()).toISOString()
        });
    }

    function blockQuitEvent() {
        if (window.__stremioQuitBlocked) return;
        window.__stremioQuitBlocked = true;
        var originalDispatch = EventTarget.prototype.dispatchEvent;
        EventTarget.prototype.dispatchEvent = function(event) {
            try {
                if (event && event.type === "quit") {
                    post({
                        label: "quit-blocked",
                        build: B,
                        hash: location.hash,
                        href: location.href,
                        target: this === window ? "window" : this && this.nodeName || "unknown",
                        timestamp: (new Date()).toISOString()
                    });
                    return true;
                }
            } catch (e) {}
            return originalDispatch.apply(this, arguments);
        };
        window.addEventListener("quit", function(event) {
            try {
                event.preventDefault();
                event.stopImmediatePropagation();
                post({
                    label: "quit-event-listener-blocked",
                    build: B,
                    hash: location.hash,
                    href: location.href,
                    timestamp: (new Date()).toISOString()
                });
            } catch (e) {}
        }, true);
    }

    blockQuitEvent();
    forceLayout();
    window.addEventListener("DOMContentLoaded", function() { forceLayout(); snap("core-shim-domcontentloaded"); });
    window.addEventListener("load", function() { forceLayout(); snap("core-shim-window-load"); });
    window.addEventListener("hashchange", function() { forceLayout(); snap("core-shim-hashchange"); });
    for (var i = 1; i <= 4; i += 1) {
        setTimeout(function() { forceLayout(); }, i * 250);
    }

    window.addEventListener("error", function(e) {
        post({
            label: "runtime-error",
            kind: "error",
            build: B,
            message: e.message || "",
            source: e.filename || "",
            line: e.lineno || 0,
            column: e.colno || 0,
            stack: e.error && e.error.stack || "",
            hash: location.hash,
            href: location.href,
            timestamp: (new Date()).toISOString()
        });
    });
    window.addEventListener("unhandledrejection", function(e) {
        var r = e.reason || {};
        post({
            label: "runtime-error",
            kind: "unhandledrejection",
            build: B,
            message: r.message || String(r),
            stack: r.stack || "",
            hash: location.hash,
            href: location.href,
            timestamp: (new Date()).toISOString()
        });
    });
    var consoleError = console.error;
    console.error = function() {
        try {
            post({
                label: "console-error",
                build: B,
                args: [].slice.call(arguments).map(function(a) {
                    return a && a.stack ? a.stack : String(a);
                }).slice(0, 4),
                hash: location.hash,
                href: location.href,
                timestamp: (new Date()).toISOString()
            });
        } catch (e) {}
        return consoleError.apply(this, arguments);
    };

    snap("core-shim-load");
    setTimeout(function() { forceLayout(); snap("core-shim-1000ms"); }, 1000);
    setTimeout(function() { forceLayout(); snap("core-shim-3000ms"); }, 3000);
    window.__stremioCoreDebug = snap;
} catch (e) {}
}();
""".encode("utf-8")


class DebugHTTPRequestHandler(SimpleHTTPRequestHandler):
    server_version = "StremioHisenseDebugHTTP/1.0"

    def end_headers(self):
        self.send_header("Cache-Control", "no-store, no-cache, must-revalidate, max-age=0")
        self.send_header("Pragma", "no-cache")
        self.send_header("Expires", "0")
        super().end_headers()

    def log_message(self, format, *args):
        headers = self._request_headers()
        sys.stderr.write(
            "%s - - [%s] %s | %s\n"
            % (
                self.client_address[0],
                self.log_date_time_string(),
                format % args,
                headers,
            )
        )

    def do_GET(self):
        if self.path.startswith("/__stremio_debug"):
            self._handle_debug_get()
            return
        if urlparse(self.path).path == "/core.chunk.js":
            self._serve_core_chunk_with_debug_prefix()
            return
        super().do_GET()

    def do_POST(self):
        if self.path.startswith("/__stremio_debug"):
            self._handle_debug_post()
            return
        super().do_POST()

    def copyfile(self, source, outputfile):
        try:
            shutil.copyfileobj(source, outputfile)
        except (BrokenPipeError, ConnectionResetError) as exc:
            sys.stderr.write(
                "%s - - [%s] CLIENT_CLOSED %s\n"
                % (
                    self.client_address[0],
                    self.log_date_time_string(),
                    exc.__class__.__name__,
                )
            )

    def _handle_debug_get(self):
        parsed = urlparse(self.path)
        data = parse_qs(parsed.query).get("d", [""])[0]
        self._log_debug_payload(data)
        self.send_response(204)
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

    def _handle_debug_post(self):
        length = int(self.headers.get("Content-Length") or 0)
        raw = self.rfile.read(length).decode("utf-8", "replace") if length else ""
        self._log_debug_payload(raw)
        self.send_response(204)
        self.send_header("Cache-Control", "no-store")
        self.end_headers()

    def _log_debug_payload(self, raw):
        payload = self._parse_payload(raw)
        sys.stderr.write(
            "%s - - [%s] VIEWPORT_DEBUG %s\n"
            % (
                self.client_address[0],
                self.log_date_time_string(),
                json.dumps(payload, sort_keys=True, separators=(",", ":")),
            )
        )
        sys.stderr.flush()

    def _parse_payload(self, raw):
        if not raw:
            return {"empty": True}
        try:
            return json.loads(raw)
        except json.JSONDecodeError:
            try:
                return json.loads(unquote_plus(raw))
            except Exception:
                return {"raw": raw[:2000]}

    def _request_headers(self):
        selected = {
            "host": self.headers.get("Host"),
            "ua": self.headers.get("User-Agent"),
            "referer": self.headers.get("Referer"),
            "accept": self.headers.get("Accept"),
            "range": self.headers.get("Range"),
        }
        return json.dumps(
            {key: value for key, value in selected.items() if value},
            sort_keys=True,
            separators=(",", ":"),
        )

    def _serve_core_chunk_with_debug_prefix(self):
        path = self.translate_path(urlparse(self.path).path)
        try:
            with open(path, "rb") as source:
                content = CORE_DEBUG_PREFIX + source.read()
        except OSError:
            self.send_error(404, "File not found")
            return

        self.send_response(200)
        self.send_header("Content-Type", "application/javascript")
        self.send_header("Content-Length", str(len(content)))
        self.end_headers()
        try:
            self.wfile.write(content)
        except (BrokenPipeError, ConnectionResetError) as exc:
            sys.stderr.write(
                "%s - - [%s] CLIENT_CLOSED %s\n"
                % (
                    self.client_address[0],
                    self.log_date_time_string(),
                    exc.__class__.__name__,
                )
            )


if __name__ == "__main__":
    port = 8001
    httpd = ThreadingHTTPServer(("", port), DebugHTTPRequestHandler)
    print(
        "Serving Stremio Hisense app with viewport debug on port %s at %s"
        % (port, time.strftime("%Y-%m-%d %H:%M:%S")),
        flush=True,
    )
    httpd.serve_forever()
