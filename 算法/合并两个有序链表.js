var mergeTwoLists = function (list1, list2) {
  if (list1 == null) {
    return list2;
  } else if (list2 == null) {
    return list1;
  } else if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list2.next, list1);
    return list2;
  }
};
