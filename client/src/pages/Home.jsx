import React, { useEffect, useState} from 'react';

import {Loader, Card, FormField} from '../components';

const RenderCards = ({ data, title}) => {
  if (data?.length > 0) 
  return data.map((post) => <Card key={post._id} {...post} />)

  return (
    <h2 className='mt-5 font-bold text-[#6449ff] text-xl uppercase'>{title}</h2>
  )
}

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch('https://airt.onrender.com/api/v1/post', {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
        })

        if (response.ok) {
          const result = await response.json();
          setAllPosts(result.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter((item) => item.name.toLowerCase()
        .includes(searchText.toLowerCase()) || item.prompt.toLowerCase()
        .includes(searchText.toLowerCase()));

        setSearchResults(searchResults);
      }, 500)
    );
  }

  return (
    <section className='max-w-7xl mx-auto bg-[#181818]'>
    <div>
      <h1 className='font-extrabold text-[#222328] text-[32px] '>
        Community Feed Showcase
      </h1>
      <p className='mt-2 text-[#EDEDED] text-[16px] max-w[500px]'>
        Browse though a collection of imaginative and visually stunning images shared with our community
      </p>
    </div>
    <div className='mt-16'>
      <FormField 
        labelName="Search Posts"
        type="text"
        name="text"
        placeholder="Eiffel Tower on a rainy day..."
        value={searchText}
        handleChange={handleSearchChange}
      />
    </div>
    <div className='mt-10'>
      {loading ? (
        <div className='flex justify-center items-center'>
          <Loader />
        </div>
      ) : (
        <>
          {searchText && (<h2 className='font-medium text-[#666e75] 
          text-xl mb-3'>
            Showing results for <span className='text-white'>
              {searchText}
            </span>
          </h2>
          )}
          <div className='bg-[#181818] grid lg:grid-cols-4 sm:grid-cols-3
           xs:grid-cols-2 grid-cols-1 gap-3'>
            {searchText ? (
              <RenderCards 
                data={searchResults}
                title="No search results found"
                />
            ) : (
              <RenderCards 
                data={allPosts}
                title="No posts found"
              />
            )}
          </div>
        </>
        )}
    </div>
    </section>
  )
}

export default Home
