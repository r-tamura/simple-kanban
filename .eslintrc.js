
module.exports = {
  "ecmaFeatures": {
    "jsx": true,
    "modules": true
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parser": "babel-eslint",
  "extends": "airbnb",
  "rules": {
    "quotes": [2, "single"],
    "strict": [2, "never"],
    "indent": [2, 2],
    "semi": [2, "never"],
    "no-undef": 0,
    "no-param-reassign": 0,
    "arrow-parens": 0,
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/extensions": 0,
    "import/no-mutable-exports": 0,
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-prototype-builtins": 0,
    "react/forbid-prop-types": 0,
    "react/no-unused-prop-types": 1,
    "react/jsx-uses-react": 2,
    "react/jsx-uses-vars": 2,
    "react/react-in-jsx-scope": 2,
    "react/jsx-filename-extension": 0,
    "react/prefer-stateless-function": 0,
    "jsx-a11y/href-no-hash": 0,
    "jsx-a11y/no-static-element-interactions": 0
  },
  "plugins": [
    "react",
    "flowtype",
  ]
}