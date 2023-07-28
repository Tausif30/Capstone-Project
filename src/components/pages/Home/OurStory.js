import chefsCooking from './assets/chefs_a.jpg';
import chefCuttingKebab from './assets/chef_b.jpg';
import './OurStory.css';

const OurStory = () => {
  return (
    <section className="container grid our-story">
      <div className="our-story-description">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
        Introducing a culinary haven that combines the flavors of Mediterranean:
        our charming restaurant. Nestled in a rustic and inviting setting, 
        we offer a relaxed atmosphere where you can unwind and savor the best of Mediterranean cuisine. 
        With moderate prices, our doors are open for delightful meals throughout the day. 
        Embracing the essence of freshness, our menu rotates seasonally, 
        ensuring a constant stream of tantalizing dishes to captivate your taste buds. 
        Join us and embark on a gastronomic journey, where every visit promises a new and exciting culinary experience. 
        </p>
      </div>
      <div className="our-story-chefs">
        <img src={chefsCooking} alt="Chefs Cooking" />
        <img src={chefCuttingKebab} alt="A Chef Cutting a Kebab" />
      </div>
    </section>
  );
};

export default OurStory;
