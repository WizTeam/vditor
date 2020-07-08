import Vditor from '../src/index'
import '../src/assets/scss/index.scss'

// new VConsole()

let toolbar
if (window.innerWidth < 768) {
  toolbar = [
    'emoji',
    'headings',
    'bold',
    'italic',
    'strike',
    'link',
    '|',
    'list',
    'ordered-list',
    'check',
    'outdent',
    'indent',
    '|',
    'quote',
    'line',
    'code',
    'inline-code',
    'insert-before',
    'insert-after',
    '|',
    'upload',
    'record',
    'table',
    '|',
    'undo',
    'redo',
    '|',
    'edit-mode',
    'content-theme',
    'code-theme',
    'export',
    {
      name: 'more',
      toolbar: [
        'fullscreen',
        'both',
        'format',
        'preview',
        'info',
        'help',
      ],
    }]
}

window.vditor = new Vditor('vditor', {
  cdn: 'https://cdn.jsdelivr.net/npm/vditor@3.3.3',
  mode: 'ir',
  toolbar,
  height: window.innerHeight + 100,
  outline: true,
  debugger: true,
  typewriterMode: true,
  placeholder: 'Hello, Vditor!',
  preview: {
    markdown: {
      toc: true,
    },
    transform: function(html) {
      html = html.replace(/name="1"/ig, '').replace(/<p /ig, '<p name="1" ');
      // html = html.replace(/<p/ig, '<div');
      // html = html.replace(/<\/p>/ig, '</p>');
      // console.log(html);
      return html;
    }
  },
  toolbarConfig: {
    pin: true,
  },
  counter: {
    enable: true,
    type: 'text',
  },
  hint: {
    emojiPath: 'https://cdn.jsdelivr.net/npm/vditor@1.8.3/dist/images/emoji',
    emojiTail: '<a href="https://hacpai.com/settings/function" target="_blank">设置常用表情</a>',
    emoji: {
      'sd': '💔',
      'j': 'https://unpkg.com/vditor@1.3.1/dist/images/emoji/j.png',
    },
  },
  tab: '\t',
  upload: {
    accept: 'image/*,.mp3, .wav, .rar',
    token: 'test',
    url: '/api/upload/editor',
    linkToImgUrl: '/api/upload/fetch',
    filename (name) {
      return name.replace(/[^(a-zA-Z0-9\u4e00-\u9fa5\.)]/g, '').
        replace(/[\?\\/:|<>\*\[\]\(\)\$%\{\}@~]/g, '').
        replace('/\\s/g', '')
    },
  },
})
