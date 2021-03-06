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
        'preview',
        'info',
        'help',
      ],
    }]
}
let vditorVersion = '3.4.4';

window.vditor = new Vditor('vditor', {
  // _lutePath: `http://192.168.0.107:9090/lute.min.js?${new Date().getTime()}`,
  _lutePath: 'src/js/lute/lute.min.js',
  cdn: `https://cdn.jsdelivr.net/npm/vditor@${vditorVersion}`,
  toolbar,
  mode: 'ir',
  height: window.innerHeight + 100,
  outline: true,
  debugger: true,
  typewriterMode: true,
  placeholder: 'Hello, Vditor!',
  preview: {
    theme: {
      path: `https://cdn.jsdelivr.net/npm/vditor@${vditorVersion}/dist/css/content-theme`,
    },
    markdown: {
      toc: true,
    },
    transform: function(html) {
      // html = html.replace(/name="1"/ig, '').replace(/<p /ig, '<p name="1" ');
      // html = html.replace(/<p/ig, '<div');
      // html = html.replace(/<\/p>/ig, '</p>');
      console.log(html);
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
    extend: [
      {
        key: '@',
        hint: (key) => {
          console.log(key)
          if ('vanessa'.indexOf(key.toLocaleLowerCase()) > -1) {
            return [
              {
                value: '@Vanessa',
                html: '<img src="https://avatars0.githubusercontent.com/u/970828?s=60&v=4"/> Vanessa',
              }]
          }
          return []
        },
      },
      {
        key: '#',
        hint: (key) => {
          console.log(key)
          if ('vditor'.indexOf(key.toLocaleLowerCase()) > -1) {
            return [
              {
                value: '#Vditor',
                html: '<span style="color: #999;">#Vditor</span> ♏ 一款浏览器端的 Markdown 编辑器，支持所见即所得（富文本）、即时渲染（类似 Typora）和分屏预览模式。',
              }]
          }
          return []
        },
      }],
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
