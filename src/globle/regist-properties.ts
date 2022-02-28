import {App} from 'vue'
import {formatUtcString} from '@/utils/dataFormat'
export function registProperties(app:App): void{
  app.config.globalProperties.$filters = {
    formatTime(value: string) {
      return formatUtcString(value)
    }
  }

} 