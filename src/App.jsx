import { fetchPhotos, fetchVideos } from "./api/mediaApi";


const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY;
const PEXELS_KEY = import.meta.env.VITE_PEXELS_KEY;


const App = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <h1 className='text-3xl font-bold'>hello, world!</h1>

      <button 
      onClick={async()=>{
        const data = await fetchPhotos('cat');
        console.log(data.results);
      }}
      className="px-5 py-3 m-5 bg-green-300 "
      >
        Get Photos
        </button>

      <button 
      onClick={async()=>{
        const data = await fetchVideos('cat');
        console.log(data.videos);
      }}
      className="px-5 py-3 m-5 bg-green-300 "
      >
        Get Videos
        </button>
    </div>
  )
}

export default App