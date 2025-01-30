import React, { useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  content: string;
}

function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Customer Support',
      excerpt: 'Explore how AI is transforming the customer support landscape and what it means for businesses.',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
      date: 'March 15, 2024',
      readTime: '5 min read',
      content: `
        The landscape of customer support is undergoing a revolutionary transformation, driven by advances in artificial intelligence. This shift is not just about automation; it's about creating more meaningful and efficient customer interactions.

        Key Transformations:
        
        1. 24/7 Availability
        AI-powered assistants never sleep, providing instant support around the clock. This constant availability ensures that customers receive help whenever they need it, significantly improving satisfaction rates.

        2. Personalized Interactions
        Modern AI systems can analyze customer history and preferences to deliver tailored responses. This personalization makes each interaction more relevant and effective.

        3. Scalable Support
        AI enables businesses to handle thousands of customer queries simultaneously without compromising on quality. This scalability is particularly crucial during peak periods.

        4. Cost Efficiency
        While the initial investment in AI technology might be significant, the long-term cost savings in customer support operations are substantial. Businesses can redirect human resources to more complex tasks.

        The Future Outlook:
        As AI technology continues to evolve, we can expect even more sophisticated support solutions. The key will be finding the right balance between automated and human support to create the optimal customer experience.
      `
    },
    {
      id: '2',
      title: 'Building Better Customer Experiences',
      excerpt: 'Learn how to leverage AI chat assistants to create exceptional customer experiences.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80',
      date: 'March 10, 2024',
      readTime: '4 min read',
      content: `
        Creating exceptional customer experiences is no longer optional in today's competitive business landscape. AI chat assistants have emerged as a powerful tool in this endeavor.

        Essential Components:

        1. Instant Response Times
        Modern customers expect immediate responses. AI chat assistants can provide instant answers to common queries, significantly reducing wait times and improving customer satisfaction.

        2. Consistent Service Quality
        AI assistants maintain consistent service quality across all interactions. They don't have bad days or mood swings, ensuring reliable customer support.

        3. Data-Driven Insights
        Every interaction provides valuable data that can be analyzed to improve service quality. This continuous feedback loop helps businesses refine their support strategies.

        Implementation Strategies:

        1. Start with Common Queries
        Begin by programming your AI assistant to handle the most frequent customer questions. This addresses the majority of support needs efficiently.

        2. Develop Clear Escalation Paths
        Create smooth handoff processes for complex issues that require human intervention. This ensures customers always receive appropriate support.

        3. Regular Updates and Training
        Keep your AI assistant up-to-date with new information and continuously train it on new scenarios to improve its effectiveness.

        The impact of well-implemented AI chat assistants on customer experience can be transformative, leading to higher satisfaction rates and increased customer loyalty.
      `
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Blog</h1>
        
        {selectedPost ? (
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img 
              src={selectedPost.image}
              alt={selectedPost.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-8">
              <button 
                onClick={() => setSelectedPost(null)}
                className="text-cyan-500 mb-4 hover:text-cyan-600"
              >
                ← Back to all articles
              </button>
              <h2 className="text-3xl font-semibold mb-4">{selectedPost.title}</h2>
              <div className="flex items-center text-sm text-gray-500 mb-6">
                <span>{selectedPost.date}</span>
                <span className="mx-2">•</span>
                <span>{selectedPost.readTime}</span>
              </div>
              <div className="prose prose-lg max-w-none">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid gap-8">
            {blogPosts.map(post => (
              <article 
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedPost(post)}
              >
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Blog;