`transition-duration` 属性用于指定 CSS 过渡效果的持续时间。它可以取以下值：

- `time`：指定以秒或毫秒为单位的过渡时间，例如 `1s` 或 `500ms`。如果未指定时间单位，则默认为秒。

- `0`：指定无过渡效果，即元素属性立即从一个值变为另一个值。

`transition-duration` 属性是 `transition` 属性的一部分，用于指定 CSS 过渡效果的持续时间。其他与 `transition` 属性相关的属性包括：

- `transition-property`：用于指定应该过渡的 CSS 属性的名称。

- `transition-timing-function`：用于指定过渡效果的时间曲线函数。

- `transition-delay`：用于指定过渡效果的延迟时间。

下面是一个示例代码，演示如何使用 `transition-duration` 属性实现一个平滑的背景颜色过渡效果：

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        background-color: #f00;
        transition-property: background-color;
        transition-duration: 1s;
      }

      .box:hover {
        background-color: #0f0;
      }
    </style>
  </head>
  <body>
    <div class="box">Hover over me</div>
  </body>
</html>
```

在上面的示例中，当鼠标悬停在 `.box` 元素上时，背景颜色将从红色平滑地过渡到绿色，持续时间为 1 秒。