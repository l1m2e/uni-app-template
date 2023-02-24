/**
 * 生成响应式缓存 (使用了深层监听尽量少存储层级过多的数据)
 * @param key 储存在本地缓存中的key
 * @param data 存储的对象
 * @returns 返回一个ref
 */

export function useStorage<T>(key: string, data: T) {
  const reactiveData = ref<T>(data)

  if (uni.getStorageSync(key)) {
    reactiveData.value = JSON.parse(uni.getStorageSync(key))
  }

  watch(
    () => reactiveData.value,
    (v) => {
      uni.setStorageSync(key, JSON.stringify(v))
    },
    { deep: true },
  )

  return reactiveData
}
