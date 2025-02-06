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
      name: 'longDescription',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              type: 'string',
              title: 'Question',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'placeholder',
              type: 'string',
              title: 'Placeholder',
            }),
          ],
        },
      ],
      title: 'Questions',
    }),
  ],
})