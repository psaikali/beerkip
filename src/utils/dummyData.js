import dummyBeerImage1 from "../assets/images/dummy/beer1.png";
import dummyBeerImage2 from "../assets/images/dummy/beer2.png";
import dummyBeerImage3 from "../assets/images/dummy/beer3.png";
import dummyBeerImage4 from "../assets/images/dummy/beer4.png";

export default (dummyData = {
	beers: [
		{
			uid: "a1",
			photo: dummyBeerImage1,
			name: "Brewdog Elvis Juice",
			brewery: "Brewdog",
			style: "IPA",
			abv: 6.5,
			aromas: ["Rose", "Cactus", "Cinnamon"],
			rating: 7.75,
			comment:
				"Donec ullamcorper nulla non metus auctor fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
		},
		{
			uid: "b2",
			photo: dummyBeerImage2,
			name: "Grolsch Lentebock",
			brewery: "Grolsch",
			style: "Lager",
			abv: 7,
			aromas: ["Lemon"],
			rating: 6,
			comment: "Lorem ipsum porta ac consectetur ac, vestibulum at eros.",
		},
		{
			uid: "c3",
			photo: dummyBeerImage3,
			name: "De Leckere Pilsner",
			brewery: "De Leckere",
			style: "Pils",
			abv: 5,
			aromas: ["Mushroom"],
			rating: 8,
			comment: "Porta elit commodo tortor. Porta elit commodo tortor.",
		},
		{
			uid: "d4",
			photo: dummyBeerImage4,
			name: "Vedett Extra Blond",
			brewery: "Duvel",
			style: "Pils",
			abv: 5.2,
			aromas: ["Pepper", "Whiskey"],
			rating: 8.25,
			comment:
				"Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
		},
	],
});
