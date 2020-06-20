import { createClient } from 'contentful'

const client = createClient({
  space: 'qq8uk5lx9unn',
  accessToken: 'npSPU8I3czAvkHA-bzUrOGCRzOYMryYsvCDhS4BRhZ4',
})

const renderAsset = (fields) => {
  console.log(fields.file)
  return { title: fields.title, file: fields.file }
}

const renderAssets = (assets) => {
  return assets.map((asset) => renderAsset(asset.fields))
}

const renderEntry = (entry) => {
  return {
    id: entry.sys.id,
    name: entry.fields.name,
    description: entry.fields.description,
    price: entry.fields.price,
    rating: entry.fields.rating,
    slug: entry.fields.slug,
    photos: renderAssets(entry.fields.photos),
  }
}

export const cupcakes = async () => {
  const response = await client.getEntries({
    content_type: 'cupcake',
    limit: 1000,
    order: 'fields.name',
  })

  return response.items.map((entry) => renderEntry(entry))
}

export const cupcake = async ({ id }) => {
  const entry = await client.getEntry(id)

  return renderEntry(entry)
}
