export default {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      { name: 'username', title: 'Username', type: 'string' },
      { name: 'email', title: 'Email', type: 'string' },
      { name: 'password', title: 'Password', type: 'string' }, // Note: Use hashed passwords in production
      { name: 'profilePicture', title: 'Profile Picture', type: 'image' },
      { name: 'bio', title: 'Bio', type: 'text' },
    ],
  };
  