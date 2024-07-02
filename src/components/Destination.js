import Manali1 from "/src/assets/27.avif";
import Manali2 from "/src/assets/28.avif";
import Goa1 from "/src/assets/31.avif";
import Goa2 from "/src/assets/35.jpg";
import Kashmir1 from "/src/assets/32.jpg";
import Kashmir2 from "/src/assets/33.jpg";
import Ooty2 from "/src/assets/41.jpg";
import Ooty3 from "/src/assets/39.jpg";
import Ladakh1 from "/src/assets/42.jpg";
import Ladakh2 from "/src/assets/43.jpg";

import "./DestinationStyles.css";
import DestinationData from "/src/components/DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destinations in India</h1>
      <p>Tours give you the opprtunity to see a lot, within a time frame</p>

      <DestinationData
        className="first-des"
        heading="Manali: The Magnificent Jewel of Himachal!"
        text="
        Manali, also known as the resort town of Himachal Pradesh, is a popular hill station in North India. Places to visit in Manali are secluded from the glittering world, hidden amid the lush deodar and pine trees. Manali is a destination with settings straight out of a fairy tale, providing you with a beautiful view of the Himalayas embellished with glittering streams of water. A trip to places to visit in Manali is a refreshing experience for one's tired mind and body.
         Your senses will be mesmerised by the sight of lush green valleys and a whiff of pines lingering in the 
        cold breeze at the places to visit in Manali."
        img1={Manali1}
        img2={Manali2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Goa - The Party Capital of India"
        text="Goa, India, on the west coast, is a popular tourist destination known for its affordable prices, 
        stunning beaches, and vibrant party scene, attracting both young and old. Blending Indian and Portuguese 
        cultures, Goa offers diverse experiences. As the 'Party Capital of India,' it provides memorable beach
         vacations with shacks, laidback accommodations, and lively nightlife. North Goa, famous for bustling
          beaches like Anjuna, Baga, and Calangute, is ideal for party seekers, while South Goa's serene, less 
          crowded beaches are perfect for relaxation. Varca Beach in South Goa offers a tranquil escape with pristine 
          white sand and palm trees. "
        img1={Goa1}
        img2={Goa2}
      />

      <DestinationData
        className="first-des"
        heading="Kashmir - The Paradise on Earth"
        text="Kashmir, often referred to as Paradise on Earth, is a region in the northern part of 
        India renowned for its breathtaking natural beauty, serene landscapes, and rich cultural heritage.
         Jammu and Kashmir, the state's two distinct regions, offer a diverse range of experiences for travelers.
          Jammu, known for its temples like Vaishno Devi and Raghunath Temple, attracts pilgrims and history enthusiasts alike. 
          In contrast, the Kashmir Valley captivates visitors with its stunning vistas of snow-capped mountains, pristine lakes, 
          and lush valleys. Srinagar, the summer capital of Jammu and Kashmir, is famous for Dal Lake, where houseboats and
           shikaras (traditional Kashmiri boats) ply amidst floating gardens. The Mughal Gardens, including Shalimar Bagh 
           and Nishat Bagh, showcase exquisite Mughal-era horticulture. "
        img1={Kashmir1}
        img2={Kashmir2}
      />
      <DestinationData
        className="first-des-reverse"
        heading="Ooty - Queen of the Hills"
        text="Udhagamandalam, also known as Utagamund, Udhagai, or Ooty City, is the most interesting hill station in Tamil Nadu. Pandit Jawaharlal Nehru, who once visited the hill station, referred to it as the Queen of Hill Stations. After all, Ooty is famous for its incredible hill views. Located at the crossroads of the states of Tamil Nadu, Kerala, and Karnataka, this section of the Nilgiris range brings joy to tourists from all over the country. There are several Ooty resorts that also make it a popular option among honeymooners."
        img1={Ooty3}
        img2={Ooty2}
      />

      <DestinationData
        className="first-des"
        heading="Ladakh - Moonland of India"
        text="Nestled in the charming state of Jammu and Kashmir, Ladakh city is a place like no other. You can explore breathtaking landscapes, serene religious shrines as well and incredible viewpoints here. You can also find a beautiful amalgamation of different cultures and religions here. The peaceful ambience here will soothe your senses, allowing you to reconnect with nature."
        img1={Ladakh1}
        img2={Ladakh2}
      />
    </div>
  );
};

export default Destination;
