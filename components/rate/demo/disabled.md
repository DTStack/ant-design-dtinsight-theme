---
order: 1
title:
  zh-CN: 仅展示
---

## zh-CN

仅展示，无法进行鼠标交互

```jsx
import { Rate } from 'antd';

const App = () => {
    return (
        <div>
            <Rate disabled value={3} />
            <br />
            <Rate disabled allowHalf value={3.5} />
        </div>
    );
}

ReactDOM.render(
    <App />,
    mountNode,
);
```
