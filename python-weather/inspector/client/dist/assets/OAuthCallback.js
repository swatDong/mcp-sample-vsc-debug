import { r as reactExports, j as jsxRuntimeExports, S as SESSION_KEYS, a as auth, b as authProvider } from "./index.js";
const OAuthCallback = () => {
  const hasProcessedRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const handleCallback = async () => {
      if (hasProcessedRef.current) {
        return;
      }
      hasProcessedRef.current = true;
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const serverUrl = sessionStorage.getItem(SESSION_KEYS.SERVER_URL);
      if (!code || !serverUrl) {
        console.error("Missing code or server URL");
        window.location.href = "/";
        return;
      }
      try {
        const result = await auth(authProvider, {
          serverUrl,
          authorizationCode: code
        });
        if (result !== "AUTHORIZED") {
          throw new Error(
            `Expected to be authorized after providing auth code, got: ${result}`
          );
        }
        window.location.href = `/?serverUrl=${encodeURIComponent(serverUrl)}`;
      } catch (error) {
        console.error("OAuth callback error:", error);
        window.location.href = "/";
      }
    };
    void handleCallback();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center h-screen", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg text-gray-500", children: "Processing OAuth callback..." }) });
};
export {
  OAuthCallback as default
};
