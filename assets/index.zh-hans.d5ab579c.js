var n=`# \u96C6\u6210\u63D2\u4EF6

\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u6CD5\u6765\u8BA9\u7528\u6237\u5C06\u5DF2\u6709\u7684 prosemirror \u548C remark \u63D2\u4EF6\u5FEB\u901F\u96C6\u6210\u5230 milkdown \u4E2D\u3002

---

## Remark \u63D2\u4EF6

\u7528\u4E8E\u6DFB\u52A0 remark \u63D2\u4EF6\u3002

\`\`\`typescript
import { remarkPluginFactory } from '@milkdown/core';

// \u7B49\u540C\u4E8E
// remark.use(someRemarkPlugin);
const remarkPlugin = remarkPluginFactory(someRemarkPlugin);

// \u591A\u4E2A
const remarkPlugin = remarkPluginFactory([someRemarkPlugin, someOtherRemarkPlugin]);

// \u4F7F\u7528
milkdown.use(remarkPlugin);
\`\`\`

---

## Prosemirror \u63D2\u4EF6

\u7528\u4E8E\u6DFB\u52A0 prosemirror \u63D2\u4EF6\u3002

\`\`\`typescript
import { prosePluginFactory } from '@milkdown/core';

// \u7B49\u540C\u4E8E
const prosePlugin = prosePluginFactory(someProsemirrorPlugin);

// \u591A\u4E2A
const prosePlugin = prosePluginFactory([someProsePlugin, someOtherProsePlugin]);

// \u4F7F\u7528
milkdown.use(prosePlugin);
\`\`\`
`;export{n as default};
