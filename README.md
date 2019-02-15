# Typeup

Typeup is a markup language for writing documents. It is inspired by the simplicity of Markdown
but tries to better support writing longer documents. Typeup is still in very early development
and only parts of the functionality is yet implemented.

## Examples
You can find example files here:
* [document](docs/document.tup)
* [template](dacs/templates/document.json)

## Benefits

### Only One Way
Markup many times supports multiple ways of doing the same thing. This makes it easier to guess
how to mark up the content. This is great for the occasional user writing short comments but
when writing bigger documents, with longer lifespan and sometimes even multiple editors it makes
it harder to get a consistent look of the markup source. Therefore Typeup only supports one way
of doing things.

### Meta Data
In longer documents and in content management systems there is a need for attaching meta data to
the markup source. Typeup supports it by allowing meta data variables to be set anywhere in the
markup source.

### Math Support
Typeup supports typesetting math in the style of Latex, both inline and blocks.

### Caption Support
Typeup supports adding captions to figures, tables and math blocks.

### Table of Content
Support for generating a table of content.

### Template Support
Typeup uses a template system for generating the output. Templates can be created for multiple
output formats such as HTML and Latex.

## Contributing
Please contribute to the discussions on the issues. Contributing code is also welcome.
