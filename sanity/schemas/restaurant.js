import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Restaurant name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'short_description',
      type: 'string',
      title: 'Short description',
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image of restaurant',
    }),
    defineField({
      name: 'lat',
      type: 'number',
      title: 'Latitude of restaurant',
    }),
    defineField({
      name: 'long',
      type: 'number',
      title: 'Longitude of restaurant',
    }),
    defineField({
      name: 'address',
      type: 'string',
      title: 'Restaurant address',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'rating',
      type: 'number',
      title: 'Enter number between 1 to 5',
      validation: (Rule) => Rule.min(1).max(5).error('Please enter value between 1 to 5'),
    }),
    defineField({
      name: 'type',
      title: 'Category',
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: 'category'}],
    }),
    defineField({
      name: 'dishes',
      type: 'array',
      title: 'Dishes',
      of: [{type: 'reference', to: [{type: 'dish'}]}],
    }),
  ],
})
