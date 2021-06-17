import { ref } from "vue";

const showMenu = ref(false)

const setShowMenu = (val) => {
  showMenu.value = val
}

export {
  showMenu,
  setShowMenu
}