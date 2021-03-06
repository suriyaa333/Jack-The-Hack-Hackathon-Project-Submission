var dishes = [
    {
        key:1, 
        name: "Butter Naan",
        cuisine: "indian",
        price: 200,
        vis_state: "nil",
        img_src: "https://www.cookwithmanali.com/wp-content/uploads/2014/11/Soft-Homemade-Naan.jpg",
        desc: "A leavened flat bread originating from northern India, which is traditionally baked by slapping the bread dough onto the side of a hot dome shaped clay oven referred to as a tandoor.",
    },
    {
        key:2,
        name: "Garlic Naan",
        cuisine: "indian",
        price: 250,
        vis_state: "nil",
        img_src: "https://www.cookwithmanali.com/wp-content/uploads/2018/09/Garlic-Naan-500x375.jpg",
        desc: "A leavened flat bread seasoned with Garlic originating from northern India, which is traditionally baked by slapping the bread dough onto the side of a hot dome shaped clay oven referred to as a tandoor."
    },
    {
        key:3,
        name: "Vegetable Samsosa", 
        cusine: "indian",
        price: 150,
        vis_state: "nil",
        img_src: "https://www.cookwithmanali.com/wp-content/uploads/2019/08/Homemade-Samosa-500x375.jpg",
        desc: "Samosas are a very popular traditional Indian Dish. Probably because samosas are a tasty, fried, or baked pastry with savory fillings.Spiced potatoes, onions, peas, and lentils fill traditional samosas. But sometimes, they are made with ground lamb, ground beef or ground chicken."
    },
    {
        key: 4, 
        name: "Matar Paneer",
        cuisine: "indian",
        price: 300,
        vis_state: "nil",
        img_src: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/03/matar-paneer.jpg",
        desc: "Matar paneer comes from regions of northern India. It’s made up of a yummy tomato sauce over paneer (farmer’s cheese) and peas, and spiced with garam masala.Like many Indian dishes, matar paneer is best when paired with a cooling side dish, like cream or bread.Depending on the region, it’s likely to be served with rice, naan, paratha, poori, or roti."
    },
    {
        key:5,
        name: "Chilaquiles",
        cuisine: "mexican",
        price: 500,
        vis_state: "nil",
        img_src: "https://www.chefspencil.com/wp-content/uploads/Chilaquiles-960x960.jpg.webp",
        desc: "Chilaquiles is definitely the most popular breakfast in the country. Made of triangular pieces of fried or toasted corn tortilla, called totopos, soaked in a red or green hot sauce, topped with shredded chicken, chorizo, shredded beef, and scrambled or sunny side up egg. ",
    },
    {
        key: 6, 
        name: "Tacos",
        cuisine: "mexican",
        price: 550,
        vis_state: "nil",
        img_src: "https://www.chefspencil.com/wp-content/uploads/Tacos-960x960.jpg.webp",
        desc: "Recognized as the most popular Mexican dish worldwide, the taco has become an art. Some say is the “art of eating with tortilla” and, of course, Mexicans would never deny a taco to anybody. Hundreds of fillings can be put on a corn tortilla! The most common are beef steak, flank steak, chorizo, offal, “al pastor”, hot and sweet marinated pork.",
    },
    {
        key:7, 
        name:"Burritos",
        cuisine: "mexican",
        price: 600,
        vis_state: "nil",
        img_src: "https://www.chefspencil.com/wp-content/uploads/Burritos-960x960.jpg.webp",
        desc: "This is very popular on the northern side of México, especially the states bordering the United States. A burrito is a cylindrically rolled flour tortilla stuffed with different ingredients of choice, often a stew. The most popular are the fried bean burrito with cheese and the machaca burrito. ",
    },
    {
        key: 8, 
        name: "Quesadilla",
        cuisine: "mexican",
        price: 650,
        vis_state: "nil",
        img_src: "https://www.verywellfit.com/thmb/lPqQF7L0DXy9bI9ubm8MNX6O7Aw=/500x350/filters:no_upscale():max_bytes(150000):strip_icc()/cheese-quesadilla-gourmet-on-a-wooden-table-1142721009-ae356093ed56464c881b0147a6924338.jpg",
        desc: "Quesadilla (Cheese-adilla) are corn or flour tortilla folded in half, stuffed with cheese or other ingredients, deep fried or grilled and eaten hot. ",
    },
    {
        key:9, 
        name: "Pasta",
        img_src: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F9%2F2020%2F09%2F17%2Fcream-tomato-rigatoni-FT-RECIPE1020.jpg",
        cuisine: "italian",
        price: 680,
        img_src: "https://www.vegrecipesofindia.com/wp-content/uploads/2021/05/arrabiata-pasta-2.jpg",
        desc: "Pasta is a type of food typically made from an unleavened dough of wheat flour mixed with water or eggs, and formed into sheets or other shapes, then cooked by boiling or baking.",
    },
    {
        key:10,
        name: "Lasagne",
        cuisine:"italian",
        price: 700,
        img_src: "https://www.kitchensanctuary.com/wp-content/uploads/2020/10/Lasagne-square-FS-79.jpg",
        desc: "Lasagne is an oven-baked pasta dish consisting of layers of sheet-shaped pasta alternated with a choice of the following ingredients and sauces: cheese and/or bechamel sauce, tomato sauce, various meats (usually ground beef or pork, or a combination of the two), vegetables (zucchini, spinach)."
    },
    {
        key:11,
        name: "Risotto",
        cuisine: "italian", 
        price: 750,
        img_src: "http://yourguidetoitaly.com/slowitaly/wp-content/uploads/2018/03/risotto-allo-zafferano.jpg",
        desc: "Risotto is a rice dish typically served as a primo (except in Milan where it is traditionally also served as a side dish with ossobucco, for example) and which can be flavored in a hundred different ways "
    },
    {
        key:12, 
        name: "Focaccia",
        cuisine: "italian",
        price: 720,
        img_src: "https://www.funfoodfrolic.com/wp-content/uploads/2020/03/Focaccia-Thumbnail.jpg",
        desc: "Focaccia is a kind of flat bread made in the much the same way as pizza, seasoned with olive oil, herbs, vegetables and/or cheese.",
    },
    {
        key: 13,
        name: "Kimchi",
        cuisine: "korean-BBQ",
        price: 1200,
        img_src: "https://www.seriouseats.com/thmb/mANmBYm-pJfwrwHksChVWur6w9w=/1500x1125/filters:fill(auto,1)/20210527-baechu-kimchi-vicky-wasik-seriouseats-seriouseats-3-18a2d6d7d1d74a7a82cb13ed350218be.jpg",
        desc: "Dating to the Silla Dynasty (around 2,000 years ago), kimchi is the beloved spicy sidekick at every Korean table. It's made by salting and preserving fermented cabbage in a bed of pepper, garlic, ginger and scallion.",
    },
    {
        key:14, 
        name: "Tteokbokki",
        cuisine: "korean-BBQ",
        price: 1300,
        img_src: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F181115110106-korean-food131201112017k-tteokbokki.jpg",
        desc: "This iconic red-orange street food is so popular there's an entire part of Seoul just devoted to the steamed and sliced rice cakes (tteok), cooked with fish cakes (oden) and scallions in a sweet and spicy sauce made of chili paste.",
    },
    {
        key: 15,
        name: "Bibimbap",
        cuisine: "korean-BBQ",
        price: 1400,
        img_src: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F150813135423-korea-food-map-bibimbap.jpg",
        desc: "This Korean lunch-in-a-bowl mixes together a simple salad of rice, mixed vegetables, rice, beef, and egg, with sesame oil and a dollop of chili paste for seasoning.",
    },
    {
        key:16,
        name: "Hobakjuk",
        cuisine: "korean-BBQ",
        price: 450,
        img_src: "https://dynaimage.cdn.cnn.com/cnn/q_auto,w_634,c_fill,g_auto,h_357,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F170508175843-korean-food---hobakjuk.jpg",
        desc: "This viscous, yellow-orange juk, or porridge, gets its distinctive color and flavor from the pumpkin, its namesake and its main ingredient. ",
    },
    {
        key:17,
        name: "Huǒguō",
        cuisine: "chinese",
        price: 500,
        img_src: "https://images.chinahighlights.com/allpicture/2019/01/482fb1f829ce4e6496b94fea_894x596.webp",
        desc: "Normally you get to choose your own broth flavor, such as mushroom, tomato, original, or spicy. But still, the flavor can be different according to the sauce you choose to go with the meat.",
    },
    {
        key:18,
        name: "Sichuan Pork",
        cuisine: "chinese",
        price: 1500,
        img_src: "https://images.chinahighlights.com/allpicture/2019/11/7b3afb974d7946bbbe397f7c_894x670.webp",
        desc: "ather than cooking pork by stir-frying or deep-frying, which consumes lots of oil and can very easily overcook the pork, it is boiled in water with a coating made from egg-white and starch to preserve its freshness",
    },
    {
        key:19,
        name: "Dumplings",
        cuisine:"chinese",
        price: 1750,
        img_src: "https://images.chinahighlights.com/allpicture/2019/01/9b7159f6d89449d997eaa5ab_894x596.webp",
        desc: "Dumplings (饺子 jiǎozi) consist of minced meat and chopped vegetables wrapped in a thin dough skin. With a long history of more than 1,800 years, dumplings are a traditional food widely popular in North China.",
    },
    {
        key:20,
        name: "Chow Mein",
        cuisine: "chinese",
        price: 1800,
        img_src: "https://images.chinahighlights.com/allpicture/2018/03/10725167158a4b8589bf3140_894x596.webp",
        desc: "(炒面 chǎomiàn) is the Cantonese pronunciation of the Chinese characters above, which means stir-fried noodles.",
    },
    {
        key:21,
        name: "Sushi",
        cuisine: "japanese",
        price: 1890,
        img_src: "https://images.japancentre.com/page_elements/image1s/1513/original/sushi-bars-best-japanese-food.jpg?1470240553",
        desc: "Sushi is one of the first foods that spring to mind when we think about Japanese cuisine. ",
    },
    {
        key: 22,
        name: "Tofu",
        cuisine: "japanese",
        price: 2000,
        img_src: "https://images.japancentre.com/page_elements/image1s/1515/original/tofu-bean-curd.jpg?1470240775",
        desc: "it is soy milk that has been coagulated, with the resulting curds being pressed into blocks. These blocks come in differing levels of firmness, and can be eaten uncooked ",
    },
    {
        key: 23,
        name: "Yakitori",
        cusine: "japanese",
        price: 2200,
        img_src: "https://images.japancentre.com/page_elements/image1s/1517/original/yakitori-japanese-skewered-chicken.jpg?1470241052",
        desc: "With a name literally meaning ‘barbecued chicken’, yakitori are small skewers of bite-size chicken pieces seasoned with salt or brushed with a sauce",
    },
    {
        key: 24,
        name: "Ramen",
        cuisine: "japanese",
        price: 2400,
        img_src: "https://images.japancentre.com/page_elements/image1s/1519/original/japanese-ramen-noodles.jpg?1470241233",
        desc: "Ramen is one of present-day Japan’s absolute favourite delicacies, costing very little and being widely available in restaurants and ramen bars (which are on almost every street corner)."
    }
]
export default dishes;