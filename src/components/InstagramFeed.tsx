
import React from 'react';
import { Instagram } from 'lucide-react';

const InstagramFeed: React.FC = () => {
  // In a real implementation, this would be fetched from Instagram's API
  // For this demo, we'll use placeholder images
  const mockInstagramPosts = [
    {
      id: 'post1',
      imageUrl: '/placeholder.svg',
      likes: 124,
      comments: 12,
      caption: 'Fresh morning pastries ready for our guests.'
    },
    {
      id: 'post2',
      imageUrl: '/placeholder.svg',
      likes: 98,
      comments: 8,
      caption: 'Our signature latte art.'
    },
    {
      id: 'post3',
      imageUrl: '/placeholder.svg',
      likes: 156,
      comments: 15,
      caption: 'Behind the scenes: bread in the oven.'
    },
    {
      id: 'post4',
      imageUrl: '/placeholder.svg',
      likes: 87,
      comments: 7,
      caption: 'Cozy corner of our café on a rainy day.'
    }
  ];

  return (
    <section className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Follow Our Journey</h2>
          <div className="flex items-center justify-center gap-2">
            <Instagram size={24} className="text-accent" />
            <a 
              href="https://www.instagram.com/sott.cafe.bakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-accent hover:underline"
            >
              @sott.cafe.bakery
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6">
          {mockInstagramPosts.map((post) => (
            <a 
              key={post.id}
              href="https://www.instagram.com/sott.cafe.bakery" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden"
            >
              <img 
                src={post.imageUrl} 
                alt={post.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 image-filter"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/70 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <div className="text-white text-center p-4">
                  <p className="text-sm md:text-base font-medium mb-2 line-clamp-2">{post.caption}</p>
                  <div className="flex justify-center gap-4 text-sm">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments}</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <a 
            href="https://www.instagram.com/sott.cafe.bakery" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            View More on Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
