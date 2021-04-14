
import './App.css';
import { Ratings } from './data/Ratings';
import Ratingstar from './component/Ratingstar';
import { Reviewers } from './data/Reviewers';
import Reviews from './component/Reviews';
import Header from './component/Header';

function App() {
    return (
        
        <div className='container p-3 p-lg-5 pattern py-lg-0'>
            <Header />
            <section className="col-lg-7 d-lg-inline-block">
            {Ratings.map((rating) => {
                return <Ratingstar key={rating.id} name={rating.name} rate={rating.rate} id={rating.id}/>
            })}
            </section>
            <section className="d-lg-flex flex-row">
            {Reviewers.map((reviewer) => {
                return <Reviews key={reviewer.id} {...reviewer}/>
            })}
                </section>
        </div>
  );
}

export default App;
