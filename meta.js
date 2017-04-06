module.exports = {
  "helpers": {
    "if_or": function (v1, v2, options) {
      if (v1 || v2) {
        return options.fn(this);
      }

      return options.inverse(this);
    }
  },
  "prompts": {
    "name": {
      "type": "string",
      "required": true,
      "message": "Project name"
    },
    "description": {
      "type": "string",
      "required": false,
      "message": "Project description",
      "default": "A MOLGENIS Vue.js project"
    },
    "author": {
      "type": "string",
      "message": "Author"
    },
    "vuex" : {
      "type": "confirm",
      "message": "install vuex?"
    },
    "router": {
      "type": "confirm",
      "message": "Install vue-router?"
    },
    "flow" : {
      "type": "confirm",
      "when": "vuex",
      "message": "Do you want to add typing to your project with Flow?"
    }
  },
  "filters": {
    "src/store/**/*": "vuex",
    "src/router/**/*": "router",
    ".flowconfig": "flow",
    "flow.examples.js": "flow"
  },
  "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
};
