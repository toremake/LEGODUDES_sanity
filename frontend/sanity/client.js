import {createClient} from '@sanity/client'

export const client = createClient({
  projectId: "xbpab6cz",
  dataset: "production",
  useCdn: true,
  apiVersion: "2022-03-07"
})