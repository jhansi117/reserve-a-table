import React from "react";
import "./Menu.css"; // Create a CSS file for styling

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Spaghetti Carbonara",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/800px-Espaguetis_carbonara.jpg",
      price: 12.99,
      description:
        "Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      image:
        "https://www.foodandwine.com/thmb/7BpSJWDh1s-2M2ooRPHoy07apq4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/mozzarella-pizza-margherita-FT-RECIPE0621-11fa41ceb1a5465d9036a23da87dd3d4.jpg",
      price: 10.99,
      description:
        "A simple and fresh pizza topped with mozzarella, tomatoes, and basil.",
    },
    {
      id: 3,
      name: "Caesar Salad",
      image:
        "https://t4.ftcdn.net/jpg/02/02/48/35/360_F_202483549_3cDh8uaQ5OJG9GUDsp9YKSQNt69rjucc.jpg",
      price: 8.99,
      description:
        "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan.",
    },
    {
      id: 4,
      name: "Tiramisu",
      image: "https://images5.alphacoders.com/431/thumb-1920-431638.jpg",
      price: 6.99,
      description:
        "A rich coffee-flavored Italian dessert layered with mascarpone and cocoa.",
    },
    {
      id: 5,
      name: "Grilled Salmon",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiCTD4GCPIFbSAIgCjNzGG_cSZl_4LMM9_Lg&s",
      price: 15.99,
      description:
        "Perfectly grilled salmon fillet served with lemon and herbs.",
    },
    {
      id: 6,
      name: "Chicken Alfredo",
      image:
        "https://www.budgetbytes.com/wp-content/uploads/2022/07/Chicken-Alfredo-above.jpg",
      price: 13.99,
      description:
        "Creamy pasta with tender chicken, garlic, and parmesan cheese.",
    },
    {
      id: 7,
      name: "Mushroom Risotto",
      image:
        "https://assets.epicurious.com/photos/5c191ba2b950cf635908c333/16:9/w_1712,h_963,c_limit/Oven-Risotto-with-Mushrooms-recipe-13122018.jpg",
      price: 11.99,
      description: "Creamy Italian risotto with wild mushrooms and parmesan.",
    },
    {
      id: 8,
      name: "Caprese Salad",
      image:
        "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
      price: 7.99,
      description:
        "Fresh tomatoes, mozzarella, and basil drizzled with olive oil and balsamic.",
    },
    {
      id: 9,
      name: "Lamb Chops",
      image:
        "https://www.healthyseasonalrecipes.com/wp-content/uploads/2023/03/garlic-herb-lamb-loin-chops-sq-011-640x480.jpg",
      price: 18.99,
      description:
        "Tender lamb chops grilled to perfection with rosemary and garlic.",
    },
    {
      id: 10,
      name: "Shrimp Scampi",
      image:
        "https://www.wholesomeyum.com/wp-content/uploads/2020/04/wholesomeyum-Shrimp-Scampi-6.jpg",
      price: 14.99,
      description:
        "Garlicky shrimp sautéed in butter and served with pasta or couscous.",
    },
    {
      id: 11,
      name: "Eggplant Parmesan",
      image:
        "https://www.eatingwell.com/thmb/AADqyJzanmxhohPE6ieAi4okuQo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Extra-CrispyEggplantParmesan-Beauty-01-89d65a140a3640e3aba7b80ad8865dba.jpg",
      price: 12.49,
      description:
        "Baked layers of eggplant, marinara sauce, and melted mozzarella.",
    },
    {
      id: 12,
      name: "French Onion Soup",
      image:
        "https://assets.bonappetit.com/photos/5c634f0d050c433e0a336d6a/1:1/w_2560%2Cc_limit/healthyish-french-onion-horizontal.jpg",
      price: 6.99,
      description:
        "Savory broth with caramelized onions, topped with cheese and croutons.",
    },
    {
      id: 13,
      name: "Ratatouille",
      image:
        "https://www.howtocook.recipes/wp-content/uploads/2021/05/Ratatouille-recipe.jpg",
      price: 9.99,
      description:
        "Traditional French dish of stewed vegetables, including zucchini and eggplant.",
    },
    {
      id: 14,
      name: "Beef Stroganoff",
      image:
        "https://www.foodandwine.com/thmb/YlvSkk7fsIGE8ywW-bT7Pal9Wh8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-beef-stroganoff-hero-06-5dc1fb98ed9f4eea97bab613d212eead.jpg",
      price: 14.49,
      description:
        "Tender beef in a creamy mushroom sauce, served with egg noodles.",
    },
    {
      id: 15,
      name: "Chicken Tikka Masala",
      image:
        "https://www.shemins.com/wp-content/uploads/2017/03/shemins-chicken-tikka-masala-LR-1280x1280.jpg",
      price: 13.99,
      description:
        "Grilled chicken simmered in a rich, spiced tomato and cream sauce.",
    },
    {
      id: 16,
      name: "Panna Cotta",
      image:
        "https://static01.nyt.com/images/2023/08/10/multimedia/LH-Panna-Cotta-wczm/LH-Panna-Cotta-wczm-superJumbo.jpg",
      price: 5.99,
      description: "Silky smooth Italian dessert topped with fresh berries.",
    },
    {
      id: 17,
      name: "Baked Ziti",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/99/Baked_Ziti.jpg",
      price: 11.99,
      description:
        "Ziti pasta baked with marinara sauce, ricotta, and mozzarella cheese.",
    },
    {
      id: 18,
      name: "Greek Salad",
      image:
        "https://www.southernliving.com/thmb/8M7xjBXyPtC8dkf8JWMSRo4fbZo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Greek-Salad-With-Baked-Feta-Batch59-Beauty-03-8a9f6350bdb04f2f848741fd87bf029a.jpg",
      price: 8.49,
      description:
        "Fresh cucumbers, tomatoes, olives, and feta cheese with olive oil.",
    },
    {
      id: 19,
      name: "Lobster Bisque",
      image:
        "https://drivemehungry.com/wp-content/uploads/2023/10/lobster-bisque-17.jpg",
      price: 9.99,
      description: "Creamy, rich soup made with lobster meat and sherry.",
    },
    {
      id: 20,
      name: "Chocolate Lava Cake",
      image:
        "https://www.allrecipes.com/thmb/J0D_WQYOGJs3PpuDqqconBr0efI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/7272577-67dd531d7b4a48dbb254dcdaafa658d4.jpg",
      price: 7.49,
      description:
        "Warm chocolate cake with a gooey molten center, served with vanilla ice cream.",
    },
    {
      id: 21,
      name: "Vegetable Lasagna",
      image:
        "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg",
      price: 11.99,
      description:
        "Layers of pasta, vegetables, ricotta, and mozzarella baked to perfection.",
    },
    {
      id: 22,
      name: "Paneer Butter Masala",
      image:
        "https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2.jpg",
      price: 12.99,
      description:
        "Cottage cheese cubes simmered in a rich tomato and butter sauce, served with naan.",
    },
    {
      id: 23,
      name: "Mushroom Stir-Fry",
      image:
        "https://www.allrecipes.com/thmb/jxoapnx3xsFKCxWFPLR_K1jEqOc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/4x3-PASSANO_ALR1122_InSeason_BUBBLES_ONLY_3125-3e8232f903f24d66af0b06167b73b1f4.jpg",
      price: 9.99,
      description:
        "Sautéed mushrooms, bell peppers, and broccoli in a savory soy sauce glaze.",
    },
    {
      id: 24,
      name: "Falafel Wrap",
      image:
        "https://recipes.timesofindia.com/thumb/62708678.cms?width=1200&height=900",
      price: 8.99,
      description:
        "Crispy falafel, fresh veggies, and tahini sauce wrapped in a warm pita.",
    },
    {
      id: 25,
      name: "Vegetarian Paella",
      image:
        "https://realfood.tesco.com/media/images/1400x919Vegetablepaellarecipe-9e034e9a-478a-4ee9-8d7a-5c4229c206eb-0-1400x919.jpg",
      price: 13.49,
      description:
        "Traditional Spanish rice dish made with a medley of vegetables and saffron.",
    },
    {
      id: 26,
      name: "Aloo Gobi",
      image:
        "https://static01.nyt.com/images/2023/12/21/multimedia/ND-Aloo-Gobi-gkwc/ND-Aloo-Gobi-gkwc-square640.jpg",
      price: 10.99,
      description:
        "A fragrant Indian curry made with potatoes, cauliflower, and spices.",
    },
    {
      id: 27,
      name: "Stuffed Bell Peppers",
      image:
        "https://www.allrecipes.com/thmb/eBsB2933MCuNVCim4O-AyCR97YE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/79805-StuffedPeppersWithturkeyAndVegtables-MFS-2x3-0048-444ecb49b0184daab29e5326e4330af3.jpg",
      price: 9.99,
      description:
        "Bell peppers stuffed with rice, vegetables, and herbs, baked to perfection.",
    },
    {
      id: 28,
      name: "Vegetable Biryani",
      image:
        "https://images.getrecipekit.com/20211124220241-veg-20biryani.jpg?aspect_ratio=1:1&quality=90&auto_optimize=medium",
      price: 12.49,
      description:
        "Aromatic basmati rice cooked with mixed vegetables, spices, and herbs.",
    },
    {
      id: 29,
      name: "Caprese Panini",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJceCd_9CWRPuL69xPzxcOk00mO6_o4y1Evg&s",
      price: 7.99,
      description:
        "Grilled panini with mozzarella, tomatoes, basil, and balsamic glaze.",
    },
    {
      id: 30,
      name: "Vegetable Samosas",
      image:
        "https://www.kitchensanctuary.com/wp-content/uploads/2023/10/Samosa-square-FS-500x500.jpg",
      price: 6.99,
      description:
        "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
    },
  ];

  return (
    <div className="menu-container">
      <h2 className="menu-heading">Menu</h2>
      <div className="menu-grid">
        {menuItems.map((item) => (
          <div className="menu-item" key={item.id}>
            <img src={item.image} alt={item.name} className="menu-image" />
            <h3 className="menu-name">{item.name}</h3>
            <p className="menu-price">${item.price.toFixed(2)}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
