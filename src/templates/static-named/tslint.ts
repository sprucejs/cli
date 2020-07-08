import { IGeneratedFile } from '../interfaces/generated-file.interface';

export function generate(): IGeneratedFile {
  return {
    fileName: 'tslint.json',
    file: `{
"defaultSeverity": "error",
"extends": ["tslint:recommended"],
"jsRules": {},
"rules": {
  "typedef": [
    true,
    "call-signature",
    "parameter",
    "property-declaration",
    "variable-declaration",
    "member-variable-declaration"
  ],
  "no-string-literal": false,
  "quotemark": [true, "single"],
  "member-access": [false],
  "ordered-imports": [true],
  "max-line-length": false,
  "member-ordering": [false],
  "interface-name": [false],
  "curly": [true, "ignore-same-line"],
  "arrow-parens": false,
  "object-literal-sort-keys": false,
  "array-type": [true, "generic"],
  "trailing-comma": [
    true,
    {
      "singleline": "never",
      "multiline": {
        "objects": "never",
        "arrays": "never",
        "functions": "never",
        "typeLiterals": "ignore"
      }
    }
  ],
  "variable-name": {
    "options": ["check-format", "allow-leading-underscore"]
  },
  "one-variable-per-declaration": false
},
"rulesDirectory": []
}
`
  };
}
