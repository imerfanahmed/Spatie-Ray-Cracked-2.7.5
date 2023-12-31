import { j as e, d as u, r, E as c } from "./index-12d27707.js";
function m({ htmlFor: s, children: n }) {
  return e.jsx("label", {
    htmlFor: s,
    className: "font-semibold text-sm text-gray-500 dark:text-gray-400",
    children: n,
  });
}
function p({ onChange: s = () => {}, ...n }) {
  return e.jsx("input", {
    ...n,
    className: `
                app-region-no-drag
                w-full px-4 h-10
                bg-gray-100 outline-none rounded-sm
                text-gray-700 focus:text-indigo-700 focus:bg-indigo-50
            `,
    onChange: (i) => s(i.target.value),
  });
}
const f = {
  default:
    "bg-indigo-500 hover:bg-indigo-600 text-white disabled:bg-gray-500 disabled:hover:bg-gray-500",
  secondary:
    "bg-indigo-500/10 hover:bg-indigo-400/10 text-indigo-400 disabled:bg-gray-500/50 disabled:hover:bg-gray-500/50",
};
function d({
  id: s,
  children: n,
  disabled: i,
  onClick: t,
  variant: a = "default",
}) {
  return e.jsx("button", {
    id: s,
    className: `
                py-2 px-4
                font-medium 
                focus:outline-none focus:ring-0
                ${f[a]}
                rounded
                transform active:translate-y-px
                cursor-default select-none app-region-no-drag
            `,
    disabled: i,
    onClick: t,
    children: n,
  });
}
const g = {
  unexpected:
    "The license server gave an unexpected response, please try again",
  expired: e.jsxs("span", {
    children: [
      "This license has expired. ",
      e.jsx(c, {
        href: "https://spatie.be/profile/purchases",
        className: "font-bold text-red-600 hover:text-red-500",
        children: "Click here",
      }),
      " to renew it",
    ],
  }),
  notActivated:
    "Your license is not valid or this device isn't activated anymore",
  invalid: "This license is not valid, please check your input",
  networkFailed:
    "You might not be connected to the internet, please try again later",
  noSeatsAvailable: "todo",
};
function w() {
  return e.jsx("main", { className: "px-4", children: e.jsx(y, {}) });
}
function k() {
  return e.jsx("span", {
    className:
      "text-sm font-bold absolute inset-0 flex justify-center items-center text-center",
    children: "License",
  });
}
function y() {
  const s = u(),
    [n, i] = r.useState(!1),
    [t, a] = r.useState((s.isValid && s.license_key) || ""),
    h = s.is_overlay_locked,
    l = s.error_message;
  async function x(o) {
    o == null || o.preventDefault(),
      !(n || !t) &&
        (i(!0), await window.Ray.submitLicense({ licenseKey: t }), i(!1));
  }
  return l === "networkFailed"
    ? e.jsx(v, {})
    : e.jsxs("div", {
        className: "relative mx-auto max-w-xl grid py-12",
        children: [
          e.jsxs("div", {
            className: "md:flex items-center justify-between text-sm",
            children: [
              e.jsx("h1", {
                className: "markup-h1",
                children: "Enter license",
              }),
              e.jsx(c, {
                href: "https://spatie.be/profile/purchases",
                children: "Manage your licenses",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mt-8",
            children: [
              e.jsxs("p", {
                className: "font-bold mb-2",
                children: [
                  s.has_grace_period_expired &&
                    "Ray has not been successful in checking your license in 7 days. Please make sure Ray can access the internet to disable demo mode.",
                  !s.isValid &&
                    "There is no license key registered to this device.",
                  (s == null ? void 0 : s.is_expired) &&
                    "Your license key has expired.",
                ],
              }),
              e.jsxs("p", {
                children: [
                  "Please buy a license or renew your existing license on",
                  " ",
                  e.jsx(c, {
                    href: "https://spatie.be/products/ray",
                    children: "spatie.be/products/ray",
                  }),
                  ".",
                ],
              }),
              s.isValid &&
                e.jsxs("p", {
                  children: [
                    e.jsx("button", {
                      type: "button",
                      className:
                        "text-indigo-500 hover:text-indigo-600 underline",
                      onClick: () => window.Ray.checkLicense(),
                      children: "Click here",
                    }),
                    " after renewing to reload.",
                  ],
                }),
            ],
          }),
          e.jsx("p", {
            className: "mt-2",
            children:
              "In trial mode you can send up to 10 log items before the app locks.",
          }),
          e.jsxs("form", {
            onSubmit: x,
            children: [
              e.jsxs("div", {
                className: "grid gap-2 mt-4",
                children: [
                  e.jsx(m, { htmlFor: "license", children: "License key" }),
                  e.jsx(p, { id: "license", value: t, onChange: a }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-6 flex flex-wrap gap-6 items-center",
                children: [
                  e.jsx(d, {
                    id: "activate-license",
                    disabled: n || !t,
                    children: "Activate on this device",
                  }),
                  !h &&
                    e.jsx("div", {
                      className: "my-4",
                      children: e.jsx("button", {
                        onClick: () => window.Ray.closeLicenseWindow(),
                        className:
                          "text-indigo-500 hover:text-indigo-600 underline text-sm cursor-pointer app-region-no-drag",
                        children: "Continue in trial mode",
                      }),
                    }),
                ],
              }),
            ],
          }),
          l &&
            e.jsx("p", {
              id: "license-error-message",
              className: "mt-4 py-2 px-4 text-red-600 bg-red-500/20 text-sm",
              children: g[l],
            }),
        ],
      });
}
function b() {
  const [s, n] = r.useState(navigator.onLine);
  return (
    r.useEffect(
      () => (
        window.addEventListener("offline", () => {
          n(!1);
        }),
        window.addEventListener("online", () => {
          n(!0);
        }),
        () => {
          window.removeEventListener("offline", () => {
            n(!1);
          }),
            window.removeEventListener("online", () => {
              n(!0);
            });
        }
      ),
      [],
    ),
    s
  );
}
function v() {
  const s = b(),
    n = u(),
    [i, t] = r.useState(!1);
  if (
    (r.useEffect(() => {
      s &&
        (i ||
          (t(!0),
          window.Ray.checkLicense().then(() => {
            t(!1);
          })));
    }, [s, i]),
    !s)
  )
    return e.jsx("div", {
      children: e.jsxs("p", {
        id: "license-error-message",
        className: "mt-4 py-2 px-4 text-red-600 bg-red-500/20 text-sm",
        children: [
          "The Ray app seams to be unable to access to internet. Please try again later or ",
          e.jsx("a", {
            href: "#",
            className: "underline",
            children: "troubleshoot",
          }),
          " this problem.",
        ],
      }),
    });
  async function a() {
    t(!0), await window.Ray.checkLicense(), t(!1);
  }
  return e.jsxs("div", {
    className: "relative mx-auto max-w-xl grid py-12",
    children: [
      e.jsxs("div", {
        className: "md:flex items-center justify-between text-sm",
        children: [
          e.jsx("h1", { className: "markup-h1", children: "License" }),
          e.jsx(c, {
            href: "https://spatie.be/profile/purchases",
            children: "Manage your licenses",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-8",
        children: [
          e.jsx("p", {
            className: "mb-2",
            children: "Ray has not been successful in checking your license.",
          }),
          e.jsxs("div", {
            className: "mt-6 flex flex-wrap gap-6 items-center",
            children: [
              e.jsx(d, {
                onClick: a,
                disabled: i,
                children: "validate your license",
              }),
              "or",
              e.jsx(d, {
                onClick: () => n.decouple(),
                variant: "secondary",
                disabled: i,
                children: "decouple your license from this device",
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
export { k as Header, w as default };
