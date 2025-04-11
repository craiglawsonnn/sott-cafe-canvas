
import React from 'react';

const menuItems = [
  {
    category: "Coffee",
    items: [
      { name: "Espresso", description: "Pure and intense", price: "10 zł" },
      { name: "Flat White", description: "Smooth and velvety", price: "14 zł" },
      { name: "Filter Coffee", description: "Delicate and aromatic", price: "12 zł" },
      { name: "Cappuccino", description: "Classic Italian recipe", price: "13 zł" }
    ]
  },
  {
    category: "Bakery",
    items: [
      { name: "Sourdough Bread", description: "Naturally leavened for 24 hours", price: "18 zł" },
      { name: "Croissant", description: "Buttery and flaky", price: "9 zł" },
      { name: "Cinnamon Roll", description: "Freshly baked daily", price: "11 zł" },
      { name: "Pain au Chocolat", description: "Rich chocolate center", price: "10 zł" }
    ]
  }
];

const Menu: React.FC = () => {
  return (
    <section id="menu" className="section">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Our Menu</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A thoughtfully curated selection of handcrafted coffee and freshly baked goods, made with love and the finest ingredients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {menuItems.map((category) => (
            <div key={category.category}>
              <h3 className="text-2xl font-serif mb-6 text-accent">{category.category}</h3>
              <div className="space-y-8">
                {category.items.map((item) => (
                  <div key={item.name} className="flex justify-between border-b border-primary/20 pb-4">
                    <div>
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-foreground/60">{item.description}</p>
                    </div>
                    <p className="font-serif">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foreground/70 italic mb-4">
            Our menu changes seasonally to feature the freshest ingredients
          </p>
          <a href="#" className="btn-primary">View Full Menu</a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
