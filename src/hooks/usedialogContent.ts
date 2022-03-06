import { ref } from "vue";

type Callback = () => void
export function useDialogContent(editcb: Callback, newcb: Callback) {
  const centerDialogVisible = ref(false)

  const defaultValue = ref()
  //编辑按钮
  const fillUserInfo = (userInfo: Object) => {
    defaultValue.value = defaultValue
    centerDialogVisible.value = true
    editcb && editcb()
  }
  //新建按钮
  const createUserInfo = (dialogConfig: Object) => {
    defaultValue.value = {}
    centerDialogVisible.value = true
    newcb && newcb()
  }
  return [centerDialogVisible, fillUserInfo, createUserInfo, defaultValue]
}