
export function useFlexibleBlocks(blocksRef) {
  return computed(() => removeEmptyBlocks(blocksRef.value || []))
}
