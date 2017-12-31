var Metalsmith        = require('metalsmith');
var markdown          = require('metalsmith-markdown');
var layouts           = require('metalsmith-layouts');
var permalinks        = require('metalsmith-permalinks');
var watch             = require('metalsmith-watch');
var metalsmithExpress = require('metalsmith-express');
var concat            = require('metalsmith-concat');
var collections       = require('metalsmith-collections');
var metadata          = require('metalsmith-collection-metadata');
var replace           = require('metalsmith-regex-replace');
var assets            = require('metalsmith-assets');
var metalsmithPrism   = require('metalsmith-prism');

Metalsmith(__dirname)
  .metadata({
    title: "Coding for Designers",
    description: "..."
  })
  .source('./book')
  .destination('./site')
  .clean(true)
  .use(metalsmithExpress())
  .use (
    watch({
      paths: {
        '${source}/**/*.md': true
      },
      livereload: true
    })
  )
  .use(concat({
    files: ['Coding for Designers/Preface.md'],
    output: 'preface.md'
  }))
  .use(concat({
    files: ['Breaking Barriers/Ones and Zeros.md',
            'Breaking Barriers/Hard to Soft.md',
            'Breaking Barriers/Bits and Bytes.md',
            'Breaking Barriers/Black and White.md',
            'Breaking Barriers/Coding Color.md',
            'Breaking Barriers/Encode and Decode.md',
            'Breaking Barriers/Saved Image.md'],
    output: 'breaking-barriers.md'
  }))
  .use(concat({
    files: ['Structure Style Behavior/Structure, Style, and Behavior.md',
            'Structure Style Behavior/Structure.md',
            'Structure Style Behavior/Style.md',
            'Structure Style Behavior/Behavior.md'],
    output: 'structure-style-and-behavior.md'
  }))
  .use(concat({
    files: ['Coding and Visual Design/Design.md',
            'Coding and Visual Design/Elements and Elements.md',
            'Coding and Visual Design/Principles and Patterns.md',
            'Coding and Visual Design/Constructs and Components.md'],
    output: 'coding-and-visual-design.md'
  }))
  .use(concat({
    files: ['Coding and Concept/Coding and Concept.md',
            'Coding and Concept/Authoring, Compiling, and Executing.md',
            'Coding and Concept/Frame Rate.md',
            'Coding and Concept/Event Loop.md',
            'Coding and Concept/Sync and Async.md',
            'Coding and Concept/Interfacing.md',
            'Coding and Concept/Client and Server.md',
            'Coding and Concept/Anatomy of HTML, CSS, and JavaScript.md',
            'Coding and Concept/Work. Right. Better..md'],
    output: 'coding-and-concept.md'
  }))
  .use(concat({
    files: ['Coding and JavaScript/XXX.md'],
    output: 'coding-and-javascript.md'
  }))
  .use(concat({
    files: ['Deconstructing Designs/XXX.md'],
    output: 'deconstructing-designs.md'
  }))
  .use(collections({
    chapter0: 'preface.md',
    chapter1: 'breaking-barriers.md',
    chapter2: 'structure-style-and-behavior.md',
    chapter3: 'coding-and-visual-design.md',
    chapter4: 'coding-and-concept.md',
    chapter5: 'coding-and-javascript.md',
    chapter6: 'deconstructing-designs.md'
  }))
  .use(metadata({
    'collections.chapter0': {
      layout: 'chapter.html',
      title: 'Coding <span>for</span><br>Designers'
    },
    'collections.chapter1': {
      layout: 'chapter.html',
      title: 'Breaking<br>Barriers'
    },
    'collections.chapter2': {
      layout: 'chapter.html',
      title: 'Structure,<br>Style, <span>and</span><br>Behavior'
    },
    'collections.chapter3': {
      layout: 'chapter.html',
      title: 'Coding <span>and</span><br>Visual Design'
    },
    'collections.chapter4': {
      layout: 'chapter.html',
      title: 'Coding <span>and</span><br> Concept'
    },
    'collections.chapter5': {
      layout: 'chapter.html',
      title: 'Coding <span>and</span><br> JavaScript'
    },
    'collections.chapter6': {
      layout: 'chapter.html',
      title: 'Deconstructing<br>Designs'
    }
  }))
  .use(markdown({
    langPrefix: 'language-'
  }))
  .use(metalsmithPrism({
    decode: true,
    lineNumbers: true
  }))
  .use(replace({
      subs: [
          // img
          {
              search: /<p><img (.*) title=['"](.*)['"]><\/p>/gm,
              replace: function(match, p1, p2){
                var id = p2.toLowerCase().replace(/ /g, '-');
                return '</div><div id="' + id + '" class="content-visual"><figure><img ' + p1 + ' title="' + p2 + '"><figcaption class="hr"><hr>' + p2 + '</figcaption></figure></div><div class="content-text">'
              }
          },
          // code block
          {
              search: /<pre (.*)><code (.*)>/gm,
              replace: '</div><div class="content-code"><pre $1><code $2>'
          },
          {
              search: /<\/code><\/pre>/gm,
              replace: '</code></pre></div><div class="content-text">'
          }
      ]
  }))
  .use(assets({
    source: './book/assets', // relative to the working directory
    destination: './assets' // relative to the build directory
  }))
  .use(permalinks({
    relative: false
  }))
  .use(layouts({
    engine: 'handlebars',
    partials: 'partials'
  }))
  .build(function(err, files) {
    if (err) { throw err; }
  });