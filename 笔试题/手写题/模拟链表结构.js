class Node {
  constructor(data) {
    this.pre = null;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  //在链表尾部添加节点
  add(item) {
    let node = new Node(item);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.pre = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  //链表指定位置添加节点
  addAt(item,index){
    if(index<0)return
    let node=new Node(item)
    let current=this.head
    let count=1
    if(index==0){
        node.next=this.head
        this.head.pre=node
        this.head=node
    }else{
        let preNode;
        let nextNode;
        // index-1 index
        while(count<=index){
            current=current.next
            if(count==index-1){
                preNode=current
            }
            if(count==index){
                nextNode=current
            }
        }
        preNode.next=node
        node.pre=preNode
        node.next=nextNode
        nextNode.pre=node
    }

  }
  remove(item){
    let current=this.head
    while(current!==item){
        current=current.next
    }
    current.pre.next=current.next
    current.next.pre=current.pre
  }
  //移除指定位置的元素
  removeAt(index){
    if(index<0)return   
    let current=this.head
    let count=0
    if(index==0){
        this.head=current.next
    }else{
         while(count!=index){
            current=current.next
         }
         current.pre.next=current.next
         current.next.pre=current.pre
    }
  }
  //反转链表
  reverse(){
    let current=this.head
    let middle
    current.pre=current.next
    current.next=null
    current=current.next
    while(current){
        current.pre=middle
        current.pre=current.next
        current.next=middle
    }
  }
  swap(index1,index2){
    if(index1==index2)return
    if(index1>index2)return this.swap(index2,index1)
    let swap1,swap2,count=0
    let current=this.head
    while(count<=index2){
        if(count==index1){
            swap1=current
        }
        current=current.next
        count++
    }
    let swap1Pre,swap1Next
    swap1Pre=swap1.pre
    swap1Next=swap1.next
    swap1.pre=swap2.pre
    swap1.next=swap2.next
    swap2.pre=swap1Pre
    swap2.next=swap1Next
  }
}
