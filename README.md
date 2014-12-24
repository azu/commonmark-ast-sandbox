# commonmark-ast-sandbox

[jgm/CommonMark](https://github.com/jgm/CommonMark "jgm/CommonMark") has AST.

>  This format shouldn't be regarded as canonical, however; it's just a dump of the internal tree.

via [It would be very nice to dump the ast in XML · Issue #53 · jgm/CommonMark](https://github.com/jgm/CommonMark/issues/53 "It would be very nice to dump the ast in XML · Issue #53 · jgm/CommonMark")

## Usage

``` sh
npm install
node index.js
/*
AST { t: 'Document',
  start_line: 1,
  start_column: 1,
  end_line: 20,
  children:
   [ { t: 'ATXHeader',
       start_line: 1,
       start_column: 1,
       end_line: 1,
       inline_content: [Object],
       level: 1,
       children: [] },
     { t: 'Paragraph',
       start_line: 3,
       start_column: 1,
       end_line: 3,
       inline_content: [Object],
       children: [] },
     { t: 'ATXHeader',
       start_line: 5,
       start_column: 1,
       end_line: 5,
       inline_content: [Object],
       level: 2,
       children: [] },
     { t: 'FencedCode',
       start_line: 7,
       start_column: 1,
       end_line: 9,
       string_content: 'npm install\nnode index.js\n',
       info: '',
       children: [] },
     { t: 'ATXHeader',
       start_line: 12,
       start_column: 1,
       end_line: 12,
       inline_content: [Object],
       level: 2,
       children: [] },
     { t: 'List',
       start_line: 14,
       start_column: 1,
       end_line: 19,
       list_data: [Object],
       tight: true,
       children: [Object] },
     { t: 'ATXHeader',
       start_line: 20,
       start_column: 1,
       end_line: 20,
       inline_content: [Object],
       level: 2,
       children: [] },
     { t: 'Paragraph',
       start_line: 22,
       start_column: 1,
       end_line: 21,
       inline_content: [Object],
       children: [] } ] }
*/
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT