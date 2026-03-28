---
sidebar_position: 1
---

:::note

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::tip

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::info

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::warning

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

:::danger

Some **content** with _Markdown_ `syntax`. Check [this `api`](#).

:::

---

```js
console.log('每个仓库都应该有个吉祥物。');
```

```js
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return '这行被高亮了！';
  }

  return '这里不会';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return '这块被高亮了！';
  }
  // highlight-end

  return '这里不会';
}
```

```jsx showLineNumbers
import React from 'react';

export default function MyComponent(props) {
  return <div>Foo</div>;
}
```
---
## 二级标题

### 三级标题

### 四级标题

