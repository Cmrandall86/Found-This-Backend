export default {
    name: 'feedback',
    title: 'Feedback',
    type: 'document',
    fields: [
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      { name: 'commentText', title: 'Comment Text', type: 'text' },
      {
        name: 'blogPost',
        title: 'Blog Post',
        type: 'reference',
        to: [{ type: 'blogPost' }],
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
    ],
  };