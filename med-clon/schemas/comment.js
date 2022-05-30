export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'name',
      type: 'string',
    },
    {
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: "comments won't show on the site without approval",
    },
    {
      name: 'email',
      type: 'string',
      },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: {type: 'author'},
    },
    {
      name: 'comment',
      type: 'text',
    },
    {
      name: 'post',
      type: 'reference',
      to: [{type: 'post'}],
    },
    
  ],

};
