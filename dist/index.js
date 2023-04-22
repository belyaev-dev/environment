var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  Env: () => Env,
  NodeEnv: () => NodeEnv,
  environment: () => environment,
  isDev: () => isDev,
  isLocal: () => isLocal,
  isNodeEnvDev: () => isNodeEnvDev,
  isNodeEnvProd: () => isNodeEnvProd,
  isNodeEnvTest: () => isNodeEnvTest,
  isProd: () => isProd,
  isStage: () => isStage
});
module.exports = __toCommonJS(src_exports);

// src/types.ts
var Env = /* @__PURE__ */ ((Env2) => {
  Env2["Dev"] = "dev";
  Env2["Local"] = "local";
  Env2["Stage"] = "stage";
  Env2["Prod"] = "prod";
  return Env2;
})(Env || {});
var NodeEnv = /* @__PURE__ */ ((NodeEnv2) => {
  NodeEnv2["Test"] = "test";
  NodeEnv2["Production"] = "production";
  NodeEnv2["Development"] = "development";
  return NodeEnv2;
})(NodeEnv || {});
var isDev = process.env.ENVIRONMENT === "dev" /* Dev */;
var isLocal = process.env.ENVIRONMENT === "local" /* Local */;
var isStage = process.env.ENVIRONMENT === "stage" /* Stage */;
var isProd = process.env.ENVIRONMENT === "prod" /* Prod */;
var isNodeEnvDev = process.env.NODE_ENV === "development" /* Development */;
var isNodeEnvTest = process.env.NODE_ENV === "test" /* Test */;
var isNodeEnvProd = process.env.NODE_ENV === "production" /* Production */;

// src/environment.ts
var environment = (types) => {
  const result = {};
  Object.keys(types).forEach((key) => {
    const value = types[key];
    if (typeof value === "function" && process.env.hasOwnProperty(key)) {
      result[key] = value(process.env[key]);
    } else if (typeof value === "function" && !process.env.hasOwnProperty(key)) {
      throw new Error(`Undefined env param ${key}`);
    } else {
      result[key] = value;
    }
  });
  return result;
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Env,
  NodeEnv,
  environment,
  isDev,
  isLocal,
  isNodeEnvDev,
  isNodeEnvProd,
  isNodeEnvTest,
  isProd,
  isStage
});
