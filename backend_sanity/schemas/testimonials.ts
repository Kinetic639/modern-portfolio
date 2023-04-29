export default {
  name: 'Testimonials',
  title: '',
  type: 'document',
  fields: [
    {name: 'name', title: 'Name', type: 'string'},
    {name: 'company', title: 'Company', type: 'string'},
    {
      name: 'imageUrl',
      title: 'imgURL',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {name: 'feedback', title: 'feedback', type: 'string'},
  ],
}
