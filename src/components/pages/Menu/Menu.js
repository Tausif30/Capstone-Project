import baklava from './assets/baklava.jpg';
import donerKebab from './assets/doner-kebab.jpg'
import chickenBiryani from './assets/chicken-biryani.jpg'
import kavurma from './assets/kavurma.jpg'
import dolma from './assets/dolma.jpg'
import hummus from './assets/hummus.jpg'
import kofte from './assets/kofte.jpg'
import kunafa from './assets/kunafa.jpg'
import kazandibi from './assets/kazandibi.jpg'
import muttonBiryani from './assets/mutton-biryani.jpg'
import pide from './assets/turkish-pizza.jpg'
import pita from './assets/pita.jpeg'
import './Menu.css';
const Menu = () => {
  return (
      <>
      <div className="menu-header">
      <h2>Appetizers</h2>
    </div>
        <section className="menu-appetizers">
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={hummus} alt="Hummus" />
            </div>
            <div className="meal-card-header">
              <h3>Hummus</h3>
              <span>$2.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              A Middle Eastern delicacy made from pureed chickpeas, tahini, olive oil, lemon juice,
              and aromatic spices. Perfect as a dip for pita bread, veggie sticks, or a spread for sandwiches.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={pita} alt="Pita" />
            </div>
            <div className="meal-card-header">
              <h3>Pita Bread</h3>
              <span>$0.50</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              Soft and pocket-like, it's perfect for wrapping savory fillings or 
              dipping into hummus and other delicious spreads.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={dolma} alt="Dolma" />
            </div>
            <div className="meal-card-header">
              <h3>Dolma</h3>
              <span>$1.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              A regal culinary masterpiece fit for Ottoman Royals.
              Wrapped in tender grape leaves, our carefully crafted blend of seasoned rice, 
              savory herbs, and succulent spices delights the palate with every bite. 
              Experience the rich history with each bite.
              </p>
            </div>
          </article>
        </section>
        <div className="menu-header">
      <h2>Main Course</h2>
    </div>
        <section className="menu-main-course">
        <article className="meal-card">
            <div className="meal-card-image">
              <img src={chickenBiryani} alt="Chicken Biryani" />
            </div>
            <div className="meal-card-header">
              <h3>Chicken Biryani</h3>
              <span>$18.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              Savor tender, marinated chicken pieces cooked with fragrant basmati rice, 
              rich spices, and garnished with caramelized onions and fresh cilantro. 
              A true culinary delight that will transport your taste buds 
              to the heart of South-East Asia with every exquisite bite.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={muttonBiryani} alt="Mutton Biryani" />
            </div>
            <div className="meal-card-header">
              <h3>Mutton Biryani</h3>
              <span>$20.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              Succulent mutton pieces marinated in a melange of traditional spices, 
              layered with premium basmati rice, and slow-cooked to perfection. 
              This royal dish boasts rich flavors and enticing aromas 
              that promise an unforgettable dining experience.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={kofte} alt="Kofte" />
            </div>
            <div className="meal-card-header">
              <h3>Kofte</h3>
              <span>$8.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              These succulent, spiced meatballs are crafted with the finest ingredients, 
              expertly seasoned and cooked to perfection. 
              Served with a luscious blend of aromatic sauces and garnished with fresh herbs, 
              our Kofte dish promises to be a tantalizing treat for your taste buds. 
              Experience the perfect harmony of flavors in every bite
              </p>
            </div>
        </article>
        <article className="meal-card">
            <div className="meal-card-image">
              <img src={donerKebab} alt="Doner Kebab" />
            </div>
            <div className="meal-card-header">
              <h3>Doner Kebab</h3>
              <span>$5.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              Succulent slices of seasoned meat are grilled to perfection, served with fresh vegetables,
              and wrapped in warm, fluffy bread. Experience an authentic culinary journey
              that's both delicious and satisfying.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={pide} alt="Pide" />
            </div>
            <div className="meal-card-header">
              <h3>Pide</h3>
              <span>$9.50</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              A delectable fusion of thin, crispy crust topped with savory minced meat, fresh vegetables,
              and a blend of aromatic spices. Satisfy your taste buds with this mouthwatering delight
              that will transport you to the vibrant streets of Turkey.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={kavurma} alt="Kavurma" />
            </div>
            <div className="meal-card-header">
              <h3>Kavurma</h3>
              <span>$10.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              A traditional Turkish delight, Kavurma features tender, 
              slow-cooked pieces of succulent meat, infused with a medley of delightful spices. 
              The result is a rich, flavorsome dish that melts in your mouth, 
              offering an authentic taste of Turkey.
              </p>
            </div>
          </article>
        </section>

        <div className="menu-header">
      <h2>Dessert</h2>
    </div>
    <section className='menu-dessert'>
    <article className="meal-card">
            <div className="meal-card-image">
              <img src={baklava} alt="Baklava" />
            </div>
            <div className="meal-card-header">
              <h3>Baklava</h3>
              <span>$2.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
                Layers of delicate phyllo dough embrace a heavenly mix of honey-drenched nuts,
                creating a symphony of flavors and textures in every bite.
                Experience the essence of tradition and sweetness in this timeless treat.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={kunafa} alt="Kunafa" />
            </div>
            <div className="meal-card-header">
              <h3>Kunafa</h3>
              <span>$1.50</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              This classic Arabic dessert boasts layers of shredded, 
              buttery pastry filled with a sweet, gooey center of cheese or nuts, 
              all soaked in fragrant sugar syrup. Baked to golden perfection, 
              Kunafa is a sensory delight that captures the essence of traditional Middle Eastern flavors.
              </p>
            </div>
          </article>
          <article className="meal-card">
            <div className="meal-card-image">
              <img src={kazandibi} alt="Kazandibi" />
            </div>
            <div className="meal-card-header">
              <h3>Kazandibi</h3>
              <span>$2.00</span>
            </div>
            <div className="meal-card-body-footer">
              <p>
              Translating to "bottom of the pot," this creamy delicacy is crafted by
              caramelizing the milk's bottom layer to perfection.
              The result is a velvety, luscious texture, topped with a delightful hint of caramel.
              Immerse yourself in the sweet taste of tradition with every spoonful of Kazandibi.
              A true Turkish delight for your taste buds to relish.
              </p>
            </div>
          </article>
          
    </section>
      </>
  );
};

export default Menu;
