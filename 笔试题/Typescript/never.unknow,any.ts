// any、unknown 、never
// any和unknown 在TS类型中属于最顶层的Top Type，即所有的类型都是它俩的子类型
// 而never则相反，它作为Bottom Type是所有类型的子类型。

// 常见的工具类型
// Partial：满足部分属性(一个都没满足也可)即可
// Required：所有属性都需要
// Readonly: 包装后的所有属性只读
// Pick: 选取部分属性
// Omit: 去除部分属性
// Pick: 选取部分属性
// Omit: 去除部分属性