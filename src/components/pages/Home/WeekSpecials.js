import { Link } from 'react-router-dom';
import donerKebabImage from './assets/doner-kebab.jpg';
import turkishPizzaImage from './assets/turkish-pizza.jpg';
import baklavaImage from './assets/baklava.jpg';
import './WeekSpecials.css';
import pages from '../../../utils/pages';
import MealCard from './MealCard';

const meals = [
  {
    name: 'Turkish Pizza',
    image: turkishPizzaImage,
    price: '$10.00',
    description: `A delectable fusion of thin, crispy crust topped with savory minced meat, fresh vegetables, 
    and a blend of aromatic spices. Satisfy your taste buds with this mouthwatering delight 
    that will transport you to the vibrant streets of Turkey. `,
  },
  {
    name: 'Doner Kebab',
    image: donerKebabImage,
    price: '$5.00',
    description: `Succulent slices of seasoned meat are grilled to perfection, 
    served with fresh vegetables, and wrapped in warm, fluffy bread. 
    Experience an authentic culinary journey that's both delicious and satisfying.`,
  },
  {
    name: 'Baklava',
    image: baklavaImage,
    price: '$2.00',
    description: `Layers of delicate phyllo dough embrace a heavenly mix of honey-drenched nuts, 
    creating a symphony of flavors and textures in every bite. 
    Experience the essence of tradition and sweetness in this timeless treat.`,
  },
];

const WeekSpecials = () => {
  return (
    <section className="container grid week-specials">
      <div className="week-specials-header">
        <h2>This week specials!</h2>
        <Link className="button-primary" to={pages.get('orderOnline').path}>
          Online Menu
        </Link>
      </div>
      {meals.map((meal, index) => 
        <MealCard key={index} meal={meal} />
      )}
    </section>
  );
};

export default WeekSpecials;
