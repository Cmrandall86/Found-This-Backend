export default {
    name: 'blogPost',
    title: 'Blog Post',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
      { name: 'description', title: 'Description', type: 'text' },
      { name: 'productLinks', title: 'Product Links', type: 'url' },
      { name: 'images', title: 'Images', type: 'array', of: [{ type: 'image' }] },
      { name: 'price', title: 'Price', type: 'number' },
      {
        name: 'author',
        title: 'Author',
        type: 'reference',
        to: [{ type: 'user' }],
      },
      { name: 'createdAt', title: 'Created At', type: 'datetime' },
      { name: 'updatedAt', title: 'Updated At', type: 'datetime' },
    ],
  };
  