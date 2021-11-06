import { withScopeId, getCurrentInstance } from 'vue'
export default function () {
  const instance = getCurrentInstance()
  if (!instance) {
    return () => console.warn(`useScopeId is called without current active component instance.`)
  }
  const scopeId = (instance.type as any).__scopeId
  return withScopeId(scopeId)
}
