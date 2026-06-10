Changelog

All notable changes to this project will be documented in this file.

[1.0.0] - 2026-06-10

Added

- Initial release of Blade Formatter for Acode.
- Format Laravel Blade (".blade.php") files using Prettier.
- Integrated "prettier-plugin-blade".
- Support for Laravel Blade directives:
  - "@if"
  - "@elseif"
  - "@else"
  - "@endif"
  - "@foreach"
  - "@endforeach"
  - "@for"
  - "@endfor"
  - "@section"
  - "@endsection"
  - and other Blade directives supported by "prettier-plugin-blade".
- Support for Blade Components ("<x-*>").
- Support for manual formatting through Acode Formatter menu.
- Compatible with Format On Save.
- Error handling for formatting failures.

Dependencies

- prettier
- prettier-plugin-blade

Notes

- This release focuses exclusively on Laravel Blade templates (".blade.php").
- PHP file formatting (".php") is not included in this version.