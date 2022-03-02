import {ref} from 'vue'
import pageContent  from "@/components/pageContent/pageContent.vue";
export function  usePageSearch() {
  const pageContentRef = ref<InstanceType<typeof pageContent>>()
  const searchContent = (queryInfo: any) => {
    pageContentRef.value?.getStoreContent(queryInfo)
  }
  const resetContent = () => {
    pageContentRef.value?.getStoreContent()
  }
  return [pageContentRef, searchContent, resetContent]
}