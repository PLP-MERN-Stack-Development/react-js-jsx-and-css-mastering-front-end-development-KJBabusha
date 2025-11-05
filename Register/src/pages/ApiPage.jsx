import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../components/Button';
import Card from '../components/Card';

const ApiPage = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const POSTS_PER_PAGE = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${POSTS_PER_PAGE}`
        );
        
        if (response.data.length < POSTS_PER_PAGE) {
          setHasMore(false);
        }
        
        setPosts(prev => page === 1 ? response.data : [...prev, ...response.data]);
        setError(null);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const filteredPosts = posts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const loadMore = () => {
    setPage(prev => prev + 1);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">API Demo (JSONPlaceholder)</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Fetching posts from JSONPlaceholder API with search and infinite scroll
        </p>
        
        <div className="mb-6">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search posts..."
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
          />
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg dark:bg-red-900/30 dark:text-red-300">
            {error}
          </div>
        )}

        {loading && page === 1 && (
          <div className="flex justify-center py-8">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        <div className="space-y-4">
          {filteredPosts.map(post => (
            <Card key={post.id} className="p-4 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {post.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {post.body}
              </p>
            </Card>
          ))}
        </div>

        {loading && page > 1 && (
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        )}

        {!loading && hasMore && filteredPosts.length > 0 && (
          <div className="mt-6 flex justify-center">
            <Button onClick={loadMore} disabled={loading}>
              Load More
            </Button>
          </div>
        )}

        {!hasMore && page > 1 && (
          <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
            No more posts to load
          </p>
        )}

        {filteredPosts.length === 0 && !loading && searchTerm && (
          <p className="text-center text-gray-500 dark:text-gray-400 py-4">
            No posts found matching "{searchTerm}"
          </p>
        )}
      </Card>
    </div>
  );
};

export default ApiPage;