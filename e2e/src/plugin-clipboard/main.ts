/* Copyright 2021, Milkdown by Mirone. */

import { Editor, rootCtx } from '@milkdown/core'
import { nord } from '@milkdown/theme-nord'
import { commonmark } from '@milkdown/preset-commonmark'
import { clipboard } from '@milkdown/plugin-clipboard'

import { setup } from '../utils'

import '@milkdown/theme-nord/style.css'

import '../style.css'

setup(() => {
  return Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, document.getElementById('app'))
    })
    .config(nord)
    .use(commonmark)
    .use(clipboard)
    .create()
})
