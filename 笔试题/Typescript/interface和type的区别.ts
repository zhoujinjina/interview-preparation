// interface可以重复声明，type不行，继承方式不一样(interface和interface之间的继承,type和type之间）
// type使用交叉类型方式 &，interface使用extends实现。
// 在对象扩展的情况下，使用接口继承要比交叉类型的性能更好。建议使用interface来描述对象对外暴露的借口，
// 使用type将一组类型重命名(或对类型进行复杂编程)
interface iMan {
    name: string;
    age: number;
  }
  // 接口可以进行声明合并
  interface iMan {
    hobby: string;
  }
  
  type tMan = {
    name: string;
    age: number;
  };
  // type不能重复定义
  // type tMan = {}
  
  // 继承方式不同,接口继承使用extends
  interface iManPlus extends iMan {
    height: string;
  }
  // type继承使用&，又称交叉类型
  type tManPlus = { height: string } & tMan;
  
  const aMan: iManPlus = {
    name: "aa",
    age: 15,
    height: "175cm",
    hobby: "eat",
  };
  
  const bMan: tManPlus = {
    name: "bb",
    age: 15,
    height: "150cm",
  };
  
