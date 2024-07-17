export const useCacheViewsStore = defineStore('cacheViews', () => {
  const cacheViews = ref<string[]>([])

  const addCacheViews = (view: any) => {
    if (view.meta?.noCache) {
      return
    }

    if (!cacheViews.value.includes(view.name)) {
      cacheViews.value.push(view.name)
    }
  }

  return {
    cacheViews,
    addCacheViews,
  }
})
