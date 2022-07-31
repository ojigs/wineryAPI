const express = require('express')
const app = express()
const cors = require('cors')
const { response } = require('express')
const PORT = 3000

app.use(cors())

const wines = {
    'black box merlot': {
        brand: 'Black Box Wines',
        type: 'Red wine',
        variety: 'Merlot',
        alcoholByVol: '14%',
        body: 'Medium',
        description: 'Merlot from Black Box Wines has scents of leathery plums and cinnamon-spiced wood. Smooth, medium-bodied, and aged-textured on the palate, with delicious red currant flavors. It has a lengthy, warm aftertaste with resolved tannins. The acidity of this Merlot allows for a wide range of meal pairings.'
    },

    'conundrum red blend': {
        brand: 'Conundrum',
        type: 'Red wine',
        variety: 'Red blend',
        alcoholByVol: '14.3%',
        body: 'Medium',
        description: "Conundrum Red is a blend of dark red varietals such as Petite Sirah, Zinfandel, and Cabernet Sauvignon sourced from renowned California winegrowing regions. It's full of depth, complexity, and accessibility. This wine has small tannins that give it a silky smoothness, with aromas of cherries and baked chocolate. Conundrum Red can be served cold to accentuate the fruit profile and enjoyed at any time of year. "
    },

    'bonterra organic cabernet sauvignon': {
        brand: 'Bonterra',
        type: 'Red wine',
        variety: 'Cabernet Sauvignon',
        alcoholByVol: '14%',
        body: 'Full bodied',
        description: "Bright cherry, currant, and raspberry scents mingle with toasted wood and vanilla flavors in this Cabernet. There are flavors of cherry and currant in the glass, as well as a long and thoughtful finish. A wine with good structure, modest weight, refined tannins, and well-balanced acidity promises to be even more enjoyable in the future. "
    },

    'hahn pinot noir': {
        brand: 'Hahn',
        type: 'Red wine',
        variety: 'Pinot Noir',
        alcoholByVol: '14.5%',
        body: 'Light',
        description: "The fragrance of the Hahn Pinot Noir is enticing, with notes of vivid red cherry, red plum, and a hint of spices, as well as somewhat toasted notes. Medium silky tannins with a smooth, round mouthfeel and earthy flavors on the palate. "
    },

    'catena zapata malbec argentino': {
        brand: 'Catena Zapata',
        type: 'Red wine',
        variety: 'Malbec',
        alcoholByVol: '13.5%',
        body: 'Full bodied',
        description: "The Catena Zapata Malbec Argentino 2008 has a rich violet hue with cassis, chocolate, and clove on the aroma, as well as a strong impression of soil tones. On the one hand, it blends solidity and sweetness with gripping, faintly saline flavors of tobacco, dark berries, spices, and minerals; on the other, it has a palate-staining finish dominated by delicious black and blue fruits. "
    },

    'butter chardonnay': {
        brand: 'JaM Cellars',
        type: 'White wine',
        variety: 'Chardonnay',
        alcoholByVol: '14.8%',
        body: 'Full bodied',
        description: "Butter Chardonnay is a creamy, rich, and robust Chardonnay. The grapes we choose are juicy, luscious, and overflowing with flavor, and are made in the tradition of exceptional Californian winemaking. This easy-to-love Chardonnay is cold fermented to a luscious creaminess and aged in our proprietary oak blend. Stone fruit and baked-lemon aromas abound in this butter, which has a beautiful, lengthy vanilla finish. To put it another way, it melts in your tongue! "
    },

    'decoy sonoma county sauvignon blanc': {
        brand: 'Decoy Wines',
        type: 'White wine',
        variety: 'Sauvignon blanc',
        alcoholByVol: '13.9%',
        body: 'Light',
        description: "This intriguing Sauvignon Blanc is fermented entirely in stainless steel and features vibrant citrus and stone fruit notes, as well as crisp acidity that takes the wine to a bright and lively finish. Wine Enthusiast gives it 90 points (v.18) "
    },

    "risata moscato d'asti": {
        brand: 'Risata',
        type: 'White wine',
        variety: 'Moscato',
        alcoholByVol: '5.5%',
        body: 'Light',
        description: "Fresh, aromatic, and frizzante, Risata Moscato d'Asti has bright flavors and aromas of ripe stone fruit, tangerines, and honey. The wine is robust and delicious, but not excessively thick or heavy; sweet but not overpowering. Risata Wines Information Risata Moscato d'Asti is the most popular Moscato d'Asti in the United States (yeah, we're that awesome!). Risata Wines are super-premium, yet affordable, and are the perfect accompaniment for any get-together. Delicious on their own or combined into tempting cocktails, Risata Wines are the perfect companion for any get-together."
    },

    'lightwell survey goodbye horses': {
        brand: 'Lightwell',
        type: 'White wine',
        variety: 'Riesling',
        alcoholByVol: '10.9%',
        body: 'Light',
        description: "This one makes the acid jittery. Y'all, peel your wigs back acid. Zingy, zingy, zingy, zingy, zingy, zingy, zingy, zingy, zingy, zingy, This wine yells, sings, and shatters glasses. It'll keep you wanting more like crunching hippy crystals between your teeth. "
    },

    'conundrum white blend': {
        brand: 'Conundrum',
        type: 'White wine',
        variety: 'White blend',
        alcoholByVol: '13.4%',
        body: 'Light',
        description: "When Conundrum White was launched in 1989, blending wines was practically unimaginable, setting off a trend that has continued to this day. This wine, which has a devoted and ever-growing fanbase, continues to be as innovative as ever. Every vintage comprises Chardonnay, Sauvignon Blanc, Semillon, Muscat Canelli, and Viognier, though the exact composition is kept under wraps. With fascinating tropical flavors and natural acidity, Conundrum White is incredibly adaptable. It's best to serve chilled. "
    },

    'moet & chandon impérial brut champagne': {
        brand: 'Moët & Chandon Champagne',
        type: 'Sparkling wine',
        variety: 'Champagne',
        alcoholByVol: '12%',
        body: 'Light',
        description: "The iconic champagne of the House is Mot Impérial. It was created in 1869 and represents the distinct Mot & Chandon style, which is defined by its brilliant fruitiness, sensuous palate, and graceful maturity. Color: Golden straw yellow with hints of green Bouquet: Green apple and citrus fruit with a vibrant intensity; fresh mineral nuances and white blossoms; delicate blonde brioche and crisp nut notes Palate: Brilliant citrus fruit and fresh white-fleshed fruits (pear, peach, apple) are given to life by delicate, energetic bubbles and a bright finish. "
    },

    'dom perignon vintage champagne': {
        brand: 'Don Perigon',
        type: 'Sparkling wine',
        variety: 'Champagne',
        alcoholByVol: '12.5%',
        body: 'Light',
        description: "The Dom Pérignon is a stunning, sensual Champagne that will drink beautifully right away. Despite the fact that Dom Pérignon's warm, generous nature is fairly gracious, there is plenty of depth behind the fruit. It seems to have acquired more strength and width with each subsequent tasting, especially on the finish. Above all, for a warm, bright vintage, the is extremely restrained. It's neither blatantly showy nor phenolically powerful. Instead, it's a perfectly balanced Champagne with all of its components in their proper places."
    },

    'don perigon': {
        brand: 'Don Perigon',
        type: 'Red wine',
        variety: 'Merlot',
        alcoholByVol: '14%',
        body: 'Full bodied',
        description: "fruity, spicy, very soft, less tannic than cabernet sauvignon"
    },

    'chandon rose sparkling': {
        brand: '',
        type: 'Sparkling wine',
        variety: 'Sparkling rose wine',
        alcoholByVol: '13%',
        body: 'Light',
        description: "It's a love tale between delicate, crisp Chardonnay and Pinot Noir, selected at greater ripeness for deep fruit taste and a lovely pink tint, and made with the same three noble grape varietals used in Champagne."
    },

    'friexenet prosecco': {
        brand: 'Friexenet',
        type: 'Sparkling wine',
        variety: 'Prosecco',
        alcoholByVol: '11%',
        body: 'Light',
        description: "Freixenet offers a Prosecco that is both unusual and delightful. A fresh, effervescent, and easy-drinking sparkling treat awaits inside this brilliant, diamond-like container. This sparkling delight for the palette is made from the best Glera grapes in Italy's Prosecco region of Veneto, and fizzing with the aroma of flowers, lemon, and apple. Freixenet, the world's leading sparkling wine producer for over 150 years, puts the 'pro' in Prosecco... 'pop' it open and enjoy! "
    },

    'segura viudas reserva heredad': {
        brand: 'Segura Viudas',
        type: 'Sparkling wine',
        variety: 'Cava',
        alcoholByVol: '12%',
        body: 'Light',
        description: "This limited-edition Cava, reminiscent of a rich Chardonnay with bubbles, is housed in a magnificent hand-blown bottle engraved with the Segura Viudas family's metal crest. "
    },

    'whispering angel rose': {
        brand: "Chateau d'Esclans",
        type: 'Rose wine',
        variety: 'Pink wine',
        alcoholByVol: '13.5%',
        body: 'N/A',
        description: "Whispering Angel is the world's most famous rosé from Provence today. Its light color is appealing and attracts the eye in. The flavor profile is rich and luscious, with a smooth finish and a bone dry finish. Whispering Angel is a quality rosé that can be enjoyed from mid-day to mid-night and is highly approachable and delightful with a wide range of cuisine. "
    },

    'the pinot project rose': {
        brand: 'The Pinot Project',
        type: 'Rose wine',
        variety: 'Pinot Grigio',
        alcoholByVol: '13.5%',
        body: 'N/A',
        description: "The Pinot Project's latest exciting release is this rosé! Unoaked to highlight the pure PINK fruit attributes, the Pinot Project Rosé has pure PINOT smells and tastes of raspberries and roses. This wine, which comes in a stunning new package, is a sure show-stopper for all meals, seasons, and occasions. "
    },

    'summer water rose': {
        brand: 'Summer Water',
        type: 'Rose wine',
        variety: 'Pink wine',
        alcoholByVol: '12.5%',
        sweetDryScale: 'Dry',
        description: "Summer Water is more than a rosé of the season; it's a state of mind, with every drop full of pink-tinged possibilities. With aromas of strawberry, pink grapefruit, and white peach, this wine is dry, light, and delightfully crisp. Drink it cold with the people you care about. "
    },

    'la crema monterey pinot noir rose': {
        brand: 'La Crema Wines',
        type: 'Rose wine',
        variety: 'Pink wine',
        alcoholByVol: '13.5%',
        sweetDryScale: 'Dry',
        description: "A juicy, grippy, and traditional Pinot Noir Rose from Monterey, California's chilly environment. Mandarin, pink grapefruit, and guava aromas. Watermelon, strawberry, and blood orange flavors are complemented by mineral undertones. Delicate, bright, and crisp. "
    },

    'pratsch organic rosé': {
        brand: 'Pratsch',
        type: 'Rose wine',
        variety: 'Pink wine',
        alcoholByVol: '12.5%',
        sweetDryScale: 'Dry',
        description: "For almost 30 years, the Pratsch family has been cultivating organically in Austria. All of their wines are organic and vegan certified. This rose is delicate and dry, with wild strawberry, peach, and pear scents and flavors balanced by crisp, refreshing acidity. "
    }
   
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/wines', (request, response) => {
    response.json(wines)
})

app.get('/api/wines/:name', (request, response) => {
    const wine = request.params.name.toLowerCase()
    if (wines[wine]) {
        response.json(wines[wine])
    } else {
        response.json({'error': 'Oops, wine not available. Check back later!'})
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}. Betta go catch it!`)
})