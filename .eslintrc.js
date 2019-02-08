module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      "plugin:react/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            2
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single",
            {
              "allowTemplateLiterals": true
            }
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-unused-vars": [
          "warn"
        ],
        "no-console": ['warn', { allow: ['error'] }],
        "react/jsx-uses-vars": 1,
        "react/no-unused-prop-types": 1
    },
    "globals" : {
      "jest": false,
      "shallow": false,
      "describe": false,
      "beforeEach": false,
      "afterEach": false,
      "it": false,
      "expect": false,
      "React": false,
      "PropTypes": false,
      "require": false,
      "module": false,
      "__dirname": false,
      "process": false,
      "global": false,
    },
    "settings": {
      "react": {
        "version": "16.0"
      }
    }
};
