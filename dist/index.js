"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  SignUp: () => SignUp_default
});
module.exports = __toCommonJS(src_exports);

// src/components/SignUpContainer/SignUp.tsx
var import_react = __toESM(require("react"));

// src/utils/axiosRequest.js
var import_axios = __toESM(require("axios"));
var client = import_axios.default.create({
  baseURL: "http://localhost:5000/api"
});
var axiosRequest = async ({ ...options }) => {
  const onSuccess = (response) => response;
  const onError = (error) => error;
  try {
    const response = await client(options);
    return onSuccess(response);
  } catch (error) {
    return onError(error);
  }
};

// src/components/SignUpContainer/SignUp.tsx
var SignUp = ({
  primary = true,
  label = "Sign Up",
  secretKey = "TY858AA8nLimeBI",
  project_name = "1st project",
  user_id = 6
}) => {
  const [emojis, setEmojis] = (0, import_react.useState)([]);
  const onClick = () => {
    console.log(secretKey);
    console.log(project_name);
    console.log(user_id);
    axiosRequest({
      method: "POST",
      url: "/serviceUser/getEmojiForPatternUser?emojiName=smil",
      data: {
        projectName: project_name,
        userId: user_id,
        projectSecret: secretKey
      }
    }).then((res) => {
      setEmojis(res.data.data);
    }).catch((err) => {
      console.log(err);
    });
  };
  const [username, setUsername] = import_react.default.useState("");
  const [pattern, setPattern] = import_react.default.useState([]);
  const [password, setPassword] = import_react.default.useState([]);
  const mode = primary ? "storybook-button--primary" : "storybook-button--secondary";
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null, /* @__PURE__ */ import_react.default.createElement("h1", null, "Sign Up with ", project_name), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex-col w-1-3 gap-10"
  }, /* @__PURE__ */ import_react.default.createElement("label", {
    className: ""
  }, "Username"), /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "Usernmae",
    id: "username",
    placeholder: "Enter your username",
    onChange: (event) => {
      setUsername(event.target.value);
    },
    value: username
  }), /* @__PURE__ */ import_react.default.createElement("label", {
    className: ""
  }, "Unique Pattern"), emojis.length === 0 && /* @__PURE__ */ import_react.default.createElement("button", {
    className: "signup-button",
    onClick
  }, "Create Story"), emojis.length > 0 && /* @__PURE__ */ import_react.default.createElement("input", {
    type: "text",
    name: "Password",
    value: password.length > 0 ? password.map((item) => item).join("") : "",
    onKeyDown: (event) => {
      if (event.key === "Backspace") {
        setPassword(password.slice(0, -1));
        setPattern(pattern.slice(0, -1));
      }
    },
    id: "password",
    placeholder: "Create a Story"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "flex gap-10"
  }, emojis.length > 0 && emojis.map((emoji) => /* @__PURE__ */ import_react.default.createElement("button", {
    onClick: () => {
      setPattern([
        ...pattern,
        emoji.emoji.codePointAt(0).toString(16)
      ]);
      setPassword([...password, emoji.emoji]);
      console.log(pattern);
    },
    style: { padding: "6px" }
  }, emoji.emoji))), pattern.length > 0 ? /* @__PURE__ */ import_react.default.createElement("button", {
    className: "signup-button"
  }, "SignUp") : null));
};
var SignUp_default = SignUp;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SignUp
});
