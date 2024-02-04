import { getJson } from './shared/safe-fetch.js'
import { vectorDbUrl, collection } from './shared/settings.js'

console.log(await getJson(`${vectorDbUrl}/collections/${collection}/embeddings`))
