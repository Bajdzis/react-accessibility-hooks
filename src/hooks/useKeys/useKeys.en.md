# useKeys

hooks for handler keyboard events.

## usage

```jsx
const ESC_KEY = 27;

const HandleEscComponent= ({onEscPress}) => {
    useKeys([ESC_KEY], () => {
        alert('Esc pressed!');
    });
    return <div>...</div>;
};
```
