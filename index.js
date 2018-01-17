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

var htmlTitles        = {
                          chapter0:  '<span class="chapter-designation">Preface</span><br>Coding <span>for</span><br>Designers',
                          openCh0 : '<a href="/preface"><h1>',
                          chapter1: '<span class="chapter-designation">Chapter 1</span><br>Breaking<br>Barriers',
                          openCh1 : '<a href="/breaking-barriers"><h1>',
                          chapter2: '<span class="chapter-designation">Chapter 2</span><br>Structure,<br>Style, <span>&</span><br>Behavior',
                          openCh2 : '<a href="/structure-style-and-behavior"><h1>',
                          chapter3: '<span class="chapter-designation">Chapter 3</span><br>Coding <span>&</span><br>Visual Design',
                          openCh3 : '<a href="/coding-and-visual-design"><h1>',
                          chapter4: '<span class="chapter-designation">Chapter 4</span><br>Coding <span>&</span><br>Concept',
                          openCh4 : '<a href="/coding-and-concept"><h1>',
                          chapter5: '<span class="chapter-designation">Chapter 5</span><br>Coding <span>&</span><br>JavaScript',
                          openCh5 : '<a href="/coding-and-javascript"><h1>',
                          chapter6: '<span class="chapter-designation">Chapter 6</span><br>Deconstructing<br>Designs',
                          openCh6 : '<a href="/deconstructing-designs"><h1>',
                          closeCh : '</h1></a>'
                        };

Metalsmith(__dirname)
  .metadata({
    title: "Coding for Designers",
    description: "...",
    version: '1.0.28'
  })
  .source('./book')
  .destination('./site')
  .clean(true)
  .use(metalsmithExpress())
  .use (
    watch({
      paths: {
        '${source}/**/*.md': true,
        '${source}/**/**/*': true
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
    files: ['Coding and JavaScript/wip.md'],
    output: 'coding-and-javascript.md'
  }))
  .use(concat({
    files: ['Deconstructing Designs/wip.md'],
    output: 'deconstructing-designs.md'
  }))
  .use(collections({
    home: 'home.md',
    chapter0: 'preface.md',
    chapter1: 'breaking-barriers.md',
    chapter2: 'structure-style-and-behavior.md',
    chapter3: 'coding-and-visual-design.md',
    chapter4: 'coding-and-concept.md',
    chapter5: 'coding-and-javascript.md',
    chapter6: 'deconstructing-designs.md'
  }))
  .use(metadata({
    'collections.home': {
      layout: 'home.html',
      htmlTitle: 'Coding <span>for</span><br>Designers',
      title: 'Coding for Designers',
      description: 'A Visually Infused Prerequisite for Learning and Talking Code',
    },
    'collections.chapter0': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter0,
      title: 'Preface',
      description: 'A Visually Infused Prerequisite for Learning and Talking Code',
      htmlNextChapter: htmlTitles.openCh1 + htmlTitles.chapter1 + htmlTitles.closeCh
    },
    'collections.chapter1': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter1,
      title: 'Breaking Barriers',
      description: 'In chapter one, Breaking Barriers, we will explore and demystify a series of concepts that fundamentally intimidate most designers and non-coders about how computers and code work. From the seemingly magical ones and zeros to the code you will soon write, we will see simple, basic, repetitive, and reusable concepts at play.',
      htmlPrevChapter: htmlTitles.openCh0 + htmlTitles.chapter0 + htmlTitles.closeCh,
      htmlNextChapter: htmlTitles.openCh2 + htmlTitles.chapter2 + htmlTitles.closeCh
    },
    'collections.chapter2': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter2,
      title: 'Structure, Style, & Behavior',
      description: 'In chapter two, Structure, Style, and Behavior, we will cover the three codeable concepts that enable computers to render our interactive creations. We will do so from both a 2D context with the web platform and a 3D context with the Unity® platform. These perspectives will help solidify the distinct role that structure, style, and behavior each play regardless of dimensionality.',
      htmlPrevChapter: htmlTitles.openCh1 + htmlTitles.chapter1 + htmlTitles.closeCh,
      htmlNextChapter: htmlTitles.openCh3 + htmlTitles.chapter3 + htmlTitles.closeCh
    },
    'collections.chapter3': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter3,
      title: 'Coding & Visual Design',
      description: 'Chapter three, Coding and Visual Design, will cover the elements, principles, and constructs of visual design. We will explore them relative to programming’s counterparts. This work will help shape a mental model tuned specifically for designers.',
      htmlPrevChapter: htmlTitles.openCh2 + htmlTitles.chapter2 + htmlTitles.closeCh,
      htmlNextChapter: htmlTitles.openCh4 + htmlTitles.chapter4 + htmlTitles.closeCh
    },
    'collections.chapter4': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter4,
      title: 'Coding & Concept',
      description: 'In chapter four, Coding and Concept, we will introduce language agnostic concepts that are invaluable when authoring dynamic and interactive creations. In coding, the terminology and often the code words themselves are reused exactly or with subtle variation across languages. Spoken languages lack this luxury. We will also visually explore how our code actually runs in real-time.',
      htmlPrevChapter: htmlTitles.openCh3 + htmlTitles.chapter3 + htmlTitles.closeCh,
      htmlNextChapter: htmlTitles.openCh5 + htmlTitles.chapter5 + htmlTitles.closeCh
    },
    'collections.chapter5': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter5,
      title: 'Coding & JavaScript',
      description: 'Chapter five, Coding and JavaScript, will reinforce what has been learned, but in the context of JavaScript. JavaScript is the most accessible programming language today. If you have pushed a button on a web page, then you have been impacted by JavaScript.',
      htmlPrevChapter: htmlTitles.openCh4 + htmlTitles.chapter4 + htmlTitles.closeCh,
      htmlNextChapter: htmlTitles.openCh6 + htmlTitles.chapter6 + htmlTitles.closeCh
    },
    'collections.chapter6': {
      layout: 'chapter.html',
      htmlTitle: htmlTitles.chapter6,
      title: 'Deconstructing Designs',
      description: 'Finally in chapter six, Deconstructing Designs, we will put everything we have learned to practice. We will do so by analyzing and deconstructing the user interfaces of a few impactful applications. We will then selectively reconstruct portions of the UI relative to the previously introduced concepts.',
      htmlPrevChapter: htmlTitles.openCh5 + htmlTitles.chapter5 + htmlTitles.closeCh
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
          },
          //®
          {
              search: 'Unity®',
              replace: 'Unity<sup>&#174;</sup>'
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