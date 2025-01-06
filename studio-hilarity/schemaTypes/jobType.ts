import {defineField, defineType} from 'sanity'

export const jobType = defineType({
  name: 'job',
  title: 'Job',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'description',
        type: 'string',
        validation: (rule) => rule.required(),
    }),
    defineField({
        name: 'url',
        type: 'url',
        validation: (rule) => rule.required()
    })
  ],
})